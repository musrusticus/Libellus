// screens/HomeScreen.js
import React from 'react';
import { View, StyleSheet, Image, Dimensions } from 'react-native';
import { Button, Text, Drawer } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


const { width, height } = Dimensions.get('window')

const WIDTH = Dimensions.get('window').width,
      HEIGHT = Dimensions.get('window').height


const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
          
      <Image
            source={require('./pictures/Libellus_Transparent.png')}
            style={styles.image}
            resizeMode="contain"  // contain, cover, stretch, center, repeat
      />
          
      <Text variant="titleLarge" style={styles.subtitle}> Das digitale Lateinschulbuch</Text>
          
          <Text variant="titleMedium" style={styles.subtitle}>{'\n'}Geschrieben und programmiert von Tamara Fabsicz{'\n'}{'\n'}</Text>
          
      <Button
          icon={() => (
            <Icon name="book-open-page-variant" size={18} color="#96414b" />
          )}
          onPress={() => navigation.navigate('Anfangsunterricht')}
      >
          <Text
            variant="titleLarge"
            style={styles.buttonText}
          >
            Anfangsunterricht
          </Text>
      </Button>
          
      <Button
          icon={() => (
            <Icon name="book-open-page-variant" size={18} color="#96414b" />
          )}
          onPress={() => navigation.navigate('Lektürephase')}
      >
        <Text
          variant="titleLarge"
          style={styles.buttonText}
        >
          Lektürephase
        </Text>
      </Button>
          
          
          { /*
             BUTTON TEMPLATE FOR ADDITIONAL CHAPTERS:
             
             <Button
               icon ="book-open-page-variant"
               onPress={() => navigation.navigate('NAGIVATE')}
             >
                <Text
                  variant="titleLarge"
                  style={styles.buttonText}
                >
                  Anfangsunterricht
                </Text>
             </Button>
             
             */ }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'top',
    alignItems: 'center',
    padding: 25,
  },
  subtitle: {
    color: '#6b6066',
    alignItems: 'center',
  },
  button: {
    marginVertical: 15,
    color: 'purple',
  },
  buttonText: {
    color: '#96414b',
  },
  image: {
    width: width,
    height: height*0.35,
  },
});

export default HomeScreen;
