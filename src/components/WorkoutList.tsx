import { Link } from 'react-router-dom';
import { Workout } from '../types';

interface Props {
  workouts: Workout[];
}

export default function WorkoutList({ workouts }: Props) {
  return (
    <ul className="space-y-4">
      {workouts.map((workout) => (
        <li key={workout.id}>
          <Link
            to={`/treino/${workout.id}`}
            className="block bg-white dark:bg-zinc-800 shadow rounded-lg p-4 hover:bg-gray-100 dark:hover:bg-zinc-700 transition"
          >
            <div className="font-semibold text-lg text-gray-800 dark:text-white">
              Treino {workout.id}
            </div>
            <div className="text-sm text-gray-500">{workout.day}</div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
