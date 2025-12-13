"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const requestRef = useRef<number>();
  const previousTimeRef = useRef<number>();
  const mousePositionRef = useRef({ x: -100, y: -100 });

  useEffect(() => {
    // Disable on mobile for performance
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    if (isMobile) {
      return () => window.removeEventListener('resize', checkMobile);
    }
    let isMoving = false;

    const moveCursor = (e: MouseEvent) => {
      mousePositionRef.current = { x: e.clientX - 10, y: e.clientY - 10 };
      if (!isMoving) {
        isMoving = true;
        setIsVisible(true);
      }
    };

    const animate = (time: number) => {
      if (previousTimeRef.current !== undefined) {
        // Smooth interpolation
        const current = position;
        const target = mousePositionRef.current;
        const newX = current.x + (target.x - current.x) * 0.15;
        const newY = current.y + (target.y - current.y) * 0.15;
        setPosition({ x: newX, y: newY });
      }
      previousTimeRef.current = time;
      requestRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", moveCursor, { passive: true });
    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [position, isMobile]);

  if (!isVisible || isMobile) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-3 h-3 pointer-events-none z-[9999] rounded-full bg-accent-electric shadow-[0_0_8px_rgba(0,124,255,0.5)]"
      style={{
        x: position.x,
        y: position.y,
      }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.2 }}
    />
  );
}
