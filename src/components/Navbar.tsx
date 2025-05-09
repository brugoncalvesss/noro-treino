import { ThemeToggle } from './ThemeToggle';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { SignOut } from 'phosphor-react';

export default function Navbar() {
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="bg-white dark:bg-zinc-900 shadow p-4 flex items-center justify-between">
      <Link to="/" className="text-xl font-bold text-gray-800 dark:text-white">
        Noro Treino
      </Link>

      <div className="flex items-center gap-4">
        <ThemeToggle />
        {isAuthenticated && (
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-sm bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded transition-colors"
          >
            <SignOut size={18} weight="bold" />
            Sair
          </button>
        )}
      </div>
    </nav>
  );
}
