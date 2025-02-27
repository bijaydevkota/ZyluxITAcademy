import React from "react";
import { motion, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const stats = [
  { value: 95, label: "Job Placement Rate", suffix: "%" },
  { value: 100, label: "Graduates", suffix: "+" },
  { value: 50, label: "Industry Partners", suffix: "+" },
  { value: 12, label: "Global Locations", suffix: "" },
];

export default function Status() {
  return (
    <section className="w-full py-12 md:py-24 bg-gray-50 border border-gray-200">
      <div className="container px-4 md:px-6">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="space-y-2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              
            >
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <p className="text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

interface AnimatedCounterProps {
  value: number;
  suffix: string;
}

function AnimatedCounter({ value, suffix }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000; // Animation duration in ms
      const stepTime = Math.abs(Math.floor(duration / value));
      
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start >= value) {
          clearInterval(timer);
        }
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return <h3 ref={ref} className="text-4xl font-bold text-primary">{count}{suffix}</h3>;
}