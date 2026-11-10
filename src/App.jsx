import React, { useState, useEffect, useCallback } from 'react';
import Sidebar from './components/Sidebar';
import MobileNavbar from './components/MobileNavbar';
import OverviewSection from './components/OverviewSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import AchievementsSection from './components/AchievementsSection';
import ContactSection from './components/ContactSection';
import ProjectModal from './components/ProjectModal';

import {
  profileData,
  projectsData,
  projectTypes,
  skillCategories,
  proficiencyLevels,
  experiencesData,
  achievementsData,
  achievementTypes,
} from './data/portfolioData';
import {
  getProjectBySlug,
  getProjectPath,
  getSlugFromPath,
  getProjectTitle,
  DEFAULT_TITLE,
} from './utils/projectRoutes';

export default function App({ initialProjectSlug = null }) {
  const [activeSection, setActiveSection] = useState('overview');
  const [selectedProject, setSelectedProject] = useState(() => getProjectBySlug(initialProjectSlug));

  // Keep the URL and document title in sync with the open project modal,
  // so every project has its own shareable, indexable URL (/projects/<slug>/).
  const openProject = useCallback((project) => {
    setSelectedProject(project);
    if (project?.slug) {
      window.history.pushState({ slug: project.slug }, '', getProjectPath(project.slug));
      document.title = getProjectTitle(project);
    }
  }, []);

  const closeProject = useCallback(() => {
    setSelectedProject(null);
    if (getSlugFromPath(window.location.pathname)) {
      window.history.pushState({}, '', '/');
    }
    document.title = DEFAULT_TITLE;
  }, []);

  // Handle browser back/forward navigation between project URLs
  useEffect(() => {
    const handlePopState = () => {
      const project = getProjectBySlug(getSlugFromPath(window.location.pathname));
      setSelectedProject(project);
      document.title = project ? getProjectTitle(project) : DEFAULT_TITLE;
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Scrollspy to update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = ['overview', 'about', 'projects', 'skills', 'experience', 'achievements', 'contact'];
      const scrollPosition = window.scrollY + 160;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-[#131314] text-[#e5e2e3] font-sans antialiased">
      {/* Mobile Sticky Header */}
      <MobileNavbar profile={profileData} onNavigate={handleNavigate} />

      {/* Split-Screen Shell: Fixed 20% Sidebar, 80% Main Canvas */}
      <div className="flex min-h-screen w-full bg-[#131314]">
        {/* Left Fixed Sidebar (20% width on Desktop, hidden on mobile) */}
        <Sidebar
          profile={profileData}
          activeSection={activeSection}
          onNavigate={handleNavigate}
        />

        {/* Right Scrollable Editorial Content Canvas (80% portion on Desktop, centered container with large margins) */}
        <main className="flex-1 w-full lg:pl-[260px] xl:pl-[280px] min-h-screen py-10 sm:py-16 px-4 sm:px-10 lg:px-12 flex justify-center">
          <div className="w-full max-w-[760px] space-y-14 sm:space-y-20">
            <OverviewSection profile={profileData} onNavigate={handleNavigate} />
            <AboutSection about={profileData.about} />
            <ProjectsSection
              projects={projectsData}
              projectTypes={projectTypes}
              onSelectProject={openProject}
            />
            <SkillsSection
              skillCategories={skillCategories}
              proficiencyLevels={proficiencyLevels}
            />
            <ExperienceSection experiences={experiencesData} />
            <AchievementsSection
              achievements={achievementsData}
              achievementTypes={achievementTypes}
            />
            <ContactSection contact={profileData.contact} />
          </div>
        </main>
      </div>

      {/* Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={closeProject}
      />
    </div>
  );
}
