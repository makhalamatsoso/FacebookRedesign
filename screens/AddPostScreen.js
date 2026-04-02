import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView } from 'react-native';
import Avatar from '../components/Avatar';
import { Ionicons } from '@expo/vector-icons';

const AddPostScreen = () => {
  const [postText, setPostText] = useState('');

  const handlePost = () => {
    if (postText.trim() === '') {
      Alert.alert('Empty Post', 'Please write something!');
      return;
    }
    Alert.alert('Posted!', 'Your post has been shared on Facebook 🎉');
    setPostText('');
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ flexGrow: 1 }}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Create post</Text>
        <TouchableOpacity onPress={handlePost} style={styles.postButton}>
          <Text style={styles.postButtonText}>Post</Text>
        </TouchableOpacity>
      </View>

      {/* User Info */}
      <View style={styles.userRow}>
        <Avatar source={{ uri: 'https://drinkstore.shop/media/image/product/9605/lg/international-keiler-20x05l-weissbier-hell-mehrweg-mit-buegelverschluss.jpg' }} size={50} />
        <View style={styles.userInfo}>
          <Text style={styles.username}>Makhala</Text>
          <Text style={styles.privacy}>🌍 Public</Text>
        </View>
      </View>

      {/* Big Text Input */}
      <TextInput
        style={styles.bigInput}
        placeholder="What's on your mind?"
        multiline
        value={postText}
        onChangeText={setPostText}
      />

      {/* Media Options */}
      <View style={styles.options}>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionIcon}>📷</Text>
          <Text style={styles.optionText}>Photo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionIcon}>🎥</Text>
          <Text style={styles.optionText}>Video</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionIcon}>😀</Text>
          <Text style={styles.optionText}>Feeling</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerTitle: { fontSize: 20, fontWeight: 'bold' },
  postButton: {
    backgroundColor: '#1877F2',
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 50,
  },
  postButtonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  userRow: { flexDirection: 'row', padding: 15, alignItems: 'center' },
  userInfo: { marginLeft: 12 },
  username: { fontWeight: 'bold', fontSize: 18 },
  privacy: { color: '#65676B' },
  bigInput: {
    flex: 1,
    fontSize: 20,
    padding: 15,
    textAlignVertical: 'top',
    minHeight: 200,
  },
  options: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    paddingVertical: 15,
  },
  option: { alignItems: 'center' },
  optionIcon: { fontSize: 30 },
  optionText: { marginTop: 6, color: '#1877F2', fontWeight: '600' },
});

export default AddPostScreen;