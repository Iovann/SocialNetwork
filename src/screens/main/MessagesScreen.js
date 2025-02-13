import React, { useState, useLayoutEffect } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, TextInput, ScrollView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MessageItem from '../../components/MessageItem';
import { DUMMY_MESSAGES } from '../../utils/messageData';

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
});

export default MessagesScreen;
