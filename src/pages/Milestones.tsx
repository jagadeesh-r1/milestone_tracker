import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getMilestones } from '@/services/milestoneService';
import { Milestone, MilestoneCategory } from '@/types/milestone';
import MilestoneCard from '@/components/MilestoneCard';
import MilestoneFilters from '@/components/MilestoneFilters';
import { Skeleton } from '@/components/ui/skeleton';
import { useSearchParams } from 'react-router-dom';

const Milestones = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  // Initialize state with URL parameters if they exist
  const [selectedCategory, setSelectedCategory] = useState<MilestoneCategory | ''>(
    () => (searchParams.get('category') as MilestoneCategory | '') || ''
  );
  
  const [selectedAge, setSelectedAge] = useState<string>(
    () => searchParams.get('age') || ''
  );
  
  // Update URL when filters change
  const updateCategory = (category: MilestoneCategory | '') => {
    const newParams = new URLSearchParams(searchParams);
    
    if (category && category !== 'all') {
      newParams.set('category', category);
    } else {
      newParams.delete('category');
    }
    
    setSearchParams(newParams);
    setSelectedCategory(category);
  };

  const updateAge = (age: string) => {
    const newParams = new URLSearchParams(searchParams);
    
    if (age && age !== 'all') {
      newParams.set('age', age);
    } else {
      newParams.delete('age');
    }
    
    setSearchParams(newParams);
    setSelectedAge(age);
  };
  
  // Fetch all milestones from Supabase
  const { data: milestones, isLoading, error } = useQuery({
    queryKey: ['milestones'],
    queryFn: getMilestones,
  });

  // Extract unique age options from milestones
  const ageOptions = React.useMemo(() => {
    if (!milestones) return [];
    const ages = new Set(milestones.map(milestone => String(milestone.age)));
    return Array.from(ages).sort((a, b) => parseFloat(a) - parseFloat(b));
  }, [milestones]);

  // Filter milestones based on selected category and age
  const filteredMilestones = React.useMemo(() => {
    if (!milestones) return [];
    
    return milestones.filter(milestone => {
      const categoryMatch = !selectedCategory || selectedCategory === 'all' || milestone.category === selectedCategory;
      const ageMatch = !selectedAge || selectedAge === 'all' || String(milestone.age) === selectedAge;
      return categoryMatch && ageMatch;
    });
  }, [milestones, selectedCategory, selectedAge]);

  if (isLoading) {
    return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...Array(6)].map((_, i) => (
        <Skeleton key={i} className="h-[300px] rounded-lg" />
      ))}
    </div>;
  }

  if (error) {
    return <div>Error loading milestones: {(error as Error).message}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Developmental Milestones</h1>
      
      <MilestoneFilters
        selectedCategory={selectedCategory}
        setSelectedCategory={updateCategory}
        selectedAge={selectedAge}
        setSelectedAge={updateAge}
        ageOptions={ageOptions}
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMilestones.map(milestone => (
          <MilestoneCard key={milestone.id} milestone={milestone} />
        ))}
      </div>
    </div>
  );
};

export default Milestones;