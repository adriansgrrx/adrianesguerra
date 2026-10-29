import React, { useState } from 'react';
import { ArrowUpRight, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';

// Utility to detect and extract valid demo URLs (excluding placeholders like '#' or empty strings)
const getDemoUrl = (project) => {
  if (!project) return null;
  const rawUrl = project.demoUrl || project.liveUrl || project.demo || project.demoLink;
  if (typeof rawUrl !== 'string') return null;
  const trimmed = rawUrl.trim();
  if (!trimmed || trimmed === '#' || trimmed.toLowerCase() === 'n/a' || trimmed.startsWith('javascript:')) {
    return null;
  }
  return trimmed;
};

export default function ProjectsSection({ projects, projectTypes, onSelectProject }) {
  const [selectedType, setSelectedType] = useState('All');
  const [showAll, setShowAll] = useState(false);

  const filteredProjects = selectedType === 'All'
    ? projects
    : projects.filter((p) => p.type === selectedType);

  const visibleProjects = showAll ? filteredProjects : filteredProjects.slice(0, 3);

  return (
    <section id="projects" className="scroll-mt-12 border-b border-white/10 pb-16 pt-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
        <div className="text-xs tracking-widest uppercase text-neutral-500 font-mono">
          <span>02 / Selected Work & Projects</span>
        </div>

        {/* Filter Pills: inlined on sm and up, wrapping or scrollable on mobile */}
        <div className="flex flex-wrap sm:flex-nowrap items-center gap-1.5">
          {projectTypes.map((type) => (
            <button
              key={type}
              onClick={() => {
                setSelectedType(type);
                setShowAll(false);
              }}
              className={`px-3 py-1 rounded-full text-xs font-mono transition-colors duration-150 cursor-pointer whitespace-nowrap shrink-0 ${
                selectedType === type
                  ? 'bg-[#282a2c] text-[#a8c7fa] font-medium'
                  : 'text-neutral-400 hover:text-white hover:bg-[#1e1f20]'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-10">
        {visibleProjects.map((project, index) => {
          const demoUrl = getDemoUrl(project);

          return (
            <React.Fragment key={project.id}>
              <article 
                className="space-y-3 cursor-pointer group"
                onClick={() => onSelectProject(project)}
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                  <div className="flex flex-wrap items-baseline gap-2">
                    <h3 className="text-lg sm:text-xl font-medium text-white group-hover:text-[#a8c7fa] transition-colors">
                      {project.title}
                    </h3>
                    {project.awardBadge && (
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#282a2c] text-[#a8c7fa]">
                        {project.awardBadge}
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-neutral-500 font-mono shrink-0">
                    {project.date}
                  </span>
                </div>

                <p className="text-sm text-neutral-300 leading-relaxed font-normal">
                  {project.description}
                </p>

                {/* Tags & Action */}
                <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                  <div className="flex flex-wrap gap-1.5">
                    {(project.technologies || project.tags).map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded bg-white/5 border border-white/5 text-neutral-300 text-xs font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
                    {demoUrl && (
                      <a
                        href={demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#282a2c] hover:bg-[#333538] text-[#a8c7fa] hover:text-white border border-[#a8c7fa]/30 hover:border-[#a8c7fa]/60 text-xs font-mono transition-all duration-150 cursor-pointer shadow-sm group/demo"
                        aria-label={`View live demo for ${project.title}`}
                      >
                        <span>View Demo</span>
                        <ExternalLink className="w-3.5 h-3.5 text-[#a8c7fa] group-hover/demo:scale-110 transition-transform" />
                      </a>
                    )}

                    <span className="text-xs font-mono text-[#a8c7fa] flex items-center gap-1 group-hover:underline">
                      <span>View Details</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </article>

              {/* Hairline Divider between articles */}
              {index < visibleProjects.length - 1 && (
                <div className="border-b border-white/5 my-8" />
              )}
            </React.Fragment>
          );
        })}
      </div>

      {filteredProjects.length > 3 && (
        <div className="pt-8 flex justify-center">
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono text-neutral-300 hover:text-white bg-[#1e1f20] hover:bg-[#282a2c] border border-white/10 hover:border-white/20 transition-all duration-150 cursor-pointer shadow-sm group"
          >
            <span>{showAll ? 'See less' : 'See more'}</span>
            {showAll ? (
              <ChevronUp className="w-3.5 h-3.5 text-neutral-400 group-hover:text-white transition-colors" />
            ) : (
              <ChevronDown className="w-3.5 h-3.5 text-neutral-400 group-hover:text-white transition-colors" />
            )}
          </button>
        </div>
      )}
    </section>
  );
}
