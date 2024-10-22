import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Cpu, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-black bg-opacity-50 fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <Cpu className="w-8 h-8 text-blue-500" />
            <span className="text-2xl font-bold text-white">Newrro</span>
          </Link>
          <div className="hidden md:flex space-x-6">
            {['Home', 'About', 'Products', 'Contact'].map((item) => (
              <motion.div key={item} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Link to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="text-white hover:text-blue-400 transition-colors">
                  {item}
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-gray-900 py-4"
        >
          {['Home', 'About', 'Products', 'Contact'].map((item) => (
            <Link
              key={item}
              to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
              className="block text-white hover:text-blue-400 transition-colors py-2 px-4"
              onClick={toggleMenu}
            >
              {item}
            </Link>
          ))}
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;