import ClientOpportunityList from '@/components/client-opportunity-list';
import LandingPageContent from '@/components/landing/landing-page-content';
import { opportunities } from '@/data/opportunities'; // This will be our mock data source

export default function HomePage() {
  // In a real app, this data would likely be fetched from an API
  const initialOpportunities = opportunities;

  return (
    <>
      <LandingPageContent />
      <div className="mt-12 md:mt-16"> {/* Added margin top for spacing */}
        <ClientOpportunityList initialOpportunities={initialOpportunities} />
      </div>
    </>
  );
}
