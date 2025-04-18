import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface ComplimentGeneratorProps {
  compliments?: string[];
}

const ComplimentGenerator = ({
  compliments = [
    "Matija doesn't actually need sleep; he just lies down for a few hours to give the rest of us a fighting chance.",
    "Legend says Matija once finished a project so fast that time actually went backward.",
    "Matija's friendship is like finding the perfect parking spot – rare, valuable, and something you brag about to others.",
    "Some people bring solutions. Matija brings solutions that make you wonder why you thought there was a problem in the first place.",
    "If productivity was a person, it would ask Matija for an autograph.",
    "Matija doesn't break the rules, he optimizes them for better performance.",
    "They say no one is perfect, but Matija is making statisticians reconsider that statement.",
    "Matija's problem-solving skills are so advanced, problems solve themselves just to avoid the embarrassment.",
    "When Matija 'Slish' Slisuric enters a room, bugs flee the codebase in terror.",
    "Matija doesn't debug code; the code debugs itself out of respect.",
    "Google once tried to hire Matija, but gave up when they realized their servers couldn't handle his brilliance.",
    "Matija doesn't use version control; the universe creates alternate timelines just to accommodate his code variations.",
    "When Matija eats Croatian food, the flavors thank him for the experience.",
    "Matija's code is so clean, other developers use it as a spa treatment for their mental health.",
    "Matija doesn't follow best practices. Best practices follow Matija, taking notes.",
    "The 'Slish' in Matija's name actually stands for 'Supreme Legendary Innovator Solving Humanity's problems'.",
    "Matija once looked at a server, and it upgraded itself out of sheer intimidation.",
    "Stack Overflow moderators have a special alert that goes off when Matija is about to solve a problem, so they can just close the question as 'Resolved by Slish'.",
    "Matija doesn't have deadlines. Time itself waits for him to finish.",
    "When Matija meditates, his brain doesn't empty—the internet downloads his thoughts for backup.",
    "Matija's keyboard doesn't have a Ctrl key because nothing in his life is out of control.",
    "Matija doesn't use cloud computing; clouds use Matija for computing.",
    "When Matija visits Croatia, the Adriatic Sea parts to offer him the freshest seafood.",
    "Matija's code comments are so insightful they've been published as a philosophy textbook.",
    "Matija doesn't need Stack Overflow; Stack Overflow needs Matija.",
    "Matija's brain doesn't have a cache because he never needs to retrieve the same information twice.",
    "When Matija speaks, even AI assistants stop to take notes.",
    "Matija's pull requests are so perfect, Git created a new status just for him: 'Blessed by Slish'.",
  ],
}: ComplimentGeneratorProps) => {
  const [currentCompliment, setCurrentCompliment] = useState<string | null>(
    null,
  );
  const [isGenerating, setIsGenerating] = useState(false);

  const generateCompliment = () => {
    setIsGenerating(true);
    setCurrentCompliment(null);

    // Simulate a slight delay for effect
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * compliments.length);
      setCurrentCompliment(compliments[randomIndex]);
      setIsGenerating(false);
    }, 800);
  };

  // Generate a compliment on initial load
  useEffect(() => {
    generateCompliment();
  }, []);

  return (
    <div className="relative w-full max-w-5xl mx-auto p-8 rounded-2xl border border-white/20 shadow-2xl overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-blue-600/30 backdrop-blur-md -z-10"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay -z-10"></div>

      {/* Decorative orbs */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-pink-500/20 blur-3xl -z-5"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-blue-500/20 blur-3xl -z-5"></div>

      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-300 via-purple-200 to-blue-300 tracking-tight">
          ✨ THE MATIJA COMPLIMENT GENERATOR ✨
        </h2>
        <p className="text-white/90 text-lg md:text-xl">
          Because one can never have enough praise for Matija
        </p>
      </div>

      <Card className="bg-white/10 backdrop-blur-md border-white/20 shadow-2xl mb-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 -z-10"></div>
        <CardContent className="p-8 min-h-[220px] flex items-center justify-center relative">
          <AnimatePresence mode="wait">
            {currentCompliment ? (
              <motion.div
                key={currentCompliment}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-xl md:text-2xl text-white text-center font-medium italic"
              >
                "{currentCompliment}"
              </motion.div>
            ) : (
              <motion.div
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-white/70 text-xl"
              >
                Generating brilliance...
              </motion.div>
            )}
          </AnimatePresence>
        </CardContent>
      </Card>

      <div className="flex justify-center">
        <Button
          onClick={generateCompliment}
          disabled={isGenerating}
          size="lg"
          className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 hover:from-pink-600 hover:via-purple-600 hover:to-blue-600 text-white font-extrabold py-4 px-10 text-xl rounded-full shadow-2xl transform transition-all hover:scale-110 active:scale-95 disabled:opacity-70 border-2 border-white/30 animate-pulse hover:animate-none"
        >
          {isGenerating
            ? "✨ GENERATING... ✨"
            : "✨ CLICK FOR ANOTHER MATIJA COMPLIMENT ✨"}
        </Button>
      </div>

      <div className="mt-8 flex justify-center">
        <img
          src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80"
          alt="Inspirational workspace"
          className="rounded-xl shadow-lg border border-white/20 max-w-full h-auto opacity-80"
        />
      </div>
    </div>
  );
};

export default ComplimentGenerator;
