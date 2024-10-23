import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, AppRegistry } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import LekScreen from './screens/LekScreen';
import AnfScreen from './screens/AnfScreen';
import ALec1Screen from './screens/ALec1Screen';
import MusScreen from './screens/MusScreen';
import MusITScreen from './screens/MusITScreen';
import DictionaryScreen from './screens/DictionaryScreen';
import GramScreen from './screens/GramScreen';
import VocabularyScreen from './screens/VocabularyScreen';
import { PaperProvider } from 'react-native-paper';
import { name as appName } from './app.json';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


const Stack = createStackNavigator();

function App() {
  return (
   <GestureHandlerRootView style={{ flex: 1 }}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Lektürephase" component={LekScreen} />
        <Stack.Screen name="Anfangsunterricht" component={AnfScreen} />
        <Stack.Screen name="Lectio prima" component={ALec1Screen} />
        <Stack.Screen name="De mure et catto" component={MusScreen} />
        <Stack.Screen name="Mus Rusticus et Urbanus" component={MusITScreen} />
        <Stack.Screen name="Wörterbuch" component={DictionaryScreen} />
        <Stack.Screen name="Vocabularium" component={VocabularyScreen} />
        <Stack.Screen name="Grammatik" component={GramScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  </GestureHandlerRootView>
  );
}

export default function Main() {
  return (
    <PaperProvider>
      <App />
    </PaperProvider>
  );
}


AppRegistry.registerComponent(appName, () => Main);



