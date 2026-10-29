import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function ProjectsSection({ projects, projectTypes, onSelectProject }) {
  const [selectedType, setSelectedType] = useState('All');

  const filteredProjects = selectedType === 'All'
    ? projects
    : projects.filter((p) => p.type === selectedType);

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
              onClick={() => setSelectedType(type)}
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
        {filteredProjects.map((project, index) => (
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

              {/* Metrics Readout */}
              {project.stats && (
                <div className="text-xs text-neutral-400 font-mono">
                  {project.stats.map(s => `${s.value} ${s.label}`).join(' • ')}
                </div>
              )}

              {/* Telemetry Preview for AS3Ds (Flat, No Pulse or Ping) */}
              {project.slug === 'as3ds-sorting-defect-detection' && (
                <div className="my-4 p-4 rounded-xl bg-[#0e0e0f] border border-white/10 font-mono text-xs select-none">
                  <div className="flex flex-wrap items-center justify-between border-b border-white/10 pb-2 text-neutral-400">
                    <span className="text-white">STREAM: CAM_01 [JETSON_NANO]</span>
                    <span className="text-[#a8c7fa]">INFERENCE: 18.4ms (54.3 FPS)</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 my-3">
                    <div className="border border-emerald-500/50 bg-[#131314] rounded-lg p-2.5 text-center">
                      <span className="text-emerald-300 font-medium block">IC_SMD_284 [PASS]</span>
                      <span className="text-[11px] text-neutral-500">conf: 0.942</span>
                    </div>
                    <div className="border border-red-500/50 bg-[#131314] rounded-lg p-2.5 text-center">
                      <span className="text-red-400 font-medium block">BRIDGED_SOLDER [DEFECT]</span>
                      <span className="text-[11px] text-neutral-500">conf: 0.887 • DIVERT</span>
                    </div>
                    <div className="border border-[#a8c7fa]/40 bg-[#131314] rounded-lg p-2.5 text-center">
                      <span className="text-[#a8c7fa] font-medium block">CAP_RADIAL [PASS]</span>
                      <span className="text-[11px] text-neutral-500">conf: 0.971</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center justify-between text-[11px] text-neutral-500 pt-2 border-t border-white/10">
                    <span>MODEL: YOLOv8-NANO_PRUNED</span>
                    <span className="text-emerald-400">ACTUATOR: ARDUINO STEPPER #03 [DIVERTED]</span>
                  </div>
                </div>
              )}

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

                <span className="text-xs font-mono text-[#a8c7fa] flex items-center gap-1 group-hover:underline">
                  <span>View Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </article>

            {/* Hairline Divider between articles */}
            {index < filteredProjects.length - 1 && (
              <div className="border-b border-white/5 my-8" />
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
