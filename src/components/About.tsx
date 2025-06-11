import React from 'react';
import { Target, Handshake, Rocket } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                About HariHar E-com Services
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  HariHar E-com Services was founded with a single mission: to bridge the gap between 
                  ambitious Indian suppliers and manufacturers and the vast potential of online retail.
                </p>
                <p>
                  We understand that navigating the onboarding process for large platforms like JioMart 
                  can be complex and time-consuming. That's where we come in.
                </p>
                <p>
                  As an official and trusted partner of JioMart, we specialize in providing a smooth 
                  and efficient onboarding experience. Our deep understanding of the platform's 
                  requirements ensures that your business gets started without delays or errors.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-blue-50 rounded-xl p-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Mission</h3>
                  <p className="text-gray-600">
                    Bridge the gap between suppliers and the vast potential of online retail, 
                    making e-commerce accessible to all.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 rounded-xl p-6">
              <div className="flex items-start space-x-4">
                <div className="bg-green-600 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Handshake className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Partnership</h3>
                  <p className="text-gray-600">
                    As a trusted JioMart partner, we act as your dedicated guide, ensuring you 
                    leverage the full power of India's largest omni-channel retailer.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 rounded-xl p-6">
              <div className="flex items-start space-x-4">
                <div className="bg-purple-600 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Rocket className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Vision</h3>
                  <p className="text-gray-600">
                    Become your one-stop partner for expanding onto major platforms including 
                    Amazon, Flipkart, and Meesho, securing your growth for years to come.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;