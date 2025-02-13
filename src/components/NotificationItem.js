import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { NOTIFICATION_TYPES } from '../utils/notifData';

const NotificationItem = ({ notification, onPress }) => {
    const getIcon = (type) => {
        switch (type) {
            case NOTIFICATION_TYPES.LIKE: return 'heart';
            case NOTIFICATION_TYPES.COMMENT: return 'chatbubble';
            case NOTIFICATION_TYPES.FOLLOW: return 'person-add';
            default: return 'notifications';
        }
    };

    return (
        <TouchableOpacity 
            style={[
                stylesNotificationItem.notificationItem,
                !notification.read && stylesNotificationItem.unreadNotification
            ]}
            onPress={onPress}
        >
            <View style={stylesNotificationItem.avatarContainer}>
                <Image source={notification.avatar} style={stylesNotificationItem.avatar} />
                <View style={stylesNotificationItem.iconContainer}>
                    <Icon 
                        name={getIcon(notification.type)} 
                        size={12} 
                        color="#fff" 
                    />
                </View>
            </View>
            
            <View style={stylesNotificationItem.contentContainer}>
                <Text style={stylesNotificationItem.notificationText}>
                    <Text style={stylesNotificationItem.username}>
                        {notification.username}
                    </Text>
                    {' '}{notification.content}
                </Text>
                <Text style={stylesNotificationItem.timeAgo}>
                    {notification.timeAgo}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

const stylesNotificationItem = StyleSheet.create({
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

export default NotificationItem;