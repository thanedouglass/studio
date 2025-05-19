// src/components/landing/hero-section.tsx
"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Sparkles, ShieldCheckIcon } from 'lucide-react'; // Or any other relevant icon

export default function HeroSection() {
  return (
    <section className="relative text-center py-20 md:py-32 lg:py-40 overflow-hidden bg-gradient-to-br from-background to-primary/30">
      {/* Background Elements - Placeholder for complex animations */}
      <motion.div
        className="absolute inset-0 z-0 opacity-20"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity,
        }}
        style={{
          backgroundImage: `url("https://placehold.co/1600x900.png?text=Animated+Blobs")`, // Placeholder for animated blobs
          backgroundSize: '200% 200%',
        }}
        data-ai-hint="animated gradient blobs"
      />
      {/* Placeholder for floating geometric calabashes */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute z-0 opacity-30"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.3, scale: 1, y: [-10, 10, -10] }}
          transition={{ 
            duration: 8 + i * 2, 
            repeat: Infinity, 
            repeatType: "mirror",
            delay: i * 0.5 
          }}
          style={{
            left: `${20 + i * 30}%`,
            top: `${30 + i * 10}%`,
          }}
        >
          <Image
            src="https://placehold.co/100x100.png" // Placeholder for calabash
            alt="Floating geometric calabash"
            width={80 + i*20}
            height={80 + i*20}
            className="animate-float"
            data-ai-hint="geometric calabash orbit"
          />
        </motion.div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background z-0"></div>


      {/* Text Overlay Content */}
      <motion.div
        className="relative z-10 container mx-auto px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-accent">
          The Nexus Research Collective
        </h1>
        <p className="font-sans text-xl md:text-2xl text-foreground/80 mb-10 max-w-3xl mx-auto">
          Open. Safe. Decentralized. Equitable Science for All.
        </p>
        
        <motion.div 
          className="bg-card/60 backdrop-blur-md p-6 md:p-8 rounded-2xl max-w-2xl mx-auto shadow-2xl border border-secondary/50"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-secondary mb-4 flex items-center justify-center">
            <ShieldCheckIcon className="w-8 h-8 mr-3 text-secondary" />
            We Stand for Safe Science
          </h2>
          <p className="text-md md:text-lg font-sans text-foreground/70 mb-8">
            Join a new era of purpose-driven collaboration—where researchers and creators converge to decentralize knowledge, restore trust, and give back to science itself.
          </p>
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            <Button 
              variant="outline" 
              size="lg" 
              className="font-semibold border-2 border-secondary text-secondary rounded-xl px-8 py-3
                         hover:bg-secondary hover:text-secondary-foreground 
                         shadow-glow-secondary hover:shadow-glow-primary
                         transition-all duration-300 ease-in-out group animate-pulse-glow"
            >
              Pledge the Collective
              <Sparkles className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-5 w-5" />
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
