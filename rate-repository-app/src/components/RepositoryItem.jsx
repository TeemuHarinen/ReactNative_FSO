import Text from './Text';
import { StyleSheet, View, Image } from 'react-native';

const cardHeaderStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexGrow: 1,
    padding: 15,
    backgroundColor: 'white',
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 8,
  },
  avatarContainer: {
    flexGrow: 0,
    paddingRight: 15,
  },
  infoContainer: {
    flexShrink: 1,
  },
  text: {
    marginTop: 5,
    backgroundColor: '#0366d6',
    color: 'white',
    padding: 3,
    borderRadius: 5,
    overflow: 'hidden',
    alignSelf: 'flex-start',
  },
});

const cardFooterStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexGrow: 1,
    justifyContent: 'space-around',
    backgroundColor: 'white',
    padding: 10
  },
  actionTouchable: {
    flexGrow: 0,
  },
  actionText: {
    textDecorationLine: 'underline',
  },
});

const RepositoryItem = ({ item }) => {
  const formatCount = (count) => {
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}k`;
    }
    return count;
  }

  return (
    <>
    <View style={cardHeaderStyles.container}>
      <View style={cardHeaderStyles.avatarContainer}>
        <Image
          style={cardHeaderStyles.avatar}
          source={{ uri: item.ownerAvatarUrl }}
        />
      </View>
      <View style={cardHeaderStyles.infoContainer}>
        <Text fontWeight="bold">{item.fullName}</Text>
        <Text color="textSecondary">{item.description}</Text>
        <Text style={cardHeaderStyles.text} color="primary"> {item.language}</Text>
      </View>
    </View>
      <View style={cardFooterStyles.container}>
        <View style={cardFooterStyles.actionTouchable}>
          <Text fontWeight="bold">{formatCount(item.stargazersCount)}</Text>
          <Text>Stars</Text>
        </View>
        <View style={cardFooterStyles.actionTouchable}>
          <Text fontWeight="bold">{formatCount(item.forksCount)}</Text>
          <Text>Forks</Text>
        </View>
        <View style={cardFooterStyles.actionTouchable}>
          <Text fontWeight="bold">{formatCount(item.reviewCount)}</Text>
          <Text>Reviews</Text>
        </View>
        <View style={cardFooterStyles.actionTouchable}>
          <Text fontWeight="bold">{formatCount(item.ratingAverage)}</Text>
          <Text>Rating</Text>
        </View>
      </View>
    </>
  );
}



/*

const RepositoryItem = ({ item }) => {
  
  return (
    <>
    <View style={cardHeaderStyles.container}>
      <Image
        style={{width: 50, height: 50}}
        source={{uri: item.ownerAvatarUrl}}
      />
      <Text fontWeight="bold">{item.fullName}</Text>
      <Text color="textSecondary">{item.description}</Text>
      <Text> Language {item.language}</Text>
      <Text> Stars: {item.stargazersCount}</Text>
      <Text> Forks: {item.forksCount}</Text>
      <Text> Reviews: {item.reviewCount}</Text>
      <Text> Rating: {item.ratingAverage}</Text>
    </View>
    </>
  )
}
*/
export default RepositoryItem;