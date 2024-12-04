import React from 'react';
import { Building, Users, DollarSign, Timer } from 'lucide-react';
import FadeInSection from './FadeInSection';

const Projects = () => {
  const projects = [
    {
      title: 'Luxury Hotel Development',
      location: 'Miami, Florida',
      investment: '$800,000',
      type: 'Real Estate Development',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80',
      status: 'Active',
      jobs: '350+ Jobs',
      return: '4-6% Annual',
      timeline: '24-30 months',
    },
    {
      title: 'Tech Innovation Center',
      location: 'Austin, Texas',
      investment: '$800,000',
      type: 'Commercial Real Estate',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80',
      status: 'Active',
      jobs: '250+ Jobs',
      return: '3-5% Annual',
      timeline: '24-36 months',
    },
    {
      title: 'Healthcare Complex',
      location: 'Seattle, Washington',
      investment: '$800,000',
      type: 'Healthcare Infrastructure',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80',
      status: 'Active',
      jobs: '400+ Jobs',
      return: '4-5% Annual',
      timeline: '30-36 months',
    },
  ];

  return (
    <FadeInSection>
      <div id="projects" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Current Investment Opportunities</h2>
            <p className="text-xl text-gray-600">USCIS-Compliant EB-5 Projects</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
                <div className="relative h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm">
                    {project.status}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.location}</p>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center">
                      <DollarSign className="h-5 w-5 text-primary-600 mr-2" />
                      <span className="text-sm">{project.investment}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-5 w-5 text-primary-600 mr-2" />
                      <span className="text-sm">{project.jobs}</span>
                    </div>
                    <div className="flex items-center">
                      <Building className="h-5 w-5 text-primary-600 mr-2" />
                      <span className="text-sm">{project.return}</span>
                    </div>
                    <div className="flex items-center">
                      <Timer className="h-5 w-5 text-primary-600 mr-2" />
                      <span className="text-sm">{project.timeline}</span>
                    </div>
                  </div>

                  <button className="w-full bg-primary-600 text-white py-2 rounded-md hover:bg-primary-700 transition">
                    Request Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </FadeInSection>
  );
};

export default Projects;