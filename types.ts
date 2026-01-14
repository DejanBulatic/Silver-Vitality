
export type Section = 'morning' | 'workouts' | 'nutrition' | 'evening' | 'home' | 'log';

export interface RoutineStep {
  id: string;
  title: string;
  duration: string;
  description: string;
  longDescription?: string;
  videoUrl?: string;
  icon: string;
  completed: boolean;
}

export interface Workout {
  id: string;
  title: string;
  difficulty: 'Easy' | 'Moderate';
  duration: string;
  image: string;
  description: string;
}

export interface Meal {
  id: string;
  type: 'Breakfast' | 'Lunch' | 'Dinner' | 'Snack';
  name: string;
  calories: number;
  benefits: string[];
}

export interface LogEntry {
  id: string;
  phase: string;
  title: string;
  status: 'completed' | 'current' | 'upcoming';
  date?: string;
  description: string;
  milestones: string[];
}
