import React from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView, TextInput } from 'react-native';
import StoryItem from '../components/StoryItem';
import PostCard from '../components/PostCard';

const dummyStories = [
  { id: '1', name: 'Add Story', image: { uri: 'https://picsum.photos/id/1011/200/200' }, isAddStory: true },
  { id: '2', name: 'Makhala', image: { uri: 'https://picsum.photos/id/64/200/200' } },
  { id: '3', name: 'Thabo', image: { uri: 'https://picsum.photos/id/201/200/200' } },
  { id: '4', name: 'Lerato', image: { uri: 'https://picsum.photos/id/29/200/200' } },
];

const dummyPosts = [
  {
    id: '1',
    username: 'Makhala',
    userAvatar: 'https://picsum.photos/id/64/200/200',
    time: '2h',
    content: 'Just finished my React Native lab test! 🚀 Who else is coding tonight?',
    image: 'https://picsum.photos/id/1015/600/400',
  },
  {
    id: '2',
    username: 'Limkokwing Uni',
    userAvatar: 'https://picsum.photos/id/201/200/200',
    time: '5h',
    content: 'Proud of all our Software Engineering students! 💙',
  },
];

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* Create Post Section */}
      <View style={styles.createPost}>
        <TextInput
          style={styles.input}
          placeholder="What's on your mind?"
          placeholderTextColor="#65676B"
        />
        <View style={styles.mediaButtons}>
          <Text style={styles.mediaText}>📷 Photo</Text>
          <Text style={styles.mediaText}>🎥 Video</Text>
          <Text style={styles.mediaText}>😀 Feeling</Text>
        </View>
      </View>

      <FlatList
        data={dummyPosts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <PostCard post={item} />}
        ListHeaderComponent={
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.storiesContainer}>
            {dummyStories.map((story) => (
              <StoryItem key={story.id} {...story} />
            ))}
          </ScrollView>
        }
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F0F2F5' },
  createPost: {
    backgroundColor: '#fff',
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#F0F2F5',
    borderRadius: 50,
    paddingHorizontal: 20,
    paddingVertical: 12,
    fontSize: 16,
  },
  mediaButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 12,
  },
  mediaText: { color: '#1877F2', fontWeight: '600' },
  storiesContainer: { paddingVertical: 12, backgroundColor: '#fff' },
});

export default HomeScreen;