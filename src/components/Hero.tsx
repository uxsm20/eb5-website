import React from 'react';
import { ArrowRight } from 'lucide-react';
import FadeInSection from './FadeInSection';

const Hero = () => {
  return (
    <FadeInSection>
      <div id="home" className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80"
            alt="Investment Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Your Gateway to U.S. Investment Immigration
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Secure your future through EB-5 investment opportunities. Expert guidance, verified projects, and a clear path to permanent residency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition"
              >
                View Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-gray-900 transition"
              >
                Schedule Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </FadeInSection>
  );
};

export default Hero;