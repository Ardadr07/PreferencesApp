import { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, ActivityIndicator } from 'react-native';

const AuthContext = createContext(undefined);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Yükleniyor durumu

  // 1. Uygulama başladığında kayıtlı kullanıcıyı kontrol et
  useEffect(() => {
    loadUser();
  }, []);

  // 2. Kullanıcı değiştiğinde (Giriş/Çıkış) hafızayı güncelle
  useEffect(() => {
    if (loading) return; // Yükleme sürerken kaydetme yapma

    const saveUser = async () => {
      if (user) {
        await AsyncStorage.setItem('user', JSON.stringify(user));
      } else {
        await AsyncStorage.removeItem('user');
      }
    };
    saveUser();
  }, [user, loading]);

  const loadUser = async () => {
    try {
      const storedUser = await AsyncStorage.getItem('user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    } catch (e) {
      console.error("Kullanıcı yüklenirken hata oluştu", e);
    } finally {
      setLoading(false); // Kontrol bitti, uygulamayı gösterebiliriz
    }
  };

  const login = (username) => {
    setUser({ username });
  };

  const logout = () => {
    setUser(null);
  };

  // Eğer hala hafızayı kontrol ediyorsak, loading çarkı döndür
  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#007AFF" />
      </View>
    );
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used inside AuthProvider');
  }
  return context;
}