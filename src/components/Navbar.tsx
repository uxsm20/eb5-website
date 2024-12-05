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
          <div className="flex flex-col items-center space-y-8">
            <button 
              onClick={() => handleSectionClick('process')} 
              className="text-gray-700 text-xl hover:text-primary-600 transition-colors"
            >
              Process
            </button>
            <button 
              onClick={() => handleSectionClick('projects')} 
              className="text-gray-700 text-xl hover:text-primary-600 transition-colors"
            >
              Projects
            </button>
            <button 
              onClick={() => handleSectionClick('requirements')} 
              className="text-gray-700 text-xl hover:text-primary-600 transition-colors"
            >
              Requirements
            </button>
            <Link 
              to="/blog" 
              className="text-gray-700 text-xl hover:text-primary-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
            <button 
              onClick={() => handleSectionClick('contact')} 
              className="group inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-lg text-white bg-primary-500 hover:bg-primary-600 transition-all duration-200 shadow-lg shadow-primary-500/25 mt-4"
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