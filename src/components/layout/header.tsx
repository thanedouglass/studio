import { Rocket } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-card border-b border-border shadow-sm sticky top-0 z-40">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-primary hover:opacity-90 transition-opacity">
          <Rocket className="h-8 w-8" />
          {/* Updated App Name */}
          <span>The Nexus Research Collective</span>
        </Link>
        {/* Navigation items can be added here if needed */}
      </div>
    </header>
  );
}
