import React from 'react';
import { Cpu } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Cpu className="w-8 h-8 text-blue-500 mr-2" />
            <span className="text-2xl font-bold">Newrro</span>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Contact</a>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          © {new Date().getFullYear()} Newrro Robotics. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;