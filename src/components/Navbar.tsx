import React, { useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
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

  const handleMenuItemClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav className="fixed w-full bg-white shadow-sm z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center space-x-3">
              <img 
                src="/logo.png" 
                alt="EB5 Visa Expert" 
                className="h-8 sm:h-12 w-auto max-w-[120px] sm:max-w-[200px] object-contain"
              />
              <h1 className="text-sm sm:text-xl font-bold tracking-tight text-gray-900">
                EB5 <span className="text-gray-900">Visa Expert</span>
              </h1>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="nav-link text-gray-700">Home</a>
              <a href="#process" className="nav-link text-gray-700">Process</a>
              <a href="#projects" className="nav-link text-gray-700">Projects</a>
              <a href="#requirements" className="nav-link text-gray-700">Requirements</a>
              <a href="#contact" className="button-hover bg-primary-600 text-white px-4 py-2 rounded-md">Contact Us</a>
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
            <a 
              href="#home" 
              className="text-gray-900 text-2xl font-semibold"
              onClick={handleMenuItemClick}
            >
              Home
            </a>
            <a 
              href="#process" 
              className="text-gray-900 text-2xl font-semibold"
              onClick={handleMenuItemClick}
            >
              Process
            </a>
            <a 
              href="#projects" 
              className="text-gray-900 text-2xl font-semibold"
              onClick={handleMenuItemClick}
            >
              Projects
            </a>
            <a 
              href="#requirements" 
              className="text-gray-900 text-2xl font-semibold"
              onClick={handleMenuItemClick}
            >
              Requirements
            </a>
            <a 
              href="#contact" 
              className="button-hover bg-primary-600 text-white px-8 py-4 rounded-md text-xl font-semibold mt-8"
              onClick={handleMenuItemClick}
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;