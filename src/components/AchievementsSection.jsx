import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function AchievementsSection({ achievements, achievementTypes }) {
  const [selectedType, setSelectedType] = useState('All');
  const [expandedId, setExpandedId] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const filteredAchievements = selectedType === 'All'
    ? achievements
    : achievements.filter((a) => a.type === selectedType);

  const visibleAchievements = showAll ? filteredAchievements : filteredAchievements.slice(0, 3);

  const toggleExpand = (id) => {
    setExpandedId(prev => prev === id ? null : id);
  };

  return (
    <section id="achievements" className="scroll-mt-12 border-b border-white/10 pb-16 pt-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div className="text-xs tracking-widest uppercase text-neutral-500 font-mono">
          <span>05 / Credentials & Honors</span>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap sm:flex-nowrap items-center gap-1.5">
          {achievementTypes.map((type) => (
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

      {/* Clean Editorial List Separated by Hairline Dividers */}
      <ul className="space-y-1">
        {visibleAchievements.map((item) => {
          const isExpanded = expandedId === item.id;
          return (
            <li
              key={item.id}
              className="border-b border-white/5 py-3 transition-colors cursor-pointer group"
              onClick={() => toggleExpand(item.id)}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1 flex-1">
                  <div className="flex flex-wrap items-baseline gap-2">
                    <span className="text-sm font-medium text-neutral-200 group-hover:text-white transition-colors">
                      {item.title}
                    </span>
                    <span className="text-xs text-neutral-500 font-mono">
                      • {item.date}
                    </span>
                  </div>
                  <p className="text-xs text-neutral-400 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="flex items-center gap-2 shrink-0 pt-0.5">
                  <span className="text-xs text-neutral-500 font-mono">
                    {item.type}
                  </span>
                  <button className="text-neutral-500 group-hover:text-neutral-300 transition-colors">
                    {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              {/* Expandable Details */}
              {isExpanded && (
                <div className="pt-3 pb-2 space-y-2.5 text-xs text-neutral-300 animate-fadeIn">
                  {item.expandedDescription && (
                    <p className="leading-relaxed font-normal text-neutral-400">
                      {item.expandedDescription}
                    </p>
                  )}
                  {item.details && (
                    <ul className="space-y-1 text-neutral-400 pl-2 border-l border-white/10 my-2">
                      {item.details.map((d, i) => (
                        <li key={i}>• {d}</li>
                      ))}
                    </ul>
                  )}
                  {item.technologies && (
                    <div className="flex flex-wrap gap-1 pt-1">
                      {item.technologies.map((t, i) => (
                        <span key={i} className="px-2 py-0.5 rounded bg-white/5 text-[11px] font-mono text-neutral-400">
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </li>
          );
        })}
      </ul>

      {filteredAchievements.length > 3 && (
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
