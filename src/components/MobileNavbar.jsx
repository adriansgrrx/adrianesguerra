import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function MobileNavbar({ profile, onNavigate }) {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.contact.email).then(() => {
      setCopied(true);
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.9, x: 0.5 },
        colors: ['#a8c7fa', '#d0bcff', '#4285f4'],
      });
      setTimeout(() => setCopied(false), 2400);
    });
  };

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
          <nav className="flex flex-col space-y-1.5 w-full pt-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className="text-left py-3 px-4 rounded-xl text-base sm:text-lg font-medium text-neutral-300 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Footer Area: Copy Email & Text Links (same as Sidebar.jsx) */}
          <div className="pt-6 border-t border-white/10 space-y-4 mt-6">
            {/* Interactive Copy Email */}
            <button
              onClick={handleCopyEmail}
              className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-[#1e1f20] hover:bg-[#282a2c] border border-white/5 text-xs sm:text-sm text-neutral-300 hover:text-white transition-all cursor-pointer"
              title="Click to copy email address"
            >
              <span className="truncate font-mono">{profile.contact.email}</span>
              <span className="font-mono text-xs text-neutral-400 shrink-0 ml-2">
                {copied ? <span className="text-emerald-400">Copied</span> : 'Copy'}
              </span>
            </button>

            {/* Text Links */}
            <div className="flex items-center justify-between text-xs sm:text-sm text-neutral-400 pt-1">
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
                  handleLinkClick('contact');
                }}
                className="text-xs font-mono text-[#a8c7fa] hover:underline"
              >
                CV
              </a>
            </div>

            <div className="text-[11px] font-mono text-neutral-500 pt-1">
              <span>© {new Date().getFullYear()} {profile.fullName}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
