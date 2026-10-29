import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

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

  // Lock body scroll when fullscreen mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleLinkClick = (id) => {
    onNavigate(id);
    setIsOpen(false);
  };

  return (
    <>
      <header className="lg:hidden sticky top-0 z-50 h-14 bg-[#131314]/95 backdrop-blur-md border-b border-white/10 px-4 sm:px-6 flex items-center justify-between select-none">
        {/* Left: Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-lg bg-[#1e1f20] hover:bg-[#282a2c] text-neutral-300 hover:text-white cursor-pointer transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        {/* Right: Contact Button */}
        <button
          onClick={() => handleLinkClick('contact')}
          className="px-4 py-1.5 rounded-full bg-[#a8c7fa] hover:bg-[#d3e2ff] text-[#0a315b] text-xs font-medium cursor-pointer transition-colors"
        >
          Contact
        </button>
      </header>

      {/* Fullscreen Mobile Dropdown */}
      {isOpen && (
        <div className="lg:hidden fixed inset-x-0 top-14 bottom-0 bg-[#131314] z-40 flex flex-col justify-between p-6 sm:p-8 overflow-y-auto animate-fadeIn">
          <nav className="flex flex-col space-y-2 w-full pt-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className="text-left py-3.5 px-4 rounded-xl text-lg font-medium text-neutral-300 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="pt-6 border-t border-white/10 text-xs font-mono text-neutral-500">
            <span>© {new Date().getFullYear()} {profile.fullName}</span>
          </div>
        </div>
      )}
    </>
  );
}
