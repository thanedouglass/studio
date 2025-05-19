import ClientOpportunityList from '@/components/client-opportunity-list';
import { opportunities } from '@/data/opportunities'; // This will be our mock data source

export default function HomePage() {
  // In a real app, this data would likely be fetched from an API
  const initialOpportunities = opportunities;

  return (
    <ClientOpportunityList initialOpportunities={initialOpportunities} />
  );
}
