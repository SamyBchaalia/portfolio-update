import { Link } from 'react-router-dom';

import { ButtonTheme } from '@/components';
import { navList } from '@/data/constant/navs';
import { useActiveMenu } from '@/hooks';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const HeaderComponent = () => {
  const { checkActive } = useActiveMenu();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-gray-900 dark:text-white">
                Arcube
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              {navList.map((item) => {
                return (
                  <Link key={item.key} to={item.key}>
                    <span
                      className={`text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white ${
                        checkActive(item.key) ? 'underline' : ''
                      }`}
                    >
                      {item.label}
                    </span>
                  </Link>
                );
              })}
              <ButtonTheme />
            </div>
            <div className="md:hidden flex items-center">
              <ButtonTheme />
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="ml-2 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
              >
                {isOpen ? (
                  <X className="block h-6 w-6" />
                ) : (
                  <Menu className="block h-6 w-6" />
                )}
              </button>
            </div>
            <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                {navList.map((item) => {
                  return (
                    <Link key={item.key} to={item.key}>
                      <span className="block w-full text-left px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700 rounded-md">
                        {item.label}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default HeaderComponent;
