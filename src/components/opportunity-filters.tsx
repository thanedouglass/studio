"use client";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Filter } from "lucide-react";
import { ACADEMIC_YEARS, RESEARCH_TYPES, DISCIPLINES, EXPERIENCE_LEVELS, POSITION_TYPES } from "@/types/opportunity";

export interface FiltersState {
  academicYear: string;
  researchType: string;
  discipline: string;
  experienceLevel: string;
  positionType: string; // New filter state
}

interface OpportunityFiltersProps {
  filters: FiltersState;
  onFilterChange: (filterName: keyof FiltersState, value: string) => void;
}

const iconColor = "text-accent";

export default function OpportunityFilters({ filters, onFilterChange }: OpportunityFiltersProps) {
  return (
    <div className="p-6 bg-card rounded-lg shadow-md space-y-6">
      <h3 className="text-xl font-semibold flex items-center">
        <Filter className={`mr-2 h-6 w-6 ${iconColor}`} />
        Filter Opportunities
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        <div>
          <Label htmlFor="academicYearFilter" className="text-sm font-medium text-foreground/80">Academic Year</Label>
          <Select value={filters.academicYear} onValueChange={(value) => onFilterChange('academicYear', value)}>
            <SelectTrigger id="academicYearFilter" className="w-full mt-1">
              <SelectValue placeholder="Select year" />
            </SelectTrigger>
            <SelectContent>
              {ACADEMIC_YEARS.map(year => (
                <SelectItem key={year} value={year}>{year}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="researchTypeFilter" className="text-sm font-medium text-foreground/80">Research Type</Label>
          <Select value={filters.researchType} onValueChange={(value) => onFilterChange('researchType', value)}>
            <SelectTrigger id="researchTypeFilter" className="w-full mt-1">
              <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent>
              {RESEARCH_TYPES.map(type => (
                <SelectItem key={type} value={type}>{type}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="disciplineFilter" className="text-sm font-medium text-foreground/80">Discipline</Label>
          <Select value={filters.discipline} onValueChange={(value) => onFilterChange('discipline', value)}>
            <SelectTrigger id="disciplineFilter" className="w-full mt-1">
              <SelectValue placeholder="Select discipline" />
            </SelectTrigger>
            <SelectContent>
              {DISCIPLINES.map(discipline => (
                <SelectItem key={discipline} value={discipline}>{discipline}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="experienceLevelFilter" className="text-sm font-medium text-foreground/80">Experience Level</Label>
          <Select value={filters.experienceLevel} onValueChange={(value) => onFilterChange('experienceLevel', value)}>
            <SelectTrigger id="experienceLevelFilter" className="w-full mt-1">
              <SelectValue placeholder="Select level" />
            </SelectTrigger>
            <SelectContent>
              {EXPERIENCE_LEVELS.map(level => (
                <SelectItem key={level} value={level}>{level}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="positionTypeFilter" className="text-sm font-medium text-foreground/80">Position Type</Label>
          <Select value={filters.positionType} onValueChange={(value) => onFilterChange('positionType', value)}>
            <SelectTrigger id="positionTypeFilter" className="w-full mt-1">
              <SelectValue placeholder="Select position type" />
            </SelectTrigger>
            <SelectContent>
              {POSITION_TYPES.map(type => (
                <SelectItem key={type} value={type}>{type}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}
