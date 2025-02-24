"use client"
import { MoveLeft } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';

export default function Page() {
  const [enrolled, setEnrolled] = useState(false);

  const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevents page reload
    setEnrolled(true); // Show the success message
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800">
      <div className="bg-gray-900 shadow-2xl rounded-2xl p-8 max-w-lg w-full">
        {!enrolled ? (
          <>
            <h1 className="text-3xl font-bold text-center mb-6">Enroll Now</h1>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="mt-1 block w-full p-2 border rounded-lg focus:ring-[#33c6f2] focus:border-[#33c6f2]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-1 block w-full p-2 border rounded-lg focus:ring-[#33c6f2] focus:border-[#33c6f2]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Select Course
                </label>
                <select
                  id="course"
                  name="course"
                  required
                  className="mt-1 block w-full p-2 border rounded-lg cursor-pointer focus:ring-[#33c6f2] focus:border-[#33c6f2]"
                >
                  <option value="frontend">Frontend Development</option>
                  <option value="backend">Backend Development</option>
                  <option value="fullstack">Full Stack Development</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full bg-[#33c6f2] text-white py-2 rounded-lg hover:bg-[#33c6f2]/80 transition"
              >
                Enroll Now
              </button>
            </form>
          </>
        ) : (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-[#33c6f2] mb-4">
              🎉 Enrollment Successful!
            </h2>
            <p className="text-gray-700">
              Thank you for enrolling. We’ll contact you soon with further
              details.
            </p>
            <Link href={"/"} className='flex justify-center'>
            <button
              onClick={() => setEnrolled(false)}
              className="flex gap-2 mt-4 bg-[#33c6f2] text-white py-2 px-4 rounded-lg hover:bg-[#33c6f2]/80 transition"
            >
              <MoveLeft />
              Go To Home Page
            </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
