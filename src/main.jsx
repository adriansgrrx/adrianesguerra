import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { getSlugFromPath, getProjectBySlug } from './utils/projectRoutes'

const rootElement = document.getElementById('root')
const slug = getSlugFromPath(window.location.pathname)
const initialProjectSlug = getProjectBySlug(slug) ? slug : null

const app = (
  <StrictMode>
    <App initialProjectSlug={initialProjectSlug} />
  </StrictMode>
)

// Pages are pre-rendered at build time (see scripts/prerender.js); hydrate them
// instead of re-rendering from scratch. Fall back to a client render in dev.
if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, app)
} else {
  createRoot(rootElement).render(app)
}
