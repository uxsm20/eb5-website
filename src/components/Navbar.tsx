import React from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
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
            <a href="#home" className="text-gray-700 hover:text-primary-600 transition">Home</a>
            <a href="#process" className="text-gray-700 hover:text-primary-600 transition">Process</a>
            <a href="#projects" className="text-gray-700 hover:text-primary-600 transition">Projects</a>
            <a href="#requirements" className="text-gray-700 hover:text-primary-600 transition">Requirements</a>
            <a href="#contact" className="bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700 transition">Contact Us</a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="flex flex-col space-y-4 pb-4">
              <a href="#home" className="text-gray-700 hover:text-primary-600 transition">Home</a>
              <a href="#process" className="text-gray-700 hover:text-primary-600 transition">Process</a>
              <a href="#projects" className="text-gray-700 hover:text-primary-600 transition">Projects</a>
              <a href="#requirements" className="text-gray-700 hover:text-primary-600 transition">Requirements</a>
              <a href="#contact" className="bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700 transition text-center">Contact Us</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;