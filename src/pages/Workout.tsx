import { useParams } from 'react-router-dom';
import { Workout } from '../types';
import ExerciseList from '../components/ExerciseList';
import ResetButton from '../components/ResetButton';

interface Props {
  workouts: Workout[];
  setWorkouts: (workouts: Workout[]) => void;
  initialWorkouts: Workout[];
}

export default function WorkoutPage({ workouts, setWorkouts, initialWorkouts }: Props) {
  const { id } = useParams();
  const workout = workouts.find(w => w.id === id);

  const toggleExercise = (exerciseId: string) => {
    if (!workout) return;
    const updatedWorkouts = workouts.map(w =>
      w.id === workout.id
        ? {
            ...w,
            exercises: w.exercises.map(ex =>
              ex.id === exerciseId ? { ...ex, completed: !ex.completed } : ex,
            ),
          }
        : w,
    );
    setWorkouts(updatedWorkouts);
  };

  if (!workout) {
    return (
      <div className="p-6 text-center text-gray-700 dark:text-gray-300">Treino não encontrado.</div>
    );
  }

  return (
    <div className="p-4 sm:p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
        Treino {workout.id} – {workout.title}
      </h2>

      <ExerciseList exercises={workout.exercises} onToggle={toggleExercise} />
      <ResetButton onReset={() => setWorkouts(initialWorkouts)} />
    </div>
  );
}
