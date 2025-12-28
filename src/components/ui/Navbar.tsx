import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Terminal } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
const navItems = [{
  name: 'About',
  href: '#about'
}, {
  name: 'Skills',
  href: '#skills'
}, {
  name: 'Education',
  href: '#education'
}, {
  name: 'Projects',
  href: '#projects'
}, {
  name: 'Contact',
  href: '#contact'
}];
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };
  return <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/80 dark:bg-slate-900/80 light:bg-white/80 backdrop-blur-md border-b border-white/5 dark:border-white/5 light:border-slate-200 py-4' : 'bg-transparent py-6'}`}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between">
        <a href="#hero" onClick={e => scrollToSection(e, '#hero')} className="flex items-center gap-2 group">
          <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20 group-hover:border-blue-500/50 transition-colors">
            <Terminal className="w-6 h-6 text-blue-400" />
          </div>

        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map(item => <a key={item.name} href={item.href} onClick={e => scrollToSection(e, item.href)} className="text-sm font-medium text-slate-600 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors relative group">
            {item.name}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-500 dark:bg-cyan-400 transition-all group-hover:w-full" />
          </a>)}

          {/* Theme Toggle */}
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />
          <button className="p-2 text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </div>

    {/* Mobile Nav */}
    <AnimatePresence>
      {isMobileMenuOpen && <motion.div initial={{
        opacity: 0,
        height: 0
      }} animate={{
        opacity: 1,
        height: 'auto'
      }} exit={{
        opacity: 0,
        height: 0
      }} className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-white/10">
        <div className="px-4 py-4 space-y-4">
          {navItems.map(item => <a key={item.name} href={item.href} onClick={e => scrollToSection(e, item.href)} className="block text-base font-medium text-slate-600 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-white/5 px-4 py-2 rounded-lg transition-colors">
            {item.name}
          </a>)}
        </div>
      </motion.div>}
    </AnimatePresence>
  </nav>;
}