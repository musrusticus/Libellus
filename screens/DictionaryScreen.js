// screens/DictionaryScreen.js
import React from 'react';
import { View, StyleSheet, Image, Dimensions } from 'react-native';
import { Button, Text, Drawer } from 'react-native-paper';
import { WebView, webviewRef } from 'react-native-webview';

const { width, height } = Dimensions.get('window')

const WIDTH = Dimensions.get('window').width,
      HEIGHT = Dimensions.get('window').height

const DictionaryScreen = () => {
  return <WebView
            source={{ uri: 'https://www.navigium.de/latein-woerterbuch.html' }}
            style={{ flex: 1 }}
            originWhitelist={['*']}
            ref={webviewRef}
         />;
}


export default DictionaryScreen;

