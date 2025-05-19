import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react'; // Or any other relevant icon

export default function HeroSection() {
  return (
    <section className="relative text-center py-20 md:py-32 lg:py-48 overflow-hidden">
      {/* Background Image/Visual */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://placehold.co/1600x900.png" // Placeholder for complex background
          alt="Abstract background with cherry blossom gradient, gold dust, and geometric calabashes"
          layout="fill"
          objectFit="cover"
          priority
          className="opacity-30" // Subtle background
          data-ai-hint="cherry blossom gradient gold dust geometric calabashes abstract art"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background"></div> {/* Gradient overlay for better text readability */}
      </div>

      {/* Text Overlay Content */}
      <div className="relative z-10 container mx-auto px-4">
        <h1 className="font-sans text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
          <span className="text-cherry-blossom-pink">The Nexus</span> Research Collective
        </h1>
        <p className="font-sans text-xl md:text-2xl text-warm-off-white/90 mb-10 max-w-3xl mx-auto">
          Open. Safe. Decentralized. Equitable Science for All.
        </p>
        
        <div className="bg-card/50 backdrop-blur-sm p-6 md:p-8 rounded-xl max-w-2xl mx-auto shadow-2xl border border-brushed-gold/30">
          <h2 className="text-3xl md:text-4xl font-semibold text-brushed-gold mb-4 flex items-center justify-center">
            <Sparkles className="w-8 h-8 mr-3 text-brushed-gold" />
            We Stand for Safe Science
          </h2>
          <p className="text-md md:text-lg text-warm-off-white/80 mb-8">
            Join a new era of purpose-driven collaboration—where researchers and creators converge to decentralize knowledge, restore trust, and give back to science itself.
          </p>
          <Button 
            variant="outline" 
            size="lg" 
            className="font-semibold border-2 border-brushed-gold text-brushed-gold rounded-lg px-8 py-3
                       hover:bg-brushed-gold hover:text-background 
                       hover:shadow-[0_0_20px_5px_hsl(var(--cherry-blossom-pink-hsl))]
                       transition-all duration-300 ease-in-out group"
          >
            Pledge the Collective
            <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">✨</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
