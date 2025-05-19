// src/app/page.tsx
"use client";

import ClientOpportunityList from '@/components/client-opportunity-list';
import LandingPageContent from '@/components/landing/landing-page-content';
import { FirebaseOnboarding } from '@/components/firebase/firebase-onboarding';
import { PledgeFeed } from '@/components/firebase/pledge-feed';
import { ResearcherMatch } from '@/components/landing/researcher-match';
import { ParticleBackground } from '@/components/particle-background';
import { opportunities } from '@/data/opportunities';
import { motion } from 'framer-motion';
import { Separator } from '@/components/ui/separator';

export default function HomePage() {
  const initialOpportunities = opportunities;

  return (
    <div className="relative"> {/* Added relative positioning for ParticleBackground */}
      <ParticleBackground />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="relative z-10" // Ensure content is above particles
      >
        <LandingPageContent />

        <motion.div
          className="container mx-auto px-4 py-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
        >
          <FirebaseOnboarding />
        </motion.div>
        
        <motion.div
          className="container mx-auto px-4 py-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
        >
          <PledgeFeed />
        </motion.div>
        
        <div className="container mx-auto max-w-4xl my-8 md:my-12">
         <Separator className="bg-border/30" />
        </div>

        <ResearcherMatch />
        
        <div className="container mx-auto max-w-4xl my-8 md:my-12">
          <Separator className="bg-border/30" />
        </div>

        {/* "Find Your Research Opportunity" Section */}
        <motion.div
          className="mt-12 md:mt-16 pt-12" // Adjusted top margin
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }} // Adjusted delay
        >
          <ClientOpportunityList initialOpportunities={initialOpportunities} />
        </motion.div>
      </motion.div>
    </div>
  );
}
