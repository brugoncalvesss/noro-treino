import WorkoutList from '../components/WorkoutList';
import { Workout } from '../types';

interface Props {
  workouts: Workout[];
}

export default function Home({ workouts }: Props) {
  return (
    <div className="p-4 sm:p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">Treino semanal</h1>
      <WorkoutList workouts={workouts} />
    </div>
  );
}
