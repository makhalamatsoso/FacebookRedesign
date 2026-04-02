import React from 'react';
import { Image, StyleSheet } from 'react-native';

const Avatar = ({ source, size = 40 }) => {
  return (
    <Image source={source} style={[styles.avatar, { width: size, height: size }]} />
  );
};

const styles = StyleSheet.create({
  avatar: {
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#fff',
  },
});

export default Avatar;