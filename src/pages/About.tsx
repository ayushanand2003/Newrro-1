import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-16">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-8 text-center"
        >
          About Newrro
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-300">
              At Newrro, we're on a mission to push the boundaries of robotics and artificial intelligence. 
              We believe in creating intelligent machines that can work alongside humans, enhancing our 
              capabilities and improving our quality of life.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
            <p className="text-gray-300">
              We envision a future where robots and humans coexist harmoniously, tackling complex challenges 
              together. Our goal is to develop cutting-edge robotic solutions that are not only technologically 
              advanced but also ethically designed and environmentally sustainable.
            </p>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-12"
        >
          <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
          <p className="text-gray-300 mb-4">
            Newrro is powered by a diverse team of passionate engineers, designers, and researchers. 
            We come from various backgrounds but share a common goal: to create robots that make a positive 
            impact on the world.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {['Engineer', 'Designer', 'Researcher', 'AI Specialist'].map((role, index) => (
              <motion.div
                key={role}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="bg-gray-800 p-4 rounded-lg text-center"
              >
                <p className="font-semibold">{role}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;