import React from 'react';

export default function ExperienceSection({ experiences }) {
  return (
    <section id="experience" className="scroll-mt-12 border-b border-white/10 pb-16 pt-6">
      <div className="text-xs tracking-widest uppercase text-neutral-500 font-mono mb-8">
        <span>04 / Experience</span>
      </div>

      <div className="space-y-8">
        {experiences.map((exp, idx) => (
          <React.Fragment key={exp.id}>
            <article className="space-y-2.5">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                <div className="text-base sm:text-lg font-medium text-white">
                  {exp.company}
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

            {idx < experiences.length - 1 && (
              <div className="border-b border-white/5 my-6" />
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
