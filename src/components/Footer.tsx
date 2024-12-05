import React from 'react';

const Footer = () => {
  const whatsappNumber = "918884713789"; // Format: country code (91) + number
  const whatsappMessage = "Hello! I'm interested in learning more about EB-5 visa investment opportunities.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              <li><a href="#process" className="text-gray-400 hover:text-primary-500 transition">Process</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-primary-500 transition">Projects</a></li>
              <li><a href="#requirements" className="text-gray-400 hover:text-primary-500 transition">Requirements</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-4">
              <li>
                <p className="text-gray-400">HSR Layout, Bangalore, Karnataka</p>
              </li>
              <li>
                <p className="text-gray-400">Vasna Road, Vadodara, Gujarat</p>
              </li>
              <li className="text-gray-400">+91 88847 13789</li>
              <li className="text-gray-400">eb5visaexpert@gmail.com</li>
              <li>
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-[#25D366] text-white rounded-lg hover:bg-[#128C7E] transition-colors group"
                >
                  <svg 
                    className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Chat with us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              {new Date().getFullYear()} EB5 Visa Expert. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0 text-xs">
              <a href="/privacy-policy" className="text-gray-400 hover:text-primary-500 transition">Privacy Policy</a>
              <a href="/terms" className="text-gray-400 hover:text-primary-500 transition">Terms of Service</a>
              <a href="/disclaimer" className="text-gray-400 hover:text-primary-500 transition">Disclaimer</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;