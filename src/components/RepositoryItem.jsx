import {
  View,
  StyleSheet,
  Image,
} from 'react-native';

import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: 'white',
    flexDirection: 'row',
  },

  avatar: {
    width: 50,
    height: 50,
    borderRadius: 4,
    marginRight: 15,
  },

  content: {
    flex: 1,
  },

  fullName: {
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.fontSizes.subheading,
    marginBottom: 5,
  },

  description: {
    marginBottom: 10,
  },

  language: {
    backgroundColor: theme.colors.primary,
    color: 'white',
    alignSelf: 'flex-start',
    padding: 5,
    borderRadius: 4,
    marginBottom: 10,
  },

  stats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  stat: {
    alignItems: 'center',
  },
});

const formatCount = (count) => {
  if (count >= 1000) {
    return `${(count / 1000).toFixed(1)}k`;
  }

  return count.toString();
};

const RepositoryStats = ({ item }) => {
  return (
    <View style={styles.stats}>
      <View style={styles.stat}>
        <Text fontWeight="bold">
          {formatCount(item.stargazersCount)}
        </Text>
        <Text color="textSecondary">Stars</Text>
      </View>

      <View style={styles.stat}>
        <Text fontWeight="bold">
          {formatCount(item.forksCount)}
        </Text>
        <Text color="textSecondary">Forks</Text>
      </View>

      <View style={styles.stat}>
        <Text fontWeight="bold">
          {formatCount(item.reviewCount)}
        </Text>
        <Text color="textSecondary">Reviews</Text>
      </View>

      <View style={styles.stat}>
        <Text fontWeight="bold">
          {item.ratingAverage}
        </Text>
        <Text color="textSecondary">Rating</Text>
      </View>
    </View>
  );
};

const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.avatar}
        source={{ uri: item.ownerAvatarUrl }}
      />

      <View style={styles.content}>
        <Text
          fontWeight="bold"
          fontSize="subheading"
          style={styles.fullName}
        >
          {item.fullName}
        </Text>

        <Text style={styles.description}>
          {item.description}
        </Text>

        <Text style={styles.language}>
          {item.language}
        </Text>

        <RepositoryStats item={item} />
      </View>
    </View>
  );
};

export default RepositoryItem;