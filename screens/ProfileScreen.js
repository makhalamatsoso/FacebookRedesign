import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import Avatar from '../components/Avatar';
import PostCard from '../components/PostCard';
import { Ionicons } from '@expo/vector-icons';

const dummyMyPosts = [
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
];

const ProfileScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.coverPhoto}>
        <Text style={styles.coverText}>Limkokwing University</Text>
      </View>

      <View style={styles.profileInfo}>
        <Avatar 
          source={{ uri: 'https://drinkstore.shop/media/image/product/9605/lg/international-keiler-20x05l-weissbier-hell-mehrweg-mit-buegelverschluss.jpg' }} 
          size={110} 
        />
        <Text style={styles.name}>Makhala</Text>
        <Text style={styles.bio}>Software Engineering Student @ Limkokwing</Text>

        <View style={styles.stats}>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>24</Text>
            <Text style={styles.statLabel}>Posts</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>187</Text>
            <Text style={styles.statLabel}>Friends</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.editButton}>
          <Ionicons name="pencil" size={18} color="#1877F2" />
          <Text style={styles.editText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>Your Posts</Text>
      {dummyMyPosts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F0F2F5' },
  coverPhoto: { height: 180, backgroundColor: '#1877F2', justifyContent: 'flex-end', padding: 15 },
  coverText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  profileInfo: {
    alignItems: 'center',
    backgroundColor: '#fff',
    marginTop: -50,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingBottom: 15,
  },
  name: { fontSize: 26, fontWeight: 'bold', marginTop: 10 },
  bio: { fontSize: 16, color: '#65676B' },
  stats: { flexDirection: 'row', marginVertical: 15 },
  stat: { alignItems: 'center', marginHorizontal: 25 },
  statNumber: { fontSize: 22, fontWeight: 'bold', color: '#1877F2' },
  statLabel: { fontSize: 14, color: 'gray' },
  editButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0F2F5',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 50,
  },
  editText: { marginLeft: 8, color: '#1877F2', fontWeight: '600' },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 15,
    backgroundColor: '#F0F2F5',
  },
});

export default ProfileScreen;