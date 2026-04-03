import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import Avatar from './Avatar';
import { Ionicons } from '@expo/vector-icons';

const PostCard = ({ post }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(post.likes || 0);

  const handleLike = () => {
    if (isLiked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setIsLiked(!isLiked);
  };

  const handleComment = () => {
    Alert.prompt(
      'Comment on this post',
      'Write your comment...',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Post Comment',
          onPress: (commentText) => {
            if (commentText && commentText.trim() !== '') {
              Alert.alert('Comment Posted!', `You said: "${commentText}"`);
            }
          },
        },
      ],
      'plain-text'
    );
  };

  const handleShare = () => {
    Alert.alert(
      'Shared!',
      'Your post has been shared to your friends and timeline 🎉',
      [{ text: 'OK', style: 'default' }]
    );
  };

  return (
    <View style={styles.card}>
      {/* Header */}
      <View style={styles.header}>
        <Avatar source={{ uri: post.userAvatar }} size={45} />
        <View style={styles.userInfo}>
          <Text style={styles.username}>{post.username}</Text>
          <Text style={styles.time}>{post.time} • 🌍</Text>
        </View>
        <TouchableOpacity style={styles.moreButton}>
          <Ionicons name="ellipsis-horizontal" size={22} color="#65676B" />
        </TouchableOpacity>
      </View>

      {/* Post Content */}
      <Text style={styles.contentText}>{post.content}</Text>

      {/* Post Image */}
      {post.image && (
        <Image 
          source={typeof post.image === 'string' ? { uri: post.image } : post.image} 
          style={styles.postImage} 
          resizeMode="cover" 
        />
      )}

      {/* Like Count */}
      <View style={styles.likeCountRow}>
        <View style={styles.reactionIcons}>
          {post.reactions && post.reactions.map((emoji, index) => (
            <Text key={index} style={styles.reactionEmoji}>{emoji}</Text>
          ))}
        </View>
        <Text style={styles.likeCount}>{likeCount} likes</Text>
      </View>

      {/* Action Buttons - NOW INTERACTIVE */}
      <View style={styles.actionBar}>
        <TouchableOpacity style={styles.actionButton} onPress={handleLike}>
          <Ionicons 
            name={isLiked ? "thumbs-up" : "thumbs-up-outline"} 
            size={22} 
            color={isLiked ? "#1877F2" : "#65676B"} 
          />
          <Text style={[styles.actionText, isLiked && { color: '#1877F2' }]}>Like</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton} onPress={handleComment}>
          <Ionicons name="chatbubble-outline" size={22} color="#65676B" />
          <Text style={styles.actionText}>Comment</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton} onPress={handleShare}>
          <Ionicons name="arrow-redo-outline" size={22} color="#65676B" />
          <Text style={styles.actionText}>Share</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    marginVertical: 8,
    borderRadius: 12,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  header: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  userInfo: { flex: 1, marginLeft: 12 },
  username: { fontSize: 16, fontWeight: 'bold' },
  time: { fontSize: 13, color: '#65676B' },
  moreButton: { padding: 5 },
  contentText: { fontSize: 15, lineHeight: 22, marginBottom: 10 },
  postImage: { width: '100%', height: 280, borderRadius: 12, marginVertical: 8 },
  likeCountRow: { flexDirection: 'row', alignItems: 'center', marginVertical: 8 },
  reactionIcons: { flexDirection: 'row' },
  reactionEmoji: { fontSize: 18, marginRight: -6 },
  likeCount: { marginLeft: 8, fontSize: 14, color: '#65676B' },
  actionBar: { 
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    borderTopWidth: 1, 
    borderTopColor: '#E4E6EA', 
    paddingTop: 12 
  },
  actionButton: { flexDirection: 'row', alignItems: 'center' },
  actionText: { marginLeft: 6, fontSize: 15, color: '#65676B', fontWeight: '600' },
});

export default PostCard;