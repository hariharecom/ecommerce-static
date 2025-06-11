import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/HariHar E-com Services.png" 
                alt="HariHar E-com Services" 
                className="h-16 w-16"
              />
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Your trusted partner for JioMart onboarding and e-commerce growth. 
              We bridge the gap between suppliers and India's largest retail market.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-blue-400" />
                <span className="text-gray-400">ecomharihar@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-blue-400" />
                <span className="text-gray-400">+91-9179022070</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="#process" className="text-gray-400 hover:text-white transition-colors">Process</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><span className="text-gray-400">JioMart Onboarding</span></li>
              <li><span className="text-gray-400">Account Setup</span></li>
              <li><span className="text-gray-400">Document Management</span></li>
              <li><span className="text-gray-400">Dedicated Support</span></li>
              <li><span className="text-gray-400">Growth Consulting</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 HariHar E-com Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;