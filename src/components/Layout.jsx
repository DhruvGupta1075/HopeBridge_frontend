import React, { useEffect } from 'react';
import { Navbar } from './Navbar';
import { cn } from '../lib/utils';

export function Layout({ children, showNavbar = true, showFooter = true, className }) {
  // Force dark mode always
  useEffect(() => {
    document.documentElement.classList.add("dark");
    localStorage.setItem("darkMode", "true");
  }, []);

  const navLinks = [
    { href: '/signup', label: 'Sign Up' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' }
  ];

  return (
    <div className={cn(
      "min-h-screen dark bg-gray-900 text-gray-100",
      className
    )}>
      {showNavbar && (
        <Navbar 
          links={navLinks}
        />
      )}
      
      <main className={cn(showNavbar && "pt-16 md:pt-20")}>
        {children}
      </main>

      {showFooter && (
        <Footer />
      )}
    </div>
  );
}

import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="py-8 md:py-12 text-white bg-gradient-to-r from-gray-800 to-gray-900 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src="/src/assets/logo1.png" alt="MediHope Logo" className="w-8 h-8 md:w-10 md:h-10 rounded-full" />
              <h2 className="text-lg md:text-xl font-bold">MediHope</h2>
            </div>
            <p className="text-sm opacity-90 max-w-md">
              Connecting compassion with need to build a better tomorrow.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-base md:text-lg mb-3 md:mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm hover:underline opacity-90 hover:opacity-100">Home</Link></li>
              <li><Link to="/signup" className="text-sm hover:underline opacity-90 hover:opacity-100">Sign Up</Link></li>
              <li><Link to="/about" className="text-sm hover:underline opacity-90 hover:opacity-100">About</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-base md:text-lg mb-3 md:mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/i_.am._mahesh/" target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center cursor-pointer hover:bg-white/20 transition hover:-translate-y-1"
                title="Instagram">
                <span className="text-xs">I</span>
              </a>
              <a href="https://www.linkedin.com/in/mahesh-singla-999292324/" target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center cursor-pointer hover:bg-white/20 transition hover:-translate-y-1"
                title="LinkedIn">
                <span className="text-xs">L</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-6 md:mt-8 pt-6 md:pt-8 text-center text-xs md:text-sm opacity-90">
          <p>
            © {new Date().getFullYear()} <strong>MediHope</strong> — Made with <span className="text-pink-200">♥</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
