// src/App.tsx

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useLocalStorage } from './hooks/useLocalStorage';
import { initialWorkouts } from './data/workouts';
import { Workout } from './types';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import WorkoutPage from './pages/Workout';

export default function App() {
  const [workouts, setWorkouts] = useLocalStorage<Workout[]>('noro-treino', initialWorkouts);

  return (
    <Router>
      <div className="min-h-screen bg-white text-gray-900 dark:bg-zinc-900 dark:text-white transition-colors">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home workouts={workouts} />} />
          <Route
            path="/treino/:id"
            element={
              <WorkoutPage
                workouts={workouts}
                setWorkouts={setWorkouts}
                initialWorkouts={initialWorkouts}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}
