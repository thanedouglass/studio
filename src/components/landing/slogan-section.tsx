// src/components/landing/slogan-section.tsx
"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

export default function SloganSection() {
  return (
    <motion.section 
      className="py-16 md:py-24"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          whileHover={{ y: -5, boxShadow: "0 10px 30px -5px hsl(var(--primary) / 0.4)" }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <Card className="relative overflow-hidden shadow-xl border-secondary/30 bg-transparent group">
            {/* Background Image with Glassmorphic effect */}
            <div className="absolute inset-0 z-0">
              <Image
                src="https://placehold.co/1024x400.png" // Placeholder for DGB_YouTube_Channel_Art.jpeg
                alt="Abstract background with cherry blossom petals"
                layout="fill"
                objectFit="cover"
                className="opacity-30 group-hover:opacity-40 transition-opacity duration-500"
                data-ai-hint="youtube channel art abstract"
              />
              <div className="absolute inset-0 bg-card/50 backdrop-blur-sm z-10"></div>
               {/* Subtle Petal Elements (Placeholder) */}
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute text-primary opacity-20"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: [0, 0.2, 0], scale: [0.5, 1.2, 0.5], rotate: Math.random() * 360 }}
                  transition={{ duration: 5 + Math.random() * 5, repeat: Infinity, delay: i*1, ease: "easeInOut" }}
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    fontSize: `${20 + Math.random() * 30}px`
                  }}
                  data-ai-hint="cherry blossom petal"
                >
                  🌸
                </motion.div>
              ))}
            </div>

            <CardContent className="relative z-20 p-8 md:p-12 text-center text-accent font-serif">
              <motion.h2 
                className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 text-glow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              >
                Shifting Limiting Realities Through Creative Mediums
              </motion.h2>
              <motion.p 
                className="text-lg md:text-xl text-foreground/80 font-sans"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              >
                Double what you are. Giveback what you know. Shift what they said was fixed.
              </motion.p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.section>
  );
}
