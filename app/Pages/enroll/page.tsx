"use client";
import { MoveLeft } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Page() {
  const [enrolled, setEnrolled] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEnrolled(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden">
      {/* Falling Effects: Small Party Poppers 🎉 & Balloons 🎈 */}
      {enrolled && (
        <div className="absolute top-[60px] left-0 w-full h-0 pointer-events-none">
          {/* Small Party Poppers 🎉 */}
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={`confetti-${i}`}
              initial={{ y: 0, opacity: 1, x: Math.random() * 50 - 25 }}
              animate={{
                y: "100vh",
                x: ["-5%", "5%", "-3%", "3%", "0%"][Math.floor(Math.random() * 5)],
              }}
              transition={{
                duration: Math.random() * 2 + 2,
                delay: Math.random() * 1.5,
                ease: "easeInOut",
              }}
              className="absolute text-[10px]" // Very small emojis
              style={{
                left: `${Math.random() * 100}%`,
                textShadow: "0px 0px 4px rgba(255, 140, 0, 0.5)",
              }}
            >
              🎉
            </motion.div>
          ))}

          {/* Floating Balloons 🎈 */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={`balloon-${i}`}
              initial={{ y: 0, opacity: 1, x: Math.random() * 80 - 40 }}
              animate={{
                y: "100vh",
                x: ["-4%", "4%", "-2%", "2%"][Math.floor(Math.random() * 4)],
              }}
              transition={{
                duration: Math.random() * 3 + 3, // Slightly slower than confetti
                delay: Math.random() * 1.5,
                ease: "easeInOut",
              }}
              className="absolute text-lg" // Bigger balloons
              style={{
                left: `${Math.random() * 100}%`,
                textShadow: "0px 0px 6px rgba(255, 0, 0, 0.5)", // Glow effect
              }}
            >
              🎈
            </motion.div>
          ))}
        </div>
      )}

      <div className="bg-gray-100 shadow-2xl rounded-2xl p-8 max-w-lg w-full mx-auto mt-8 relative z-10">
        {!enrolled ? (
          <>
            <h1 className="text-3xl font-bold text-center mb-6 text-[#33c6f2]">
              Enroll Now
            </h1>
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
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center"
          >
            <h2 className="text-2xl font-bold text-[#33c6f2] mb-4">
              🎉 Enrollment Successful!
            </h2>
            <p className="text-gray-700">
              Thank you for enrolling. We’ll contact you soon with further
              details.
            </p>
            <Link href={"/"} className="flex justify-center">
              <button
                onClick={() => setEnrolled(false)}
                className="flex gap-2 mt-4 bg-[#33c6f2] text-white py-2 px-4 rounded-lg hover:bg-[#33c6f2]/80 transition"
              >
                <MoveLeft />
                Go To Home Page
              </button>
            </Link>
          </motion.div>
        )}
      </div>
    </div>
  );
}
