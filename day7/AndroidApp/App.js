import React, {useState, useEffect} from 'react';
import {
  Image,
  StyleSheet,
  Button,
  Text,
  ImageBackground,
  TouchableOpacity,
  View,
} from 'react-native';
import axios from 'axios';
import {ScrollView} from 'react-native-gesture-handler';

export default function App() {
  const [text, setText] = useState([]);
  const getAPI = () => {
    axios.get('https://picsum.photos/v2/list?page=2&limit=100').then(
      (response) => {
        setText(response.data);
      },
      (error) => {
        console.log(error);
      },
    );
  };
  useEffect(() => {
    getAPI();
  }, []);

  return (
    <View style={{margin: 8, justifyContent: 'center'}}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {text.map((item) => {
          return (
            <View key={item.id} style={{margin: 4, padding: 8}}>
              <TouchableOpacity>
                <Button
                  onPress={() => {
                    alert('You Cliked ' + item.author);
                  }}
                  title={item.author}
                />
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
      <ScrollView>
        {text.map((item) => {
          return (
            <View key={item.id} style={{marginVertical: 5}}>
              <ImageBackground
                style={{width: '100%', height: 400}}
                source={{uri: item.download_url}}
              />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
