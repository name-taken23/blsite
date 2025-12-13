"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ServicesHeroBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* Floating Elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <FloatingParticle key={i} index={i} mousePosition={mousePosition} />
        ))}
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white" />
    </div>
  );
}

function FloatingParticle({ index, mousePosition }: { index: number; mousePosition: { x: number; y: number } }) {
  const randomX = (index * 7) % 100; // Deterministic random
  const randomY = (index * 13) % 100;
  const size = (index % 4) + 2;
  const duration = (index % 10) + 10;
  
  // Parallax effect
  const moveX = (mousePosition.x - 0.5) * 50 * (index % 3 + 1);
  const moveY = (mousePosition.y - 0.5) * 50 * (index % 3 + 1);

  return (
    <motion.div
      className="absolute rounded-full bg-accent-electric/30 blur-[1px]"
      style={{
        left: `${randomX}%`,
        top: `${randomY}%`,
        width: size,
        height: size,
      }}
      animate={{
        y: [0, -100, 0],
        opacity: [0, 0.8, 0],
        x: moveX, // React to mouse
        translateY: moveY,
      }}
      transition={{
        y: { duration: duration, repeat: Infinity, ease: "linear" },
        opacity: { duration: duration, repeat: Infinity, ease: "easeInOut" },
        x: { type: "spring", stiffness: 50, damping: 20 },
        translateY: { type: "spring", stiffness: 50, damping: 20 },
      }}
    />
  );
}
