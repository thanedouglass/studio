import Image from 'next/image';
import { ShieldCheck } from 'lucide-react';

export default function DGBMissionIntegration() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <h2 className="font-sans text-3xl md:text-4xl font-semibold text-accent mb-8 flex items-center justify-center">
          <ShieldCheck className="w-10 h-10 mr-3 text-accent" />
          Why We Exist
        </h2>
        <p className="font-sans text-md md:text-lg leading-relaxed text-warm-off-white/80 mb-12">
          The Nexus is powered by the ethos of Double & Giveback Inc.—an organization devoted to shifting limiting realities through creative mediums, systems, and open-source infrastructure. We envision a world where researchers and innovators don’t just contribute to knowledge, but reshape how knowledge is accessed, funded, and redistributed.
        </p>
        <div 
          className="group relative inline-block"
          title="Powered by DGB – We Double What You Are, We Giveback What You Know."
        >
          <Image
            src="https://placehold.co/150x150.png"
            alt="DGB Slogan Seal"
            width={120}
            height={120}
            className="rounded-full opacity-70 group-hover:opacity-100 transition-opacity duration-300 border-2 border-brushed-gold/50 group-hover:border-brushed-gold"
            data-ai-hint="DGB logo seal abstract"
          />
           <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Powered by DGB
          </span>
        </div>
      </div>
    </section>
  );
}
