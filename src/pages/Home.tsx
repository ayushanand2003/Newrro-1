import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="absolute w-auto min-w-full min-h-full max-w-none"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-a-city-12957-large.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-6xl font-bold mb-4"
          >
            Newrro Robotics
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-xl mb-8"
          >
            Shaping the Future of Intelligent Machines
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold flex items-center justify-center mx-auto"
          >
            Explore Our Vision <ArrowRight className="ml-2" />
          </motion.button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Innovations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {['Advanced AI', 'Robotic Systems', 'Human-Machine Interfaces'].map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-gray-900 p-6 rounded-lg text-center"
              >
                <h3 className="text-2xl font-semibold mb-4">{feature}</h3>
                <p className="text-gray-400">
                  Pushing the boundaries of {feature.toLowerCase()} to create smarter, more efficient robotic solutions.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Shape the Future?</h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold"
          >
            Join Our Team
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default Home;