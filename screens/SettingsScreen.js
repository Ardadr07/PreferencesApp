import { View, Text, Switch, StyleSheet } from 'react-native';
import { useTheme } from '../hooks/useTheme';

export default function SettingsScreen() {
  const { theme, toggleTheme } = useTheme();
  
  const isDark = theme === 'dark';

  return (
    <View style={[
      styles.container, 
      { backgroundColor: isDark ? '#1a1a1a' : '#fff' }
    ]}>
      <Text style={[
        styles.text, 
        { color: isDark ? '#fff' : '#000' }
      ]}>
        Şu anki Tema: {isDark ? 'Koyu 🌙' : 'Açık ☀️'}
      </Text>

      <View style={styles.switchContainer}>
        <Text style={{ color: isDark ? '#ccc' : '#666', marginRight: 10 }}>
          Temayı Değiştir
        </Text>
        <Switch
          value={isDark}
          onValueChange={toggleTheme}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isDark ? "#007AFF" : "#f4f3f4"}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});