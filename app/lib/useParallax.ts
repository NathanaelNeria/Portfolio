"use client";

import { useRef, useSyncExternalStore } from "react";
import { useScroll, useTransform } from "framer-motion";

function useMounted() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );
}

export function useGlobalParallax(output: [number, number] = [0, -60]) {
  const mounted = useMounted();
  const { scrollY } = useScroll();

  return useTransform(scrollY, (latest) => {
    if (!mounted) return 0;
    const [outStart, outEnd] = output;
    return (latest / 3000) * (outEnd - outStart) + outStart;
  });
}

export function useSectionParallax<T extends HTMLElement>(
  output: [number, number] = [-30, 30]
) {
  const mounted = useMounted();
  const ref = useRef<T>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  return {
    ref,
    y: useTransform(scrollYProgress, (latest) => {
      if (!mounted) return 0;
      const [outStart, outEnd] = output;
      return latest * (outEnd - outStart) + outStart;
    }),
  };
}
