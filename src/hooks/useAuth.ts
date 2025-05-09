export function useAuth() {
  const isAuthenticated = localStorage.getItem('noro-treino-auth') === 'true';

  const login = () => localStorage.setItem('noro-treino-auth', 'true');
  const logout = () => localStorage.removeItem('noro-treino-auth');

  return { isAuthenticated, login, logout };
}
