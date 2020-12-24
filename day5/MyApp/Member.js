import React, {Component} from 'react';
import {
  StyleSheet,
  Image,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import data from './data';

export default class Member extends Component {
  state = {
    data: data,
  };

  latestMember = () => {
    return this.state.data.map((singleData) => {
      return (
        <View key={singleData.id}>
          <TouchableOpacity>
            <Image
              style={{
                height: 120,
                width: 120,
                borderRadius: 10,
                marginHorizontal: 8,
              }}
              source={{uri: singleData.user_avatar}}
            />
            <Text style={{textAlign: 'center', fontSize: 16}}>
              {singleData.username}
            </Text>
          </TouchableOpacity>
        </View>
      );
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 25, fontWeight: 'bold'}}> Latest Member</Text>

        <ScrollView
          showsHorizontalScrollIndicator={false}
          style={{padding: 16}}
          horizontal>
          {this.latestMember()}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 8,
  },
});
