import React from 'react';
import { TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native';

const StoryItem = ({ story }) => (
    <TouchableOpacity style={styles.storyContainer}>
        <View style={[styles.storyAvatarContainer, story.hasStory && styles.storyAvatarContainerActive]}>
            <Image source={story.avatar} style={styles.storyAvatar} />
        </View>
        <Text style={styles.storyUsername} numberOfLines={1}>
            {story.username}
        </Text>
    </TouchableOpacity>
);


const styles = StyleSheet.create({
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
});


export default StoryItem;