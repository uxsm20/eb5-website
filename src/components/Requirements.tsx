import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const Requirements = () => {
  const requirements = [
    {
      title: 'Investment Amount',
      description: '$800,000 minimum investment in a qualified EB-5 project (TEA)',
    },
    {
      title: 'Source of Funds',
      description: 'Proof that investment capital was obtained through lawful means',
    },
    {
      title: 'Job Creation',
      description: 'Creation of 10 full-time jobs for U.S. workers',
    },
    {
      title: 'Active Involvement',
      description: 'Maintain investment throughout the conditional residency period',
    },
    {
      title: 'Clean Background',
      description: 'Pass security and background checks',
    },
    {
      title: 'Business Plan',
      description: 'Comprehensive business plan showing job creation within 2 years',
    },
  ];

  return (
    <div id="requirements" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">EB-5 Visa Requirements</h2>
          <p className="text-xl text-gray-600">Key eligibility criteria for the EB-5 investment visa program</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {requirements.map((req, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-primary-600 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{req.title}</h3>
                  <p className="text-gray-600">{req.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-primary-50 border border-primary-200 rounded-lg p-8">
          <h3 className="text-xl font-semibold text-primary-800 mb-4">Need Help Understanding the Requirements?</h3>
          <p className="text-primary-700 mb-6">
            Our team of immigration experts and financial advisors can help you navigate the EB-5 visa requirements and ensure your application meets all criteria.
          </p>
          <a
            href="#contact"
            className="inline-block bg-primary-600 text-white px-6 py-3 rounded-md hover:bg-primary-700 transition"
          >
            Schedule a Consultation
          </a>
        </div>
      </div>
    </div>
  );
};

export default Requirements;