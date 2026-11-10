// Build-time pre-renderer: turns the client-only SPA into static HTML pages so
// crawlers and link-preview bots (LinkedIn, Facebook, Bing, AI crawlers) see
// real content. Generates "/" plus one page per project at /projects/<slug>/.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const distDir = path.join(root, 'dist');
const ssrDir = path.join(root, 'dist-ssr');
const SITE_URL = 'https://www.adrianesguerra.site';

const { render, profileData, projectsData } = await import(
  pathToFileURL(path.join(ssrDir, 'entry-server.js')).href
);

const template = fs.readFileSync(path.join(distDir, 'index.html'), 'utf8');

const escapeAttr = (s = '') =>
  String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const truncate = (s = '', max = 160) => (s.length <= max ? s : `${s.slice(0, max - 1).trimEnd()}…`);

const setMeta = (html, attr, key, value) => {
  const re = new RegExp(`(<meta\\s+${attr}="${key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"\\s+content=")[^"]*(")`);
  return html.replace(re, `$1${escapeAttr(value)}$2`);
};

const injectApp = (html, appHtml) => html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

const writePage = (urlPath, html) => {
  const outDir = path.join(distDir, urlPath);
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, 'index.html'), html);
};

// 1. Home page (syncs title & description from profileData.seo if defined)
let homeHtml = template;
if (profileData.seo?.title) {
  homeHtml = homeHtml.replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeAttr(profileData.seo.title)}</title>`);
  homeHtml = setMeta(homeHtml, 'property', 'og:title', profileData.seo.title);
  homeHtml = setMeta(homeHtml, 'name', 'twitter:title', profileData.seo.title);
}
if (profileData.seo?.description) {
  homeHtml = setMeta(homeHtml, 'name', 'description', profileData.seo.description);
  homeHtml = setMeta(homeHtml, 'property', 'og:description', profileData.seo.description);
  homeHtml = setMeta(homeHtml, 'name', 'twitter:description', profileData.seo.description);
}
writePage('/', injectApp(homeHtml, render(null)));

// 2. Project pages
const sitemapUrls = [{ loc: `${SITE_URL}/`, priority: '1.0' }];

for (const project of projectsData) {
  if (!project.slug) continue;
  const url = `${SITE_URL}/projects/${project.slug}/`;
  const title = `${project.title} – ${project.subtitle || project.type} | ${profileData.fullName}`;
  const description = truncate(project.description || project.expandedDescription || '');
  const demoUrl = project.demoUrl && project.demoUrl.startsWith('http') ? project.demoUrl : undefined;
  const codeUrl = project.githubUrl && project.githubUrl.startsWith('http') ? project.githubUrl : undefined;

  let html = template;
  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeAttr(title)}</title>`);
  html = setMeta(html, 'name', 'description', description);
  html = html.replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`);
  html = setMeta(html, 'property', 'og:type', 'article');
  html = setMeta(html, 'property', 'og:title', title);
  html = setMeta(html, 'property', 'og:description', description);
  html = setMeta(html, 'property', 'og:url', url);
  html = setMeta(html, 'name', 'twitter:title', title);
  html = setMeta(html, 'name', 'twitter:description', description);

  const projectLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    '@id': `${url}#project`,
    name: project.title,
    headline: title,
    alternativeHeadline: project.subtitle || undefined,
    description: project.expandedDescription || project.description,
    url,
    genre: project.type,
    keywords: (project.technologies || project.tags || []).join(', '),
    award: project.awardBadge || undefined,
    sameAs: [demoUrl, codeUrl].filter(Boolean),
    author: { '@id': `${SITE_URL}/#person` },
    creator: { '@id': `${SITE_URL}/#person` },
    isPartOf: { '@id': `${SITE_URL}/#website` },
  };
  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: profileData.fullName, item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name: 'Projects', item: `${SITE_URL}/#projects` },
      { '@type': 'ListItem', position: 3, name: project.title, item: url },
    ],
  };
  const ldScripts = [projectLd, breadcrumbLd]
    .map((d) => `<script type="application/ld+json">${JSON.stringify(d).replace(/</g, '\\u003c')}</script>`)
    .join('\n    ');
  html = html.replace('</head>', `    ${ldScripts}\n  </head>`);

  writePage(`/projects/${project.slug}/`, injectApp(html, render(project.slug)));
  sitemapUrls.push({ loc: url, priority: '0.8' });
}

// 3. Sitemap (generated so it always matches the project list)
const today = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls
  .map((u) => `  <url>\n    <loc>${u.loc}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>${u.priority}</priority>\n  </url>`)
  .join('\n')}
</urlset>
`;
fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemap);

fs.rmSync(ssrDir, { recursive: true, force: true });
console.log(`Pre-rendered ${sitemapUrls.length} pages:`);
sitemapUrls.forEach((u) => console.log(`  ${u.loc}`));

