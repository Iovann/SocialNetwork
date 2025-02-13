import React from 'react';
import { TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native';


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

const styles = StyleSheet.create({

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

export default MessageItem;