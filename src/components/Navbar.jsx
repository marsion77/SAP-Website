import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Solutions', path: '/solutions' },
    { label: 'Careers', path: '/careers' },
    { label: 'Contact Us', path: '/contact' }
  ];

  const checkActive = (route) => location.pathname === route;

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-black tracking-tight text-slate-900">
              NexaTech<span className="text-[#0E90CF]">Digital</span>
            </Link>
          </div>
          
          {/* Desktop link arrays structured with explicit 16px (text-base) font requirements */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-base font-bold tracking-wide transition-colors relative py-2 ${
                  checkActive(item.path) ? 'text-[#0E90CF]' : 'text-slate-600 hover:text-[#0E90CF]'
                }`}
              >
                {item.label}
                {checkActive(item.path) && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#0E90CF] to-[#217098] rounded-full"></span>
                )}
              </Link>
            ))}
            {/* <Link to="/contact" className="bg-gradient-to-r from-[#0E90CF] to-[#217098] text-white px-6 py-3.5 rounded-xl text-base font-bold tracking-wide shadow-md shadow-blue-500/10 hover:opacity-95 active:scale-98 transition-all">
              Consultation
            </Link> */}
          </div>

          <div className="flex items-center md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 hover:text-slate-900 focus:outline-none">
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-1 shadow-xl animate-slide">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3.5 rounded-xl text-base font-bold tracking-wide ${
                checkActive(item.path) ? 'bg-blue-50 text-[#0E90CF]' : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}