import { ThemeToggle } from './ThemeToggle';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white dark:bg-zinc-900 shadow p-4 flex items-center justify-between">
      <Link to="/" className="text-xl font-bold uppercase text-gray-800 dark:text-white">
        Noro Treino
      </Link>
      <ThemeToggle />
    </nav>
  );
}
