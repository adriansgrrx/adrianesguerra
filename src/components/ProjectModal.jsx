import React from 'react';
import { X, CheckCircle2, Award, Cpu, Calendar, Lock, Unlock } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-4 bg-black/60 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl max-h-[92dvh] sm:max-h-[90vh] bg-[#1e1f20]/95 backdrop-blur-xl border border-[#333538] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl flex flex-col text-[#e5e2e3]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between gap-3 p-3.5 sm:p-5 border-b border-white/10 bg-[#131314]/90 shrink-0">
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2.5 min-w-0 pr-1">
            <span className="px-2.5 py-0.5 sm:py-1 text-[11px] sm:text-xs font-mono rounded-full bg-[#282a2c] text-[#a8c7fa] border border-[#a8c7fa]/20 shrink-0">
              {project.type}
            </span>
            {project.awardBadge && (
              <span className="px-2.5 py-0.5 sm:py-1 text-[11px] sm:text-xs font-mono rounded-full bg-[#503f79] text-[#d0bcff] inline-flex items-center gap-1 border border-[#d0bcff]/20 max-w-[200px] sm:max-w-none truncate">
                <Award className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
                <span className="truncate">{project.awardBadge}</span>
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-1.5 sm:p-2 rounded-full hover:bg-white/10 text-neutral-400 hover:text-white transition-colors cursor-pointer shrink-0"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scroll Content */}
        <div className="flex-1 min-h-0 overflow-y-auto p-4 sm:p-7 space-y-4 sm:space-y-6 overscroll-contain pb-6 sm:pb-8">
          <div>
            <h2 className="text-lg sm:text-2xl md:text-3xl font-medium text-white tracking-tight leading-snug">
              {project.title}
            </h2>
            <div className="flex items-center gap-3 text-xs text-neutral-400 font-mono mt-1.5 sm:mt-2">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" /> {project.date}
              </span>
            </div>
          </div>

          {/* Quick Metrics */}
          {project.stats && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-[#131314] border border-white/5">
              {project.stats.map((s, idx) => (
                <div key={idx} className="space-y-0.5">
                  <div className="text-[11px] sm:text-xs text-neutral-400 font-mono">{s.label}</div>
                  <div className="text-xs sm:text-sm font-semibold text-white font-mono">{s.value}</div>
                </div>
              ))}
            </div>
          )}

          {/* Narrative */}
          <div className="space-y-2 sm:space-y-2.5">
            <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-400">Project Overview</h3>
            <p className="text-xs sm:text-sm md:text-base text-neutral-300 leading-relaxed font-normal">
              {project.expandedDescription || project.description}
            </p>
          </div>

          {/* Key Deliverables & Highlights */}
          {project.details && project.details.length > 0 && (
            <div className="space-y-2.5">
              <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-400">Key Contributions & Architecture</h3>
              <ul className="space-y-2">
                {project.details.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-200 leading-relaxed">
                    <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#a8c7fa] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack Chips */}
          <div className="space-y-2.5">
            <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-400">Technologies Used</h3>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {(project.technologies || project.tags).map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2.5 sm:px-3 py-1 rounded-full bg-[#131314] border border-white/10 text-[11px] sm:text-xs font-mono text-neutral-300 flex items-center gap-1.5"
                >
                  <Cpu className="w-3 h-3 text-[#a8c7fa]" />
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-4 py-3 sm:px-6 sm:py-4 border-t border-white/10 bg-[#131314]/95 flex items-center justify-between gap-2 shrink-0">
          <div className="text-[11px] sm:text-xs font-mono text-neutral-400 flex items-center gap-1.5 min-w-0">
            {project.isGithubPrivate ? (
              <>
                <Lock className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                <span className="truncate">Private Repo</span>
              </>
            ) : (
              <>
                <Unlock className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                <span className="truncate">Public Repo</span>
              </>
            )}
          </div>
          <div className="flex items-center gap-2 shrink-0">
            {project.githubUrl && project.githubUrl !== '#' && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#282a2c] hover:bg-white/20 text-white text-xs font-medium transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>View Code</span>
              </a>
            )}
            <button
              onClick={onClose}
              className="px-4 sm:px-5 py-1.5 sm:py-2 rounded-full bg-[#a8c7fa] text-[#0a315b] font-medium text-xs hover:bg-[#d3e2ff] transition-colors cursor-pointer"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
