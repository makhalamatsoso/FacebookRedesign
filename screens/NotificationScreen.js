import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import Avatar from '../components/Avatar';

const dummyNotifications = [
  { 
    id: '1', 
    text: 'Thabo liked your post', 
    time: '10m', 
    avatar: { uri: 'https://picsum.photos/id/64/200/200' } 
  },
  { 
    id: '2', 
    text: 'Lerato commented: "This looks amazing! 🔥"', 
    time: '45m', 
    avatar: { uri: 'https://picsum.photos/id/29/200/200' } 
  },
  { 
    id: '3', 
    text: 'Limkokwing University tagged you in a post', 
    time: '2h', 
    avatar: { uri: 'https://picsum.photos/id/201/200/200' } 
  },
  { 
    id: '4', 
    text: 'Khotso started following you', 
    time: '5h', 
    avatar: { uri: 'https://picsum.photos/id/133/200/200' } 
  },
];

const NotificationScreen = () => {
  return (
    <View style={styles.container}>
      
      {/*Notifications Heading*/}
      <View style={styles.header}>
        <Text style={styles.title}>Notifications</Text>
      </View>

      <FlatList
        data={dummyNotifications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.notifCard}>
            <Avatar source={item.avatar} size={52} />
            <View style={styles.textArea}>
              <Text style={styles.text}>{item.text}</Text>
              <Text style={styles.time}>{item.time}</Text>
            </View>
          </View>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#F0F2F5' 
  },

  /*Header*/
  header: {
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#050505',
  },

  /*Notification Card */
  notifCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    marginHorizontal: 10,
    marginVertical: 6,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    elevation: 3,
  },
  textArea: { 
    marginLeft: 12, 
    flex: 1 
  },
  text: { 
    fontSize: 15, 
    lineHeight: 22 
  },
  time: { 
    fontSize: 13, 
    color: '#65676B', 
    marginTop: 4 
  },
});

export default NotificationScreen;