import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface GradientBackgroundProps {
  children?: React.ReactNode;
  mousePosition?: { x: number; y: number };
}

const GradientBackground: React.FC<GradientBackgroundProps> = ({
  children = null,
  mousePosition: externalMousePosition,
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (externalMousePosition) return;

    const handleMouseMove = (e: MouseEvent) => {
      // Calculate mouse position as percentage of window size
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [externalMousePosition]);

  // Use external mouse position if provided, otherwise use internal state
  const position = externalMousePosition || mousePosition;

  // Interpolate mouse position to gradient positions
  const gradientX = 50 + (position.x - 0.5) * 30; // Move 15% in each direction
  const gradientY = 50 + (position.y - 0.5) * 30;

  return (
    <motion.div
      className="fixed inset-0 w-full h-full -z-10 bg-background"
      animate={{
        background: `radial-gradient(circle at ${gradientX}% ${gradientY}%, rgba(120, 119, 198, 0.4), rgba(74, 86, 157, 0.6)), 
                   linear-gradient(135deg, rgba(76, 0, 255, 0.15) 0%, rgba(25, 0, 89, 0.25) 100%)`,
      }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    >
      {/* Animated orbs/blobs for additional visual interest */}
      <motion.div
        className="absolute rounded-full bg-purple-500/20 blur-3xl"
        style={{
          width: "45vw",
          height: "45vw",
          top: "10%",
          left: "5%",
        }}
        animate={{
          x: position.x * 25,
          y: position.y * 25,
        }}
        transition={{ duration: 2 }}
      />

      <motion.div
        className="absolute rounded-full bg-blue-500/20 blur-3xl"
        style={{
          width: "40vw",
          height: "40vw",
          bottom: "10%",
          right: "5%",
        }}
        animate={{
          x: -position.x * 25,
          y: -position.y * 25,
        }}
        transition={{ duration: 2 }}
      />

      <motion.div
        className="absolute rounded-full bg-indigo-500/20 blur-3xl"
        style={{
          width: "35vw",
          height: "35vw",
          top: "40%",
          right: "25%",
        }}
        animate={{
          x: position.y * 25,
          y: -position.x * 25,
        }}
        transition={{ duration: 2.5 }}
      />

      <motion.div
        className="absolute rounded-full bg-pink-500/15 blur-3xl"
        style={{
          width: "30vw",
          height: "30vw",
          bottom: "30%",
          left: "25%",
        }}
        animate={{
          x: -position.y * 20,
          y: position.x * 20,
        }}
        transition={{ duration: 3 }}
      />

      {/* Mesh overlay for texture */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-25" />

      {children}
    </motion.div>
  );
};

export default GradientBackground;
