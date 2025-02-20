import { useState } from 'react';

import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

import { ButtonTheme } from '@/components';
import { navList } from '@/data/constant/navs';

export default function HeaderComponent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-sm dark:border-gray-700 dark:bg-gray-800/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="shrink-0">
            <span className="bg-gradient-to-r from-black to-gray-700 bg-clip-text text-2xl font-bold text-transparent dark:from-white dark:to-gray-300">
              SAMI BEN CHAALIA
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {navList.map((item) => {
              return (
                <Link key={item.key} to={item.key}>
                  <span
                    className={`text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white`}
                  >
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </div>

          {/* Desktop Right Section */}
          <div className="hidden lg:flex lg:items-center lg:space-x-4">
            <ButtonTheme />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2 lg:hidden">
            <ButtonTheme />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none dark:hover:bg-gray-700"
            >
              {isOpen ? (
                <X className="size-6" />
              ) : (
                <Menu className="size-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`transition-all duration-300 ease-in-out lg:hidden ${
          isOpen
            ? 'visible max-h-screen opacity-100'
            : 'invisible max-h-0 opacity-0'
        }`}
      >
        <div className="space-y-1 border-t border-gray-200 bg-white px-4 py-2 dark:border-gray-700 dark:bg-gray-800">
          {navList.map((item) => {
            return (
              <Link key={item.key} to={item.key}>
                <span
                  className={`block rounded-md px-3 py-2 text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white`}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
