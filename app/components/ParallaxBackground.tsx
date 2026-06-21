"use client";

import { motion } from "framer-motion";
import { useGlobalParallax } from "../lib/useParallax";

export default function ParallaxBackground() {
  const y1 = useGlobalParallax([0, -60]);
  const y2 = useGlobalParallax([0, -60]);
  const y3 = useGlobalParallax([0, -60]);

  return (
    <div className="bg-mesh" aria-hidden="true">
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ y: y1 }}
      >
        <div className="bg-mesh-accent" />
      </motion.div>
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ y: y2 }}
      >
        <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-glow-purple to-transparent opacity-35 blur-[120px]" />
      </motion.div>
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ y: y3 }}
      >
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-glow-orange to-transparent opacity-35 blur-[120px]" />
      </motion.div>
    </div>
  );
}
