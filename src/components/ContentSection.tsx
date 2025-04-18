import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ContentSectionProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "skills" | "testimonials" | "about" | "why" | "effect";
  id?: string;
  backgroundImage?: string;
  type?: string;
  content?: any;
}

const ContentSection = ({
  title,
  subtitle,
  children,
  className,
  variant = "default",
  id,
  backgroundImage,
  type,
  content,
}: ContentSectionProps) => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const getVariantStyles = () => {
    switch (type || variant) {
      case "skills":
        return "bg-gradient-to-br from-purple-500/30 to-blue-500/30 backdrop-blur-md";
      case "testimonials":
        return "bg-gradient-to-br from-amber-500/30 to-pink-500/30 backdrop-blur-md";
      case "about":
        return "bg-gradient-to-br from-emerald-500/30 to-cyan-500/30 backdrop-blur-md";
      case "why":
        return "bg-gradient-to-br from-blue-500/30 to-indigo-500/30 backdrop-blur-md";
      case "effect":
        return "bg-gradient-to-br from-violet-500/30 to-fuchsia-500/30 backdrop-blur-md";
      default:
        return "bg-gradient-to-br from-slate-500/30 to-slate-700/30 backdrop-blur-md";
    }
  };

  const getBackgroundImage = () => {
    switch (type || variant) {
      case "skills":
        return "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80";
      case "testimonials":
        return "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80";
      case "about":
        return "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&q=80";
      case "why":
        return "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1200&q=80";
      case "effect":
        return "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80";
      default:
        return "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1200&q=80";
    }
  };

  // Render content based on section type
  const renderContent = () => {
    if (!content) return children;

    switch (type) {
      case "about":
        return (
          <div className="text-white/90 space-y-6 backdrop-blur-sm bg-black/10 p-8 rounded-xl border border-white/10">
            {content.paragraphs.map((paragraph: string, index: number) => (
              <motion.p
                key={index}
                className={index === 0 ? "text-xl font-semibold" : "text-lg"}
                variants={childVariants}
              >
                {paragraph}
              </motion.p>
            ))}
            <motion.div
              className="mt-8 flex justify-center"
              variants={childVariants}
            >
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                alt="Scenic view"
                className="rounded-xl shadow-lg border border-white/20 max-w-full h-auto"
              />
            </motion.div>
          </div>
        );
      case "skills":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {content.items.map((skill: string, index: number) => (
              <motion.div
                key={index}
                className="backdrop-blur-sm bg-white/10 p-6 rounded-xl border border-white/20 shadow-lg hover:shadow-xl transition-all hover:scale-105 hover:bg-white/20"
                variants={childVariants}
              >
                <p className="text-lg font-medium text-white">{skill}</p>
              </motion.div>
            ))}
            <motion.div
              className="md:col-span-2 mt-8 flex justify-center"
              variants={childVariants}
            >
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80"
                alt="Professional skills"
                className="rounded-xl shadow-lg border border-white/20 max-w-full h-auto"
              />
            </motion.div>
          </div>
        );
      case "testimonials":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {content.items.map((testimonial: any, index: number) => (
              <motion.div
                key={index}
                className="backdrop-blur-sm bg-white/10 p-6 rounded-xl border border-white/20 shadow-lg flex flex-col"
                variants={childVariants}
              >
                <div className="flex-1">
                  <p className="text-xl italic text-white mb-4">
                    "{testimonial.quote}"
                  </p>
                  <p className="text-right text-white/70">
                    — {testimonial.author}
                  </p>
                </div>
              </motion.div>
            ))}
            <motion.div
              className="md:col-span-2 mt-8 flex justify-center"
              variants={childVariants}
            >
              <img
                src="https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&q=80"
                alt="Team collaboration"
                className="rounded-xl shadow-lg border border-white/20 max-w-full h-auto"
              />
            </motion.div>
          </div>
        );
      case "why":
        return (
          <div className="space-y-8 backdrop-blur-sm bg-black/10 p-8 rounded-xl border border-white/10">
            <div className="space-y-4">
              {content.paragraphs.map((paragraph: string, index: number) => (
                <motion.p
                  key={index}
                  className="text-lg text-white/90"
                  variants={childVariants}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            <motion.ul
              className="list-disc pl-6 space-y-3 text-white/90"
              variants={childVariants}
            >
              {content.items.map((item: string, index: number) => (
                <li key={index} className="text-lg">
                  {item}
                </li>
              ))}
            </motion.ul>

            <motion.div
              className="mt-8 flex justify-center"
              variants={childVariants}
            >
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80"
                alt="Gratitude"
                className="rounded-xl shadow-lg border border-white/20 max-w-full h-auto"
              />
            </motion.div>
          </div>
        );
      case "effect":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="backdrop-blur-sm bg-black/20 p-6 rounded-xl border border-white/10"
              variants={childVariants}
            >
              <h3 className="text-2xl font-bold mb-4 text-white">
                {content.beforeTitle}
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-white/90">
                {content.beforeItems.map((item: string, index: number) => (
                  <li key={index} className="text-lg">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="backdrop-blur-sm bg-white/10 p-6 rounded-xl border border-white/20"
              variants={childVariants}
            >
              <h3 className="text-2xl font-bold mb-4 text-white">
                {content.afterTitle}
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-white/90">
                {content.afterItems.map((item: string, index: number) => (
                  <li key={index} className="text-lg">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="md:col-span-2 mt-8 flex justify-center"
              variants={childVariants}
            >
              <img
                src="https://images.unsplash.com/photo-1522071901873-411886a10004?w=800&q=80"
                alt="Transformation"
                className="rounded-xl shadow-lg border border-white/20 max-w-full h-auto"
              />
            </motion.div>
          </div>
        );
      default:
        return children;
    }
  };

  return (
    <section
      id={id}
      className={cn(
        "w-full py-16 md:py-24 px-4 md:px-8 rounded-xl border border-white/10 relative overflow-hidden",
        getVariantStyles(),
        className,
      )}
    >
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10 mix-blend-overlay"
        style={{
          backgroundImage: `url(${backgroundImage || getBackgroundImage()})`,
        }}
      />

      {/* Glassmorphic orbs */}
      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/5 blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-white/5 blur-3xl"></div>

      <motion.div
        className="max-w-6xl mx-auto relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={variants}
      >
        <motion.div className="text-center mb-12" variants={childVariants}>
          <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
            {content?.title || title}
          </h2>
          {(content?.subtitle || subtitle) && (
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
              {content?.subtitle || subtitle}
            </p>
          )}
        </motion.div>

        <motion.div variants={childVariants}>{renderContent()}</motion.div>
      </motion.div>
    </section>
  );
};

export default ContentSection;
