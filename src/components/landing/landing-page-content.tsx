import HeroSection from './hero-section';
import PledgeStatement from './pledge-statement';
import DGBMissionIntegration from './dgb-mission-integration';
import { Separator } from '@/components/ui/separator';

export default function LandingPageContent() {
  return (
    <div className="space-y-12 md:space-y-16 lg:space-y-20 mb-16 md:mb-24">
      <HeroSection />
      <div className="container mx-auto max-w-4xl">
        <Separator className="bg-border/50" />
      </div>
      <PledgeStatement />
      <div className="container mx-auto max-w-4xl">
        <Separator className="bg-border/50" />
      </div>
      <DGBMissionIntegration />
    </div>
  );
}
