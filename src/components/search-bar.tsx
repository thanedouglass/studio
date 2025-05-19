"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search as SearchIcon } from "lucide-react";
import type React from 'react';

interface SearchBarProps {
  searchTerm: string;
  onSearchTermChange: (term: string) => void;
  onSearch: () => void;
}

export default function SearchBar({ searchTerm, onSearchTermChange, onSearch }: SearchBarProps) {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearchTermChange(event.target.value);
  };

  const handleSearchClick = () => {
    onSearch();
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onSearch();
    }
  };

  return (
    <div className="flex w-full items-center space-x-2">
      <Input
        type="text"
        placeholder="Search by title, PI, keywords..."
        value={searchTerm}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        className="flex-grow"
        aria-label="Search opportunities"
      />
      <Button type="button" onClick={handleSearchClick} className="bg-primary hover:bg-primary/90 text-primary-foreground">
        <SearchIcon className="h-5 w-5 mr-2 text-primary-foreground" />
        Search
      </Button>
    </div>
  );
}
