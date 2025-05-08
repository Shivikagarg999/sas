"use client"
import Navbar from '@/app/navbar/page';
import { useState } from 'react';
import { FaUser, FaUserGraduate, FaPhone, FaEnvelope, FaBook, FaChalkboardTeacher, FaMapMarkerAlt, FaCalendarAlt, FaRupeeSign } from 'react-icons/fa';

export default function StudentRequirementForm() {
  const [formData, setFormData] = useState({
    parentName: '',
    studentName: '',
    phone: '',
    email: '',
    studentClass: '',
    subjectsNeeded: [],
    mode: '',
    location: {
      city: '',
      area: '',
      pinCode: ''
    },
    preferredDays: [],
    budgetPerClass: ''
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleLocationChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      location: {
        ...prev.location,
        [name]: value
      }
    }));
  };

  const handleArrayChange = (field, value, isChecked) => {
    setFormData(prev => {
      if (isChecked) {
        return {
          ...prev,
          [field]: [...prev[field], value]
        };
      } else {
        return {
          ...prev,
          [field]: prev[field].filter(item => item !== value)
        };
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('https://sas-4xu7.onrender.com/api/register/student', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
    
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to submit form');
      }

      const data = await response.json();
      console.log('Registration successful:', data);
      setSubmitted(true);
    } catch (err) {
      console.error('Registration failed:', err);
      setError(err.message || 'Failed to submit form. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const nextStep = () => setCurrentStep(prev => prev + 1);
  const prevStep = () => setCurrentStep(prev => prev - 1);

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto flex items-center justify-center text-black bg-white p-8 rounded-xl shadow-md border border-pink-100 text-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Requirement Submitted Successfully!</h2>
        <p className="text-gray-600 mb-6">We've received your tutoring requirements. Our team will match you with suitable tutors and contact you shortly.</p>
        <button 
          onClick={() => {
            setSubmitted(false);
            setFormData({
              parentName: '',
              studentName: '',
              phone: '',
              email: '',
              studentClass: '',
              subjectsNeeded: [],
              mode: '',
              location: {
                city: '',
                area: '',
                pinCode: ''
              },
              preferredDays: [],
              budgetPerClass: ''
            });
            setCurrentStep(1);
          }}
          className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all"
        >
          Submit Another Requirement
        </button>
      </div>
    );
  }

  return (
   <>
   <Navbar/>
   <div className='bg-white p-6 pt-20'>
      <div className="max-w-4xl mx-auto bg-white p-6 md:p-8 rounded-xl shadow-md border text-black border-pink-100">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Post Your Tutoring Requirement</h2>
          <p className="text-gray-600">Fill in the details below and we'll find the perfect tutor for you</p>
        </div>

        {error && (
          <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {/* Step 1: Basic Information */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div>
                <label className="text-gray-700 font-medium mb-2 flex items-center">
                  <FaUser className="mr-2 text-pink-500" />
                  Parent/Guardian Name
                </label>
                <input
                  type="text"
                  name="parentName"
                  value={formData.parentName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                  required
                />
              </div>

              <div>
                <label className="text-gray-700 font-medium mb-2 flex items-center">
                  <FaUserGraduate className="mr-2 text-pink-500" />
                  Student Name
                </label>
                <input
                  type="text"
                  name="studentName"
                  value={formData.studentName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                  required
                />
              </div>

              <div>
                <label className="text-gray-700 font-medium mb-2 flex items-center">
                  <FaPhone className="mr-2 text-pink-500" />
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                  required
                />
              </div>

              <div>
                <label className="text-gray-700 font-medium mb-2 flex items-center">
                  <FaEnvelope className="mr-2 text-pink-500" />
                  Email (Optional)
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                />
              </div>

              <div>
                <label className="text-gray-700 font-medium mb-2 flex items-center">
                  <FaBook className="mr-2 text-pink-500" />
                  Class/Grade
                </label>
                <select
                  name="studentClass"
                  value={formData.studentClass}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                  required
                >
                  <option value="">Select Class/Grade</option>
                  <option value="Class 1-5">Class 1-5</option>
                  <option value="Class 6-8">Class 6-8</option>
                  <option value="Class 9-10">Class 9-10</option>
                  <option value="Class 11-12">Class 11-12</option>
                  <option value="College">College</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={nextStep}
                  className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg transition-all"
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Tutoring Details */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div>
                <label className="text-gray-700 font-medium mb-2 flex items-center">
                  <FaBook className="mr-2 text-pink-500" />
                  Subjects Needed (Select all that apply)
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {['Mathematics', 'Physics', 'Chemistry', 'Biology', 'English', 'Hindi', 'Computer Science', 'Social Studies', 'Accountancy', 'Economics', 'French', 'Other'].map(subject => (
                    <div key={subject} className="flex items-center">
                      <input
                        type="checkbox"
                        id={subject}
                        checked={formData.subjectsNeeded.includes(subject)}
                        onChange={(e) => handleArrayChange('subjectsNeeded', subject, e.target.checked)}
                        className="h-4 w-4 text-pink-600 focus:ring-pink-500 border-gray-300 rounded"
                      />
                      <label htmlFor={subject} className="ml-2 text-gray-700">
                        {subject}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-gray-700 font-medium mb-2 flex items-center">
                  <FaChalkboardTeacher className="mr-2 text-pink-500" />
                  Preferred Mode of Teaching
                </label>
                <div className="flex flex-wrap gap-4">
                  {['Home Tuition', 'Online', 'Both'].map(mode => (
                    <div key={mode} className="flex items-center">
                      <input
                        type="radio"
                        id={mode}
                        name="mode"
                        value={mode}
                        checked={formData.mode === mode}
                        onChange={handleChange}
                        className="h-4 w-4 text-pink-600 focus:ring-pink-500 border-gray-300"
                        required
                      />
                      <label htmlFor={mode} className="ml-2 text-gray-700">
                        {mode}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-gray-700 font-medium mb-2 flex items-center">
                  <FaMapMarkerAlt className="mr-2 text-pink-500" />
                  Location Details
                </label>
                <div className="space-y-4">
                  <div>
                    <label className="text-gray-600 mb-1">City</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.location.city}
                      onChange={handleLocationChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                    />
                  </div>
                  <div>
                    <label className="text-gray-600 mb-1">Area/Locality</label>
                    <input
                      type="text"
                      name="area"
                      value={formData.location.area}
                      onChange={handleLocationChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                    />
                  </div>
                  <div>
                    <label className="text-gray-600 mb-1">PIN Code</label>
                    <input
                      type="text"
                      name="pinCode"
                      value={formData.location.pinCode}
                      onChange={handleLocationChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={prevStep}
                  className="bg-white text-gray-700 px-6 py-2 rounded-lg font-medium border border-gray-300 hover:bg-gray-50 transition-all"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={nextStep}
                  className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg transition-all"
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Schedule & Budget */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div>
                <label className="text-gray-700 font-medium mb-2 flex items-center">
                  <FaCalendarAlt className="mr-2 text-pink-500" />
                  Preferred Days (Select all that apply)
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(day => (
                    <div key={day} className="flex items-center">
                      <input
                        type="checkbox"
                        id={day}
                        checked={formData.preferredDays.includes(day)}
                        onChange={(e) => handleArrayChange('preferredDays', day, e.target.checked)}
                        className="h-4 w-4 text-pink-600 focus:ring-pink-500 border-gray-300 rounded"
                      />
                      <label htmlFor={day} className="ml-2 text-gray-700">
                        {day}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-gray-700 font-medium mb-2 flex items-center">
                  <FaRupeeSign className="mr-2 text-pink-500" />
                  Budget Per Class (₹)
                </label>
                <input
                  type="number"
                  name="budgetPerClass"
                  value={formData.budgetPerClass}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                  placeholder="e.g. 500"
                />
              </div>

              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={prevStep}
                  className="bg-white text-gray-700 px-6 py-2 rounded-lg font-medium border border-gray-300 hover:bg-gray-50 transition-all"
                >
                  Back
                </button>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isLoading ? 'Submitting...' : 'Submit Requirement'}
                </button>
              </div>
            </div>
          )}
        </form>

        {/* Progress indicator */}
        <div className="mt-8">
          <div className="flex items-center justify-between">
            {[1, 2, 3].map(step => (
              <div key={step} className="flex flex-col items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep >= step ? 'bg-pink-500 text-white' : 'bg-gray-200 text-gray-600'}`}>
                  {step}
                </div>
                <span className={`text-xs mt-1 ${currentStep >= step ? 'text-pink-600 font-medium' : 'text-gray-500'}`}>
                  {step === 1 ? 'Basic Info' : step === 2 ? 'Tutoring Details' : 'Schedule'}
                </span>
              </div>
            ))}
          </div>
          <div className="relative mt-3">
            <div className="absolute top-0 left-0 h-1 bg-gray-200 w-full"></div>
            <div 
              className="absolute top-0 left-0 h-1 bg-pink-500 transition-all duration-300" 
              style={{ width: `${(currentStep - 1) * 50}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
   </>
  );
}