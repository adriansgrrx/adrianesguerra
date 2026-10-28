import React from 'react';

export default function AboutSection({ about }) {
  return (
    <section id="about" className="scroll-mt-12 border-b border-white/10 pb-16 pt-6">
      <div className="text-xs tracking-widest uppercase text-neutral-500 font-mono mb-8">
        <span>01 / About Me</span>
      </div>

      <div className="space-y-8">
        <div>
          <h2 className="text-2xl sm:text-3xl font-medium text-white tracking-tight">
            {about.heading} <span className="text-[#a8c7fa]">{about.headingHighlight}</span>
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 font-mono mt-1">
            {about.subtitle}
          </p>
        </div>

        {/* Narrative Paragraphs */}
        <div className="space-y-4 text-sm sm:text-base text-neutral-300 leading-relaxed font-normal">
          {about.paragraphs.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </div>

        {/* Education Editorial Line Item */}
        <div className="pt-6 border-t border-white/10 space-y-2">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
            <h3 className="text-base font-medium text-white">
              Polytechnic University of the Philippines <span className="text-neutral-500 text-sm font-normal">(PUP Manila)</span>
            </h3>
            <span className="text-xs text-neutral-500 font-mono">2021 – 2025</span>
          </div>
          <div className="text-sm text-neutral-300 font-normal">
            Bachelor of Science in Computer Engineering (BSCpE)
          </div>
          <p className="text-sm text-neutral-400 leading-relaxed font-normal">
            Focused on Big Data Analytics, Edge AI, Embedded Systems, and Computer Vision.
          </p>
        </div>
      </div>
    </section>
  );
}
