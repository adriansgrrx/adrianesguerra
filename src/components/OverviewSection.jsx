import React from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  Mail,
  Award,
  GraduationCap,
  Brain,
  Code2,
  Cpu,
  Trophy,
  Sparkles,
  FolderGit2,
} from 'lucide-react';

const iconMap = {
  Award,
  GraduationCap,
  Brain,
  Code2,
  Cpu,
  Trophy,
  Sparkles,
  FolderGit2,
};

function renderStatIcon(iconName, id) {
  if (iconName && iconMap[iconName]) {
    const IconComponent = iconMap[iconName];
    return <IconComponent className="w-4 h-4 shrink-0" />;
  }

  switch (id) {
    case 'award':
      return <Award className="w-4 h-4 shrink-0" />;
    case 'gwa':
      return <GraduationCap className="w-4 h-4 shrink-0" />;
    case 'ai-projects':
      return <Brain className="w-4 h-4 shrink-0" />;
    case 'projects':
      return <Code2 className="w-4 h-4 shrink-0" />;
    default:
      return <Sparkles className="w-4 h-4 shrink-0" />;
  }
}

export default function OverviewSection({ profile, onNavigate }) {
  const stats = profile?.hero?.stats || [];

  return (
    <section id="overview" className="scroll-mt-12 border-b border-white/10 pb-12 pt-6">
      <div className="text-xs tracking-widest uppercase text-neutral-500 font-mono mb-8">
        <span>00 / OVERVIEW</span>
      </div>

      {/* Hero Layout: 3-line stacked on mobile (photo, name & summary, buttons), side-by-side on sm+ */}
      <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6 md:gap-8">
        {/* Avatar */}
        <div className="relative shrink-0">
          <img
            src={profile.hero.avatar}
            alt={profile.fullName}
            className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-2xl object-cover border border-white/15 bg-[#1e1f20]"
          />
        </div>

        {/* Hero Narrative */}
        <div className="space-y-1.5 sm:space-y-2.5 flex-1 min-w-0">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium text-white tracking-tight leading-tight">
            {profile.fullName}
          </h1>

          <p className="text-xs sm:text-sm md:text-base text-neutral-300 leading-relaxed font-normal">
            {profile.hero.tagline}
          </p>
        </div>
      </div>

      {/* Action Triggers - standard sizing aligned to start */}
      <div className="flex flex-wrap items-center justify-start gap-3 pt-5 sm:pt-6">
        <button
          type="button"
          onClick={() => onNavigate('projects')}
          className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#a8c7fa] hover:bg-[#d3e2ff] text-[#0a315b] font-medium text-xs sm:text-sm transition-colors cursor-pointer"
        >
          <span>View Projects</span>
          <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
        </button>

        <button
          type="button"
          onClick={() => onNavigate('contact')}
          className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#1e1f20] hover:bg-[#282a2c] border border-white/10 text-white text-xs sm:text-sm font-medium transition-colors cursor-pointer"
        >
          <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-neutral-300 shrink-0" />
          <span>Get in Touch</span>
        </button>
      </div>

      {/* Dynamic Divider-Separated Stats Bar */}
      {stats.length > 0 && (
        <div className="flex flex-col sm:flex-row divide-y sm:divide-y-0 sm:divide-x divide-white/10 pt-6 sm:pt-8 mt-6 sm:mt-8 border-t border-white/10">
          {stats.map((stat, idx) => {
            const isClickable = Boolean(stat.targetSection && onNavigate);
            const Component = isClickable ? 'button' : 'div';
            const accentColor = stat.accent || (idx % 2 === 0 ? '#a8c7fa' : '#d0bcff');

            return (
              <Component
                key={stat.id || idx}
                type={isClickable ? 'button' : undefined}
                onClick={isClickable ? () => onNavigate(stat.targetSection) : undefined}
                className={`flex-1 min-w-0 text-left space-y-1.5 py-4 first:pt-0 last:pb-0 sm:py-0 sm:px-6 first:sm:pl-0 last:sm:pr-0 transition-colors duration-150 group ${
                  isClickable ? 'cursor-pointer focus:outline-none' : ''
                }`}
                title={isClickable ? `Jump to ${stat.targetSection}` : undefined}
              >
                <div className="flex items-center justify-between gap-2">
                  <div
                    className="font-mono text-base sm:text-lg font-semibold tracking-tight flex items-center gap-1.5 transition-colors group-hover:brightness-125"
                    style={{ color: accentColor }}
                  >
                    {renderStatIcon(stat.icon, stat.id)}
                    <span className="truncate">{stat.value}</span>
                  </div>

                  {isClickable && (
                    <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500 opacity-0 group-hover:opacity-100 group-hover:text-[#a8c7fa] transition-opacity shrink-0" />
                  )}
                </div>

                <div className="text-xs text-neutral-200 font-medium leading-tight group-hover:text-white transition-colors">
                  {stat.label}
                </div>

                {stat.detail && (
                  <div className="text-[11px] text-neutral-400 font-mono leading-tight">
                    {stat.detail}
                  </div>
                )}
              </Component>
            );
          })}
        </div>
      )}
    </section>
  );
}
