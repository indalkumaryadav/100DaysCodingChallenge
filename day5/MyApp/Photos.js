import React, {Component} from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import data from './data';

export default class Photos extends Component {
  state = {
    data: data,
  };
  Photo = () => {
    return this.state.data.map((singleData) => {
      return (
        <View
          key={singleData.id}
          style={{height: 250, margin: 3, padding: 5, flexBasis: '48%'}}>
          <ImageBackground
            style={{position: 'absolute', right: 0, bottom: 0, left: 0, top: 0}}
            imageStyle={{borderRadius: 20}}
            source={{uri: singleData.image_link}}
          />
        </View>
      );
    });
  };
  render() {
    return (
      <View>
        <Text style={{}}>Photos</Text>
        <View
          showsHorizontalScrollIndicator={false}
          horizontal
          style={styles.container}>
          {this.Photo()}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'red',
  },
});
