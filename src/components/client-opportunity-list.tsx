"use client";

import type { Opportunity } from '@/types/opportunity';
import { useState, useMemo, useCallback } from 'react';
import OpportunityCard from './opportunity-card';
import SearchBar from './search-bar';
import OpportunityFilters, { type FiltersState } from './opportunity-filters';

interface ClientOpportunityListProps {
  initialOpportunities: Opportunity[];
}

const defaultFilters: FiltersState = {
  academicYear: "All",
  researchType: "All",
  discipline: "All",
  experienceLevel: "All",
  positionType: "All", // New default filter
};

export default function ClientOpportunityList({ initialOpportunities }: ClientOpportunityListProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeSearchTerm, setActiveSearchTerm] = useState('');
  const [filters, setFilters] = useState<FiltersState>(defaultFilters);

  const handleSearchTermChange = useCallback((term: string) => {
    setSearchTerm(term);
  }, []);

  const handleSearch = useCallback(() => {
    setActiveSearchTerm(searchTerm.toLowerCase());
  }, [searchTerm]);
  
  const handleFilterChange = useCallback((filterName: keyof FiltersState, value: string) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [filterName]: value,
    }));
  }, []);

  const filteredOpportunities = useMemo(() => {
    return initialOpportunities.filter(op => {
      const searchMatch = activeSearchTerm === '' ||
        op.title.toLowerCase().includes(activeSearchTerm) ||
        op.principalInvestigator.toLowerCase().includes(activeSearchTerm) ||
        (op.keywords && op.keywords.some(keyword => keyword.toLowerCase().includes(activeSearchTerm))) ||
        op.discipline.toLowerCase().includes(activeSearchTerm);

      const academicYearMatch = filters.academicYear === "All" || op.academicYear === filters.academicYear;
      const researchTypeMatch = filters.researchType === "All" || op.researchType === filters.researchType;
      const disciplineMatch = filters.discipline === "All" || op.discipline === filters.discipline;
      const experienceLevelMatch = filters.experienceLevel === "All" || op.experienceLevel === filters.experienceLevel;
      const positionTypeMatch = filters.positionType === "All" || 
                                (op.positionType && op.positionType.some(pt => pt.toLowerCase() === filters.positionType.toLowerCase()));
      
      return searchMatch && academicYearMatch && researchTypeMatch && disciplineMatch && experienceLevelMatch && positionTypeMatch;
    });
  }, [initialOpportunities, activeSearchTerm, filters]);

  return (
    <div className="space-y-8">
      <div className="space-y-6 p-6 bg-card rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-primary">Find Your Research Opportunity</h2>
        <SearchBar 
          searchTerm={searchTerm}
          onSearchTermChange={handleSearchTermChange}
          onSearch={handleSearch}
        />
      </div>
      
      <OpportunityFilters filters={filters} onFilterChange={handleFilterChange} />

      {filteredOpportunities.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredOpportunities.map(op => (
            <OpportunityCard key={op.id} opportunity={op} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-xl text-muted-foreground">No opportunities match your current filters.</p>
          <p className="text-foreground/70 mt-2">Try adjusting your search or filter criteria.</p>
        </div>
      )}
    </div>
  );
}
