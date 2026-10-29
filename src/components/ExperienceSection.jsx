import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function ExperienceSection({ experiences }) {
  const [showAll, setShowAll] = useState(false);

  const visibleExperiences = showAll ? experiences : experiences.slice(0, 3);

  return (
    <section id="experience" className="scroll-mt-12 border-b border-white/10 pb-16 pt-6">
      <div className="text-xs tracking-widest uppercase text-neutral-500 font-mono mb-8">
        <span>04 / Experience</span>
      </div>

      <div className="space-y-8">
        {visibleExperiences.map((exp, idx) => (
          <React.Fragment key={exp.id}>
            <article className="space-y-2.5">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-2">
                <div>
                  <h3 className="text-base sm:text-lg font-medium text-white">
                    {exp.role}
                  </h3>
                  <div className="text-xs sm:text-sm text-neutral-400 font-normal mt-0.5">
                    {exp.company} {exp.location && <span className="text-neutral-500 font-mono text-xs">• {exp.location}</span>}
                  </div>
                </div>
                <span className="text-xs text-neutral-500 font-mono shrink-0">
                  {exp.period}
                </span>
              </div>

              <p className="text-sm text-neutral-300 leading-relaxed font-normal">
                {exp.description}
              </p>

              {/* Highlights */}
              {exp.highlights && (
                <ul className="space-y-1.5 pt-1 text-xs sm:text-sm text-neutral-400">
                  {exp.highlights.map((h, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2">
                      <span className="text-[#a8c7fa]">•</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {exp.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2 py-0.5 rounded bg-white/5 border border-white/5 text-neutral-300 text-xs font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>

            {idx < visibleExperiences.length - 1 && (
              <div className="border-b border-white/5 my-6" />
            )}
          </React.Fragment>
        ))}
      </div>

      {experiences.length > 3 && (
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
