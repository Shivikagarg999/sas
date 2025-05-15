"use client"

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import logo from '../../../public/images/logo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white p-2 fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
<div className="relative h-28 w-28">
  {/* Soft glow behind the logo */}
  {/* <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-pink-400 via-rose-400 to-pink-600 opacity-40 blur-lg"></div>
   */}
  {/* Logo Image */}
  <Image 
  src={logo} 
  alt="Mentoroid Logo" 
  fill
  sizes="112px"
  priority
  style={{ objectFit: "contain" }}
  className="relative"
/>

</div>


          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-pink-900 hover:text-rose-600 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-pink-900 hover:text-rose-600 transition-colors"
            >
              About
            </Link>
            {/* <Link
              href="/browse"
              className="text-pink-900 hover:text-rose-600 transition-colors"
            >
              Browse Tutors
            </Link> */}
            {/* <Link
              href="/login"
              className="text-pink-900 hover:text-rose-600 transition-colors"
            >
              Login
            </Link> */}
            <Link
              href="/register/tutor"
              className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
            >
              Become a Tutor
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-pink-900 hover:text-rose-600 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu (Dropdown) */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link
              href="/"
              className="block px-3 py-2 text-pink-900 hover:bg-pink-100 rounded-md"
            >
              Home
            </Link> <Link
              href="/about"
              className="block px-3 py-2 text-pink-900 hover:bg-pink-100 rounded-md"
            >
              About
            </Link>
            {/* <Link
              href="/browse"
              className="block px-3 py-2 text-pink-900 hover:bg-pink-100 rounded-md"
            >
              Browse Tutors
            </Link> */}
            <Link
              href="/register/tutor"
              className="block px-3 py-2 text-white bg-gradient-to-r from-pink-500 to-rose-500 rounded-md hover:opacity-90"
            >
              Become a Tutor
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}