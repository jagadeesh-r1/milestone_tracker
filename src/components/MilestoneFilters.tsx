
import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MilestoneCategory } from '@/types/milestone';
import { Label } from '@/components/ui/label';

interface MilestoneFiltersProps {
  selectedCategory: MilestoneCategory | '';
  setSelectedCategory: (category: MilestoneCategory | '') => void;
  selectedAge: string;
  setSelectedAge: (age: string) => void;
  ageOptions: string[];
}

const MilestoneFilters: React.FC<MilestoneFiltersProps> = ({
  selectedCategory,
  setSelectedCategory,
  selectedAge,
  setSelectedAge,
  ageOptions
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-8">
      <div className="flex-1">
        <Label htmlFor="category-filter" className="text-lg font-semibold mb-2 block">
          Filter by Category
        </Label>
        <Select
          value={selectedCategory}
          onValueChange={(value) => setSelectedCategory(value as MilestoneCategory | '')}
        >
          <SelectTrigger id="category-filter" className="w-full text-lg h-12">
            <SelectValue placeholder="All Categories" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="cognitive">Cognitive</SelectItem>
            <SelectItem value="motor">Motor</SelectItem>
            <SelectItem value="social">Social</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className="flex-1">
        <Label htmlFor="age-filter" className="text-lg font-semibold mb-2 block">
          Filter by Age
        </Label>
        <Select
          value={selectedAge}
          onValueChange={setSelectedAge}
        >
          <SelectTrigger id="age-filter" className="w-full text-lg h-12">
            <SelectValue placeholder="All Ages" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Ages</SelectItem>
            {ageOptions.map((age) => (
              <SelectItem key={age} value={age}>{age}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default MilestoneFilters;
