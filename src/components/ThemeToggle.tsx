import { useEffect, useState } from 'react';
import { Sun, Moon } from 'phosphor-react';

export function ThemeToggle() {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'));

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [dark]);

  return (
    <button
      className="flex items-center gap-2 bg-gray-200 dark:bg-gray-700 text-sm px-3 py-1 rounded transition-colors"
      onClick={() => setDark(!dark)}
      title={dark ? 'Modo Claro' : 'Modo Escuro'}
    >
      {dark ? <Sun size={18} weight="bold" /> : <Moon size={18} weight="bold" />}
      {dark ? 'Claro' : 'Escuro'}
    </button>
  );
}
