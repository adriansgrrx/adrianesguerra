import React, { useEffect } from 'react';
import { X, CheckCircle2, Award, Calendar, Lock, Unlock, ExternalLink } from 'lucide-react';
import { GithubIcon } from './Icons';

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

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl max-h-[88vh] bg-[#161718] border border-white/10 rounded-none shadow-2xl flex flex-col text-[#e5e2e3]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between gap-3 px-5 py-3.5 border-b border-white/10 bg-[#131314] shrink-0">
          <div className="flex flex-wrap items-center gap-2 min-w-0">
            <span className="px-2 py-0.5 text-[11px] font-mono rounded bg-[#282a2c] text-[#a8c7fa] border border-[#a8c7fa]/20 shrink-0">
              {project.type}
            </span>
            {project.awardBadge && (
              <span className="px-2 py-0.5 text-[11px] font-mono rounded bg-[#282a2c] text-[#d0bcff] inline-flex items-center gap-1 border border-[#d0bcff]/20 shrink-0">
                <Award className="w-3 h-3 shrink-0" />
                <span>{project.awardBadge}</span>
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded text-neutral-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer shrink-0"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Scroll Content */}
        <div className="flex-1 min-h-0 overflow-y-auto p-5 sm:p-6 space-y-5 overscroll-contain">
          <div>
            <h2 className="text-xl sm:text-2xl font-medium text-white tracking-tight leading-snug">
              {project.title}
            </h2>
            {project.subtitle && (
              <p className="text-xs text-neutral-400 font-mono mt-1">
                {project.subtitle}
              </p>
            )}
            <div className="flex items-center gap-3 text-[11px] text-neutral-500 font-mono mt-2">
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3" /> {project.date}
              </span>
              {project.role && (
                <>
                  <span className="text-white/20">•</span>
                  <span>{project.role}</span>
                </>
              )}
            </div>
          </div>

          {/* Quick Metrics with clean dividers (no heavy container) */}
          {project.stats && project.stats.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-3 gap-x-4 py-3 border-y border-white/10">
              {project.stats.map((s, idx) => (
                <div key={idx} className="space-y-0.5">
                  <div className="text-[10px] text-neutral-500 font-mono uppercase tracking-wider">{s.label}</div>
                  <div className="text-xs sm:text-sm font-semibold text-white font-mono">{s.value}</div>
                </div>
              ))}
            </div>
          )}

          {/* Narrative / Overview */}
          <div className="space-y-1.5">
            <h3 className="text-[11px] font-mono uppercase tracking-widest text-neutral-500">Project Overview</h3>
            <p className="text-xs sm:text-[13px] text-neutral-300 leading-relaxed font-normal">
              {project.expandedDescription || project.description}
            </p>
          </div>

          {/* Key Deliverables & Highlights */}
          {project.details && project.details.length > 0 && (
            <div className="space-y-2">
              <h3 className="text-[11px] font-mono uppercase tracking-widest text-neutral-500">Key Contributions & Architecture</h3>
              <ul className="space-y-2">
                {project.details.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-neutral-300 leading-relaxed">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#a8c7fa] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack Chips */}
          <div className="space-y-2">
            <h3 className="text-[11px] font-mono uppercase tracking-widest text-neutral-500">Technologies Used</h3>
            <div className="flex flex-wrap gap-1.5">
              {(project.technologies || project.tags).map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#1e1f20] border border-white/10 text-neutral-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-5 py-3 border-t border-white/10 bg-[#131314] flex items-center justify-between gap-3 shrink-0">
          <div className="text-[11px] font-mono text-neutral-400 flex items-center gap-1.5 min-w-0">
            {project.isGithubPrivate ? (
              <>
                <Lock className="w-3 h-3 text-neutral-500 shrink-0" />
                <span className="truncate">Private Repository</span>
              </>
            ) : (
              <>
                <Unlock className="w-3 h-3 text-emerald-400 shrink-0" />
                <span className="truncate">Public Repository</span>
              </>
            )}
          </div>
          <div className="flex items-center gap-2 shrink-0">
            {getDemoUrl(project) && (
              <a
                href={getDemoUrl(project)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded bg-[#282a2c] hover:bg-[#333538] border border-[#a8c7fa]/30 hover:border-[#a8c7fa]/60 text-[#a8c7fa] hover:text-white text-xs font-mono transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5 text-[#a8c7fa]" />
                <span>View Demo</span>
              </a>
            )}
            {project.githubUrl && project.githubUrl !== '#' && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded bg-[#1e1f20] hover:bg-[#282a2c] border border-white/10 text-white text-xs font-mono transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>View Code</span>
              </a>
            )}
            <button
              onClick={onClose}
              className="px-3.5 py-1.5 rounded bg-white/10 hover:bg-white/15 text-neutral-200 hover:text-white text-xs font-mono transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
