import React, { useState } from 'react';
import confetti from 'canvas-confetti';

const navItems = [
  { id: 'overview', label: 'Overview' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'achievements', label: 'Credentials' },
  { id: 'contact', label: 'Contact' },
];


export default function Sidebar({ profile, activeSection, onNavigate }) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.contact.email).then(() => {
      setCopied(true);
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.9, x: 0.2 },
        colors: ['#a8c7fa', '#d0bcff', '#4285f4'],
      });
      setTimeout(() => setCopied(false), 2400);
    });
  };

  return (
    <aside className="hidden lg:flex w-[20%] min-w-[240px] max-w-[280px] h-screen fixed top-0 left-0 border-r border-white/10 bg-[#131314] p-6 lg:p-8 flex-col justify-between z-30 select-none">
      <div className="space-y-6">
        {/* Brand Icon, Name & Title */}
        <div className="p-3 space-y-3">
          <img
            src="/brand-icon.png"
            alt={profile.fullName}
            className="w-10 h-10 rounded-xl object-cover border border-white/10"
          />
          <div>
            <h1 className="text-xl lg:text-md font-medium text-white tracking-tight">
              {profile.fullName}
            </h1>
            <p className="text-xs lg:text-sm font-normal text-neutral-400 mt-0.5">
              {profile.roleTitle}
            </p>
          </div>
        </div>

        {/* Clean Vertical Navigation without icons or left indicator */}
        <nav className="flex flex-col space-y-1 pt-2">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(item.id);
                }}
                className={`px-3.5 py-2 rounded-xl text-xs lg:text-sm font-medium transition-colors duration-150 cursor-pointer block ${
                  isActive
                    ? 'bg-[#282a2c] text-[#a8c7fa]'
                    : 'text-neutral-400 hover:text-white hover:bg-[#1e1f20]'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>
      </div>

      {/* Footer Area: Copy Email & Text Links */}
      <div className="pt-6 border-t border-white/10 space-y-3 mt-6 lg:mt-0">
        {/* Interactive Copy Email */}
        <button
          onClick={handleCopyEmail}
          className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-[#1e1f20] hover:bg-[#282a2c] border border-white/5 text-xs text-neutral-300 hover:text-white transition-all cursor-pointer"
          title="Click to copy email address"
        >
          <span className="truncate font-mono">{profile.contact.email}</span>
          <span className="font-mono text-[11px] text-neutral-400 shrink-0 ml-2">
            {copied ? <span className="text-emerald-400">Copied</span> : 'Copy'}
          </span>
        </button>

        {/* Text Links */}
        <div className="flex items-center justify-between text-xs text-neutral-400 pt-1">
          <div className="flex items-center space-x-3">
            <a
              href="https://github.com/adriansgrrx"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
            <span className="text-white/20">•</span>
            <a
              href="https://www.linkedin.com/in/adrian-esguerra-44a899189/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
          </div>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('contact');
            }}
            className="text-[11px] font-mono text-[#a8c7fa] hover:underline"
          >
            CV
          </a>
        </div>
      </div>
    </aside>
  );
}
