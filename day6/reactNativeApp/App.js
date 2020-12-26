import React, {Component} from 'react';
import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import axios from 'axios';
import data from './data';

export default class App extends Component {
  state = {
    data: [],
  };
  componentDidMount() {
    this.getAPIData();
  }

  async getAPIData() {
    await axios.get('https://picsum.photos/v2/list?page=2&limit=100').then(
      (response) => {
        this.setState(response.data);
      },
      (error) => {
        console.log(error);
      },
    );
  }

  latestMember = () => {
    return this.state.data.map((singleData) => {
      return (
        <View key={singleData.id}>
          <Text style={{textAlign: 'center', fontSize: 16}}>
            {singleData.author}
          </Text>
        </View>
      );
    });
  };

  render() {
    return (
      <View>
        <ScrollView>{this.latestMember()}</ScrollView>
      </View>
    );
  }
}
