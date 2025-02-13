import React, { useState, useLayoutEffect, useRef } from 'react';
import {View, Text, TextInput, TouchableOpacity, FlatList, Image, KeyboardAvoidingView, Platform,
 StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const DUMMY_MESSAGES = [
  {
    id: '1',
    text: 'Salut ! Comment ça va ?',
    sender: 'them',
    timestamp: '10:30',
  },
  {
    id: '2',
    text: 'Très bien et toi ?',
    sender: 'me',
    timestamp: '10:31',
  },
  {
    id: '3',
    text: 'Super ! On se voit toujours demain ?',
    sender: 'them',
    timestamp: '10:32',
  },
];

const ChatScreen = ({ route, navigation }) => {
  const { userId, username, avatar } = route.params || {};
  const [messages, setMessages] = useState(DUMMY_MESSAGES);
  const [inputMessage, setInputMessage] = useState('');
  const flatListRef = useRef();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  const sendMessage = () => {
    if (inputMessage.trim()) {
      const newMessage = {
        id: Date.now().toString(),
        text: inputMessage,
        sender: 'me',
        timestamp: new Date().toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit'
        }),
      };
      setMessages([...messages, newMessage]);
      setInputMessage('');
      flatListRef.current?.scrollToEnd();
    }
  };

  const renderMessage = ({ item }) => (
    <View style={[
      styles.messageContainer,
      item.sender === 'me' ? styles.myMessage : styles.theirMessage
    ]}>
      <Text style={[
        styles.messageText,
        item.sender !== 'me' && { color: '#1a2138' }
      ]}>
        {item.text}
      </Text>
      <Text style={[
        styles.timestamp,
        item.sender !== 'me' && { color: '#8e8e93' }
      ]}>
        {item.timestamp}
      </Text>
    </View>
  );

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : null}
    >
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <View style={styles.headerInfo}>
          <Image
            source={avatar}
            style={styles.headerAvatar}
          />
          <View>
            <Text style={styles.headerName}>{username || 'Chat'}</Text>
            <Text style={styles.headerStatus}>En ligne</Text>
          </View>
        </View>
        <TouchableOpacity>
          <Icon name="ellipsis-vertical" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Messages List */}
      <FlatList
        ref={flatListRef}
        data={messages}
        renderItem={renderMessage}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.messagesList}
      />

      {/* Input Area */}
      <View style={styles.inputContainer}>
        <TouchableOpacity style={styles.attachButton}>
          <Icon name="attach" size={24} color="#666" />
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          value={inputMessage}
          onChangeText={setInputMessage}
          placeholder="Message..."
          multiline
        />
        <TouchableOpacity
          style={styles.sendButton}
          onPress={sendMessage}
        >
          <Icon name="send" size={24} color="#007AFF" />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f7fb',
    marginTop: 30,
  },
  header: {
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e9f0',
    elevation: 2,
  },
  headerInfo: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 12,
  },
  headerAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
    borderWidth: 2,
    borderColor: '#e5e9f0',
  },
  headerName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1a2138',
  },
  headerStatus: {
    fontSize: 12,
    color: '#4CAF50',
    marginTop: 2,
  },
  messagesList: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  messageContainer: {
    maxWidth: '80%',
    marginVertical: 4,
    padding: 12,
    borderRadius: 20,
  },
  myMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#007AFF',
    borderTopRightRadius: 4,
    marginLeft: '20%',
  },
  theirMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#fff',
    borderTopLeftRadius: 4,
    marginRight: '20%',
    borderWidth: 1,
    borderColor: '#e5e9f0',
  },
  messageText: {
    fontSize: 15,
    lineHeight: 20,
    color: '#fff',
  },
  timestamp: {
    fontSize: 11,
    marginTop: 4,
    alignSelf: 'flex-end',
    color: 'rgba(255,255,255,0.7)',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#e5e9f0',
  },
  attachButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: '#f5f7fb',
  },
  input: {
    flex: 1,
    marginHorizontal: 12,
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#f5f7fb',
    borderRadius: 20,
    fontSize: 15,
    maxHeight: 100,
    color: '#1a2138',
  },
  sendButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: '#007AFF',
  },
});

export default ChatScreen;