// Filename: index.js
// Combined code from all files

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView, StyleSheet, Text, View, Button, FlatList, TouchableOpacity, Image } from 'react-native';

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Fairy Tale App</Text>
      <Button
        title="Go to Story List"
        onPress={() => navigation.navigate('StoryList')}
        style={styles.button}
      />
    </SafeAreaView>
  );
};

const stories = [
  { id: '1', title: 'Cinderella' },
  { id: '2', title: 'Snow White' },
  { id: '3', title: 'Rapunzel' },
  { id: '4', title: 'Hansel and Gretel' },
  { id: '5', title: 'Sleeping Beauty' },
];

const StoryList = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => navigation.navigate('StoryDetails', { story: item })}
    >
      <Text style={styles.itemTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={stories}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const StoryDetails = ({ route }) => {
  const { story } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{story.title}</Text>
      <Image
        source={{ uri: `https://picsum.photos/200/300?random=${story.id}` }}
        style={styles.image}
      />
      <Text style={styles.content}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum.
        Donec rutrum sed sem quis venenatis. Proin viverra risus a eros volutpat tempor. In quis arcu et eros porta lobortis sit
        amet at magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    textAlign: 'center',
  },
  itemContainer: {
    padding: 20,
    backgroundColor: '#f9c2ff',
    marginBottom: 10,
    borderRadius: 5,
  },
  itemTitle: {
    fontSize: 18,
  },
  image: {
    width: 200,
    height: 300,
    marginBottom: 20,
    alignSelf: 'center',
  },
  content: {
    fontSize: 16,
  },
});

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="StoryList" component={StoryList} />
        <Stack.Screen name="StoryDetails" component={StoryDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}