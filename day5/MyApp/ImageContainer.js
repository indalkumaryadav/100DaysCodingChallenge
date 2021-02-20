import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';

export default function ImageContainer() {
  return (
    <View style={{margin: 8}}>
      <ImageBackground
        imageStyle={{borderRadius: 20}}
        style={{height: 250}}
        source={{uri: 'https://picsum.photos/200/300'}}
      />
      <Text>Font Added</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
