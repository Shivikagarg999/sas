'use client'
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaUserGraduate, FaChalkboardTeacher, FaSearch, FaChartLine } from 'react-icons/fa';
import Navbar from '../navbar/page';

export default function AboutPage() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [1, 1, 0.5, 0]);

  const fadeIn = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
  };

  const timeline = [
    { year: '2020', event: 'Founded in Delhi NCR' },
    { year: '2022', event: 'Expanded to online tutoring' },
    { year: '2024', event: '5000+ successful matches' },
  ];

  const values = [
    { title: 'Verified Tutors', desc: 'Rigorous screening process' },
    { title: 'Flexible Scheduling', desc: 'Learn at your convenience' },
    { title: 'Personalized Matching', desc: 'AI-powered compatibility' },
    { title: 'Progress Tracking', desc: 'Monitor learning outcomes' },
  ];

  return (
    <div className="min-h-screen bg-white text-black overflow-x-hidden">
      <Navbar/>

      {/* Hero Section with Fixed Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Fixed Background Image with Overlay */}
        <div 
          className="fixed inset-0 bg-[url('https://i.pinimg.com/736x/86/a2/5d/86a25db96f2b15bd8c0207c338eb6453.jpg')] bg-cover bg-center bg-fixed"
          style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >
          {/* Darker overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        {/* Pink blur effect */}
        {/* <motion.div 
          className="absolute top-0 right-0 w-1/3 h-full bg-pink-100 opacity-20 rounded-full filter blur-3xl"
          style={{ opacity }}
        /> */}
        
        {/* Content */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="relative z-10 text-center px-6 max-w-4xl mx-auto"
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Empowering Learning, One Tutor at a Time
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-200 drop-shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Connecting students with exceptional tutors in Delhi NCR.
          </motion.p>
        </motion.div>
      </section>

      {/* Mission Section - Glass Morphism */}
      <section className="py-32 bg-white relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 w-full h-96 bg-pink-100 opacity-10 rounded-full filter blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
        </div>
        
        <div className="container mx-auto px-6 relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-8 text-gray-800"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ delay: 0.2 }}
            >
              Our Mission
            </motion.h2>
            
            <motion.div 
              className="backdrop-blur-lg bg-white/80 rounded-2xl p-8 md:p-12 border border-white/20 shadow-xl"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <p className="text-2xl md:text-3xl italic font-medium text-gray-800 leading-relaxed">
                "To connect students with the most suitable tutors for tailored, effective, and inspiring learning experiences."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}