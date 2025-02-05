import { Link } from 'react-router-dom';

import { ButtonTheme } from '@/components';
import { navList } from '@/data/constant/navs';
import { useActiveMenu } from '@/hooks';

const HeaderComponent = () => {
  const { checkActive } = useActiveMenu();

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
            </div>

            {/* <div className="flex items-center space-x-4">
              <a
                href="#"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              >
                Log in
              </a>
              <button className="bg-black dark:bg-white text-white dark:text-black px-4 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity">
                Sign up
              </button>
            </div> */}
            <div>
              <ButtonTheme />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default HeaderComponent;
