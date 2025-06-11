import React from 'react';
import { CheckCircle, Truck, Warehouse, FileText, Headphones, TrendingUp } from 'lucide-react';

const Services = () => {
  const jioMartBenefits = [
    {
      icon: <Truck className="text-blue-600" size={24} />,
      title: "India's Largest Retail Network",
      description: "Sell through JioMart's e-commerce portal and integrated network of Reliance Retail, Reliance Digital, Trends, and Urban Ladder."
    },
    {
      icon: <CheckCircle className="text-green-600" size={24} />,
      title: "Massive, Engaged Customer Base",
      description: "Reach customers across 25+ major cities for daily essentials and over 20,000 PIN codes for other products."
    },
    {
      icon: <TrendingUp className="text-purple-600" size={24} />,
      title: "Seller-Centric Benefits",
      description: "Access the 'Pragati' Program offering up to 15% discounts on shipping fees based on your performance."
    }
  ];

  const ourServices = [
    {
      icon: <FileText className="text-orange-600" size={24} />,
      title: "Hassle-Free Document Management",
      description: "We guide you on exact documents needed (GSTIN, PAN Card, Bank Details) and ensure correct submission."
    },
    {
      icon: <Warehouse className="text-blue-600" size={24} />,
      title: "Step-by-Step Account Setup",
      description: "We handle technical aspects of creating and configuring your JioMart seller account, preventing common errors."
    },
    {
      icon: <Headphones className="text-green-600" size={24} />,
      title: "Dedicated Onboarding Support",
      description: "Get a single point of contact at HariHar E-com Services for all your questions and concerns."
    }
  ];

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services: Your Onboarding & Growth Partner
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive services designed to get your products in front of millions of customers with ease and efficiency.
          </p>
        </div>

        {/* JioMart Benefits */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">The JioMart Advantage</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {jioMartBenefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="bg-gray-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  {benefit.icon}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h4>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Fulfillment Options */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Multiple Fulfillment Options</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Direct Fulfillment (DF)</h4>
              <p className="text-gray-600 mb-4">Process orders from your own warehouse with complete control over inventory and shipping.</p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="text-green-600" size={16} />
                  <span className="text-gray-600">Full inventory control</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="text-green-600" size={16} />
                  <span className="text-gray-600">Direct customer interaction</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Reliance Fulfillment Centre (RFC)</h4>
              <p className="text-gray-600 mb-4">Store your products at JioMart warehouse and let them handle picking, packing, and delivery.</p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="text-green-600" size={16} />
                  <span className="text-gray-600">Hassle-free logistics</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="text-green-600" size={16} />
                  <span className="text-gray-600">Faster delivery times</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Our Services */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">The HariHar E-com Advantage</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {ourServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="bg-gray-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h4>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;