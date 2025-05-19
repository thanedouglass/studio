// src/app/page.tsx
"use client"; // Required for Framer Motion page-level animations

import ClientOpportunityList from '@/components/client-opportunity-list';
import LandingPageContent from '@/components/landing/landing-page-content';
import { opportunities } from '@/data/opportunities'; 
import { motion } from 'framer-motion';

export default function HomePage() {
  const initialOpportunities = opportunities;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <LandingPageContent />
      
      {/* "Find Your Research Opportunity" Section */}
      <motion.div 
        className="mt-16 md:mt-24 pt-12 border-t border-border/30"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
      >
        <ClientOpportunityList initialOpportunities={initialOpportunities} />
      </motion.div>
    </motion.div>
  );
}
