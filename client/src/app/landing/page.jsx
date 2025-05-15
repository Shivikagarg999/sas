"use client"
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { FaChalkboardTeacher, FaSearchLocation, FaCalendarAlt, FaUserCheck, FaVideo, FaArrowRight, FaPlusCircle } from 'react-icons/fa';
import { useEffect, useState, useRef } from 'react';

export default function Landing() {
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  // Parallax effects
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 5]);

  // Grid animation
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", damping: 10 } }
  };

  // Text reveal animation
  const textReveal = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeInOut" }
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans antialiased overflow-x-hidden relative" ref={containerRef}>
      {/* Floating background elements with more organic motion */}
      {mounted && (
        <>
          <motion.div 
            className="absolute top-20 left-10 w-64 h-64 rounded-full bg-pink-100 blur-[100px] opacity-10 -z-10"
            initial={{ scale: 0.8, y: 0 }}
            animate={{
              x: [0, 20, 0],
              y: [0, 40, 0],
              scale: [0.8, 1, 0.8],
              rotate: [0, 5, 0]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute bottom-40 right-10 w-72 h-72 rounded-full bg-rose-100 blur-[100px] opacity-10 -z-10"
            initial={{ scale: 0.9, y: 0 }}
            animate={{
              x: [0, -30, 0],
              y: [0, -60, 0],
              scale: [0.9, 1.1, 0.9],
              rotate: [0, -5, 0]
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
          <motion.div 
            className="absolute top-1/3 right-1/4 w-48 h-48 rounded-full bg-purple-100 blur-[80px] opacity-5 -z-10"
            initial={{ scale: 0.7 }}
            animate={{
              y: [0, -30, 0],
              scale: [0.7, 0.9, 0.7]
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </>
      )}

      {/* Hero Section with more dynamic layout */}
      <section className="relative flex items-center justify-center min-h-screen px-6 max-w-7xl mx-auto py-20">
        <div className="grid md:grid-cols-2 gap-16 items-center w-full relative">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { 
                opacity: 1,
                transition: { staggerChildren: 0.1 }
              }
            }}
            className="space-y-8"
          >
            <motion.div variants={textReveal} className="inline-flex items-center bg-pink-50 text-pink-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <FaSearchLocation className="mr-2" />
              Serving Delhi NCR
            </motion.div>
            
            <motion.h1 
              variants={textReveal}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight"
            >
              Find the perfect <motion.span 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500 inline-block"
              >
                tutor
              </motion.span> for your goals
            </motion.h1>
            
            <motion.p 
              variants={textReveal}
              className="text-xl text-gray-600 max-w-lg"
            >
              Personalized 1:1 learning with certified educators for home or online classes in Delhi NCR.
            </motion.p>
            
            <motion.div 
              variants={textReveal}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <motion.a 
                href='/register/student'
                whileHover={{ y: -4, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative overflow-hidden bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-4 rounded-xl font-medium flex items-center gap-3 shadow-lg hover:shadow-xl transition-all"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <FaPlusCircle />
                  <span>Find a Tutor</span>
                </span>
                <motion.span 
                  className="absolute inset-0 bg-gradient-to-r from-pink-600 to-rose-600 opacity-0 hover:opacity-100 transition-opacity"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
              </motion.a>
              
              <motion.a 
                href="#how-it-works"
                whileHover={{ y: -4, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative overflow-hidden bg-white text-gray-700 px-8 py-4 rounded-xl font-medium border border-gray-200 hover:border-pink-200 hover:bg-pink-50 flex items-center gap-3 transition-all"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <FaVideo />
                  <span>How it works</span>
                </span>
              </motion.a>
            </motion.div>
          </motion.div>
          
          <motion.div
            style={{ y: y1, rotate }}
            className="relative"
          >
            <div className="bg-white p-1.5 rounded-3xl shadow-2xl border border-pink-100/50 overflow-hidden">
              <div className="bg-gradient-to-br from-pink-50 to-rose-50 p-8 rounded-2xl">
                <div className="space-y-6">
                  {[
                    {
                      icon: <FaUserCheck className="text-pink-600 text-xl" />,
                      title: "Find Your Tutor",
                      description: "Search by subject, location, or availability",
                      bg: "bg-pink-100"
                    },
                    {
                      icon: <FaCalendarAlt className="text-rose-600 text-xl" />,
                      title: "Schedule Sessions",
                      description: "Book at your convenience",
                      bg: "bg-rose-100"
                    },
                    {
                      icon: <FaVideo className="text-pink-600 text-xl" />,
                      title: "Start Learning",
                      description: "In-person or online classes",
                      bg: "bg-pink-100"
                    }
                  ].map((step, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      whileHover={{ 
                        x: 10,
                        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
                      }}
                      className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-pink-200 transition-all cursor-pointer"
                    >
                      <div className="flex items-center">
                        <div className={`${step.bg} w-14 h-14 rounded-xl flex items-center justify-center mr-5`}>
                          {step.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-800 text-lg">{step.title}</h3>
                          <p className="text-gray-500">{step.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section with animated grid */}
      <section id="how-it-works" className="py-28 px-6 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-20"
          >
            <motion.div 
              className="inline-block bg-pink-50 text-pink-600 px-4 py-1.5 rounded-full text-sm font-medium mb-6"
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              Why Mentroid
            </motion.div>
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              The better way to find your perfect tutor
            </motion.h2>
            <motion.p 
              className="text-gray-600 max-w-2xl mx-auto text-xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Quality education tailored to your needs and schedule
            </motion.p>
          </motion.div>

          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-3 gap-8 relative"
          >
            {[
              {
                icon: <FaUserCheck className="text-2xl" />,
                title: "Verified Tutors",
                desc: "All educators pass rigorous background checks and credential verification.",
                color: "from-pink-100 to-rose-100"
              },
              {
                icon: <FaCalendarAlt className="text-2xl" />,
                title: "Flexible Scheduling",
                desc: "Book sessions at your convenience with real-time availability.",
                color: "from-rose-100 to-pink-100"
              },
              {
                icon: <FaVideo className="text-2xl" />,
                title: "Multiple Formats",
                desc: "Choose between in-person home tuition or virtual classroom sessions.",
                color: "from-pink-100 to-rose-100"
              }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                variants={item}
                whileHover={{ 
                  y: -10,
                  transition: { type: "spring", stiffness: 300 }
                }}
                className="group bg-white p-8 rounded-2xl border border-gray-100 hover:border-pink-200 transition-all shadow-sm hover:shadow-lg relative overflow-hidden"
              >
                <div className="relative z-10">
                  <div className={`bg-gradient-to-br ${feature.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-8 text-pink-600`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900 group-hover:text-pink-600 transition-colors">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-white to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity -z-0" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Subjects Section with floating animation */}
      <section className="py-28 px-6 bg-pink-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.div 
              className="inline-block bg-white text-pink-600 px-4 py-1.5 rounded-full text-sm font-medium mb-6 shadow-sm"
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              Popular Subjects
            </motion.div>
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Learn what interests you
            </motion.h2>
            <motion.p 
              className="text-gray-600 max-w-2xl mx-auto text-xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              We offer tutors for a wide range of subjects and competitive exams
            </motion.p>
          </motion.div>

          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
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
                whileHover={{ 
                  y: -8,
                  scale: 1.05,
                  boxShadow: "0 20px 25px -5px rgba(236, 72, 153, 0.1), 0 10px 10px -5px rgba(236, 72, 153, 0.04)"
                }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all text-center cursor-pointer border border-gray-100 hover:border-pink-200"
              >
                <p className="font-semibold text-gray-800 text-lg mb-2">{subject.name}</p>
                <p className="text-xs text-pink-500 font-medium tracking-wider">{subject.category}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Student Requirement Section with parallax */}
      <section className="py-28 px-6 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative">
          <motion.div
            style={{ y: y2 }}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-2 md:order-1"
          >
            <motion.div 
              className="bg-pink-50 text-pink-600 px-4 py-1.5 rounded-full text-sm font-medium inline-block mb-6"
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
            >
              Can't find what you need?
            </motion.div>
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Tell us your specific requirements
            </motion.h2>
            <motion.p 
              className="text-gray-600 mb-10 text-xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              We'll match you with qualified tutors who meet your exact needs and preferences.
            </motion.p>
            <motion.a 
              href='/register/student'
              whileHover={{ 
                y: -4,
                scale: 1.02,
                boxShadow: "0 20px 25px -5px rgba(236, 72, 153, 0.3), 0 10px 10px -5px rgba(236, 72, 153, 0.1)"
              }}
              whileTap={{ scale: 0.98 }}
              className="relative overflow-hidden bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-4 rounded-xl font-medium flex items-center gap-3 shadow-xl hover:shadow-2xl transition-all w-fit"
            >
              <span className="relative z-10 flex items-center gap-3">
                <FaPlusCircle className="text-lg" />
                <span className="text-lg">Post Your Requirement</span>
              </span>
              <motion.span 
                className="absolute inset-0 bg-gradient-to-r from-pink-600 to-rose-600 opacity-0 hover:opacity-100 transition-opacity"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              />
            </motion.a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="order-1 md:order-2 bg-white p-10 rounded-3xl shadow-2xl border border-gray-100 relative overflow-hidden"
          >
            <div className="relative z-10">
              <h3 className="font-semibold text-2xl mb-8 text-gray-900">Recent student requests</h3>
              <ul className="space-y-6">
                {[
                  "Need a Math tutor for CBSE Class 10 in South Delhi",
                  "Looking for French lessons near Gurgaon Sector 45",
                  "IELTS coaching with native English speaker",
                  "Weekend coding classes for kids (Scratch/Python)",
                  "NEET preparation with medical professional"
                ].map((req, i) => (
                  <motion.li 
                    key={i} 
                    className="flex items-start"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * i }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-pink-100 w-10 h-10 rounded-full flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                      <span className="text-pink-600 font-medium">{i+1}</span>
                    </div>
                    <span className="text-gray-700 text-lg">{req}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-pink-100 blur-[80px] opacity-20 -z-10" />
          </motion.div>
        </div>
      </section>

      {/* CTA Section with animated gradient */}
      <section className="relative py-32 px-6 overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-pink-600 to-rose-600"
          initial={{ opacity: 0, scale: 1.2 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-8"
          >
            Ready to start your learning journey?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl text-pink-100 mb-12 max-w-2xl mx-auto"
          >
            Join thousands of students achieving their goals with personalized 1:1 tutoring
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row justify-center gap-6"
          >
            <motion.a 
              href='/register/student'
              whileHover={{ 
                y: -4,
                scale: 1.02,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              whileTap={{ scale: 0.98 }}
              className="relative overflow-hidden bg-white text-rose-600 px-10 py-5 rounded-xl font-semibold hover:shadow-xl transition-all text-lg"
            >
              <span className="relative z-10">Find a Tutor</span>
            </motion.a>
            <motion.a 
              href='/register/tutor'
              whileHover={{ 
                y: -4,
                scale: 1.02,
                boxShadow: "0 20px 25px -5px rgba(255, 255, 255, 0.1), 0 10px 10px -5px rgba(255, 255, 255, 0.04)"
              }}
              whileTap={{ scale: 0.98 }}
              className="relative overflow-hidden bg-transparent text-white px-10 py-5 rounded-xl font-semibold border-2 border-white hover:bg-white hover:bg-opacity-10 transition-all text-lg"
            >
              <span className="relative z-10">I'm a Tutor</span>
            </motion.a>
          </motion.div>
        </div>
        
        {/* Animated floating elements */}
        {mounted && (
          <>
            <motion.div 
              className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-white opacity-5 blur-[60px]"
              animate={{
                y: [0, -40, 0],
                x: [0, 30, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div 
              className="absolute bottom-1/3 right-1/4 w-40 h-40 rounded-full bg-pink-300 opacity-10 blur-[80px]"
              animate={{
                y: [0, 50, 0],
                x: [0, -40, 0],
                scale: [1, 1.3, 1]
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
            />
          </>
        )}
      </section>
    </div>
  );
}