import React from 'react';
import { Smartphone, MapPin, Users, Star } from 'lucide-react';

const Stats = () => {
  const stats = [
    {
      icon: <Smartphone className="text-blue-600" size={32} />,
      number: '50 Million+',
      description: 'App Downloads with a 4.5 average rating',
      color: 'bg-blue-50'
    },
    {
      icon: <MapPin className="text-green-600" size={32} />,
      number: '15,196+',
      description: 'Physical stores spread across 7,000+ cities',
      color: 'bg-green-50'
    },
    {
      icon: <Users className="text-purple-600" size={32} />,
      number: '25,000+',
      description: 'Sellers are already growing their business',
      color: 'bg-purple-50'
    },
    {
      icon: <Star className="text-orange-600" size={32} />,
      number: '20 Crore',
      description: 'Customers that JioMart aims to connect with',
      color: 'bg-orange-50'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            The Unmatched Power of the JioMart Platform
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            By onboarding with JioMart, you gain access to an unparalleled retail ecosystem
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className={`${stat.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <p className="text-gray-600">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;