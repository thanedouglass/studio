import type { Opportunity } from '@/types/opportunity';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, CalendarDays, User, Award, Briefcase, BookOpen, ClockIcon } from 'lucide-react';

interface OpportunityCardProps {
  opportunity: Opportunity;
}

export default function OpportunityCard({ opportunity }: OpportunityCardProps) {
  const iconColor = "text-accent"; // As per UI guidelines for icons

  return (
    <Card className="flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <CardHeader>
        <div className="relative w-full h-48 mb-4 rounded-t-lg overflow-hidden">
          <Image
            src={opportunity.imageUrl}
            alt={opportunity.title}
            layout="fill"
            objectFit="cover"
            data-ai-hint={opportunity.imageHint || "research science"}
          />
        </div>
        <CardTitle className="text-xl lg:text-2xl text-primary">{opportunity.title}</CardTitle>
        <CardDescription className="flex items-center gap-2 text-muted-foreground">
          <User className={`w-4 h-4 ${iconColor}`} /> {opportunity.principalInvestigator} - {opportunity.department}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow space-y-3">
        <p className="text-sm text-foreground/90">{opportunity.description.substring(0, 150)}{opportunity.description.length > 150 ? '...' : ''}</p>
        
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2">
            <MapPin className={`w-4 h-4 ${iconColor}`} /> <span>{opportunity.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <ClockIcon className={`w-4 h-4 ${iconColor}`} /> <span>Duration: {opportunity.duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <CalendarDays className={`w-4 h-4 ${iconColor}`} /> 
            <span>Deadline: {opportunity.isRollingApplication ? 'Rolling' : opportunity.applicationDeadline}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 pt-2">
          <Badge variant="secondary">{opportunity.academicYear}</Badge>
          <Badge variant="secondary">{opportunity.researchType}</Badge>
          <Badge variant="outline" className="border-accent text-accent">{opportunity.discipline}</Badge>
          <Badge variant="outline" className="border-accent text-accent">{opportunity.experienceLevel}</Badge>
        </div>
        {opportunity.keywords && opportunity.keywords.length > 0 && (
          <div className="flex flex-wrap gap-1 pt-1">
            {opportunity.keywords.slice(0,3).map(keyword => (
              <Badge key={keyword} variant="outline" className="text-xs">{keyword}</Badge>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Button variant="default" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
}
