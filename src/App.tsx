
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

interface Exercise {
  id: string;
  name: string;
  sets: string;
  completed: boolean;
}

interface Workout {
  id: 'A' | 'B' | 'C' | 'D';
  title: string;
  day: string;
  exercises: Exercise[];
}

function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(storedValue));
  }, [key, storedValue]);

  return [storedValue, setStoredValue] as const;
}

const initialWorkouts: Workout[] = [
  {
    id: 'A',
    title: 'Peito, Ombros e Tríceps (empurrar)',
    day: 'Segunda-feira',
    exercises: [
      { id: 'a1', name: 'Supino reto com barra ou halteres', sets: '3x8-10', completed: false },
      { id: 'a2', name: 'Supino inclinado OU Crucifixo inclinado', sets: '3x10', completed: false },
      { id: 'a3', name: 'Desenvolvimento com halteres (ombros)', sets: '3x10', completed: false },
      { id: 'a4', name: 'Elevação lateral (ombros)', sets: '3x12', completed: false },
      { id: 'a5', name: 'Tríceps na polia ou banco', sets: '3x12', completed: false },
      { id: 'a6', name: 'Abdominais (prancha ou crunch)', sets: '3x30-60s', completed: false },
    ],
  },
  {
    id: 'B',
    title: 'Costas e Bíceps (puxar)',
    day: 'Terça-feira',
    exercises: [
      { id: 'b1', name: 'Puxada na frente (pulldown) ou barra fixa assistida', sets: '3x10', completed: false },
      { id: 'b2', name: 'Remada baixa ou curvada com halteres', sets: '3x10', completed: false },
      { id: 'b3', name: 'Remada unilateral (um braço por vez)', sets: '3x10 por lado', completed: false },
      { id: 'b4', name: 'Rosca direta com barra ou halteres', sets: '3x12', completed: false },
      { id: 'b5', name: 'Rosca alternada ou concentrada', sets: '3x12', completed: false },
      { id: 'b6', name: 'Abdominais oblíquos (bicicleta ou prancha lateral)', sets: '3x30s', completed: false },
    ],
  },
  {
    id: 'C',
    title: 'Pernas e Glúteos',
    day: 'Quinta-feira',
    exercises: [
      { id: 'c1', name: 'Agachamento com peso corporal ou barra', sets: '3x10', completed: false },
      { id: 'c2', name: 'Leg press (máquina)', sets: '3x12', completed: false },
      { id: 'c3', name: 'Afundo (passada) com halteres', sets: '3x10 por perna', completed: false },
      { id: 'c4', name: 'Mesa flexora (posterior da coxa)', sets: '3x12', completed: false },
      { id: 'c5', name: 'Extensora (quadríceps)', sets: '3x12', completed: false },
      { id: 'c6', name: 'Elevação de panturrilhas (em pé ou sentado)', sets: '3x15', completed: false },
      { id: 'c7', name: 'Prancha', sets: '3x30-60s', completed: false },
    ],
  },
  {
    id: 'D',
    title: 'Core + Full Body leve (estabilização e resistência)',
    day: 'Sexta-feira',
    exercises: [
      { id: 'd1', name: 'Stiff com halteres', sets: '3x10', completed: false },
      { id: 'd2', name: 'Levantamento terra com halteres ou barra leve', sets: '3x8', completed: false },
      { id: 'd3', name: 'Passada lateral ou agachamento sumô', sets: '3x10 por lado', completed: false },
      { id: 'd4', name: 'Prancha + elevação de perna alternada', sets: '3x30s', completed: false },
      { id: 'd5', name: 'Abdominal infra com peso ou com pernas elevadas', sets: '3x15', completed: false },
      { id: 'd6', name: 'Bicicleta ergométrica ou escada', sets: '10 min', completed: false },
    ],
  },
];

function Home({ workouts }: { workouts: Workout[] }) {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Noro Treino</h1>
      <ul className="space-y-2">
        {workouts.map((workout) => (
          <li key={workout.id}>
            <Link to={`/treino/${workout.id}`} className="text-blue-500 underline">
              Treino {workout.id} - {workout.day}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function WorkoutPage({ workouts, setWorkouts }: { workouts: Workout[]; setWorkouts: (w: Workout[]) => void }) {
  const { id } = useParams();
  const workout = workouts.find((w) => w.id === id);

  const toggleExercise = (exerciseId: string) => {
    if (!workout) return;
    const updatedWorkouts = workouts.map((w) =>
      w.id === workout.id
        ? {
            ...w,
            exercises: w.exercises.map((ex) =>
              ex.id === exerciseId ? { ...ex, completed: !ex.completed } : ex
            ),
          }
        : w
    );
    setWorkouts(updatedWorkouts);
  };

  if (!workout) return <div>Treino não encontrado</div>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Treino {workout.id} - {workout.title}</h2>
      <ul className="space-y-2">
        {workout.exercises.map((ex) => (
          <li key={ex.id} className="flex items-center">
            <input
              type="checkbox"
              checked={ex.completed}
              onChange={() => toggleExercise(ex.id)}
              className="mr-2"
            />
            <span className={ex.completed ? 'line-through text-gray-500' : ''}>
              {ex.name} – {ex.sets}
            </span>
          </li>
        ))}
      </ul>
      <button
        className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
        onClick={() => setWorkouts(initialWorkouts)}
      >
        Resetar Progresso
      </button>
    </div>
  );
}

export default function App() {
  const [workouts, setWorkouts] = useLocalStorage<Workout[]>('noro-treino', initialWorkouts);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home workouts={workouts} />} />
        <Route path="/treino/:id" element={<WorkoutPage workouts={workouts} setWorkouts={setWorkouts} />} />
      </Routes>
    </Router>
  );
}
