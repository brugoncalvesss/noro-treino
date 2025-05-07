import { Exercise } from '../types';

interface Props {
  exercises: Exercise[];
  onToggle: (exerciseId: string) => void;
}

export default function ExerciseList({ exercises, onToggle }: Props) {
  return (
    <ul className="space-y-3">
      {exercises.map((ex) => (
        <li
          key={ex.id}
          className="flex items-center bg-white dark:bg-zinc-800 p-3 rounded shadow"
        >
          <input
            type="checkbox"
            checked={ex.completed}
            onChange={() => onToggle(ex.id)}
            className="mr-3 w-5 h-5"
          />
          <span
            className={`flex-1 ${
              ex.completed ? 'line-through text-gray-500' : 'text-gray-900 dark:text-gray-100'
            }`}
          >
            {ex.name} – <span className="text-sm text-gray-500">{ex.sets}</span>
          </span>
        </li>
      ))}
    </ul>
  );
}
