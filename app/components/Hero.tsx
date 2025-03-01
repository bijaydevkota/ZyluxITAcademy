"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function ProcessSection() {
  const text = "Empowering Future Developers";
  const [displayedText, setDisplayedText] = useState("");
  const [typingIndex, setTypingIndex] = useState(0);

  useEffect(() => {
    if (typingIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[typingIndex]);
        setTypingIndex(typingIndex + 1);
      }, 100); // Adjust speed of typing here
      return () => clearTimeout(timeout);
    }
  }, [typingIndex]);

  return (
    <section className="bg-white py-8">
      <div className="container mx-auto px-14 md:px-4 mt-28 md:mt-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Process Steps */}
          <div className="space-y-6">
            <p className="text-5xl text-[#33c6f2] font-bold">
              {displayedText}
              <span className="animate-blink">|</span>
            </p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="text-xl"
            >
              Learn MERN Stack & Build Your Career!
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 2 }}
            >
              <Link
                href={"/Pages/enroll"}
                className="bg-[#33c6f2] text-white  px-4 py-2 rounded-full inline-block transition-transform hover:scale-110 hover:translate-y-1"
              >
                Apply Now
              </Link>
            </motion.div>
          </div>

          {/* Image Section */}
          <div className="relative">
            {/* Decorative Shapes */}
            <div className="absolute top-0 right-0 w-8 h-8 bg-[#33c6f2] rounded-full -translate-y-4 translate-x-4" />
            <div className="absolute bottom-0 left-0 w-6 h-6 bg-[#33c6f2] rounded-full translate-y-4 -translate-x-4" />
            <div className="absolute top-1/2 right-0 w-10 h-10 border-2 border-[#33c6f2] rotate-45 translate-x-6" />
            <div className="absolute top-1/4 left-0 w-8 h-8 bg-[#33c6f2] rounded-sm -translate-x-4 rotate-12" />

            {/* Main Image */}
            <div className="relative rounded-lg overflow-hidden">
              <Image
                src="/hero3.svg"
                alt="Team collaboration"
                width={500}
                height={600}
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <hr />
      <style jsx>{`
        .animate-blink {
          display: inline-block;
          animation: blink 0.8s infinite;
        }
        @keyframes blink {
          0% { opacity: 1; }
          50% { opacity: 0; }
          100% { opacity: 1; }
        }
      `}</style>
    </section>
  );
}
