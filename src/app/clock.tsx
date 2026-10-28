
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function ClockScreen() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Student Hub Clock</Text>

      <Text style={styles.clock}>
        {currentTime.toLocaleTimeString()}
      </Text>

      <Text style={styles.date}>
        {currentTime.toLocaleDateString()}
      </Text>

      <Text style={styles.status}>
        Live clock is running
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F7',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007AFF',
    marginBottom: 30,
  },
  clock: {
    fontSize: 38,
    fontWeight: 'bold',
    color: '#1C1C1E',
  },
  date: {
    fontSize: 18,
    color: '#636366',
    marginTop: 12,
  },
  status: {
    fontSize: 15,
    color: '#34C759',
    marginTop: 25,
  },
});
