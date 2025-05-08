"use client"

export default function Footer(){
return (
    <>
      <footer className="bg-white py-12 px-6 border-t border-gray-100">
  <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
    <div>
      <h3 className="font-bold text-gray-800 mb-4">EduConnect</h3>
      <p className="text-gray-600 text-sm">
        Connecting students with the best tutors in Delhi NCR for personalized learning experiences.
      </p>
    </div>
    <div>
      <h3 className="font-bold text-gray-800 mb-4">For Students</h3>
      <ul className="space-y-2">
        <li><a href="#" className="text-gray-600 hover:text-rose-600 text-sm">Find Tutors</a></li>
        <li><a href="#" className="text-gray-600 hover:text-rose-600 text-sm">Post Requirement</a></li>
        <li><a href="#" className="text-gray-600 hover:text-rose-600 text-sm">Pricing</a></li>
      </ul>
    </div>
    <div>
      <h3 className="font-bold text-gray-800 mb-4">For Tutors</h3>
      <ul className="space-y-2">
        <li><a href="#" className="text-gray-600 hover:text-rose-600 text-sm">Become a Tutor</a></li>
        <li><a href="#" className="text-gray-600 hover:text-rose-600 text-sm">Tutor Resources</a></li>
        <li><a href="#" className="text-gray-600 hover:text-rose-600 text-sm">FAQ</a></li>
      </ul>
    </div>
    <div>
      <h3 className="font-bold text-gray-800 mb-4">Contact</h3>
      <ul className="space-y-2">
        <li className="text-gray-600 text-sm">shivikagarg91@gmai.com</li>
        <li className="text-gray-600 text-sm">+91 6397046651</li>
      </ul>
    </div>
  </div>
  <div className="max-w-6xl mx-auto border-t border-gray-100 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
    <p className="text-gray-500 text-sm mb-4 md:mb-0">©2025 Mentoroid. All rights reserved.</p>
    <div className="flex space-x-6">
      <a href="#" className="text-gray-500 hover:text-rose-600">Terms</a>
      <a href="#" className="text-gray-500 hover:text-rose-600">Privacy</a>
    </div>
  </div>
</footer>
    </>
)
}