'use client'

import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { FaCheckCircle, FaChalkboardTeacher, FaArrowRight } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function ThankYou() {
  const router = useRouter();

  // Optional: Redirect if user comes directly without registering
  useEffect(() => {
    const timer = setTimeout(() => {
      // You might want to add some state management here to check if they actually completed registration
      // router.push('/');
    }, 10000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      {/* Animated Background Elements */}
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

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-20 flex flex-col items-center justify-center min-h-screen text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-pink-100 w-full max-w-2xl"
        >
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-pink-500 rounded-full opacity-20 blur-lg"></div>
              <FaCheckCircle className="relative text-6xl text-green-500" />
            </div>
          </div>

          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
          >
            Thank You for Registering!
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg text-gray-600 mb-8"
          >
            Your application has been successfully submitted. Our team will review your information and contact you within 2-3 business days.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex items-center justify-center mb-8"
          >
            <FaChalkboardTeacher className="text-pink-500 mr-2 text-xl" />
            <span className="text-pink-600 font-medium">Welcome to our tutor community!</span>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-gray-700">What happens next?</h3>
            <ul className="text-gray-600 space-y-2 text-left max-w-md mx-auto">
              <li className="flex items-start">
                <span className="text-pink-500 mr-2">•</span>
                <span>Verification of your details</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-500 mr-2">•</span>
                <span>Background check (if applicable)</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-500 mr-2">•</span>
                <span>Onboarding call with our team</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-500 mr-2">•</span>
                <span>Access to tutor dashboard</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-10 space-y-4"
          >
            <Link 
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-lg font-medium hover:shadow-lg transition-all"
            >
              Back to Home <FaArrowRight className="ml-2" />
            </Link>

            <p className="text-sm text-gray-500 mt-4">
              We've sent a confirmation email with next steps. Check your inbox!
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}