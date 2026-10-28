
import { Image, StyleSheet, Text, View } from 'react-native';

export default function DetailsScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          source={require('../../../assets/images/user.png')}
          style={styles.profileImage}
        />

        <Text style={styles.title}>Student ID Card</Text>

        <Text style={styles.label}>Name</Text>
        <Text style={styles.value}>Student Name</Text>

        <Text style={styles.label}>Degree</Text>
        <Text style={styles.value}>
          BSc Honours in Computer Studies
        </Text>

        <Text style={styles.label}>Department</Text>
        <Text style={styles.value}>
          Statistics & Computer Science
        </Text>

        <Text style={styles.label}>University</Text>
        <Text style={styles.value}>University of Kelaniya</Text>
      </View>
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
  card: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    padding: 24,
    borderRadius: 16,
    alignItems: 'center',
    elevation: 4,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007AFF',
    marginVertical: 16,
  },
  label: {
    fontSize: 14,
    color: '#8E8E93',
    marginTop: 12,
  },
  value: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1C1C1E',
    textAlign: 'center',
    marginTop: 4,
  },
});
