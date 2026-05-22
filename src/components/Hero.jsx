'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Create particles for background animation
    const createParticles = () => {
      if (!containerRef.current) return;
      
      const particles = [];
      for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.width = Math.random() * 3 + 1 + 'px';
        particle.style.height = particle.style.width;
        particle.style.background = ['#0066FF', '#9D00FF', '#00D9FF'][Math.floor(Math.random() * 3)];
        particle.style.borderRadius = '50%';
        particle.style.opacity = Math.random() * 0.5 + 0.2;
        particle.style.position = 'absolute';
        particle.style.animation = `float ${Math.random() * 10 + 15}s infinite`;
        containerRef.current?.appendChild(particle);
      }
    };

    createParticles();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen bg-dark-bg overflow-hidden flex items-center justify-center"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-electric-blue/10 via-transparent to-neon-purple/10 pointer-events-none" />

      {/* Animated background circles */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-electric-blue/20 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-neon-purple/20 rounded-full blur-3xl animate-pulse-glow" />

      {/* Content container */}
      <motion.div
        className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-10 lg:px-20 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Tagline */}
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-block px-4 py-2 rounded-full bg-electric-blue/20 border border-electric-blue/50 text-electric-blue text-sm font-medium">
            🚀 Next Generation AI Solutions
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl lg:text-7xl font-futuristic font-bold mb-6 leading-tight"
        >
          <span className="text-gradient">Transform Your Business</span>
          <br />
          <span className="text-soft-white">with Premium AI</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          Lumivox AI delivers cutting-edge artificial intelligence solutions designed to
          revolutionize your business operations and unlock unprecedented growth potential.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <Link href="/contact">
            <button className="px-8 py-4 btn-premium text-white font-semibold rounded-lg text-base sm:text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300">
              Get Started Now
            </button>
          </Link>
          <Link href="#services">
            <button className="px-8 py-4 border-2 border-cyan text-cyan font-semibold rounded-lg text-base sm:text-lg hover:bg-cyan/10 transition-all duration-300">
              Explore Services
            </button>
          </Link>
        </motion.div>

        {/* Stats section */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-3 gap-4 sm:gap-8 mb-12"
        >
          {[
            { number: '500+', label: 'Clients Served' },
            { number: '98%', label: 'Success Rate' },
            { number: '24/7', label: 'Support' },
          ].map((stat, index) => (
            <div key={index} className="glass p-4 sm:p-6 rounded-lg">
              <p className="text-2xl sm:text-3xl font-bold text-gradient">{stat.number}</p>
              <p className="text-xs sm:text-sm text-gray-400 mt-2">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Floating card showcase */}
        <motion.div
          variants={itemVariants}
          className="relative h-64 sm:h-80 mt-12"
        >
          {/* Card 1 */}
          <motion.div
            className="absolute left-0 sm:left-1/4 top-0 glass p-6 rounded-xl w-56 shadow-lg"
            variants={floatingVariants}
            animate="animate"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-electric-blue/30 flex items-center justify-center text-electric-blue">
                ⚡
              </div>
              <p className="font-semibold text-soft-white">Fast Processing</p>
            </div>
            <p className="text-sm text-gray-400">Accelerate your workflows with AI</p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="absolute right-0 sm:right-1/4 bottom-0 glass p-6 rounded-xl w-56 shadow-lg"
            variants={floatingVariants}
            animate="animate"
            transition={{ delay: 1 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-neon-purple/30 flex items-center justify-center text-neon-purple">
                🔐
              </div>
              <p className="font-semibold text-soft-white">Secure & Reliable</p>
            </div>
            <p className="text-sm text-gray-400">Enterprise-grade security standards</p>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mt-16"
        >
          <p className="text-sm text-gray-500 mb-3">Scroll to explore</p>
          <div className="w-6 h-10 border-2 border-electric-blue rounded-full mx-auto flex justify-center">
            <div className="w-1 h-3 bg-electric-blue rounded-full mt-2 animate-pulse" />
          </div>
        </motion.div>
      </motion.div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(-15px) translateX(8px);
          }
          50% {
            transform: translateY(-30px) translateX(-8px);
          }
          75% {
            transform: translateY(-15px) translateX(8px);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
