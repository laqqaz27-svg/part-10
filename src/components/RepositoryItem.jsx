import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: 'white',
  },
  fullName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    marginBottom: 5,
  },
  language: {
    marginBottom: 5,
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.fullName}>{item.fullName}</Text>

      <Text style={styles.description}>{item.description}</Text>

      <Text style={styles.language}>{item.language}</Text>

      <View style={styles.stats}>
        <Text>Stars: {item.stargazersCount}</Text>
        <Text>Forks: {item.forksCount}</Text>
        <Text>Reviews: {item.reviewCount}</Text>
        <Text>Rating: {item.ratingAverage}</Text>
      </View>
    </View>
  );
};

export default RepositoryItem;