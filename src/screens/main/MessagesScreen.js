import React, { useState, useLayoutEffect } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, TextInput, ScrollView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const DUMMY_MESSAGES = [
  {
    id: '1',
    username: 'Fredel METONOU',
    avatar: require('../../../assets/fredel.png'),
    lastMessage: 'Super ! On se voit demain alors ? 😊',
    time: '10:30',
    unread: 2,
    online: true,
  },
  {
    id: '2',
    username: 'Boris ADONON',
    avatar: require('../../../assets/boris.png'),
    lastMessage: "J'ai partagé les photos de la soirée !",
    time: '09:15',
    unread: 0,
    online: true,
  },
  {
    id: '3',
    username: 'ATCHO Iovann',
    avatar: require('../../../assets/iovann.png'),
    lastMessage: 'Merci pour ton aide !',
    time: 'Hier',
    unread: 0,
    online: false,
  },
  {
    id: '4',
    username: 'TOSSOUDJEDE Castro',
    avatar: require('../../../assets/lambo.png'),
    lastMessage: 'On pourrait organiser quelque chose ce weekend ?',
    time: 'Hier',
    unread: 1,
    online: false,
  },
];

const MessageItem = ({ message, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.messageItem}
    >
      <View style={styles.avatarContainer}>
        <Image
          source={message.avatar}
          style={styles.avatar}
        />
        {message.online && (
          <View style={styles.onlineIndicator} />
        )}
      </View>

      <View style={styles.messageContent}>
        <View style={styles.messageHeader}>
          <Text style={styles.username}>
            {message.username}
          </Text>
          <Text style={styles.time}>
            {message.time}
          </Text>
        </View>

        <View style={styles.messagePreview}>
          <Text style={styles.lastMessage} numberOfLines={1}>
            {message.lastMessage}
          </Text>
          {message.unread > 0 && (
            <View style={styles.unreadBadge}>
              <Text style={styles.unreadCount}>
                {message.unread}
              </Text>
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const MessagesScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <Text style={styles.headerTitle}>Messages</Text>
          <TouchableOpacity>
            <Icon name="create-outline" size={24} color="#666" />
          </TouchableOpacity>
        </View>

        {/* Search Bar */}
        <View style={styles.searchBar}>
          <Icon name="search-outline" size={20} color="#666" />
          <TextInput
            placeholder="Rechercher dans les messages..."
            style={styles.searchInput}
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>

        {/* Online Users */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.onlineUsers}
        >
          {DUMMY_MESSAGES.filter(m => m.online).map((user) => (
            <View key={user.id} style={styles.onlineUser}>
              <View style={styles.onlineAvatarContainer}>
                <Image
                  source={user.avatar}
                  style={styles.onlineAvatar}
                />
                <View style={styles.onlineIndicatorSmall} />
              </View>
              <Text style={styles.onlineUsername} numberOfLines={1}>
                {user.username.split(' ')[0]}
              </Text>
            </View>
          ))}
        </ScrollView>
      </View>

      {/* Messages List */}
      <FlatList
        data={DUMMY_MESSAGES}
        renderItem={({ item }) => (
          <MessageItem
            message={item}
            onPress={() => navigation.navigate('Chat', {
              userId: item.id,
              username: item.username,
              avatar: item.avatar
            })}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    marginVertical: 30,
  },
  header: {
    backgroundColor: '#fff',
    paddingTop: 15,
    paddingBottom: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    paddingHorizontal: 15,
    height: 40,
    marginBottom: 10,
  },
  searchInput: {
    marginLeft: 10,
    flex: 1,
  },
  onlineUsers: {
    paddingVertical: 10,
  },
  onlineUser: {
    alignItems: 'center',
    marginRight: 15,
  },
  onlineAvatarContainer: {
    position: 'relative',
  },
  onlineAvatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  onlineIndicatorSmall: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 12,
    height: 12,
    backgroundColor: '#4CAF50',
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#fff',
  },
  onlineUsername: {
    fontSize: 12,
    marginTop: 4,
    color: '#666',
  },
  messageItem: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  avatarContainer: {
    position: 'relative',
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
  },
  onlineIndicator: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 16,
    height: 16,
    backgroundColor: '#4CAF50',
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#fff',
  },
  messageContent: {
    flex: 1,
    marginLeft: 15,
  },
  messageHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  username: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  time: {
    fontSize: 14,
    color: '#666',
  },
  messagePreview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 4,
  },
  lastMessage: {
    flex: 1,
    fontSize: 14,
    color: '#666',
  },
  unreadBadge: {
    backgroundColor: '#3b82f6',
    borderRadius: 12,
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
  unreadCount: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default MessagesScreen;
