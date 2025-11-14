import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { cn } from '../lib/utils';
import { FaMoon, FaSun, FaArrowLeft } from 'react-icons/fa';

export function Navbar({ links = [], className }) {
  const navigate = useNavigate();
  const location = useLocation();

  const [mobileOpen, setMobileOpen] = useState(false);

 const [darkMode, setDarkMode] = useState(() => localStorage.getItem("darkMode") === "true");

  useEffect(() => {
      document.documentElement.classList.toggle("dark", darkMode);
      localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const isSignUp =
    location.pathname === "/donor/signup" ||
    location.pathname === "/needy/register" ||
    location.pathname === "/ngo/ngo-details";

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const handleGoBack = () => navigate(-1);

  return (
    <header className={cn("fixed top-0 left-0 right-0 z-50", className)}>
      <nav
        className={cn(
          "w-full flex items-center justify-between px-4 py-3 md:px-6 md:py-4 transition-all",
          "backdrop-blur-md glass"
        )}
      >
        <Link
          to="/"
          className="flex items-center gap-2 md:gap-3 hover:opacity-90 focus:outline-none"
        >
          <img
            src={"/icon.png"}
            alt="HopeBridge Logo"
            className="w-8 h-8 md:w-10 md:h-10 rounded-full shadow-md"
          />
          <span className="text-lg md:text-2xl font-bold gradient-text">
            HopeBridge
          </span>
        </Link>

        {isSignUp && (
          <div className="flex items-center gap-2 md:gap-4">
            <button
              onClick={handleGoBack}
              className="flex items-center gap-1 md:gap-2 text-gray-700 dark:text-gray-200 hover:text-indigo-500 transition hover:scale-105"
            >
              <FaArrowLeft className="text-xs md:text-sm" />
              <span className="text-xs md:text-sm hidden sm:inline">Back</span>
            </button>

            <Link
              to="/"
              className="hidden md:flex items-center gap-2 text-gray-700 dark:text-gray-200 hover:text-indigo-500 transition"
            >
              <FaArrowLeft className="text-sm" />
              <span className="text-sm">Back to Home</span>
            </Link>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-1 md:p-2 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-all"
              title={darkMode ? "Light Mode" : "Dark Mode"}
            >
              {darkMode ? (
                <FaSun className="text-sm" />
              ) : (
                <FaMoon className="text-sm" />
              )}
            </button>
          </div>
        )}

        {/* Mobile Hamburger */}
        <button
          className="sm:hidden flex items-center justify-center w-10 h-10 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-400"
          aria-label="Open menu"
          onClick={() => setMobileOpen((v) => !v)}
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={
                mobileOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="absolute top-full left-0 w-full bg-gray-900/95 shadow-lg flex flex-col items-center py-4 gap-4 z-50 sm:hidden animate-fade-in">
            {links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "text-gray-200 hover:text-primary-400 text-base py-1 px-4 rounded focus:outline-none",
                  location.pathname === link.href &&
                    "text-primary-400 font-semibold"
                )}
              >
                {link.label}
              </Link>
            ))}

            <Link to="/signup" className="w-full flex justify-center">
              <button className="h-9 px-4 rounded-md bg-primary-600 hover:bg-primary-700 text-white text-base w-full">
                Sign Up
              </button>
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
