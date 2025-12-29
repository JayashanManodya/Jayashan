import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Education', href: '#education' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [activeTab, setActiveTab] = useState('Home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string, name: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
      setActiveTab(name);
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-8 left-0 w-full z-50 px-4 md:px-0">
      <div className="max-w-5xl mx-auto">
        <div className="bg-[#6366f1] rounded-full px-8 py-3 flex items-center justify-between shadow-lg backdrop-blur-sm border border-white/20">
          {/* Mobile Menu Button - Left on mobile */}
          <div className="md:hidden">
            <button
              className="p-2 text-white hover:text-white/80"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Nav Links - Left side (Desktop) */}
          <div className="hidden md:flex items-center justify-between flex-1 pr-4">
            {navItems.slice(0, 3).map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href, item.name)}
                className={`text-base font-semibold transition-all duration-300 px-4 py-2 rounded-full whitespace-nowrap ${activeTab === item.name
                  ? 'bg-white text-[#6366f1]'
                  : 'text-white hover:text-white/80'
                  }`}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Logo / Brand - Centered */}
          <div className="flex-shrink-0 bg-white text-black w-10 h-10 rounded-full flex items-center justify-center font-black text-sm shadow-md mx-6">
            JM
          </div>

          {/* Nav Links - Right side (Desktop) */}
          <div className="hidden md:flex items-center justify-between flex-1 pl-4">
            {navItems.slice(3).map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href, item.name)}
                className={`text-base font-semibold transition-all duration-300 px-4 py-2 rounded-full whitespace-nowrap ${activeTab === item.name
                  ? 'bg-white text-[#6366f1]'
                  : 'text-white hover:text-white/80'
                  }`}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Right Spacer */}
          <div className="md:hidden w-8" />
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4 bg-[#6366f1] rounded-3xl p-6 shadow-2xl border border-white/20"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href, item.name)}
                  className={`text-center text-lg font-bold py-2 ${activeTab === item.name ? 'bg-white text-[#6366f1] rounded-full' : 'text-white'
                    }`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}