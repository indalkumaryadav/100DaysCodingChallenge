import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import axios from 'axios';

export default function App() {
  axios.get('http://192.168.43.118/api/book/').then(
    (response) => {
      console.warn(response);
    },
    (error) => {
      console.warn(error);
    },
  );

  return (
    <View>
      <Text>rrrrrrr</Text>
      <Text>rrrrrrr</Text>
      <Text>rrrrrrr</Text>
      <Text>rrrrrrr</Text>
      <Text>rrrrrrr</Text>
      <Text>rrrrrrr</Text>
      <Text>rrrrrrr</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
