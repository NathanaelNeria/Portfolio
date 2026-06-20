"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function ParallaxBackground() {
  const { scrollY } = useScroll();
  
  const y1 = useTransform(scrollY, [0, 1000], [0, 100], { clamp: false });
  const y2 = useTransform(scrollY, [0, 1000], [0, -80], { clamp: false });
  const y3 = useTransform(scrollY, [0, 1000], [0, 60], { clamp: false });

  return (
    <div className="bg-mesh" aria-hidden="true">
      <motion.div 
        className="bg-mesh-accent" 
        style={{ y: y1 }}
      />
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        style={{ y: y2 }}
      >
        <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-glow-purple to-transparent opacity-0.35 blur-[120px]" />
      </motion.div>
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        style={{ y: y3 }}
      >
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-glow-blue to-transparent opacity-0.35 blur-[120px]" />
      </motion.div>
    </div>
  );
}
