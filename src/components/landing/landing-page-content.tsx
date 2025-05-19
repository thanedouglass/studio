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
      delay: i * 0.2, // Stagger delay for each section
      duration: 0.7,
      ease: "easeOut",
    },
  }),
};

export default function LandingPageContent() {
  const sections = [
    <HeroSection key="hero" />,
    <div key="sep1" className="container mx-auto max-w-4xl my-8 md:my-12">
      <Separator className="bg-border/30" />
    </div>,
    <SloganSection key="slogan" />,
    <div key="sep2" className="container mx-auto max-w-4xl my-8 md:my-12">
      <Separator className="bg-border/30" />
    </div>,
    <PledgeStatement key="pledge" />,
    <div key="sep3" className="container mx-auto max-w-4xl my-8 md:my-12">
      <Separator className="bg-border/30" />
    </div>,
    <DGBMissionIntegration key="dgb" />,
  ];

  return (
    <div className="space-y-0 mb-16 md:mb-24"> {/* Removed space-y from here, handled by motion.div or margins */}
      {sections.map((SectionComponent, index) => (
        <motion.div
          key={index}
          custom={index}
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          viewport={{ once: true, amount: 0.1 }} // Trigger when 10% of section is visible
        >
          {SectionComponent}
        </motion.div>
      ))}
    </div>
  );
}
