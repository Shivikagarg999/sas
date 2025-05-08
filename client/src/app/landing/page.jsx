"use client"
import { motion } from 'framer-motion';
import { FaChalkboardTeacher, FaSearchLocation, FaCalendarAlt, FaUserCheck, FaVideo, FaArrowRight, FaPlusCircle } from 'react-icons/fa';
import { useEffect, useState } from 'react';

export default function Landing() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white font-sans pt-11">
      {/* Subtle animated elements */}
      {mounted && (
        <>
          <motion.div 
            className="absolute top-20 left-10 w-32 h-32 rounded-full bg-pink-200 blur-3xl opacity-10"
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
            className="absolute bottom-40 right-10 w-40 h-40 rounded-full bg-rose-200 blur-3xl opacity-10"
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
      <section className="relative py-12 px-6 md:py-20 overflow-hidden">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
              Find the Perfect <span className="text-rose-600">Tutor</span> for Your Learning Needs
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Connect with certified educators for personalized home or online classes in Delhi NCR.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href='/register/student'
                className="bg-white text-rose-600 px-6 py-3 rounded-lg font-medium border border-rose-200 hover:bg-rose-50 flex items-center gap-2 shadow-sm"
              >
                <FaPlusCircle />
                <span>Post Your Requirement</span>
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white p-6 rounded-2xl shadow-xl border border-pink-100 text-black font-bold">
              <div className="bg-gradient-to-br from-pink-100 to-rose-100 p-8 rounded-xl">
                <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
                  <div className="flex items-center">
                    <div className="bg-pink-100 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                      <FaUserCheck className="text-pink-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">Find Your Tutor</h3>
                      <p className="text-sm text-gray-500">Search by subject, location, or availability</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
                  <div className="flex items-center">
                    <div className="bg-rose-100 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                      <FaCalendarAlt className="text-rose-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">Schedule Sessions</h3>
                      <p className="text-sm text-gray-500">Book at your convenience</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center">
                    <div className="bg-pink-100 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                      <FaVideo className="text-pink-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">Start Learning</h3>
                      <p className="text-sm text-gray-500">In-person or online classes</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Location Badge */}
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="inline-flex items-center bg-white text-gray-700 px-5 py-2 rounded-full shadow-sm border border-gray-200"
        >
          <FaSearchLocation className="mr-2 text-pink-500" />
          <span className="font-medium text-sm">Serving: Delhi • Gurgaon • Noida • Faridabad • Ghaziabad</span>
        </motion.div>
      </div>

      {/* Features Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Mentoroid</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We connect students with the best educators for personalized learning experiences
            </p>
          </motion.div>

          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: <FaUserCheck className="text-2xl text-pink-700" />,
                title: "Verified Tutors",
                desc: "All educators pass rigorous background checks and credential verification."
              },
              {
                icon: <FaCalendarAlt className="text-2xl text-pink-700" />,
                title: "Flexible Scheduling",
                desc: "Book sessions at your convenience with real-time availability."
              },
              {
                icon: <FaVideo className="text-2xl text-pink-700" />,
                title: "Multiple Formats",
                desc: "Choose between in-person home tuition or virtual classroom sessions."
              }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                variants={item}
                className="bg-gradient-to-b from-white to-pink-50 p-8 rounded-xl border border-pink-100 hover:border-pink-200 transition-all"
              >
                <div className="bg-gradient-to-br from-pink-100 to-rose-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Student Requirement Section */}
      <section className="py-16 px-6 bg-pink-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 md:order-1"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Can't Find What You Need? <a href='/register/student' className="text-rose-600">Post Your Requirement</a>
            </h2>
            <p className="text-gray-600 mb-8">
              Tell us what you're looking for and we'll match you with qualified tutors who meet your specific needs.
            </p>
            <motion.button 
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 shadow-md hover:shadow-lg"
            >
              <FaPlusCircle />
              <a href='/register/student'>Post Your Requirement</a>
            </motion.button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 md:order-2 bg-white p-8 rounded-2xl shadow-md border border-pink-100"
          >
            <h3 className="font-medium text-lg mb-4 text-gray-800">Common Requirements</h3>
            <ul className="space-y-3">
              {[
                "Need a Math tutor for CBSE Class 10",
                "Looking for French lessons near Gurgaon",
                "IELTS coaching with native English speaker",
                "Weekend coding classes for kids",
                "NEET preparation with medical professional"
              ].map((req, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-pink-500 mr-2">•</span>
                  <span className="text-gray-700">{req}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Subjects Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Popular Subjects</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer tutors for a wide range of subjects and competitive exams
            </p>
          </motion.div>

          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {[
              { name: "JEE/NEET Prep", category: "Competitive Exams" },
              { name: "CBSE/ICSE Math", category: "School Subjects" },
              { name: "English Speaking", category: "Language" },
              { name: "Python Programming", category: "Coding" },
              { name: "SAT/TOEFL", category: "Study Abroad" },
              { name: "Accountancy", category: "Commerce" },
              { name: "Hindi Literature", category: "Arts" },
              { name: "Art & Design", category: "Creative" }
            ].map((subject, index) => (
              <motion.div 
                key={subject.name}
                variants={item}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-b from-white to-pink-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-all text-center cursor-pointer border border-gray-100 hover:border-pink-200"
              >
                <p className="font-medium text-gray-800 mb-1">{subject.name}</p>
                <p className="text-xs text-pink-500">{subject.category}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-pink-500 to-rose-500">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-white mb-6"
          >
            Ready to Start Learning?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-pink-100 mb-8"
          >
            Join thousands of students achieving their goals with personalized tutoring
          </motion.p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href='/register/student'
              className="bg-white text-rose-600 px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all shadow-md"
            >
              Find a Tutor
            </a>
            <a href='/register/tutor'
              className="bg-transparent text-white px-8 py-3 rounded-lg font-semibold border-2 border-white hover:bg-white hover:bg-opacity-10 transition-all"
            >
              I'm a Tutor
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}