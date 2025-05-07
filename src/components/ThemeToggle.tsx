import { useEffect, useState } from 'react';

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
      className="bg-gray-200 dark:bg-gray-700 text-sm px-3 py-1 rounded transition-colors"
      onClick={() => setDark(!dark)}
    >
      {dark ? '☀️ Claro' : '🌙 Escuro'}
    </button>
  );
}
