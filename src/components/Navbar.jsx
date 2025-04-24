'use client';

import { useState, useEffect } from 'react';
import ThemeToggleButton from './ThemeToggleButton'; // <<< Import button

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const navItems = [
    { id: 'hero', label: 'Home', href: '#hero', iconPlaceholder: '[🏠]' },
    { id: 'about', label: 'About', href: '#about', iconPlaceholder: '[👤]' },
    { id: 'skills', label: 'Skills', href: '#skills', iconPlaceholder: '[💻]' },
    {
      id: 'experience',
      label: 'Experience',
      href: '#experience',
      iconPlaceholder: '[📚]',
    },
    {
      id: 'projects',
      label: 'Projects',
      href: '#projects',
      iconPlaceholder: '[💡]',
    },
    {
      id: 'community',
      label: 'Community',
      href: '#community',
      iconPlaceholder: '[🤝]',
    },
    {
      id: 'contact',
      label: 'Contact',
      href: '#contact',
      iconPlaceholder: '[✉️]',
    },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -80% 0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
      observer.disconnect();
    };
  }, []);

  const navBg = 'bg-navy-deep';
  const linkColor = 'text-grey-soft';
  const linkHoverBg = 'hover:bg-charcoal';
  const linkHoverText = 'hover:text-teal';
  const iconColor = 'text-coral';
  const activeLinkBg = 'bg-teal';
  const activeLinkText = 'text-navy-deep';

  return (
    <>
      {/* Desktop Sidebar Navigation */}
      <nav
        className={`fixed top-0 left-0 h-screen w-20 ${navBg} ${linkColor} hidden md:flex flex-col items-center py-8 shadow-lg z-50`}
      >
        <div className="mb-12 font-montserrat font-bold text-xl text-teal">
          LM
        </div>

        <ul className="flex flex-col items-center space-y-6">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <li key={item.id}>
                <a
                  href={item.href}
                  aria-label={item.label}
                  title={item.label}
                  className={`flex flex-col items-center p-2 rounded-md transition-colors duration-200
                       ${
                         isActive
                           ? `${activeLinkBg} ${activeLinkText}`
                           : `${linkHoverBg} ${linkHoverText}`
                       }`}
                >
                  <span
                    className={`text-2xl mb-1 ${isActive ? activeLinkText : iconColor}`}
                  >
                    {item.iconPlaceholder}
                  </span>
                  <span className="text-xs font-inter">{item.label}</span>
                </a>
              </li>
            );
          })}
        </ul>

        {/* Add Toggle Button near the bottom */}
        <div className="mt-auto mb-4">
          {' '}
          {/* Push to bottom */}
          <ThemeToggleButton />
        </div>
      </nav>

      {/* Mobile Top Navigation (Could also add button here) */}
      <div
        className={`fixed top-0 left-0 right-0 h-16 ${navBg} ${linkColor} flex justify-between items-center px-4 shadow-lg z-50 md:hidden`}
      >
        {/* Logo */}
        <div className="font-montserrat font-bold text-xl text-teal">LM</div>
        {/* Add Toggle Button next to hamburger? */}
        <div className="flex items-center gap-2">
          <ThemeToggleButton />
          <button
            onClick={toggleMobileMenu}
            className={`p-2 rounded ${linkHoverBg} ${linkHoverText}`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? '[✕]' : '[☰]'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className={`fixed top-16 left-0 right-0 ${navBg} ${linkColor} shadow-lg p-4 md:hidden z-40`}
        >
          <ul className="flex flex-col space-y-4">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={item.href}
                    onClick={toggleMobileMenu}
                    className={`flex items-center gap-3 p-2 rounded transition-colors duration-200
                           ${
                             isActive
                               ? `${activeLinkBg} ${activeLinkText}`
                               : `${linkHoverBg} ${linkHoverText}`
                           }`}
                  >
                    <span
                      className={`text-xl ${isActive ? activeLinkText : iconColor}`}
                    >
                      {item.iconPlaceholder}
                    </span>
                    <span className="font-inter">{item.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
}
