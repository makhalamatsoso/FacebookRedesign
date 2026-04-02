import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Avatar from './Avatar';

const StoryItem = ({ name, image, isAddStory }) => {
  return (
    <TouchableOpacity style={styles.container}>
      {/* Story Ring (looks like real Facebook gradient ring) */}
      <View style={[styles.storyRing, isAddStory && styles.addStoryRing]}>
        
        {/* The actual avatar */}
        <Avatar source={image} size={isAddStory ? 68 : 72} />

        {/* Blue "Add Story" button only for the first story */}
        {isAddStory && (
          <View style={styles.addButton}>
            <Text style={styles.addText}>+</Text>
          </View>
        )}
      </View>

      {/* Story name */}
      <Text style={styles.name} numberOfLines={1}>
        {name}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginRight: 12,
  },

  /* Story Ring - Gives the beautiful Facebook look */
  storyRing: {
    width: 82,
    height: 82,
    borderRadius: 999,
    borderWidth: 3,
    borderColor: '#1877F2',           // Facebook blue ring
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 3,
  },

  /* Slightly different ring for "Add Story" */
  addStoryRing: {
    borderColor: '#1877F2',
    borderStyle: 'dashed',            // makes it look special
  },

  /* Add Story Button */
  addButton: {
    position: 'absolute',
    bottom: 4,
    right: 4,
    backgroundColor: '#1877F2',
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 3,
    borderColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 22,
  },

  name: {
    marginTop: 6,
    fontSize: 12,
    color: '#050505',
    textAlign: 'center',
    maxWidth: 72,
  },
});

export default StoryItem;