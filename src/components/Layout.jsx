import React, { useEffect } from 'react';
import { Navbar } from './Navbar';

import { cn } from '../lib/utils';
import Footer from './Footer';

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
      
      <main className={cn(showNavbar && "pt-20 md:pt-24")}>
        {children}
      </main>

      {/* {showFooter && (
        <Footer />
      )} */}
    </div>
  );
}

