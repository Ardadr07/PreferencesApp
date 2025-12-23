import { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, Alert } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');

  const handleLogin = () => {
    // Boşlukları temizle ve boş mu kontrol et
    if (!username.trim()) {
      Alert.alert('Uyarı', 'Lütfen bir kullanıcı adı girin.');
      return;
    }
    // Geri dönülemesin diye 'navigate' yerine 'replace' kullanıyoruz
    navigation.replace('Home', { username });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Giriş Yap</Text>
      
      <TextInput
        placeholder="Kullanıcı Adı"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
        autoCapitalize="none"
      />
      
      <Pressable style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Giriş</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});