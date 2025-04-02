
export type MilestoneCategory = 'cognitive' | 'motor' | 'social';

export interface Milestone {
  id: string;
  title: string;
  age: number;
  category: MilestoneCategory;
  description?: string;
}
