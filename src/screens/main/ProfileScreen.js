import React, { useState, useLayoutEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, FlatList, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { DUMMY_USER } from '../../utils/profileData'

const StatItem = ({ label, value }) => (
  <View style={styles.statItem}>
    <Text style={styles.statValue}>{value}</Text>
    <Text style={styles.statLabel}>{label}</Text>
  </View>
);

const TabButton = ({ label, isActive, onPress }) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.tabButton, isActive && styles.tabButtonActive]}
  >
    <Icon
      name={label === 'Posts' ? 'grid-outline' : 'bookmark-outline'}
      size={24}
      color={isActive ? '#3b82f6' : '#666'}
    />
  </TouchableOpacity>
);

const ProfileScreen = ({navigation}) => {
  const [activeTab, setActiveTab] = useState('Posts');

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    });
  }, [navigation]);

  const renderImage = ({ item }) => (
    <TouchableOpacity style={styles.gridItem}>
      <Image source={ item.url } style={styles.gridImage} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{DUMMY_USER.username}</Text>
        <TouchableOpacity>
          <Icon name="menu-outline" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <ScrollView>
        {/* Profile Info */}
        <View style={styles.profileInfo}>
          <View style={styles.profileHeader}>
            <View style={styles.avatarContainer}>
              <Image
                source={ DUMMY_USER.avatar }
                style={styles.avatar}
              />
              <TouchableOpacity style={styles.editAvatarButton}>
                <Icon name="camera" size={14} color="white" />
              </TouchableOpacity>
            </View>
            
            <View style={styles.statsContainer}>
              <StatItem label="Posts" value={DUMMY_USER.posts} />
              <StatItem label="Followers" value={DUMMY_USER.followers} />
              <StatItem label="Following" value={DUMMY_USER.following} />
            </View>
          </View>

          <View style={styles.bioContainer}>
            <Text style={styles.username}>{DUMMY_USER.username}</Text>
            <Text style={styles.bio}>{DUMMY_USER.bio}</Text>
          </View>

          {/* Buttons */}
          <View style={styles.actionButtons}>
            <TouchableOpacity style={styles.editButton}>
              <Text style={styles.editButtonText}>
                Modifier le profil
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.shareButton}>
              <Text style={styles.shareButtonText}>
                Partager le profil
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Tabs */}
        <View style={styles.tabs}>
          <TabButton
            label="Posts"
            isActive={activeTab === 'Posts'}
            onPress={() => setActiveTab('Posts')}
          />
          <TabButton
            label="Saved"
            isActive={activeTab === 'Saved'}
            onPress={() => setActiveTab('Saved')}
          />
        </View>

        {/* Grid Images */}
        <FlatList
          data={DUMMY_USER.images}
          renderItem={renderImage}
          keyExtractor={item => item.id}
          numColumns={3}
          scrollEnabled={false}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 40,
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
    fontSize: 18,
    fontWeight: 'bold',
  },
  profileInfo: {
    padding: 15,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarContainer: {
    position: 'relative',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  editAvatarButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#3b82f6',
    borderRadius: 12,
    padding: 6,
  },
  statsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginLeft: 15,
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  statLabel: {
    color: '#666',
    fontSize: 14,
  },
  bioContainer: {
    marginTop: 15,
  },
  username: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  bio: {
    marginTop: 5,
    color: '#666',
    lineHeight: 20,
  },
  actionButtons: {
    flexDirection: 'row',
    marginTop: 15,
  },
  editButton: {
    flex: 1,
    backgroundColor: '#3b82f6',
    borderRadius: 8,
    padding: 8,
    marginRight: 5,
  },
  editButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  shareButton: {
    flex: 1,
    backgroundColor: '#f3f4f6',
    borderRadius: 8,
    padding: 8,
    marginLeft: 5,
  },
  shareButtonText: {
    color: '#000',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  tabs: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  tabButtonActive: {
    borderBottomColor: '#3b82f6',
  },
  gridItem: {
    flex: 1/3,
    aspectRatio: 1,
    padding: 1,
  },
  gridImage: {
    width: '100%',
    height: '100%',
  },
});

export default ProfileScreen;
