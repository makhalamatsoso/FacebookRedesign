import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import Avatar from '../components/Avatar';
import PostCard from '../components/PostCard';
import { Ionicons } from '@expo/vector-icons';
import { usePosts } from '../context/PostContext';

const ProfileScreen = () => {
  const { posts } = usePosts();

  return (
    <ScrollView style={styles.container}>
      {/* Cover Photo */}
      <View style={styles.coverPhoto}>
        <Text style={styles.coverText}>Limkokwing University</Text>
      </View>

      {/* Profile Info */}
      <View style={styles.profileInfo}>
        <Avatar 
          source={{ 
            uri: 'https://drinkstore.shop/media/image/product/9605/lg/international-keiler-20x05l-weissbier-hell-mehrweg-mit-buegelverschluss.jpg' 
          }} 
          size={110} 
        />
        <Text style={styles.name}>Makhala</Text>
        <Text style={styles.bio}>Trust God in everything then you will see miracles happening.</Text>

        {/* Stats with Followers */}
        <View style={styles.stats}>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>24</Text>
            <Text style={styles.statLabel}>Posts</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>1.2K</Text>
            <Text style={styles.statLabel}>Followers</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>245</Text>
            <Text style={styles.statLabel}>Following</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.editButton}>
          <Ionicons name="pencil" size={18} color="#1877F2" />
          <Text style={styles.editText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>

      {/*Posts Section */}
      <Text style={styles.sectionTitle}>Your Posts</Text>
      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F0F2F5' },
  
  coverPhoto: {
    height: 180,
    backgroundColor: '#1877F2',
    justifyContent: 'flex-end',
    padding: 15,
  },
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

  stats: { 
    flexDirection: 'row', 
    marginVertical: 18,
    width: '100%',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
  },
  stat: { alignItems: 'center' },
  statNumber: { fontSize: 22, fontWeight: 'bold', color: '#1877F2' },
  statLabel: { fontSize: 14, color: 'gray', marginTop: 2 },

  editButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0F2F5',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 50,
    marginTop: 10,
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