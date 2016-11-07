import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  ScrollView,
  Image,
  Text,
  View
} from 'react-native';

export default class scrollViewReactNative extends Component {
  render() {
    return (
       <ScrollView>
          <Text style={{fontSize:96}}>Scroll me plz</Text>
          <Image source={{ uri: 'https://facebook.github.io/react/img/logo_og.png' }} style={{width: 400, height: 400}} />
          <Image source={{ uri: 'https://facebook.github.io/react/img/logo_og.png' }} style={{width: 400, height: 400}} />
          <Image source={{ uri: 'https://facebook.github.io/react/img/logo_og.png' }} style={{width: 400, height: 400}} />
          <Image source={{ uri: 'https://facebook.github.io/react/img/logo_og.png' }} style={{width: 400, height: 400}} />
          <Image source={{ uri: 'https://facebook.github.io/react/img/logo_og.png' }} style={{width: 400, height: 400}} />
          <Text style={{fontSize:96}}>If you like</Text>
          <Image source={{ uri: 'https://facebook.github.io/react/img/logo_og.png' }} style={{width: 400, height: 400}} />
          <Image source={{ uri: 'https://facebook.github.io/react/img/logo_og.png' }} style={{width: 400, height: 400}} />
          <Image source={{ uri: 'https://facebook.github.io/react/img/logo_og.png' }} style={{width: 400, height: 400}} />
          <Image source={{ uri: 'https://facebook.github.io/react/img/logo_og.png' }} style={{width: 400, height: 400}} />
          <Image source={{ uri: 'https://facebook.github.io/react/img/logo_og.png' }} style={{width: 400, height: 400}} />
          <Text style={{fontSize:96}}>Scrolling down</Text>
          <Image source={{ uri: 'https://facebook.github.io/react/img/logo_og.png' }} style={{width: 400, height: 400}} />
          <Image source={{ uri: 'https://facebook.github.io/react/img/logo_og.png' }} style={{width: 400, height: 400}} />
          <Image source={{ uri: 'https://facebook.github.io/react/img/logo_og.png' }} style={{width: 400, height: 400}} />
          <Image source={{ uri: 'https://facebook.github.io/react/img/logo_og.png' }} style={{width: 400, height: 400}} />
          <Image source={{ uri: 'https://facebook.github.io/react/img/logo_og.png' }} style={{width: 400, height: 400}} />
          <Text style={{fontSize:96}}>What's the best</Text>
          <Image source={{ uri: 'https://facebook.github.io/react/img/logo_og.png' }} style={{width: 400, height: 400}} />
          <Image source={{ uri: 'https://facebook.github.io/react/img/logo_og.png' }} style={{width: 400, height: 400}} />
          <Image source={{ uri: 'https://facebook.github.io/react/img/logo_og.png' }} style={{width: 400, height: 400}} />
          <Image source={{ uri: 'https://facebook.github.io/react/img/logo_og.png' }} style={{width: 400, height: 400}} />
          <Image source={{ uri: 'https://facebook.github.io/react/img/logo_og.png' }} style={{width: 400, height: 400}} />
          <Text style={{fontSize:96}}>Framework around?</Text>
          <Image source={{ uri: 'https://facebook.github.io/react/img/logo_og.png' }} style={{width: 400, height: 400}} />
          <Image source={{ uri: 'https://facebook.github.io/react/img/logo_og.png' }} style={{width: 400, height: 400}} />
          <Image source={{ uri: 'https://facebook.github.io/react/img/logo_og.png' }} style={{width: 400, height: 400}} />
          <Image source={{ uri: 'https://facebook.github.io/react/img/logo_og.png' }} style={{width: 400, height: 400}} />
          <Image source={{ uri: 'https://facebook.github.io/react/img/logo_og.png' }} style={{width: 400, height: 400}} />
          <Text style={{fontSize:80}}>React Native</Text>
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('scrollViewReactNative', () => scrollViewReactNative);
