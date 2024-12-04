import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const handleSectionClick = (sectionId: string) => {
    const handleScroll = () => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

    if (location.pathname !== '/') {
      navigate('/', { replace: true });
      // Wait for navigation to complete before scrolling
      setTimeout(handleScroll, 100);
    } else {
      handleScroll();
    }
    setIsOpen(false);
  };

  return (
    <>
      <nav className="fixed w-full bg-white shadow-sm z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center space-x-3">
              <Link to="/" className="flex items-center space-x-3">
                <img 
                  src="/logo.png" 
                  alt="EB5 Visa Expert" 
                  className="h-8 sm:h-12 w-auto max-w-[120px] sm:max-w-[200px] object-contain"
                />
                <h1 className="text-sm sm:text-xl font-bold tracking-tight text-gray-900">
                  EB5 <span className="text-gray-900">Visa Expert</span>
                </h1>
              </Link>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => handleSectionClick('process')} 
                className="nav-link text-gray-700 hover:text-primary-600"
              >
                Process
              </button>
              <button 
                onClick={() => handleSectionClick('projects')} 
                className="nav-link text-gray-700 hover:text-primary-600"
              >
                Projects
              </button>
              <button 
                onClick={() => handleSectionClick('requirements')} 
                className="nav-link text-gray-700 hover:text-primary-600"
              >
                Requirements
              </button>
              <Link to="/blog" className="nav-link text-gray-700 hover:text-primary-600">
                Blog
              </Link>
              <button 
                onClick={() => handleSectionClick('contact')} 
                className="button-hover bg-primary-600 text-white px-4 py-2 rounded-md"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Toggle Button */}
      <button 
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)} 
        className="menu-toggle-button md:hidden"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <X className="h-6 w-6 text-gray-900" strokeWidth={2} />
        ) : (
          <Menu className="h-6 w-6 text-gray-700" strokeWidth={2} />
        )}
      </button>

      {/* Mobile Menu Overlay */}
      <div 
        ref={menuRef}
        className={`mobile-menu-overlay ${isOpen ? 'open' : 'closed'}`}
      >
        <div className="flex flex-col justify-center items-center min-h-screen px-4">
          <div className="flex flex-col items-center space-y-12">
            <button 
              onClick={() => handleSectionClick('process')} 
              className="text-gray-900 text-2xl font-semibold"
            >
              Process
            </button>
            <button 
              onClick={() => handleSectionClick('projects')} 
              className="text-gray-900 text-2xl font-semibold"
            >
              Projects
            </button>
            <button 
              onClick={() => handleSectionClick('requirements')} 
              className="text-gray-900 text-2xl font-semibold"
            >
              Requirements
            </button>
            <Link 
              to="/blog" 
              className="text-gray-900 text-2xl font-semibold"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
            <button 
              onClick={() => handleSectionClick('contact')} 
              className="button-hover bg-primary-600 text-white px-8 py-4 rounded-md text-xl font-semibold mt-8"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;