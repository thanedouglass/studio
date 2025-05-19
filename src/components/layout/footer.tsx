// src/components/layout/footer.tsx
"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Github, MessageSquare, Twitter, Layers } from 'lucide-react'; // Using Lucide icons

const iconVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15 + 0.5, // Stagger + initial delay
      type: 'spring',
      stiffness: 150,
      damping: 10,
    },
  }),
};

const footerLinks = [
  { name: 'Zora', href: '#', icon: Layers }, // Placeholder for Zora, Layers as generic
  { name: 'X', href: '#', icon: Twitter },
  { name: 'Mirror', href: '#', icon: MessageSquare }, // Placeholder for Mirror
  { name: 'GitHub', href: '#', icon: Github },
];

export default function Footer() {
  return (
    <motion.footer 
      className="bg-card/50 border-t border-border mt-auto backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      <div className="container mx-auto px-4 py-8 text-center">
        <motion.p 
          className="text-sm text-muted-foreground font-sans"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          © {new Date().getFullYear()} The Nexus Research Collective — Powered by DGB (double & giveback)
        </motion.p>
        <div className="flex justify-center space-x-6 mt-4">
          {footerLinks.map((link, index) => (
            <motion.div
              key={link.name}
              custom={index}
              variants={iconVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.2, color: 'hsl(var(--secondary))' }}
              className="text-muted-foreground hover:text-secondary transition-colors"
            >
              <Link href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
                <link.icon className="w-6 h-6" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.footer>
  );
}
