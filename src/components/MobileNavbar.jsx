import React, { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function MobileNavbar({ profile, onNavigate }) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { id: 'overview', label: 'Overview' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'achievements', label: 'Credentials' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (id) => {
    onNavigate(id);
    setIsOpen(false);
  };

  return (
    <header className="lg:hidden sticky top-0 z-40 bg-[#131314]/95 backdrop-blur-md border-b border-white/10 px-4 sm:px-6 py-3.5 flex items-center justify-between select-none">
      <div className="flex items-center gap-2.5">
        <span className="font-medium text-white text-sm tracking-tight truncate max-w-[200px] sm:max-w-none">
          {profile.fullName}
        </span>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={() => handleLinkClick('contact')}
          className="px-3 py-1.5 rounded-full bg-[#a8c7fa] text-[#0a315b] text-xs font-medium cursor-pointer transition-colors hover:bg-[#d3e2ff]"
        >
          Contact
        </button>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-1.5 rounded-lg bg-[#1e1f20] text-neutral-300 hover:text-white cursor-pointer transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#131314] border-b border-white/10 p-4 shadow-2xl flex flex-col space-y-1 animate-fadeIn">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className="text-left px-3.5 py-2.5 rounded-xl text-sm text-neutral-300 hover:text-white hover:bg-[#1e1f20] flex items-center justify-between transition-colors cursor-pointer"
            >
              <span>{link.label}</span>
              <ArrowRight className="w-4 h-4 text-neutral-500" />
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
