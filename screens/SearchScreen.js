import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import Avatar from '../components/Avatar';
import { Ionicons } from '@expo/vector-icons';

const dummyResults = [
  { id: '1', name: 'Thabo Mokoena', username: '@thabo_dev', avatar: { uri: 'https://picsum.photos/id/64/200/200' } },
  { id: '2', name: 'Lerato Phiri', username: '@lerato_design', avatar: { uri: 'https://picsum.photos/id/29/200/200' } },
  { id: '3', name: 'Khotso Molapo', username: '@khotso_code', avatar: { uri: 'https://picsum.photos/id/201/200/200' } },
];

const SearchScreen = () => {
  const [searchText, setSearchText] = useState('');

  const filtered = dummyResults.filter(user =>
    user.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View style={styles.container}>
      {/*Facebook-style Search Bar*/}
      <View style={styles.searchHeader}>
        <View style={styles.searchBar}>
          <Ionicons name="search" size={22} color="#65676B" />
          <TextInput
            style={styles.input}
            placeholder="Search Facebook"
            placeholderTextColor="#65676B"
            value={searchText}
            onChangeText={setSearchText}
          />
        </View>
      </View>

      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.resultCard}>
            <Avatar source={item.avatar} size={52} />
            <View style={styles.info}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.username}>{item.username}</Text>
            </View>
          </TouchableOpacity>
        )}
        ListHeaderComponent={
          <Text style={styles.sectionTitle}>People you may know</Text>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F0F2F5' },
  searchHeader: { backgroundColor: '#fff', padding: 10, borderBottomWidth: 1, borderBottomColor: '#ddd' },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0F2F5',
    borderRadius: 50,
    paddingHorizontal: 15,
    height: 45,
  },
  input: { flex: 1, marginLeft: 10, fontSize: 16 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', padding: 15, color: '#050505' },
  resultCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 12,
    marginHorizontal: 10,
    marginVertical: 4,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    elevation: 3,
  },
  info: { marginLeft: 12 },
  name: { fontSize: 16, fontWeight: 'bold' },
  username: { fontSize: 14, color: '#65676B' },
});

export default SearchScreen;