import { profileData, projectsData } from '../data/portfolioData';

export const SITE_URL = 'https://www.adrianesguerra.site';
export const DEFAULT_TITLE = 'Adrian Esguerra | Computer Engineer – AI, Big Data & Full-Stack Developer';

export const getProjectPath = (slug) => `/projects/${slug}/`;

export const getProjectUrl = (slug) => `${SITE_URL}${getProjectPath(slug)}`;

export const getSlugFromPath = (pathname = '') => {
  const match = pathname.match(/^\/projects\/([^/]+)\/?$/);
  return match ? decodeURIComponent(match[1]) : null;
};

export const getProjectBySlug = (slug) =>
  (slug && projectsData.find((p) => p.slug === slug)) || null;

export const getProjectTitle = (project) =>
  `${project.title} – ${project.subtitle || project.type} | ${profileData.fullName}`;
