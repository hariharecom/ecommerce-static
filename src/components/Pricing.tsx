import React from 'react';
import { DollarSign, Package, Truck, Calculator } from 'lucide-react';

const Pricing = () => {
  const feeTypes = [
    {
      icon: <DollarSign className="text-green-600" size={24} />,
      title: "Commission Fee",
      description: "A percentage of the selling price, which varies by product category"
    },
    {
      icon: <Package className="text-blue-600" size={24} />,
      title: "Fixed Fee",
      description: "A small, absolute value charged per unit sold"
    },
    {
      icon: <Truck className="text-purple-600" size={24} />,
      title: "Shipping Fee",
      description: "Charged based on package weight, distance, and fulfillment model (DF or RFC)"
    },
    {
      icon: <Calculator className="text-orange-600" size={24} />,
      title: "Additional Fees",
      description: "Storage, processing, and removal fees apply only if using Reliance Fulfillment Centre (RFC)"
    }
  ];

  return (
    <section id="pricing" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Understanding JioMart's Fee Structure
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            JioMart offers a transparent and competitive fee structure. As your partner, we ensure you understand all potential costs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {feeTypes.map((fee, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-gray-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                {fee.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{fee.title}</h3>
              <p className="text-gray-600">{fee.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Want a Detailed Cost Estimate?</h3>
          <p className="text-lg mb-6 opacity-90">
            Get a free, no-obligation consultation for your specific products and understand exactly what your costs will be.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
            Request Free Fee Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;