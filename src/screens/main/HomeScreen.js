import React from 'react';
import { View, FlatList, Text, Image, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const DUMMY_STORIES = [
  { id: '1', username: 'Vous', avatar: require('../../../assets/fredel.png'), hasStory: false },
  { id: '2', username: 'Pascal', avatar: require('../../../assets/setup.png'), hasStory: true },
  { id: '3', username: 'Boris', avatar: require('../../../assets/jjk.png'), hasStory: true },
  { id: '4', username: 'Castro', avatar: require('../../../assets/bl.png'), hasStory: true },
  { id: '5', username: 'Bernard', avatar: require('../../../assets/sl.png'), hasStory: true },
  { id: '6', username: 'Jules', avatar: require('../../../assets/lambo.png'), hasStory: true },
];

const DUMMY_POSTS = [
  {
    id: '1',
    username: 'Fredel M.',
    avatar: require('../../../assets/fredel.png'),
    content: 'Superbe journée à la plage ! ☀️🌊 #Vacances',
    image: require('../../../assets/plage.png'),
    likes: 124,
    comments: 15,
    timeAgo: '2h',
  },
  {
    id: '2',
    username: 'Boris ADONON',
    avatar: require('../../../assets/boris.png'),
    content: 'Nouveau projet en cours... Restez connectés ! 💻✨',
    likes: 89,
    comments: 8,
    timeAgo: '4h',
  },
  {
    id: '3',
    username: 'ATCHO Iovann',
    avatar: require('../../../assets/iovann.png'),
    content: 'Le code, ma passion !  🫶❤️',
    image: require('../../../assets/setup.png'),
    likes: 99,
    comments: 12,
    timeAgo: '6h',
  },
];

const StoryItem = ({ story }) => (
  <TouchableOpacity style={styles.storyContainer}>
    <View style={[styles.storyAvatarContainer, story.hasStory && styles.storyAvatarContainerActive]}>
      <Image source={ story.avatar } style={styles.storyAvatar} />
    </View>
    <Text style={styles.storyUsername} numberOfLines={1}>
      {story.username}
    </Text>
  </TouchableOpacity>
);

const PostCard = ({ post }) => (
  <View style={styles.postCard}>
    {/* En-tête du post */}
    <View style={styles.postHeader}>
      <View style={styles.postHeaderLeft}>
        <Image source={post.avatar} style={styles.postAvatar} />
        <View style={styles.postHeaderRight}>
          <Text style={styles.postUsername}>{post.username}</Text>
          <Text style={styles.postTimeAgo}>{post.timeAgo}</Text>
        </View>
      </View>
      <TouchableOpacity>
        <Icon name="ellipsis-horizontal" size={20} color="#666" />
      </TouchableOpacity>
    </View>

    {/* Contenu du post */}
    <Text style={styles.postContent}>{post.content}</Text>
    {post.image && (
      <Image source={post.image} style={styles.postImage} resizeMode="cover" />
    )}

    {/* Actions du post */}
    <View style={styles.postActions}>
      <View style={styles.postActionsLeft}>
        <TouchableOpacity style={styles.actionButton}>
          <Icon name="heart" size={24} color="#e91e63" />
          <Text style={styles.postLikes}>{post.likes}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Icon name="chatbubble-outline" size={22} color="#666" />
          <Text style={styles.postComments}>{post.comments}</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
        <Icon name="share-outline" size={24} color="#666" />
      </TouchableOpacity>
    </View>
  </View>
);

const HomeScreen = ({ navigation }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Social Network</Text>
        <TouchableOpacity>
          <Icon name="chatbubbles-outline" size={24} color="#666" />
        </TouchableOpacity>
      </View>

      {/* Barre de recherche */}
      <View style={styles.searchBar}>
        <Icon name="search-outline" size={20} color="#666" />
        <TextInput
          placeholder="Rechercher..."
          style={styles.searchInput}
        />
      </View>

      <FlatList
        data={DUMMY_POSTS}
        renderItem={({ item }) => <PostCard post={item} />}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={() => (
          <View style={styles.storiesListContainer}>
            <FlatList
              data={DUMMY_STORIES}
              renderItem={({ item }) => <StoryItem story={item} />}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.storiesList}
            />
          </View>
        )}
      />

      {/* Bouton flottant pour nouveau post */}
      <TouchableOpacity
        style={styles.fab}
        onPress={() => navigation.navigate('NewPost')}
      >
        <Icon name="add" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    marginTop: 30,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F7F7F7',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
  },
  storiesListContainer: {
    backgroundColor: '#fff',
    padding: 2,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  storiesList: {
    padding: 5,
  },
  storyContainer: {
    alignItems: 'center',
    marginRight: 5,
    width: 90,
  },
  storyAvatarContainer: {
    width: 70,
    height: 70,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#ddd',
    padding: 2,
  },
  storyAvatarContainerActive: {
    borderColor: '#e91e63',
  },
  storyAvatar: {
    width: '100%',
    height: '100%',
    borderRadius: 27,
  },
  storyUsername: {
    marginTop: 5,
    fontSize: 12,
    textAlign: 'center',
  },
  postCard: {
    marginBottom: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  postHeaderLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  postHeaderRight: {
    marginLeft: 10,
  },
  postAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  postUsername: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  postTimeAgo: {
    fontSize: 12,
    color: '#666',
  },
  postContent: {
    padding: 10,
  },
  postImage: {
    width: '100%',
    height: 300,
  },
  postActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  postActionsLeft: {
    flexDirection: 'row',
  },
  actionButton: {
    marginRight: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  postLikes: {
    marginLeft: 5,
  },
  postComments: {
    marginLeft: 5,
  },
  fab: {
    position: 'absolute',
    right: 20,
    bottom: 10,
    backgroundColor: '#e91e63',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});

export default HomeScreen;
