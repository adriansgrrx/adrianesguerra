import React, { useState } from 'react';

export default function SkillsSection({ skillCategories, proficiencyLevels }) {
  const [selectedProficiency, setSelectedProficiency] = useState('All');

  return (
    <section id="skills" className="scroll-mt-12 border-b border-white/10 pb-16 pt-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
        <div className="text-xs tracking-widest uppercase text-neutral-500 font-mono">
          <span>03 / Technical Stack & Skills</span>
        </div>

        {/* Proficiency Filter */}
        <div className="flex flex-wrap sm:flex-nowrap items-center gap-1.5">
          {proficiencyLevels.map((level) => (
            <button
              key={level}
              onClick={() => setSelectedProficiency(level)}
              className={`px-3 py-1 rounded-full text-xs font-mono transition-colors duration-150 cursor-pointer whitespace-nowrap shrink-0 ${
                selectedProficiency === level
                  ? 'bg-[#282a2c] text-[#a8c7fa] font-medium'
                  : 'text-neutral-400 hover:text-white hover:bg-[#1e1f20]'
              }`}
            >
              {level}
            </button>
          ))}
        </div>
      </div>

      {/* Flat 4-Category Grid without Boxed Containers */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12">
        {skillCategories.map((cat) => {
          const filteredSkills = selectedProficiency === 'All'
            ? cat.skills
            : cat.skills.filter((s) => s.proficiency === selectedProficiency);

          if (filteredSkills.length === 0) return null;

          return (
            <div key={cat.id} className="space-y-3">
              <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider flex items-center justify-between">
                <span>{cat.name}</span>
                <span className="text-neutral-500 text-[11px] font-mono">{filteredSkills.length}</span>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {filteredSkills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded bg-white/5 border border-white/5 text-xs font-mono text-neutral-300 flex items-center gap-1.5"
                  >
                    <span>{skill.name}</span>
                    {selectedProficiency === 'All' && (
                      <span className="text-[10px] text-neutral-500">
                        ({skill.proficiency[0]})
                      </span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
