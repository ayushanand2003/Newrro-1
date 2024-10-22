import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box, OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';

const RobotModel = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <Box args={[1, 1, 1]} ref={meshRef}>
      <meshStandardMaterial color="#00a2ff" />
    </Box>
  );
};

const ProductCard = ({ name, description }: { name: string; description: string }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    className="bg-gray-800 p-6 rounded-lg shadow-lg"
  >
    <h3 className="text-xl font-semibold mb-2">{name}</h3>
    <p className="text-gray-300 mb-4">{description}</p>
    <div className="h-48">
      <Canvas camera={{ position: [0, 0, 3] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <RobotModel />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors"
    >
      Learn More
    </motion.button>
  </motion.div>
);

const Products = () => {
  const products = [
    { name: "NeuroBots", description: "AI-powered robots for complex problem-solving" },
    { name: "RoboAssist", description: "Personal assistant robots for home and office" },
    { name: "IndustriTech", description: "Advanced robotics solutions for manufacturing" },
    { name: "MediBot", description: "Precision robots for healthcare and medical procedures" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-16">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-8 text-center"
        >
          Our Products
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} name={product.name} description={product.description} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;