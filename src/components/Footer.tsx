import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/logo.png" 
                alt="EB5 Visa Expert" 
                className="h-10 w-auto max-w-[150px] object-contain"
              />
            </div>
            <div className="mb-4">
              <h1 className="text-lg font-bold tracking-tight text-white">
                EB5 <span className="text-white">Visa Expert</span>
              </h1>
            </div>
            <p className="text-gray-400">
              Your trusted partner in EB-5 investment immigration, providing expert guidance and verified investment opportunities.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-primary-500 transition">Home</a></li>
              <li><a href="#process" className="text-gray-400 hover:text-primary-500 transition">Process</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-primary-500 transition">Projects</a></li>
              <li><a href="#requirements" className="text-gray-400 hover:text-primary-500 transition">Requirements</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-primary-500 transition">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-500 transition">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-500 transition">News</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-500 transition">Success Stories</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-4">
              <li>
                <p className="text-gray-400">HSR Layout</p>
                <p className="text-gray-400">Bangalore, Karnataka</p>
              </li>
              <li>
                <p className="text-gray-400">Vasna Road</p>
                <p className="text-gray-400">Vadodara, Gujarat</p>
              </li>
              <li className="text-gray-400">+91 88847 13789</li>
              <li className="text-gray-400">eb5visaexpert@gmail.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              {new Date().getFullYear()} EB5 Visa Expert. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-primary-500 transition">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition">Disclaimer</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;