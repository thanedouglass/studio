// src/components/landing/dgb-mission-integration.tsx
"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap } from 'lucide-react'; // Zap for "powered by" ethos

export default function DGBMissionIntegration() {
  return (
    <motion.section 
      className="py-16 md:py-24 bg-background"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <motion.h2 
          className="font-serif text-3xl md:text-4xl font-semibold text-accent mb-8 flex items-center justify-center text-glow"
          initial={{ opacity:0, y:20 }}
          whileInView={{ opacity:1, y:0 }}
          transition={{ duration:0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Zap className="w-10 h-10 mr-3 text-accent" />
          Why We Exist
        </motion.h2>
        <motion.p 
          className="font-sans text-md md:text-lg leading-relaxed text-foreground/80 mb-12"
          initial={{ opacity:0, y:20 }}
          whileInView={{ opacity:1, y:0 }}
          transition={{ duration:0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          The Nexus is powered by the philosophy of Double & Giveback Inc.—committed to shifting limiting realities through sacred systems, open tooling, and communal knowledge. Our movement blends technical precision with collective healing through decentralization.
        </motion.p>
        
        <motion.div
          className="group relative inline-block"
          title="Powered by DGB – Shifting Limiting Realities Through Creative Mediums"
          initial={{ opacity:0, scale:0.8 }}
          whileInView={{ opacity:1, scale:1 }}
          transition={{ duration:0.7, delay: 0.5, type: "spring", stiffness:150 }}
          viewport={{ once: true }}
          whileHover={{ y: -5, boxShadow: "0 8px 25px -3px hsl(var(--secondary) / 0.5)" }}
        >
          {/* 
            TODO: User should place their image 'dgb-slogan-text.png' (the one provided in the prompt)
            in the 'public/images/' directory.
            The image provided is 856x214 pixels, which has a 4:1 aspect ratio.
            The width={380} and height={95} props maintain this aspect ratio.
          */}
          <Image
            src="/images/dgb-slogan-text.png" 
            alt="Powered by DGB Slogan: Shifting Limiting Realities Through Creative Mediums"
            width={380} 
            height={95}
            className="rounded-lg opacity-80 group-hover:opacity-100 transition-opacity duration-300 border-2 border-secondary/40 group-hover:border-secondary shadow-md group-hover:shadow-glow-secondary"
            data-ai-hint="pink gold slogan text"
          />
           <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap font-sans">
            Powered by DGB
          </span>
        </motion.div>
      </div>
    </motion.section>
  );
}
