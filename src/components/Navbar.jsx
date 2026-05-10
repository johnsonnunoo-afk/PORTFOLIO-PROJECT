import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Analysis', href: '#about' },
    { name: 'Stack', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${isScrolled ? 'bg-background/90 backdrop-blur-md border-border py-4' : 'bg-transparent border-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <Terminal className="text-primary w-6 h-6 group-hover:animate-pulse" />
          <span className="font-mono font-bold text-lg tracking-tighter">JN_DATA<span className="text-primary animate-pulse">_</span></span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-mono text-textMuted hover:text-primary transition-colors">
              <span className="text-border mr-1">//</span>{link.name}
            </a>
          ))}
          <a href="#contact" className="ml-4 px-4 py-2 border border-primary text-primary font-mono text-sm hover:bg-primary hover:text-black transition-colors">
            INIT_CONTACT
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-textMuted hover:text-textMain" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-surface border-b border-border p-6 flex flex-col gap-4 shadow-2xl">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-lg font-mono text-textMuted hover:text-primary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="text-primary mr-2">{'>'}</span>{link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
