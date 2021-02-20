import React, {Component} from 'react';
import {ScrollView, ImageBackground, Text, View} from 'react-native';
import {Header} from './Header';
import Member from './Member';
import Photos from './Photos';

export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        {/* Header */}
        <View
          style={{
            backgroundColor: 'red',
            width: '80%',
            margin: 8,
            padding: 16,
            borderRadius: 50,
            justifyContent: 'center',
          }}>
          <Text>Header</Text>
        </View>

        {/* Scroll View  */}
        <ScrollView>
          <ImageBackground
            imageStyle={{borderRadius: 20}}
            style={{height: 250, margin: 8}}
            source={{uri: 'https://picsum.photos/200/300'}}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 25,
                fontWeight: 'bold',
                marginTop: 25,
              }}>
              Image Hello there
            </Text>
          </ImageBackground>

          <Member />
          <Photos />
        </ScrollView>
      </View>
    );
  }
}
