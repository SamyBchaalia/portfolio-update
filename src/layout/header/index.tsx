import { useState, useEffect } from 'react';

import { Calendar, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

import { navList } from '@/data/constant/navs';

export default function HeaderComponent() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed z-50 w-full transition-all duration-500 ${
        scrolled
          ? 'border-b border-white/[0.06] bg-[#07070E]/90 shadow-[0_1px_40px_rgba(0,0,0,0.4)] backdrop-blur-xl'
          : 'bg-[#07070E]/70 backdrop-blur-md'
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/home" className="shrink-0">
            <span className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-lg font-bold tracking-tight text-transparent">
              SAMI<span className="text-blue-400">.</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-1 lg:flex">
            {navList.map((item) => {
              const isActive = location.pathname === item.key;
              return (
                <Link key={item.key} to={item.key}>
                  <span
                    className={`relative rounded-lg px-3.5 py-1.5 text-sm font-medium transition-colors duration-200 ${
                      isActive
                        ? 'text-white'
                        : 'text-white/50 hover:text-white/90'
                    }`}
                  >
                    {isActive && (
                      <span className="absolute inset-0 rounded-lg bg-white/[0.07]" />
                    )}
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex">
            <a
              href="https://calendly.com/sami-benchaalia/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glow inline-flex items-center gap-2 rounded-xl border border-blue-500/30 bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-glow-blue-sm transition-all duration-300 hover:bg-blue-500 hover:shadow-glow-blue"
            >
              <Calendar className="size-4" />
              Book a Call
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg p-2 text-white/60 hover:bg-white/[0.07] hover:text-white lg:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out lg:hidden ${
          isOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="border-t border-white/[0.06] bg-[#07070E] px-4 py-3">
          <div className="space-y-1">
            {navList.map((item) => (
              <Link
                key={item.key}
                to={item.key}
                onClick={() => setIsOpen(false)}
              >
                <span className="block rounded-lg px-3 py-2.5 text-sm font-medium text-white/60 hover:bg-white/[0.05] hover:text-white">
                  {item.label}
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-3 border-t border-white/[0.06] pt-3">
            <a
              href="https://calendly.com/sami-benchaalia/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-500"
            >
              <Calendar className="size-4" />
              Book a Free Call
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
