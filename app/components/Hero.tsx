"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ProcessSection() {
  return (
    <section className="bg-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Process Steps */}
          <div className="space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-5xl text-[#33c6f2] font-bold"
            >
              Empowering Future{" "}
              <motion.span
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="inline-block"
              >
                Developers
              </motion.span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-xl"
            >
              Learn MERN Stack & Build Your Career!
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <Link
                href={"/Pages/enroll"}
                className="bg-[#33c6f2] text-white px-4 py-2 rounded-full inline-block transition-transform hover:scale-110"
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
    </section>
  );
}
