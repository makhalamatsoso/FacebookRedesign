import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView } from 'react-native';
import Avatar from '../components/Avatar';
import { Ionicons } from '@expo/vector-icons';
import { usePosts } from '../context/PostContext';

const AddPostScreen = () => {
  const [postText, setPostText] = useState('');
  const { addPost } = usePosts();

  const handlePost = () => {
    if (postText.trim() === '') {
      Alert.alert('Empty Post', 'Please write something!');
      return;
    }

    const newPost = {
      id: Date.now().toString(),
      username: 'Makhala',
      userAvatar: 'https://drinkstore.shop/media/image/product/9605/lg/international-keiler-20x05l-weissbier-hell-mehrweg-mit-buegelverschluss.jpg',
      time: 'Now',
      content: postText,
      likes: 0,
      reactions: ['👍']
    };

    addPost(newPost);          
    Alert.alert('Posted!', 'Your post has been shared on Facebook 🎉');
    setPostText('');
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="close" size={28} color="#050505" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Create post</Text>
        <TouchableOpacity 
          style={[styles.postButton, postText.trim() === '' && styles.postButtonDisabled]} 
          onPress={handlePost}
          disabled={postText.trim() === ''}
        >
          <Text style={styles.postButtonText}>Post</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.userRow}>
        <Avatar source={{ uri: 'https://drinkstore.shop/media/image/product/9605/lg/international-keiler-20x05l-weissbier-hell-mehrweg-mit-buegelverschluss.jpg' }} size={50} />
        <View style={styles.userInfo}>
          <Text style={styles.username}>Makhala</Text>
          <View style={styles.privacyRow}>
            <Ionicons name="earth" size={16} color="#65676B" />
            <Text style={styles.privacy}>Public</Text>
          </View>
        </View>
      </View>

      <TextInput
        style={styles.bigInput}
        placeholder="What's on your mind?"
        placeholderTextColor="#65676B"
        multiline
        value={postText}
        onChangeText={setPostText}
      />

      <View style={styles.optionsContainer}>
        <TouchableOpacity style={styles.optionRow}>
          <Ionicons name="images-outline" size={28} color="#00A400" />
          <Text style={styles.optionText}>Photo / Video</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionRow}>
          <Ionicons name="happy-outline" size={28} color="#F5C33B" />
          <Text style={styles.optionText}>Feeling / Activity</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 15, paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: '#E4E6EA' },
  headerTitle: { fontSize: 20, fontWeight: 'bold', color: '#050505' },
  postButton: { backgroundColor: '#1877F2', paddingHorizontal: 24, paddingVertical: 8, borderRadius: 50 },
  postButtonDisabled: { backgroundColor: '#A8C9F5' },
  postButtonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  userRow: { flexDirection: 'row', alignItems: 'center', padding: 15 },
  userInfo: { marginLeft: 12 },
  username: { fontSize: 18, fontWeight: 'bold' },
  privacyRow: { flexDirection: 'row', alignItems: 'center', marginTop: 2 },
  privacy: { marginLeft: 4, color: '#65676B', fontSize: 14 },
  bigInput: { flex: 1, fontSize: 20, paddingHorizontal: 15, paddingVertical: 10, textAlignVertical: 'top', minHeight: 280, color: '#050505' },
  optionsContainer: { borderTopWidth: 1, borderTopColor: '#E4E6EA', paddingVertical: 8 },
  optionRow: { flexDirection: 'row', alignItems: 'center', paddingVertical: 14, paddingHorizontal: 15 },
  optionText: { marginLeft: 16, fontSize: 17, color: '#050505', fontWeight: '500' },
});

export default AddPostScreen;