import React from 'react';
import { ArrowRight } from 'lucide-react';
import FadeInSection from './FadeInSection';

const Hero = () => {
  return (
    <FadeInSection>
      <div className="relative min-h-[90vh] flex items-center bg-gray-50">
        {/* Left Section - Hidden on mobile */}
        <div className="absolute top-0 left-0 w-1/2 h-full bg-primary-500/10 hidden lg:block" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 items-center">
            {/* Content Section */}
            <div className="relative z-10 pt-4 lg:pt-0">
              <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary-400 text-white mb-6 text-sm sm:text-base">
                <span className="animate-pulse mr-2">●</span>
                Now accepting new investors
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Your Gateway to{' '}
                <span className="text-primary-500">U.S. Investment</span>{' '}
                Immigration
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Secure your future through EB-5 investment opportunities. Expert guidance, verified projects, and a clear path to permanent residency.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#projects"
                  className="group inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-lg text-white bg-primary-500 hover:bg-primary-600 transition-all duration-200 shadow-lg shadow-primary-500/25"
                >
                  View Projects
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-lg text-primary-600 bg-white border-2 border-primary-500 hover:bg-primary-50 transition-all duration-200"
                >
                  Schedule Consultation
                </a>
              </div>
              
              {/* Trust Indicators */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <p className="text-sm text-gray-500 mb-4">Trusted by investors worldwide</p>
                <div className="flex items-center gap-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">100+</div>
                    <div className="text-sm text-gray-500">Successful Cases</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">$50M+</div>
                    <div className="text-sm text-gray-500">Investments Managed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">95%</div>
                    <div className="text-sm text-gray-500">Success Rate</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Image Section - Now visible on mobile */}
            <div className="relative order-first lg:order-last">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-transparent rounded-2xl" />
              <img
                src="https://as2.ftcdn.net/v2/jpg/04/56/17/13/1000_F_456171340_UWXcxkMZ41EdicXpBSdJZyF4ySd0oxnl.jpg"
                alt="Investment Success"
                className="rounded-2xl shadow-2xl object-cover w-full h-[280px] lg:h-[600px]"
              />
              
              {/* Floating Stats Card - Hidden on mobile */}
              <div className="hidden lg:block absolute -left-12 bottom-24 bg-white p-6 rounded-xl shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Investment Growth</div>
                    <div className="text-xl font-bold text-gray-900">+25% YoY</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FadeInSection>
  );
};

export default Hero;