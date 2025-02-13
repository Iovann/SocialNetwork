import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const NewPostScreen = ({ navigation }) => {
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [location, setLocation] = useState('');

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    });
  }, [navigation]);

  const handlePost = () => {
    // Simuler l'envoi du post
    Alert.alert(
      "Publication réussie",
      "Votre post a été publié avec succès !",
      [{ text: "OK", onPress: () => navigation.goBack() }]
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.headerButton} 
          onPress={() => navigation.goBack()}
        >
          <Icon name="close" size={28} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Nouveau Post</Text>
        <TouchableOpacity
          style={[styles.publishButton, !content.length && styles.publishButtonDisabled]}
          onPress={handlePost}
          disabled={!content.length}
        >
          <Text style={[styles.publishButtonText, !content.length && styles.publishButtonTextDisabled]}>
            Publier
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.userInfo}>
          <Image 
            source={{ uri: 'https://via.placeholder.com/50' }}
            style={styles.avatar}
          />
          <Text style={styles.username}>Fredel METONOU</Text>
        </View>

        <TextInput
          multiline
          placeholder="Que voulez-vous partager?"
          value={content}
          onChangeText={setContent}
          style={styles.input}
          autoFocus
        />

        {image && (
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: image }}
              style={styles.selectedImage}
              resizeMode="cover"
            />
            <TouchableOpacity
              style={styles.removeImageButton}
              onPress={() => setImage(null)}
            >
              <Icon name="close-circle" size={24} color="#fff" />
            </TouchableOpacity>
          </View>
        )}

        {location && (
          <View style={styles.locationContainer}>
            <Icon name="location" size={20} color="#666" />
            <Text style={styles.locationText}>{location}</Text>
            <TouchableOpacity onPress={() => setLocation('')}>
              <Icon name="close-circle" size={20} color="#666" />
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton}>
          <Icon name="image-outline" size={24} color="#666" />
          <Text style={styles.footerButtonText}>Photo</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.footerButton}>
          <Icon name="location-outline" size={24} color="#666" />
          <Text style={styles.footerButtonText}>Lieu</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.footerButton}>
          <Icon name="happy-outline" size={24} color="#666" />
          <Text style={styles.footerButtonText}>Feeling</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginVertical: 30,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  headerButton: {
    padding: 5,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  publishButton: {
    backgroundColor: '#3b82f6',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  publishButtonDisabled: {
    backgroundColor: '#bfdbfe',
  },
  publishButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  publishButtonTextDisabled: {
    color: '#fff',
  },
  content: {
    flex: 1,
    padding: 15,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  username: {
    fontSize: 16,
    fontWeight: '600',
  },
  input: {
    fontSize: 16,
    minHeight: 100,
    textAlignVertical: 'top',
    marginBottom: 15,
  },
  imageContainer: {
    position: 'relative',
    marginBottom: 15,
  },
  selectedImage: {
    width: '100%',
    height: 300,
    borderRadius: 12,
  },
  removeImageButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 15,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 10,
    borderRadius: 8,
    marginBottom: 15,
  },
  locationText: {
    flex: 1,
    marginHorizontal: 10,
    color: '#666',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 15,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  footerButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  footerButtonText: {
    marginLeft: 8,
    color: '#666',
  },
});

export default NewPostScreen;
