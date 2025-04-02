import { Milestone, MilestoneCategory } from "@/types/milestone";
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// Mock database data
const milestonesData: Milestone[] = [
  {
    id: '1', 
    title: 'Recognizes familiar faces', 
    age: 0.5, 
    category: 'cognitive',
    description: 'Baby begins to recognize parents and close family members.'
  },
  {
    id: '2', 
    title: 'Rolls over', 
    age: 0.5, 
    category: 'motor',
    description: 'Baby can roll from their back to their stomach and vice versa.'
  },
  {
    id: '3', 
    title: 'Babbling sounds', 
    age: 0.5, 
    category: 'social',
    description: 'Baby starts making consonant sounds like "ba", "da", and "ma".'
  },
  {
    id: '4', 
    title: 'Responds to name', 
    age: 1, 
    category: 'cognitive',
    description: 'Child looks or responds when their name is called.'
  },
  {
    id: '5', 
    title: 'First steps with support', 
    age: 1, 
    category: 'motor',
    description: 'Child begins to walk while holding onto furniture or hands.'
  },
  {
    id: '6', 
    title: 'First word', 
    age: 1, 
    category: 'social',
    description: 'Child says their first meaningful word.'
  },
  {
    id: '7', 
    title: 'Points to objects', 
    age: 1.5, 
    category: 'cognitive',
    description: 'Child can point to objects when named.'
  },
  {
    id: '8', 
    title: 'Walks independently', 
    age: 1.5, 
    category: 'motor',
    description: 'Child can walk without support.'
  },
  {
    id: '9', 
    title: 'Shows affection', 
    age: 1.5, 
    category: 'social',
    description: 'Child shows affection to familiar people.'
  },
  {
    id: '10', 
    title: 'Follows simple instructions', 
    age: 2, 
    category: 'cognitive',
    description: 'Child can follow simple one-step directions.'
  },
  {
    id: '11', 
    title: 'Kicks a ball', 
    age: 2, 
    category: 'motor',
    description: 'Child can kick a ball forward.'
  },
  {
    id: '12', 
    title: 'Uses 2-word phrases', 
    age: 2, 
    category: 'social',
    description: 'Child begins combining words like "want juice" or "more cookie".'
  },
  {
    id: '13', 
    title: 'Knows basic colors', 
    age: 3, 
    category: 'cognitive',
    description: 'Child can name some basic colors correctly.'
  },
  {
    id: '14', 
    title: 'Stacking blocks', 
    age: 3, 
    category: 'motor',
    description: 'Child can build a tower of blocks.'
  },
  {
    id: '15', 
    title: 'Takes turns', 
    age: 3, 
    category: 'social',
    description: 'Child begins to understand taking turns in games or activities.'
  },
  {
    id: '16', 
    title: 'Tells stories', 
    age: 4, 
    category: 'cognitive',
    description: 'Child can tell simple stories or describe recent events.'
  },
  {
    id: '17', 
    title: 'Hops on one foot', 
    age: 4, 
    category: 'motor',
    description: 'Child can hop on one foot for a short time.'
  },
  {
    id: '18', 
    title: 'Plays cooperatively', 
    age: 4, 
    category: 'social',
    description: 'Child engages in cooperative play with other children.'
  },
  {
    id: '19', 
    title: 'Counts to 10', 
    age: 5, 
    category: 'cognitive',
    description: 'Child can count from 1 to 10 correctly.'
  },
  {
    id: '20', 
    title: 'Ties shoelaces', 
    age: 5, 
    category: 'motor',
    description: 'Child learns to tie their own shoelaces.'
  },
  {
    id: '21', 
    title: 'Follows rules in games', 
    age: 5, 
    category: 'social',
    description: 'Child understands and follows rules in games with minimal reminders.'
  }
];


// Add this new function to seed the database
export const seedDatabase = async (): Promise<Milestone[] | null> => {
  try {
    // Prepare data for insertion (omit existing IDs)
    const milestones = milestonesData.map(({ id, ...rest }) => rest);
    
    // Insert all milestones at once
    const { data, error } = await supabase
      .from('milestones')
      .insert(milestones)
      .select();
    
    if (error) {
      console.error('Error seeding database:', error);
      return null;
    }
    
    console.log('Database seeded successfully with', data.length, 'milestones!');
    return data;
  } catch (err) {
    console.error('Unexpected error seeding database:', err);
    return null;
  }
};

// Update the existing functions to use Supabase
export const getMilestones = async (): Promise<Milestone[]> => {
  try {
    const { data, error } = await supabase
      .from('milestones')
      .select('*');
    
    if (error) {
      console.error('Error fetching milestones:', error);
      return milestonesData; // Fallback to mock data
    }
    
    return data as Milestone[];
  } catch (err) {
    console.error('Unexpected error:', err);
    return milestonesData; // Fallback to mock data
  }
};

export const filterMilestones = async (
  category?: MilestoneCategory,
  age?: number
): Promise<Milestone[]> => {
  try {
    let query = supabase
      .from('milestones')
      .select('*');
    
    if (category) {
      query = query.eq('category', category);
    }
    
    if (age !== undefined) {
      query = query.eq('age', age);
    }
    
    const { data, error } = await query;
    
    if (error) {
      console.error('Error filtering milestones:', error);
      // Fallback to filtering mock data
      return mockFilterMilestones(category, age);
    }
    
    return data as Milestone[];
  } catch (err) {
    console.error('Unexpected error:', err);
    // Fallback to filtering mock data
    return mockFilterMilestones(category, age);
  }
};

// Keep the original filter function as a fallback
const mockFilterMilestones = (
  category?: MilestoneCategory,
  age?: number
): Milestone[] => {
  let filtered = [...milestonesData];
  
  if (category) {
    filtered = filtered.filter(milestone => milestone.category === category);
  }
  
  if (age !== undefined) {
    filtered = filtered.filter(milestone => milestone.age === age);
  }
  
  return filtered;
};