// src/components/landing/landing-page-content.tsx
"use client";

import HeroSection from './hero-section';
import SloganSection from './slogan-section';
import PledgeStatement from './pledge-statement';
import DGBMissionIntegration from './dgb-mission-integration';
import { Separator } from '@/components/ui/separator';
import { motion } from 'framer-motion';

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i:number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15, // Adjusted stagger delay
      duration: 0.7,
      ease: "easeOut",
    },
  }),
};

export default function LandingPageContent() {
  const sections = [
    { component: <HeroSection key="hero" />, showSeparator: true },
    { component: <SloganSection key="slogan" />, showSeparator: true },
    { component: <PledgeStatement key="pledge" />, showSeparator: true },
    { component: <DGBMissionIntegration key="dgb" />, showSeparator: false }, // No separator after the last main landing section
  ];

  return (
    <div className="space-y-0 mb-12 md:mb-16">
      {sections.map((sectionInfo, index) => (
        <motion.div
          key={`section-wrapper-${index}`}
          custom={index}
          initial="hidden"
          whileInView="visible" // Changed from animate to whileInView for better scroll-based animation
          variants={sectionVariants}
          viewport={{ once: true, amount: 0.1 }} 
        >
          {sectionInfo.component}
          {sectionInfo.showSeparator && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="container mx-auto max-w-4xl my-8 md:my-16" // Increased margin for separators
            >
              <Separator className="bg-border/30" />
            </motion.div>
          )}
        </motion.div>
      ))}
    </div>
  );
}
