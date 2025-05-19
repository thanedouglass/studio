// src/components/landing/pledge-statement.tsx
"use client";

import { motion } from 'framer-motion';

export default function PledgeStatement() {
  const sentence = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1,
        staggerChildren: 0.03,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const pledgeText = "As a member of The Nexus Research Collective, I commit to practicing science with integrity, transparency, and compassion. I believe in open-access knowledge, decentralized discovery, and equitable opportunity for every mind ready to explore. I build not to gatekeep, but to give back. I pledge to shift the narrative. I pledge to Double & Giveback.";
  
  // Splitting by word for hover effect, then by letter for animation
  const words = pledgeText.split(" ").map((word, wordIndex) => {
    const specialWords = ["integrity", "transparency", "compassion", "give back", "Double & Giveback"];
    const isSpecial = specialWords.some(sw => word.toLowerCase().includes(sw.toLowerCase()));
    
    // Handle multi-word special phrases like "give back"
    let combinedWord = word;
    if (word.toLowerCase() === "give" && pledgeText.split(" ")[wordIndex + 1]?.toLowerCase() === "back.") {
      combinedWord = "give back.";
    } else if (word.toLowerCase() === "double" && pledgeText.split(" ")[wordIndex + 1]?.toLowerCase() === "&" && pledgeText.split(" ")[wordIndex + 2]?.toLowerCase() === "giveback."){
      combinedWord = "Double & Giveback.";
    }


    return (
      <motion.span
        key={word + "-" + wordIndex}
        className={`inline-block ${
          isSpecial ? "text-secondary font-semibold cursor-pointer hover:text-primary transition-colors duration-300 hover:underline underline-offset-4 decoration-primary/70" 
          : (word.toLowerCase() === "nexus" || word.toLowerCase() === "collective" ? "text-accent font-medium" : "")
        }`}
        whileHover={isSpecial ? { scale: 1.05, y: -1 } : {}}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        {combinedWord.split("").map((char, charIndex) => (
          <motion.span key={char + "-" + charIndex} variants={letter} className="inline-block">
            {char}
          </motion.span>
        ))}
        {wordIndex < pledgeText.split(" ").length -1 ? "\u00A0" : ""}
      </motion.span>
    );
  });


  return (
    <motion.section 
      className="py-16 md:py-24 bg-card/70 backdrop-blur-sm"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <motion.h2 
          className="font-serif text-4xl md:text-5xl font-medium text-primary mb-10 text-glow"
          variants={letter} // Reuse letter variant for simple fade-up
        >
          The Nexus Pledge
        </motion.h2>
        <motion.p 
          className="font-serif text-lg md:text-xl leading-relaxed text-foreground/90"
          variants={sentence}
        >
          {words}
        </motion.p>
      </div>
    </motion.section>
  );
}
