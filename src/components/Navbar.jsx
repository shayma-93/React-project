import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <div className="bg-transparent w-full sm:pb-8 lg:pb-2 overflow-hidden">
      <div className="w-full ml-2 px-4 md:px-8">
        <header className="mb-8 w-full flex items-center py-4 md:mb-12 md:py-8 xl:mb-12">
          <Link
            to="/"
            className="w-[30%] inline-flex items-center gap-2.5 text-2xl font-satisfy text-[#c74385] hover:text-[#fdbdb5] md:text-3xl"
            aria-label="logo"
          >
            <img src="/images/logo.jpg" className="w-24 h-24" />
            InStyle
          </Link>

          <nav className="w-full hidden gap-12 -12 ml-48 lg:flex justify-start">
            <Link to="/" className="text-lg font-pacifico font-semibold text-gray-600 transition duration-100 hover:text-[#c74385] active:text-[#c74385">Home</Link>
            <Link
              to="/about"
              className="text-lg font-pacifico font-semibold text-gray-600 transition duration-100 hover:text-[#c74385] active:text-[#c74385]"
            >
              About
            </Link>
            <Link
              to="/products"
              className="text-lg font-pacifico font-semibold text-gray-600 transition duration-100 hover:text-[#c74385] active:text-[#c74385]"
            >
              Products
            </Link>
            <Link
              to="/features"
              className="text-lg font-pacifico font-semibold text-gray-600 transition duration-100 hover:text-[#c74385] active:text-[#c74385]"
            >
              Loyalty Points
            </Link>
            <Link
              to="/reviews"
              className="text-lg font-pacifico font-semibold text-gray-600 transition duration-100 hover:text-[#c74385] active:text-[#c74385]"
            >
              Reviews
            </Link>

            <div className="inline-flex items-center ml-auto gap-6">
              <Link to="/cart">
                <FontAwesomeIcon
                  icon={faCartShopping}
                  className="text-[#ec79b1] text-3xl hover:text-[#fdbdb5] transition duration-300"
                />
              </Link>
              <Link to="/profile">
                <FontAwesomeIcon
                  icon={faUser}
                  className="text-[#ec79b1] text-3xl hover:text-[#fdbdb5] transition duration-300"
                />
              </Link>
            </div>
          </nav>

          <button
            type="button"
            className="items-center gap-2 rounded-lg bg-gray-200 ml-24 px-2.5 py-2 text-sm font-semibold text-gray-500 ring-indigo-300 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
            Menu
          </button>
        </header>
      </div>
    </div>
  );
};

export default Navbar;
