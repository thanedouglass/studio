// src/components/landing/researcher-match.tsx
"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Telescope } from "lucide-react"; // Icon for discovery/matching

export const ResearcherMatch = () => (
  <motion.section
    className="text-center py-16 md:py-24 bg-background border-t border-border/20"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
  >
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity:0, y:20 }}
        whileInView={{ opacity:1, y:0 }}
        transition={{ duration:0.6, delay:0.2 }}
        viewport={{ once: true }}
      >
        <Telescope className="w-16 h-16 mx-auto mb-6 text-primary" />
        <h2 className="text-3xl md:text-4xl font-serif font-semibold text-accent mb-6">
          Find Your Next Research Match
        </h2>
        <p className="max-w-xl mx-auto mb-8 text-lg text-foreground/80 font-sans leading-relaxed">
          Coming soon: A smart matching system connecting student researchers to labs, mentors, and funding—powered by open-access data and collective intention.
        </p>
        <motion.div
            whileHover={{ scale: 1.05, y:-2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
        >
        <Button
          variant="outline"
          size="lg"
          className="font-semibold border-2 border-secondary text-secondary rounded-xl px-8 py-3
                     hover:bg-secondary hover:text-secondary-foreground
                     shadow-glow-secondary hover:shadow-glow-primary
                     transition-all duration-300 ease-in-out group"
          onClick={() => alert("Notification feature coming soon!")} // Placeholder action
        >
          Keep Me Updated
        </Button>
        </motion.div>
      </motion.div>
    </div>
  </motion.section>
);
