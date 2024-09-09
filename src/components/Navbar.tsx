import React, { useState } from 'react';
import logo from '@assets/images/logo/logo.png';
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [toggle, setToggle] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <>
      <nav className="border-gray-200 bg-white dark:bg-gray-900">
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4 lg:justify-around">
          <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={logo} className="h-16" alt="Flowbite Logo" />
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
            aria-controls="navbar-default"
            aria-expanded={toggle}
            onClick={() => setToggle(!toggle)}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className={`${toggle ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
            <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 md:dark:bg-gray-900 lg:gap-10 rtl:space-x-reverse">
              <li>
                <span
                  className={`block cursor-pointer rounded px-2 py-2 ${isActive('/') ? 'text-red-600' : 'text-gray-900'} md:dark:hover:text-white-500 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-red-400 md:dark:hover:bg-transparent`}
                  aria-current="page"
                  onClick={() => navigate('/')}
                >
                  Home
                </span>
              </li>
              <li>
                <span
                  className={`block cursor-pointer rounded px-2 py-2 ${isActive('/about') ? 'text-red-600' : 'text-gray-900'} md:dark:hover:text-white-500 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-red-400 md:dark:hover:bg-transparent`}
                  aria-current="page"
                  onClick={() => navigate('/')}
                >
                  About Us
                </span>
              </li>
              <li>
                <span
                  className={`block cursor-pointer rounded px-2 py-2 ${isActive('/services') ? 'text-red-600' : 'text-gray-900'} md:dark:hover:text-white-500 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-red-400 md:dark:hover:bg-transparent`}
                  aria-current="page"
                  onClick={() => navigate('/services')}
                >
                  Services
                </span>
              </li>
              <li>
                <span
                  className={`block cursor-pointer rounded px-2 py-2 ${isActive('/career') ? 'text-red-600' : 'text-gray-900'} md:dark:hover:text-white-500 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-red-400 md:dark:hover:bg-transparent`}
                  aria-current="page"
                  onClick={() => navigate('/career')}
                >
                  Career
                </span>
              </li>
              <li>
                <a href="/" className="block rounded-[200px] bg-red-600 px-2 py-2 text-center text-white md:px-5">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
