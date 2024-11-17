import React from 'react';
import { ClipboardCheck, Users, Building2, FileCheck, Plane, BadgeCheck } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      icon: <ClipboardCheck className="h-8 w-8" />,
      title: 'Initial Consultation',
      description: 'Meet with our experts to discuss your goals and eligibility.',
    },
    {
      icon: <Building2 className="h-8 w-8" />,
      title: 'Project Selection',
      description: 'Choose from our carefully vetted investment opportunities.',
    },
    {
      icon: <FileCheck className="h-8 w-8" />,
      title: 'Documentation',
      description: 'We assist in preparing all necessary legal and investment documents.',
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'USCIS Filing',
      description: 'Submit your I-526 petition with our expert guidance.',
    },
    {
      icon: <Plane className="h-8 w-8" />,
      title: 'Conditional Residency',
      description: 'Obtain your 2-year conditional green card.',
    },
    {
      icon: <BadgeCheck className="h-8 w-8" />,
      title: 'Permanent Residency',
      description: 'Remove conditions and secure permanent residency.',
    },
  ];

  return (
    <div id="process" className="py-12 sm:py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">The EB-5 Investment Process</h2>
          <p className="text-lg sm:text-xl text-gray-600">Your journey to U.S. permanent residency, simplified</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="text-primary-600 mb-3 sm:mb-4">{step.icon}</div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-sm sm:text-base text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Process;