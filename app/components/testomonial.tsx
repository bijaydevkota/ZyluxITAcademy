import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const testimonials = [
  { name: "Bijay Devkota", feedback: "Zylux IT Academy transformed my career. The MERN stack course was in-depth and practical!", image: "/hero.png" },
  { name: "Nilex Karna", feedback: "Amazing instructors and well-structured content. Highly recommend!", image: "/hero.png" },
  { name: "Prabin Joshi", feedback: "From beginner to pro in just months! The hands-on projects helped a lot.", image: "/hero.png" },
  { name: "Grishma Khatiwada", feedback: "I landed my first job thanks to Zylux IT Academy&apos;s expert training!", image: "/hero.png" },
  { name: "Yangma Lama", feedback: "Amazing instructors and well-structured content. Highly recommend!", image: "/hero.png" },
  { name: "Sarita Sharma", feedback: "Great learning experience with real-world projects! Highly recommended.", image: "/hero.png" },
  { name: "Paras Subedi", feedback: "Zylux IT Academy transformed my career. The MERN stack course was in-depth and practical!", image: "/hero.png" },
];

export default function TestimonialSection() {
  const [index, setIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full p-8 bg-white text-[#33c6f2] mt-8">
      <h2 className="text-3xl font-bold mb-6 text-center">What Our Students Say</h2>
      <div className="relative w-full max-w-4xl overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="flex gap-6 justify-center"
          >
            {testimonials.slice(index, index + visibleCount).map((testimonial, i) => (
              <Card key={i} className="bg-[#33c6f2] text-white p-6 rounded-2xl shadow-lg w-full sm:w-1/2 lg:w-1/3">
                <CardContent className="flex flex-col items-center text-center">
                  <Image
                    height={16}
                    width={16}
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full mb-4 border-4 border-white"
                  />
                  <p className="text-lg italic">&quot;{testimonial.feedback}&quot;</p>
                  <h4 className="text-xl font-semibold mt-4">- {testimonial.name}</h4>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
