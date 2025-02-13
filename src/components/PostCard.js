import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

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

const styles = StyleSheet.create({
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
});

export default PostCard;