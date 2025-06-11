import React from 'react';
import { Phone, FileCheck, Settings, Rocket } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      icon: <Phone className="text-blue-600" size={32} />,
      title: "Initial Consultation",
      description: "Contact us and we'll have a brief call to understand your business and product category.",
      color: "bg-blue-50"
    },
    {
      icon: <FileCheck className="text-green-600" size={32} />,
      title: "Document Collection",
      description: "We provide you with a simple checklist of required documents. You gather them, and we verify everything is in order.",
      color: "bg-green-50"
    },
    {
      icon: <Settings className="text-purple-600" size={32} />,
      title: "Account Creation & Setup",
      description: "Our expert team creates your seller profile on JioMart, fills in all necessary details, and handles the technical setup.",
      color: "bg-purple-50"
    },
    {
      icon: <Rocket className="text-orange-600" size={32} />,
      title: "Go Live!",
      description: "Once your account is approved by JioMart, you can start listing your products and are officially ready to receive orders.",
      color: "bg-orange-50"
    }
  ];

  return (
    <section id="process" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Simple 4-Step Onboarding Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We've streamlined the journey to get you selling on JioMart as quickly as possible
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                <div className={`${step.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  {step.icon}
                </div>
                <div className="text-center">
                  <div className="bg-gray-900 text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-3 text-sm font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <div className="w-8 h-0.5 bg-gray-300"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
            Start Your Onboarding Journey
          </button>
        </div>
      </div>
    </section>
  );
};

export default Process;