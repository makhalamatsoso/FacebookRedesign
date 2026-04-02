import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Avatar from './Avatar';

const StoryItem = ({ name, image, isAddStory }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.storyCircle}>
        <Avatar source={image} size={70} />
        {isAddStory && (
          <View style={styles.addButton}>
            <Text style={styles.addText}>+</Text>
          </View>
        )}
      </View>
      <Text style={styles.name} numberOfLines={1}>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: { alignItems: 'center', marginRight: 12 },
  storyCircle: { position: 'relative' },
  addButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#1877F2',
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  name: { marginTop: 4, fontSize: 12, textAlign: 'center' },
});

export default StoryItem;