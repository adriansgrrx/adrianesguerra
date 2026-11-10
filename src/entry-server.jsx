import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import App from './App.jsx';
import { profileData, projectsData } from './data/portfolioData';

export { profileData, projectsData };

export function render(initialProjectSlug = null) {
  return renderToString(
    <StrictMode>
      <App initialProjectSlug={initialProjectSlug} />
    </StrictMode>
  );
}

