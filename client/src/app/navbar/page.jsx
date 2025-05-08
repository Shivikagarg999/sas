"use client"

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-pink-50 shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
              Mentoroid
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-pink-900 hover:text-rose-600 transition-colors"
            >
              Home
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