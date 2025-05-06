"use client"
import { motion } from 'framer-motion';
import { FaChalkboardTeacher, FaSearchLocation, FaCalendarAlt, FaUserCheck, FaVideo, FaArrowRight } from 'react-icons/fa';
import { useEffect, useState } from 'react';

export default function Landing() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      {/* Animated Background Elements */}
      {mounted && (
        <>
          <motion.div 
            className="absolute top-20 left-10 w-32 h-32 rounded-full bg-pink-200 blur-3xl opacity-20"
            animate={{
              y: [0, 15, 0],
              scale: [1, 1.05, 1]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute bottom-40 right-10 w-40 h-40 rounded-full bg-rose-200 blur-3xl opacity-20"
            animate={{
              y: [0, -15, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </>
      )}

      {/* Hero Section */}
      <section className="relative py-16 px-4 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 mt-17 leading-tight">
              <span className="bg-gradient-to-r from-pink-500 to-rose-600 bg-clip-text text-transparent">
                Premium Tutors
              </span><br />
              in <span className="text-rose-600">Delhi NCR</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Book certified tutors for <span className="font-semibold bg-pink-100 px-2 py-1 rounded-md">home</span> or <span className="font-semibold bg-pink-100 px-2 py-1 rounded-md">online</span> classes.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.button 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-4 rounded-xl hover:shadow-lg transition-all"
              >
                <span className="flex items-center justify-center gap-2">
                  Browse Tutors <FaArrowRight />
                </span>
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white text-rose-600 px-8 py-4 rounded-xl border border-rose-200 hover:bg-rose-50 transition-all shadow-sm"
              >
                I'm a Tutor
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Location Badge */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="py-6 px-4"
      >
        <div className="max-w-6xl mx-auto">
          <div className="inline-flex items-center bg-white text-rose-800 px-6 py-3 rounded-full shadow-md border border-rose-100">
            <FaSearchLocation className="mr-3 text-pink-500" />
            <span className="font-medium">Serving: Delhi • Gurgaon • Noida • Faridabad • Ghaziabad</span>
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12"
          >
            <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
              How It Works
            </span>
          </motion.h2>

          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            <motion.div 
              variants={item}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-pink-50"
            >
              <div className="bg-gradient-to-br from-pink-100 to-rose-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <FaUserCheck className="text-rose-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Verified Tutors</h3>
              <p className="text-gray-600">All educators pass rigorous background checks and credential verification.</p>
            </motion.div>

            <motion.div 
              variants={item}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-pink-50"
            >
              <div className="bg-gradient-to-br from-pink-100 to-rose-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <FaCalendarAlt className="text-rose-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Easy Booking</h3>
              <p className="text-gray-600">Real-time availability with instant confirmation for your sessions.</p>
            </motion.div>

            <motion.div 
              variants={item}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-pink-50"
            >
              <div className="bg-gradient-to-br from-pink-100 to-rose-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <FaVideo className="text-rose-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Flexible Learning</h3>
              <p className="text-gray-600">Choose between in-person home tuition or virtual classroom sessions.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Subjects Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-white to-pink-50">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12"
          >
            Popular <span className="text-rose-600">Subjects</span>
          </motion.h2>

          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {[
              "JEE/NEET Prep", 
              "CBSE/ICSE Math", 
              "English Speaking", 
              "Coding for Kids",
              "SAT/TOEFL", 
              "Commerce Tuition", 
              "Hindi Literature", 
              "Arts & Crafts"
            ].map((subject, index) => (
              <motion.div 
                key={subject}
                variants={item}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all text-center cursor-pointer border border-transparent hover:border-pink-200"
              >
                <p className="font-medium text-gray-800">{subject}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-pink-500 to-rose-500">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-6"
          >
            Ready to Transform Learning?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-pink-100 mb-8"
          >
            Join thousands of students finding their perfect tutor match.
          </motion.p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white text-rose-600 px-10 py-4 rounded-xl font-semibold hover:shadow-lg transition-all shadow-md"
          >
            Get Started Today
          </motion.button>
        </div>
      </section>
    </div>
  );
}