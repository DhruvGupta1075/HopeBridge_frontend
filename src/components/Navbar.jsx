import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../lib/utils';

export function Navbar({ links = [], className }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  React.useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header className={cn("fixed top-0 left-0 right-0 z-50", className)}>
      <nav className={cn(
        "w-full flex items-center justify-between px-4 py-3 md:px-6 md:py-4 transition-all",
        "backdrop-blur-md glass"
      )}>
        <Link to="/" className="flex items-center gap-2 md:gap-3 hover:opacity-90 focus:outline-none">
          <img src={"/src/assets/logo1.png"} alt="HopeBridge Logo" className="w-8 h-8 md:w-10 md:h-10 rounded-full shadow-md" />
          <span className="text-lg md:text-2xl font-bold gradient-text">HopeBridge</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden sm:flex items-center gap-6 text-sm">
          {links.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                "relative group text-gray-200 hover:text-primary-400 transition-colors focus:outline-none",
                location.pathname === link.href && "text-primary-400 font-semibold"
              )}
              tabIndex={0}
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </div>

        {/* Hamburger for mobile */}
        <button
          className="sm:hidden flex items-center justify-center w-10 h-10 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-400"
          aria-label="Open menu"
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span className="sr-only">Open menu</span>
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d={mobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="absolute top-full left-0 w-full bg-gray-900/95 shadow-lg flex flex-col items-center py-4 gap-4 z-50 sm:hidden animate-fade-in">
            {links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "text-gray-200 hover:text-primary-400 text-base py-1 px-4 rounded focus:outline-none",
                  location.pathname === link.href && "text-primary-400 font-semibold"
                )}
                tabIndex={0}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/signup" className="w-full flex justify-center">
              <button className="h-9 px-4 rounded-md bg-primary-600 hover:bg-primary-700 text-white text-base w-full">Sign Up</button>
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}

