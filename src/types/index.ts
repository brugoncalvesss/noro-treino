export interface Exercise {
  id: string;
  name: string;
  sets: string;
  completed: boolean;
}

export interface Workout {
  id: "A" | "B" | "C" | "D";
  title: string;
  day: string;
  exercises: Exercise[];
}
