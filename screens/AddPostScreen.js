import React from 'react';
import { View, Text } from 'react-native';

const Screen = ({ title }) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text style={{ fontSize: 24 }}>{title} Screen</Text>
  </View>
);

export default Screen;