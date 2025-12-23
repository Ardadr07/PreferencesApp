import { createContext, useContext, useState } from 'react';

// Context'i oluşturuyoruz
const AuthContext = createContext(undefined);

// Provider bileşeni: State'i tutar ve çocuklara dağıtır
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (username) => {
    setUser({ username });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Kolay kullanım için custom hook
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth, AuthProvider içinde kullanılmalı!');
  }
  return context;
}