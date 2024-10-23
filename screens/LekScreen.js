// screens/LektScreen.js
import React from 'react';
import { View, StyleSheet, Image, Dimensions } from 'react-native';
import { Button, Text, Drawer } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const { width, height } = Dimensions.get('window')

const WIDTH = Dimensions.get('window').width,
      HEIGHT = Dimensions.get('window').height

const LektScreen = ({ navigation }) => {
      return (
        <View style={styles.container}>
              
          <Image
            source={require('./pictures/Lektuerephase.png')}
            style={styles.image}
            resizeMode="contain"  // contain, cover, stretch, center, repeat
          />
        
        <Text style={styles.text}>{'\n'}</Text>
              
              <Text variant="titleLarge" style={styles.subtitle}> ÜTs:</Text>
              
              <Button
                  icon={() => (
                    <Icon name="book-open-variant" size={18} color="#96414b" />
                  )}
                  onPress={() => navigation.navigate('De mure et catto')}
                  >
                  <Text
                    variant="titleLarge"
                    style={styles.buttonText}
                  >
                    Odo von Cherington, De mure et catto
                  </Text>
              </Button>
              
              <Text style={styles.text}>{'\n'}</Text>
              
              <Text variant="titleLarge" style={styles.subtitle}> ITs:</Text>
              
              <Button
                  icon={() => (
                    <Icon name="book-open-variant" size={18} color="#96414b" />
                  )}
                  onPress={() => navigation.navigate('Mus Rusticus et Urbanus')}
                  >
                  <Text
                    variant="titleLarge"
                    style={styles.buttonText}
                  >
                    Horaz, Sat. 2.6.79: Mus Rusticus et Mus Urbanus (gek.)
                  </Text>
              </Button>
              
              <Text style={styles.text}>{'\n'}</Text>
              
              <Text variant="titleLarge" style={styles.subtitle}> Tools:</Text>
              
              <Button
                  icon={() => (
                    <Icon name="book-open-page-variant" size={18} color="#96414b" />
                  )}
                onPress={() => navigation.navigate('Wörterbuch')}
              >
                 <Text
                   variant="titleLarge"
                   style={styles.buttonText}
                 >
                   Wörterbuch
                 </Text>
              </Button>
              
        </View>
      );
    };

    const styles = StyleSheet.create({
      container: {
        flex: 1,
       // justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: '#F5FCFF',
      },
      text: {
        textAlign: 'center',
        margin: 10,
      },
        image: {
          width: width,
          height: height*0.25,
        },
      buttonText: {
        color:"#96414b"
      },
        subtitle: {
          color: '#6b6066',
          alignItems: 'center',
        },
    });


export default LektScreen;

