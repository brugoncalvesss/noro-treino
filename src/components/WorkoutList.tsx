import { Link } from 'react-router-dom';
import { Workout } from '../types';

interface Props {
  workouts: Workout[];
}

export default function WorkoutList({ workouts }: Props) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2">
      {workouts.map(workout => (
        <li key={workout.id}>
          <Link
            to={`/treino/${workout.id}`}
            className="block bg-white dark:bg-zinc-800 shadow rounded-xl px-5 py-6
                       hover:bg-gray-100 dark:hover:bg-zinc-700 transition-colors"
          >
            <div className="font-semibold text-lg sm:text-xl text-gray-800 dark:text-white">
              Treino {workout.id}
            </div>
            <div className="text-sm sm:text-base text-gray-500">{workout.day}</div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
