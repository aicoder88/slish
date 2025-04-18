import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  onCtaClick?: () => void;
  backgroundImage?: string;
  profileImage?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title = "THE MAGNIFICENT MATIJA",
  subtitle = "FINALLY REVEALED: The Secret Weapon Behind Success Stories You've Never Heard About!",
  ctaText = "DISCOVER THE LEGEND",
  onCtaClick = () => console.log("CTA clicked"),
  backgroundImage = "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=1200&q=80",
  profileImage = "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80",
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-700">
      {/* Animated background gradient */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-indigo-600/40 via-purple-600/40 to-pink-600/40 transition-all duration-300 ease-out"
        style={{
          backgroundPosition: `${mousePosition.x * 100}% ${mousePosition.y * 100}%`,
        }}
      />

      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15 mix-blend-overlay"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />

      {/* Glassmorphic elements */}
      <motion.div
        className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-blue-500/30 blur-3xl"
        animate={{
          x: mousePosition.x * 20,
          y: mousePosition.y * 20,
        }}
        transition={{ type: "spring", damping: 15 }}
      />
      <motion.div
        className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-purple-500/30 blur-3xl"
        animate={{
          x: mousePosition.x * -20,
          y: mousePosition.y * -20,
        }}
        transition={{ type: "spring", damping: 15 }}
      />
      <motion.div
        className="absolute top-1/2 left-1/4 h-64 w-64 rounded-full bg-pink-500/20 blur-3xl"
        animate={{
          x: mousePosition.x * 30,
          y: mousePosition.y * -30,
        }}
        transition={{ type: "spring", damping: 12 }}
      />

      {/* Content container */}
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-5xl"
        >
          {/* Glass card */}
          <div className="rounded-2xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-md">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              {/* Profile image */}
              <motion.div
                className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80"
                  alt="Matija Slišurić"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Text content */}
              <div className="flex-1">
                <motion.h1
                  className="mb-6 text-5xl font-extrabold tracking-tight text-white md:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-100 to-blue-200"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                >
                  {title}
                </motion.h1>

                <motion.p
                  className="mb-8 max-w-2xl text-xl text-white md:mx-auto font-semibold"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                  {subtitle}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="mt-8"
                >
                  <p className="mb-6 text-white/90 text-lg">
                    Meet Matija Slišurić – the Croatian mastermind who makes
                    impossible things happen while the rest of us are still
                    trying to spell his last name correctly.
                  </p>

                  <Button
                    onClick={onCtaClick}
                    size="lg"
                    className="bg-gradient-to-r from-pink-500 to-purple-600 px-8 py-6 text-lg font-bold tracking-wide text-white transition-all hover:scale-105 hover:shadow-lg border border-white/20"
                  >
                    {ctaText}
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.9, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex items-center gap-2 text-sm text-white/80 bg-black/10 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10"
        >
          <span>Scroll to discover greatness</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 animate-bounce"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
