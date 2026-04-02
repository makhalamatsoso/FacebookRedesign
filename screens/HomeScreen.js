import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  FlatList, 
  ScrollView, 
  TextInput, 
  TouchableOpacity 
} from 'react-native';
import StoryItem from '../components/StoryItem';
import PostCard from '../components/PostCard';
import Avatar from '../components/Avatar';
import { Ionicons } from '@expo/vector-icons';

const dummyStories = [
  { id: '1', name: 'Add Story', image: { uri: 'https://picsum.photos/id/1011/200/200' }, isAddStory: true },
  { id: '2', name: 'Makhala', image: { uri: 'https://drinkstore.shop/media/image/product/9605/lg/international-keiler-20x05l-weissbier-hell-mehrweg-mit-buegelverschluss.jpg' } },
  { id: '3', name: 'Thabo', image: { uri: 'https://picsum.photos/id/201/200/200' } },
  { id: '4', name: 'Lerato', image: { uri: 'https://picsum.photos/id/29/200/200' } },
  { id: '5', name: 'Khotso', image: { uri: 'https://picsum.photos/id/133/200/200' } },
];

const dummyPosts = [
  {
    id: '1',
    username: 'Makhala',
    userAvatar: 'https://drinkstore.shop/media/image/product/9605/lg/international-keiler-20x05l-weissbier-hell-mehrweg-mit-buegelverschluss.jpg',
    time: 'now',
    content: 'Embracing every moment that God gave me ✨',
    image: 'https://africanlanders.com/wp-content/uploads/2023/05/1676141200882.jpg',
    likes: 142,
    reactions: ['👍', '❤️', '🔥']
  },
  {
    id: '2',
    username: 'Makhala',
    userAvatar: 'https://drinkstore.shop/media/image/product/9605/lg/international-keiler-20x05l-weissbier-hell-mehrweg-mit-buegelverschluss.jpg',
    time: '2h',
    content: 'This semester is showing me flames and i am tired but i will never stip until i succed no matter what may come my way! 💪',
    likes: 87,
    reactions: ['❤️', '😍']
  },
  {
    id: '3',
    username: 'Limkokwing University',
    userAvatar: 'https://picsum.photos/id/201/200/200',
    time: '5h',
    content: 'Proud of all our Software Engineering students! 💙 #BIMP2210',
    likes: 324,
    reactions: ['👍', '🎉']
  },
  {
    id: '4',
    username: 'Thabo Mokoena',
    userAvatar: 'https://picsum.photos/id/133/200/200',
    time: 'Yesterday',
    content: 'Anyone else struggling with navigation in React Native? 😅',
    likes: 19,
    reactions: ['👍']
  },
];

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Text style={styles.facebookLogo}>facebook</Text>
        <View style={styles.topIcons}>
          <Ionicons name="search" size={24} color="#000" />
          <Ionicons name="chatbubble-ellipses" size={24} color="#000" style={{ marginLeft: 20 }} />
        </View>
      </View>

      <FlatList
        data={dummyPosts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <PostCard post={item} />}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <>
            <View style={styles.createPostContainer}>
              <View style={styles.createPostRow}>
                <Avatar source={{ uri: 'https://drinkstore.shop/media/image/product/9605/lg/international-keiler-20x05l-weissbier-hell-mehrweg-mit-buegelverschluss.jpg' }} size={45} />
                <TextInput
                  style={styles.createPostInput}
                  placeholder="What's on your mind?"
                  placeholderTextColor="#65676B"
                />
              </View>

              <View style={styles.createPostActions}>
                <TouchableOpacity style={styles.actionItem}>
                  <Text style={styles.actionText}>📷</Text>
                  <Text style={styles.actionLabel}>Photo</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionItem}>
                  <Text style={styles.actionText}>🎥</Text>
                  <Text style={styles.actionLabel}>Video</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionItem}>
                  <Text style={styles.actionText}>😀</Text>
                  <Text style={styles.actionLabel}>Feeling</Text>
                </TouchableOpacity>
              </View>
            </View>

            <ScrollView 
              horizontal 
              showsHorizontalScrollIndicator={false}
              style={styles.storiesContainer}
            >
              {dummyStories.map((story) => (
                <StoryItem key={story.id} {...story} />
              ))}
            </ScrollView>
          </>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F0F2F5' },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  facebookLogo: { fontSize: 28, fontWeight: 'bold', color: '#1877F2' },
  topIcons: { flexDirection: 'row' },
  createPostContainer: { backgroundColor: '#fff', padding: 12, marginBottom: 8 },
  createPostRow: { flexDirection: 'row', alignItems: 'center' },
  createPostInput: {
    flex: 1,
    backgroundColor: '#F0F2F5',
    borderRadius: 50,
    paddingHorizontal: 20,
    paddingVertical: 12,
    marginLeft: 10,
    fontSize: 16,
  },
  createPostActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#E4E6EA',
    paddingTop: 12,
  },
  actionItem: { alignItems: 'center' },
  actionText: { fontSize: 26 },
  actionLabel: { fontSize: 13, color: '#65676B', marginTop: 4 },
  storiesContainer: { backgroundColor: '#fff', paddingVertical: 12, marginBottom: 8 },
});

export default HomeScreen;