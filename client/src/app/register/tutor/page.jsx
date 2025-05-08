'use client'

import Navbar from '@/app/navbar/page';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaChalkboardTeacher, FaUser, FaPhone, FaEnvelope, FaVenusMars, FaMapMarkerAlt, FaBook, FaGraduationCap, FaCalendarDay, FaMoneyBillWave, FaCheck, FaSpinner } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

export default function TutorRegistration() {
  const [mounted, setMounted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm({
    defaultValues: {
      mode: [],
      subjects: [{ subject: '', classRange: '' }],
      availability: {
        days: [],
        timeSlots: [],
      },
      demoGiven: false,
    }
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('http://localhost:4000/api/tutors/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Registration failed');
      }

      toast.success('Registration successful! We will contact you soon.');
      router.push('/thank-you'); // Redirect to thank you page
    } catch (error) {
      console.error('Registration error:', error);
      toast.error(error.message || 'Registration failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const teachingModes = ['Online', 'Offline', 'Hybrid'];
  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const timeSlots = ['Morning (8am-12pm)', 'Afternoon (12pm-4pm)', 'Evening (4pm-8pm)', 'Night (8pm-10pm)'];
  const classRanges = ['Pre-School', 'Class 1-5', 'Class 6-8', 'Class 9-10', 'Class 11-12', 'College', 'Adult Learning'];

  const handleAddSubject = () => {
    setValue('subjects', [...watch('subjects'), { subject: '', classRange: '' }]);
  };

  const handleRemoveSubject = (index) => {
    const currentSubjects = watch('subjects');
    if (currentSubjects.length > 1) {
      setValue('subjects', currentSubjects.filter((_, i) => i !== index));
    }
  };

  const toggleMode = (mode) => {
    const currentModes = watch('mode');
    if (currentModes.includes(mode)) {
      setValue('mode', currentModes.filter(m => m !== mode));
    } else {
      setValue('mode', [...currentModes, mode]);
    }
  };

  const toggleDay = (day) => {
    const currentDays = watch('availability.days');
    if (currentDays.includes(day)) {
      setValue('availability.days', currentDays.filter(d => d !== day));
    } else {
      setValue('availability.days', [...currentDays, day]);
    }
  };

  const toggleTimeSlot = (slot) => {
    const currentSlots = watch('availability.timeSlots');
    if (currentSlots.includes(slot)) {
      setValue('availability.timeSlots', currentSlots.filter(t => t !== slot));
    } else {
      setValue('availability.timeSlots', [...currentSlots, slot]);
    }
  };

  return (
    <>
      <Navbar/>
      <div className="min-h-screen bg-gradient-to-b mt-12 from-pink-50 to-white">
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

        {/* Header Section */}
        <section className="relative py-12 px-4 overflow-hidden">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 leading-tight">
                <span className="bg-gradient-to-r from-pink-500 to-rose-600 bg-clip-text text-transparent">
                  Join Our Team
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Become a premium tutor and connect with students across Delhi NCR
              </p>
            </motion.div>
          </div>
        </section>

        {/* Registration Form */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="relative pb-20 px-4"
        >
          <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-pink-100 text-black">
            {/* Form Header */}
            <div className="bg-gradient-to-r from-pink-500 to-rose-500 p-6 text-white">
              <div className="flex items-center">
                <FaChalkboardTeacher className="text-3xl mr-4" />
                <h2 className="text-2xl font-bold">Tutor Application Form</h2>
              </div>
            </div>

            {/* Form Content */}
            <form onSubmit={handleSubmit(onSubmit)} className="p-6 md:p-8 space-y-6">
              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800 flex items-center">
                  <FaUser className="mr-2 text-pink-500" />
                  Personal Information
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name*</label>
                    <div className="relative">
                      <input
                        type="text"
                        {...register('fullName', { required: 'Full name is required' })}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                        placeholder="Your full name"
                      />
                      {errors.fullName && (
                        <p className="mt-1 text-sm text-rose-600">{errors.fullName.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number*</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaPhone className="text-gray-400" />
                      </div>
                      <input
                        type="tel"
                        {...register('phone', { 
                          required: 'Phone number is required',
                          pattern: {
                            value: /^[0-9]{10}$/,
                            message: 'Please enter a valid 10-digit phone number'
                          }
                        })}
                        className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                        placeholder="9876543210"
                      />
                      {errors.phone && (
                        <p className="mt-1 text-sm text-rose-600">{errors.phone.message}</p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaEnvelope className="text-gray-400" />
                      </div>
                      <input
                        type="email"
                        {...register('email', {
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Invalid email address'
                          }
                        })}
                        className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                        placeholder="your@email.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-rose-600">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaVenusMars className="text-gray-400" />
                      </div>
                      <select
                        {...register('gender')}
                        className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent appearance-none"
                      >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              {/* Location Information */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800 flex items-center">
                  <FaMapMarkerAlt className="mr-2 text-pink-500" />
                  Location Information
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">City*</label>
                    <input
                      type="text"
                      {...register('location.city', { required: 'City is required' })}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      placeholder="e.g. Delhi"
                    />
                    {errors.location?.city && (
                      <p className="mt-1 text-sm text-rose-600">{errors.location.city.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Area*</label>
                    <input
                      type="text"
                      {...register('location.area', { required: 'Area is required' })}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      placeholder="e.g. Connaught Place"
                    />
                    {errors.location?.area && (
                      <p className="mt-1 text-sm text-rose-600">{errors.location.area.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">PIN Code*</label>
                    <input
                      type="text"
                      {...register('location.pinCode', { 
                        required: 'PIN code is required',
                        pattern: {
                          value: /^[1-9][0-9]{5}$/,
                          message: 'Please enter a valid 6-digit PIN code'
                        }
                      })}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      placeholder="e.g. 110001"
                    />
                    {errors.location?.pinCode && (
                      <p className="mt-1 text-sm text-rose-600">{errors.location.pinCode.message}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Teaching Mode */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800 flex items-center">
                  <FaChalkboardTeacher className="mr-2 text-pink-500" />
                  Teaching Mode*
                </h3>
                <p className="text-sm text-gray-600">Select all that apply</p>
                
                <div className="flex flex-wrap gap-3">
                  {teachingModes.map((mode) => (
                    <motion.button
                      key={mode}
                      type="button"
                      whileTap={{ scale: 0.95 }}
                      className={`px-4 py-2 rounded-full border flex items-center ${watch('mode').includes(mode) ? 'bg-pink-100 border-pink-500 text-pink-700' : 'bg-white border-gray-300 text-gray-700'}`}
                      onClick={() => toggleMode(mode)}
                    >
                      {watch('mode').includes(mode) && (
                        <FaCheck className="mr-2 text-pink-600" />
                      )}
                      {mode}
                    </motion.button>
                  ))}
                </div>
                {errors.mode && (
                  <p className="mt-1 text-sm text-rose-600">At least one teaching mode is required</p>
                )}
              </div>

              {/* Subjects */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800 flex items-center">
                  <FaBook className="mr-2 text-pink-500" />
                  Subjects You Teach*
                </h3>
                
                {watch('subjects').map((subject, index) => (
                  <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Subject*</label>
                      <input
                        type="text"
                        {...register(`subjects.${index}.subject`, { required: 'Subject is required' })}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                        placeholder="e.g. Mathematics"
                      />
                      {errors.subjects?.[index]?.subject && (
                        <p className="mt-1 text-sm text-rose-600">{errors.subjects[index].subject.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Class Range*</label>
                      <select
                        {...register(`subjects.${index}.classRange`, { required: 'Class range is required' })}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      >
                        <option value="">Select Class Range</option>
                        {classRanges.map(range => (
                          <option key={range} value={range}>{range}</option>
                        ))}
                      </select>
                      {errors.subjects?.[index]?.classRange && (
                        <p className="mt-1 text-sm text-rose-600">{errors.subjects[index].classRange.message}</p>
                      )}
                    </div>

                    <div>
                      {index > 0 && (
                        <motion.button
                          type="button"
                          whileTap={{ scale: 0.95 }}
                          className="w-full bg-rose-100 text-rose-700 p-3 rounded-lg hover:bg-rose-200 transition-colors"
                          onClick={() => handleRemoveSubject(index)}
                        >
                          Remove Subject
                        </motion.button>
                      )}
                    </div>
                  </div>
                ))}

                <motion.button
                  type="button"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center text-pink-600 font-medium"
                  onClick={handleAddSubject}
                >
                  <span className="mr-2">+ Add Another Subject</span>
                </motion.button>
              </div>

              {/* Qualifications */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800 flex items-center">
                  <FaGraduationCap className="mr-2 text-pink-500" />
                  Qualifications & Experience
                </h3>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Highest Qualification</label>
                  <input
                    type="text"
                    {...register('qualifications')}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="e.g. M.Sc in Mathematics"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Teaching Experience</label>
                  <input
                    type="text"
                    {...register('experience')}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="e.g. 5 years teaching CBSE students"
                  />
                </div>
              </div>

              {/* Availability */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800 flex items-center">
                  <FaCalendarDay className="mr-2 text-pink-500" />
                  Availability*
                </h3>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Available Days*</label>
                  <div className="flex flex-wrap gap-3">
                    {daysOfWeek.map((day) => (
                      <motion.button
                        key={day}
                        type="button"
                        whileTap={{ scale: 0.95 }}
                        className={`px-4 py-2 rounded-full border flex items-center ${watch('availability.days').includes(day) ? 'bg-pink-100 border-pink-500 text-pink-700' : 'bg-white border-gray-300 text-gray-700'}`}
                        onClick={() => toggleDay(day)}
                      >
                        {watch('availability.days').includes(day) && (
                          <FaCheck className="mr-2 text-pink-600" />
                        )}
                        {day}
                      </motion.button>
                    ))}
                  </div>
                  {errors.availability?.days && (
                    <p className="mt-1 text-sm text-rose-600">At least one day is required</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Time Slots*</label>
                  <div className="flex flex-wrap gap-3">
                    {timeSlots.map((slot) => (
                      <motion.button
                        key={slot}
                        type="button"
                        whileTap={{ scale: 0.95 }}
                        className={`px-4 py-2 rounded-full border flex items-center ${watch('availability.timeSlots').includes(slot) ? 'bg-pink-100 border-pink-500 text-pink-700' : 'bg-white border-gray-300 text-gray-700'}`}
                        onClick={() => toggleTimeSlot(slot)}
                      >
                        {watch('availability.timeSlots').includes(slot) && (
                          <FaCheck className="mr-2 text-pink-600" />
                        )}
                        {slot}
                      </motion.button>
                    ))}
                  </div>
                  {errors.availability?.timeSlots && (
                    <p className="mt-1 text-sm text-rose-600">At least one time slot is required</p>
                  )}
                </div>
              </div>

              {/* Rate */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800 flex items-center">
                  <FaMoneyBillWave className="mr-2 text-pink-500" />
                  Rate Information
                </h3>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Rate Per Class (₹)</label>
                  <input
                    type="number"
                    {...register('ratePerClass', {
                      min: {
                        value: 0,
                        message: 'Rate must be a positive number'
                      }
                    })}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="e.g. 500"
                    min="0"
                  />
                  {errors.ratePerClass && (
                    <p className="mt-1 text-sm text-rose-600">{errors.ratePerClass.message}</p>
                  )}
                </div>
              </div>

              {/* Demo Given */}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="demoGiven"
                  {...register('demoGiven')}
                  className="h-4 w-4 text-pink-600 focus:ring-pink-500 border-gray-300 rounded"
                />
                <label htmlFor="demoGiven" className="ml-2 block text-sm text-gray-700">
                  I'm willing to give a free demo class
                </label>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:shadow-lg transition-all flex justify-center items-center"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <FaSpinner className="animate-spin mr-2" />
                      Processing...
                    </>
                  ) : (
                    'Submit Application'
                  )}
                </motion.button>
              </div>
            </form>
          </div>
        </motion.section>
      </div>
    </>
  );
}