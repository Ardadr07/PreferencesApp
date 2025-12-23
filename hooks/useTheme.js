import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function useTheme() {
  const [theme, setTheme] = useState('light'); // Varsayılan: Açık tema

  // Uygulama açılınca kayıtlı temayı getir
  useEffect(() => {
    const loadTheme = async () => {
      const stored = await AsyncStorage.getItem('theme');
      if (stored) {
        setTheme(stored);
      }
    };
    loadTheme();
  }, []);

  // Temayı değiştir ve kaydet
  const toggleTheme = async () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    await AsyncStorage.setItem('theme', nextTheme);
  };

  return { theme, toggleTheme };
}