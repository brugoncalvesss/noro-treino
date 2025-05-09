import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import WorkoutPage from './pages/Workout';
import Login from './pages/Login';
import { useLocalStorage } from './hooks/useLocalStorage';
import { useAuth } from './hooks/useAuth';
import { initialWorkouts } from './data/workouts';
import { Workout } from './types';

export default function App() {
  const [workouts, setWorkouts] = useLocalStorage<Workout[]>('noro-treino', initialWorkouts);
  const { isAuthenticated } = useAuth();

  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-zinc-900 dark:text-white transition-colors">
      {isAuthenticated && <Navbar />}

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home workouts={workouts} />
            </PrivateRoute>
          }
        />
        <Route
          path="/treino/:id"
          element={
            <PrivateRoute>
              <WorkoutPage
                workouts={workouts}
                setWorkouts={setWorkouts}
                initialWorkouts={initialWorkouts}
              />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}
