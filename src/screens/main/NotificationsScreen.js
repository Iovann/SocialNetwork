import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const DUMMY_NOTIFICATIONS = [
  {
    id: '1',
    type: 'like',
    username: 'Fredel M.',
    avatar: require('../../../assets/fredel.png'),
    content: 'a aimé votre publication',
    timeAgo: 'Il y a 5min',
    read: false,
  },
  {
    id: '2',
    type: 'comment',
    username: 'Boris A.',
    avatar: require('../../../assets/boris.png'),
    content: 'a commenté votre photo',
    timeAgo: 'Il y a 15min',
    read: false,
  },
  {
    id: '3',
    type: 'follow',
    username: 'Iovann A.',
    avatar: require('../../../assets/iovann.png'),
    content: 'a commencé à vous suivre',
    timeAgo: 'Il y a 1h',
    read: true,
  },
];

const NotificationItem = ({ notification }) => {
  const getIcon = (type) => {
    switch (type) {
      case 'like':
        return 'heart';
      case 'comment':
        return 'chatbubble';
      case 'follow':
        return 'person-add';
      default:
        return 'notifications';
    }
  };

  return (
    <TouchableOpacity 
      style={[
        styles.notificationItem,
        !notification.read && styles.unreadNotification
      ]}
    >
      <View style={styles.avatarContainer}>
        <Image source={ notification.avatar } style={styles.avatar} />
        <View style={styles.iconContainer}>
          <Icon name={getIcon(notification.type)} size={12} color="#fff" />
        </View>
      </View>
      
      <View style={styles.contentContainer}>
        <Text style={styles.notificationText}>
          <Text style={styles.username}>{notification.username}</Text>
          {' '}{notification.content}
        </Text>
        <Text style={styles.timeAgo}>{notification.timeAgo}</Text>
      </View>
    </TouchableOpacity>
  );
};

const NotificationsScreen = ({ navigation }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Notifications</Text>
        <TouchableOpacity>
          <Icon name="options-outline" size={24} color="#666" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={DUMMY_NOTIFICATIONS}
        renderItem={({ item }) => <NotificationItem notification={item} />}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    marginTop: 30,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  notificationItem: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  unreadNotification: {
    backgroundColor: '#f0f7ff',
  },
  avatarContainer: {
    position: 'relative',
    marginRight: 15,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  iconContainer: {
    position: 'absolute',
    bottom: -5,
    right: -5,
    backgroundColor: '#3b82f6',
    borderRadius: 12,
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#fff',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  notificationText: {
    fontSize: 14,
    lineHeight: 20,
  },
  username: {
    fontWeight: 'bold',
  },
  timeAgo: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
});

export default NotificationsScreen;
