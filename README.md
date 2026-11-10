# Adrian Esguerra — Portfolio

Personal portfolio of **Adrian Esguerra**, Computer Engineer (PUP Manila) working across Generative AI, computer vision, big data analytics, and full-stack development.

🌐 **Live site:** [www.adrianesguerra.site](https://www.adrianesguerra.site/)

## Featured projects

- [SnapTrash](https://www.adrianesguerra.site/projects/snaptrash/) — AI waste-detection mobile app (YOLOv8, Flutter). AppCon 2024 Most Creative Award.
- [AS3Ds Thesis](https://www.adrianesguerra.site/projects/as3ds-sorting-defect-detection/) — Computer-vision sorting & defect detection of electronic components (83% mAP).
- [LangNote](https://www.adrianesguerra.site/projects/langnote/) — MERN-stack personal notebook web app.
- [Urban Flooding EDA](https://www.adrianesguerra.site/projects/urban-flooding-eda-mandaue/) — Data-driven disaster risk analytics for Mandaue City.

## Tech stack

React 19 · Vite · Tailwind CSS v4 · Build-time pre-rendering (SSG) · Azure Static Web Apps

## Development

```bash
npm install
npm run dev      # local dev server
npm run build    # client build + SSR pre-render of every page + sitemap.xml
npm run preview  # preview the production build
npm run lint
```

### How the build works

1. `vite build` produces the client bundle in `dist/`.
2. `vite build --ssr src/entry-server.jsx` produces a server render bundle.
3. `scripts/prerender.js` renders static HTML for `/` and each `/projects/<slug>/` page, with per-page title, description, canonical, Open Graph tags and JSON-LD, then writes `dist/sitemap.xml`.

Portfolio content lives in [`src/data/portfolioData.js`](src/data/portfolioData.js). Adding a project with a `slug` automatically creates its page and sitemap entry.

## Connect

- GitHub: [@adriansgrrx](https://github.com/adriansgrrx)
- LinkedIn: [Adrian Esguerra](https://www.linkedin.com/in/adrian-esguerra-44a899189/)
