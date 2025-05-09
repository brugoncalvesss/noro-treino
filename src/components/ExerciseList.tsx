import { Exercise } from '../types';
import { CheckCircle, Circle } from 'phosphor-react';

interface Props {
  exercises: Exercise[];
  onToggle: (exerciseId: string) => void;
}

export default function ExerciseList({ exercises, onToggle }: Props) {
  return (
    <ul className="space-y-3">
      {exercises.map(ex => (
        <li
          key={ex.id}
          className="flex items-start gap-3 bg-white dark:bg-zinc-800 p-4 rounded-xl shadow
                     transition-colors duration-150 hover:bg-gray-50 dark:hover:bg-zinc-700"
        >
          <button
            onClick={() => onToggle(ex.id)}
            className="mt-1"
            aria-label={ex.completed ? 'Desmarcar exercício' : 'Marcar exercício como concluído'}
          >
            {ex.completed ? (
              <CheckCircle size={24} weight="bold" className="text-green-500" />
            ) : (
              <Circle size={24} weight="regular" className="text-gray-400" />
            )}
          </button>

          <span
            className={`flex-1 text-base sm:text-lg leading-snug ${
              ex.completed ? 'line-through text-gray-500' : 'text-gray-900 dark:text-gray-100'
            }`}
          >
            {ex.name}
            <span className="block text-sm text-gray-500">{ex.sets}</span>
          </span>
        </li>
      ))}
    </ul>
  );
}
