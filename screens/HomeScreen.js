import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen({ route }) {
  // Login ekranından gönderilen username bilgisini alıyoruz
  const { username } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hoş geldin, {username}!</Text>
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
    fontSize: 20,
    fontWeight: 'bold',
  },
});