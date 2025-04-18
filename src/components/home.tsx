import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import HeroSection from "./HeroSection";
import ContentSection from "./ContentSection";
import ComplimentGenerator from "./ComplimentGenerator";
import GradientBackground from "./GradientBackground";
import { Button } from "@/components/ui/button";

const Home = () => {
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

  // About section content
  const aboutContent = {
    title: "THE MAN. THE MYTH. THE MATIJA.",
    paragraphs: [
      "You know those people who make everything look effortless?",
      "Yeah, Matija isn't one of those people. He actually works his tail off.",
      "But here's the kicker...",
      "While others leave a trail of excuses, Matija leaves a trail of results that make you wonder if he's secretly hiding a time machine somewhere.",
      "What makes him truly special isn't just his professional expertise – it's his uncanny ability to solve complex problems while maintaining that signature Croatian smile.",
      "If friendship had a face, it would probably look a lot like Matija's LinkedIn profile picture.",
    ],
  };

  // Skills section content
  const skillsContent = {
    title: "MATIJA'S SUPERPOWERS",
    subtitle:
      "WARNING: The following list of skills may cause feelings of inadequacy in mere mortals:",
    items: [
      "Professional Excellence: Turning chaos into strategy since birth",
      "Friendship Mastery: Level 99 achieved (with zero microtransactions)",
      "Croatian Charm: Scientifically proven to make even the gloomiest meetings bearable",
      "Problem-Solving: Has been known to fix things before they even break",
      "Loyalty: More reliable than your favorite coffee machine",
      "Humor: Can make even tax discussions somehow entertaining",
    ],
  };

  // Testimonials section content
  const testimonialsContent = {
    title: "WHAT LESSER MORTALS SAY ABOUT THE GREAT MATIJA",
    items: [
      {
        quote:
          "Before meeting Matija, I thought I knew what dedication looked like. I was so adorably wrong.",
        author: "A Humbled Colleague",
      },
      {
        quote:
          "I once saw Matija solve three business problems simultaneously while ordering coffee. The barista is now his life coach.",
        author: "Impressed Bystander",
      },
      {
        quote:
          "They say no one is irreplaceable. Clearly, 'they' haven't met Matija.",
        author: "Corporate Wisdom",
      },
      {
        quote:
          "If I could clone one person from my professional network, it would be Matija. Though I suspect the clone wouldn't be as good as the original.",
        author: "Person With Good Judgment",
      },
    ],
  };

  // Why this website exists content
  const whyContent = {
    title: "WHY THIS WEBSITE EXISTS",
    subtitle:
      'THE UNCOMFORTABLE TRUTH: Saying "thank you" in person felt insufficient.',
    paragraphs: [
      "Let's face it – some people deserve more than a handshake, a thank you card, or even an expensive dinner.",
      "Some people deserve to have their awesomeness immortalized on the internet.",
      "Matija Slišurić is one of those people.",
      "This website exists because:",
    ],
    items: [
      "Words fail to express the level of gratitude you deserve",
      "The world should know about people like you",
      'I had some free time and thought, "What better way to use my web development skills than to glorify the greatness that is Matija?"',
    ],
  };

  // The Matija Effect content
  const effectContent = {
    title: "THE MATIJA EFFECT",
    beforeTitle: "BEFORE MATIJA:",
    beforeItems: [
      "Problems seemed unsolvable",
      "Days were slightly less bright",
      "Professional advice was just... adequate",
      "Friendship standards were embarrassingly low",
    ],
    afterTitle: "AFTER MATIJA:",
    afterItems: [
      'Solutions appear faster than you can say "Slišurić" (which, let\'s be honest, takes most people several attempts)',
      "The sun seems to shine a little brighter",
      "Professional networks actually become meaningful",
      "You realize what true friendship looks like",
    ],
  };

  // Call to action content
  const ctaContent = {
    title: "BE MORE LIKE MATIJA",
    paragraph:
      "While complete Matija-level excellence may be unattainable for most of us, we can all strive to incorporate a little more Matija-ness into our lives.",
    buttonText: "SPREAD THE WORD ABOUT MATIJA",
    smallText:
      "Results may vary. Side effects of attempting to be like Matija include increased productivity, better professional relationships, and a mysterious attraction to Croatian cuisine.",
  };

  // Container styles for consistent spacing and layout
  const containerClasses = "container mx-auto px-4 md:px-8 lg:px-12";
  const sectionClasses = "py-16 md:py-24";

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-hidden">
      <GradientBackground mousePosition={mousePosition} />

      <div className="relative z-10">
        {/* Hero Section */}
        <HeroSection />

        <div className={containerClasses}>
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className={sectionClasses}
          >
            <ContentSection type="about" content={aboutContent} />
          </motion.div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className={sectionClasses}
          >
            <ContentSection type="skills" content={skillsContent} />
          </motion.div>

          {/* Testimonials Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className={sectionClasses}
          >
            <ContentSection type="testimonials" content={testimonialsContent} />
          </motion.div>

          {/* Why This Website Exists Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className={sectionClasses}
          >
            <ContentSection type="why" content={whyContent} />
          </motion.div>

          {/* The Matija Effect Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className={sectionClasses}
          >
            <ContentSection type="effect" content={effectContent} />
          </motion.div>

          {/* Compliment Generator Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className={sectionClasses}
          >
            <ComplimentGenerator />
          </motion.div>

          {/* Call to Action Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className={sectionClasses}
          >
            <div className="relative overflow-hidden rounded-2xl border border-white/20 shadow-2xl">
              {/* Background elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-blue-600/30 backdrop-blur-md -z-10"></div>
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay -z-10"></div>

              {/* Decorative orbs */}
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-pink-500/20 blur-3xl -z-5"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-blue-500/20 blur-3xl -z-5"></div>

              <div className="p-8 md:p-12">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-100 to-blue-200">
                  {ctaContent.title}
                </h2>
                <p className="text-lg md:text-xl text-center mb-10 text-white/90 max-w-3xl mx-auto">
                  {ctaContent.paragraph}
                </p>
                <div className="flex justify-center mb-8">
                  <Button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold py-3 px-8 rounded-full shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl border border-white/20 text-lg">
                    {ctaContent.buttonText}
                  </Button>
                </div>
                <p className="text-sm text-center mt-6 text-white/70 max-w-2xl mx-auto italic">
                  {ctaContent.smallText}
                </p>

                <div className="mt-10 flex justify-center">
                  <img
                    src="https://images.unsplash.com/photo-1531482615713-2afd69097952?w=800&q=80"
                    alt="Team success"
                    className="rounded-xl shadow-lg border border-white/20 max-w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Footer */}
          <footer className="py-16 text-center">
            <div className="relative overflow-hidden rounded-2xl border border-white/20 shadow-2xl p-8 md:p-12">
              {/* Background elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/40 to-purple-900/40 backdrop-blur-md -z-10"></div>
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&q=80')] bg-cover bg-center opacity-5 mix-blend-overlay -z-10"></div>

              {/* Decorative orbs */}
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-indigo-500/10 blur-3xl -z-5"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-purple-500/10 blur-3xl -z-5"></div>

              <div className="max-w-4xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <p className="mb-6 text-lg text-white/90">
                    This website was created with equal parts admiration,
                    gratitude, and the realization that some people truly make
                    this world a better place.
                  </p>
                  <p className="mb-8 text-xl font-semibold text-white">
                    Thank you, Matija. You know why.
                  </p>
                  <div className="h-px w-24 bg-white/30 mx-auto mb-8"></div>
                  <p className="text-white/80">
                    ©2025- The Matija Appreciation Society
                  </p>
                  <p className="mt-6 text-sm italic text-white/70">
                    No Matijas were harmed in the making of this website. In
                    fact, one was glorified beyond reason.
                  </p>
                </motion.div>

                <motion.div
                  className="mt-12 flex justify-center"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1492681290082-e932832941e6?w=800&q=80"
                    alt="Gratitude"
                    className="rounded-xl shadow-lg border border-white/20 max-w-full h-auto opacity-80"
                  />
                </motion.div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Home;
