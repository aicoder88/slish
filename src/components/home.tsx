import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import HeroSection from "./HeroSection";
import ContentSection from "./ContentSection";
import ComplimentGenerator from "./ComplimentGenerator";
import GradientBackground from "./GradientBackground";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

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
    title: "🌟 THE MAN. THE MYTH. THE MATIJA. 🌟",
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
    title: "💪 MATIJA'S SUPERPOWERS 🦸‍♂️",
    subtitle:
      "WARNING: The following list of skills may cause feelings of inadequacy in mere mortals:",
    items: [
      "🏆 Professional Excellence: Turning chaos into strategy since birth",
      "🤝 Friendship Mastery: Level 99 achieved (with zero microtransactions)",
      "🇭🇷 Croatian Charm: Scientifically proven to make even the gloomiest meetings bearable",
      "🧩 Problem-Solving: Has been known to fix things before they even break",
      "🛡️ Loyalty: More reliable than your favorite coffee machine",
      "😂 Humor: Can make even tax discussions somehow entertaining",
    ],
  };

  // Testimonials section content
  const testimonialsContent = {
    title: "🗣️ WHAT LESSER MORTALS SAY ABOUT THE GREAT MATIJA 👑",
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
    title: "🤔 WHY THIS WEBSITE EXISTS 🌐",
    subtitle:
      'THE UNCOMFORTABLE TRUTH: Saying "thank you" in person felt insufficient.',
    paragraphs: [
      "Let's face it – some people deserve more than a handshake, a thank you card, or even an expensive dinner.",
      "Some people deserve to have their awesomeness immortalized on the internet.",
      "Matija Slišurić is one of those people.",
      "This website exists because:",
    ],
    items: [
      "💫 Words fail to express the level of gratitude you deserve",
      "🌍 The world should know about people like you",
      '💻 I had some free time and thought, "What better way to use my web development skills than to glorify the greatness that is Matija?"',
    ],
  };

  // The Matija Effect content
  const effectContent = {
    title: "✨ THE MATIJA EFFECT ✨",
    beforeTitle: "BEFORE MATIJA:",
    beforeItems: [
      "❓ Problems seemed unsolvable",
      "☁️ Days were slightly less bright",
      "📋 Professional advice was just... adequate",
      "👥 Friendship standards were embarrassingly low",
    ],
    afterTitle: "AFTER MATIJA:",
    afterItems: [
      '💡 Solutions appear faster than you can say "Slišurić" (which, let\'s be honest, takes most people several attempts)',
      "☀️ The sun seems to shine a little brighter",
      "🔗 Professional networks actually become meaningful",
      "🤗 You realize what true friendship looks like",
    ],
  };

  // Work History and Skills content
  const workHistoryContent = {
    title: "🏆 MATIJA'S LEGENDARY SKILLSET 🏆",
    subtitle: "A masterful collection of abilities that would make even Leonardo da Vinci jealous",
    categories: [
      {
        name: "Industry Knowledge",
        skills: [
          "IT Service Management",
          "Digital Journalism",
          "Management",
          "Project Management",
          "Informatics",
          "Media Strategy",
          "Online Advertising"
        ]
      },
      {
        name: "Tools & Technologies",
        skills: [
          "JavaScript",
          "Cascading Style Sheets (CSS)",
          "HTML5",
          "Adobe InDesign",
          "Adobe Premiere Pro",
          "Adobe Illustrator",
          "Adobe Photoshop",
          "Microsoft Office",
          "HTML",
          "Adobe Creative Suite",
          "After Effects"
        ]
      },
      {
        name: "Creative Skills",
        skills: [
          "Web Design",
          "Graphic Design",
          "Multimedia",
          "Photography",
          "Web Editing",
          "Digital Media",
          "Video Editing",
          "Front-end Development"
        ]
      },
      {
        name: "Interpersonal Skills",
        skills: [
          "Leadership",
          "Negotiation",
          "Data Analysis",
          "Analytical Skills"
        ]
      }
    ]
  };

  // Call to action content
  const ctaContent = {
    title: "🚀 BE MORE LIKE MATIJA 🌈",
    paragraph:
      "While complete Matija-level excellence may be unattainable for most of us, we can all strive to incorporate a little more Matija-ness into our lives.",
    buttonText: "SPREAD THE WORD ABOUT MATIJA",
    smallText:
      "Results may vary. Side effects of attempting to be like Matija include increased productivity, better professional relationships, and a mysterious attraction to Croatian cuisine.",
  };

  // Container styles for consistent spacing and layout
  const containerClasses = "container mx-auto px-4 md:px-8 lg:px-12";
  const sectionClasses = "py-16 md:py-24";

  // Function to share on social media
  const shareOnSocialMedia = (platform: string) => {
    const url = window.location.href;
    const text = "Check out this amazing tribute to Matija Slišurić!";
    
    let shareUrl = "";
    
    switch(platform) {
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
        break;
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        break;
      case "whatsapp":
        shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(text + " " + url)}`;
        break;
      default:
        shareUrl = url;
    }
    
    window.open(shareUrl, "_blank");
  };

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
            <ContentSection
              title={aboutContent.title}
              type="about"
              content={aboutContent}
            >
              <div></div>
            </ContentSection>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className={sectionClasses}
          >
            <ContentSection
              title={skillsContent.title}
              type="skills"
              content={skillsContent}
            >
              <div></div>
            </ContentSection>
          </motion.div>

          {/* Testimonials Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className={sectionClasses}
          >
            <ContentSection
              title={testimonialsContent.title}
              type="testimonials"
              content={testimonialsContent}
            >
              <div></div>
            </ContentSection>
          </motion.div>

          {/* Why This Website Exists Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className={sectionClasses}
          >
            <ContentSection
              title={whyContent.title}
              type="why"
              content={whyContent}
            >
              <div></div>
            </ContentSection>
          </motion.div>

          {/* The Matija Effect Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className={sectionClasses}
          >
            <ContentSection
              title={effectContent.title}
              type="effect"
              content={effectContent}
            >
              <div></div>
            </ContentSection>
          </motion.div>

          {/* Work History and Skills Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className={sectionClasses}
          >
            <ContentSection
              title={workHistoryContent.title}
              type="work-history"
              content={workHistoryContent}
            >
              <div></div>
            </ContentSection>
          </motion.div>

          {/* Compliment Generator Section */}
          <motion.div
            id="compliment-generator"
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
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold py-3 px-8 rounded-full shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl border border-white/20 text-lg">
                        {ctaContent.buttonText}
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md bg-gradient-to-br from-purple-900/90 to-indigo-900/90 backdrop-blur-md border border-white/20">
                      <DialogHeader>
                        <DialogTitle className="text-center text-white text-xl">Share Matija's Greatness</DialogTitle>
                      </DialogHeader>
                      <div className="grid grid-cols-2 gap-4 py-4">
                        <Button
                          onClick={() => shareOnSocialMedia("twitter")}
                          className="flex items-center justify-center gap-2 bg-[#1DA1F2] hover:bg-[#1DA1F2]/80 text-white"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                          </svg>
                          Twitter
                        </Button>
                        <Button
                          onClick={() => shareOnSocialMedia("facebook")}
                          className="flex items-center justify-center gap-2 bg-[#1877F2] hover:bg-[#1877F2]/80 text-white"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                          </svg>
                          Facebook
                        </Button>
                        <Button
                          onClick={() => shareOnSocialMedia("linkedin")}
                          className="flex items-center justify-center gap-2 bg-[#0A66C2] hover:bg-[#0A66C2]/80 text-white"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                          </svg>
                          LinkedIn
                        </Button>
                        <Button
                          onClick={() => shareOnSocialMedia("whatsapp")}
                          className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#25D366]/80 text-white"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                          </svg>
                          WhatsApp
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
                <p className="text-sm text-center mt-6 text-white/70 max-w-2xl mx-auto italic">
                  {ctaContent.smallText}
                </p>

                <div className="mt-10 flex justify-center">
                  <img
                    src="/assets/best-croatian-food.jpg"
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
