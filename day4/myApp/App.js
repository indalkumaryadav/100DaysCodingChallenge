import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
export default function App() {
  return (
    <SafeAreaView>
      <Text>My App</Text>
      <Text>My App</Text>
      <Text>My App</Text>
      <Text>My App</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
  },
});
