import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 25,
            color: '#fff',
          }}>
          textInComponen
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    width: '100%',
    height: 50,
  },
});
