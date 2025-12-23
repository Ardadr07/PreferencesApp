import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useAuth } from '../context/AuthContext';

export default function HomeScreen({ navigation }) {
  const { user, logout } = useAuth(); // User verisini ve logout'u çektik

  const handleLogout = () => {
    logout();
    navigation.replace('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hoş geldin, {user?.username}!</Text>
      
      <Pressable style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Çıkış Yap</Text>
      </Pressable>

      <Pressable 
        style={styles.settingsButton} 
        onPress={() => navigation.navigate('Settings')}
      >
        <Text style={styles.settingsText}>Ayarlara Git</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center' 
},
  text: { 
    fontSize: 24,
    fontWeight: 'bold', 
    marginBottom: 20 
},
  logoutButton: { 
    backgroundColor: '#FF3B30', 
    padding: 10, 
    borderRadius: 8, 
    marginTop: 10 
},
  logoutText: { 
    color: 'white', 
    fontWeight: 'bold' 
},
  settingsButton: { 
    marginTop: 20, 
    padding: 10 
},
  settingsText: { 
    color: '#007AFF', 
    fontSize: 16 
},
});