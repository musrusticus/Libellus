// screens/AnfScreen.js
import React from 'react';
import { View, StyleSheet, Image, Dimensions } from 'react-native';
import { Button, Text, Drawer, BottomNavigation } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const { width, height } = Dimensions.get('window')

const WIDTH = Dimensions.get('window').width,
      HEIGHT = Dimensions.get('window').height

const AnfScreen = ({ navigation }) => {
    const [active, setActive] = React.useState('');
    return (
            
      <View style={styles.container}>
        
            <Image
                source={require('./pictures/Anfangsunterricht.png')}
                style={styles.image}
                resizeMode="contain"  // contain, cover, stretch, center, repeat
            />
        
            <Text style={styles.text}>{'\n'}</Text>
            <Text variant="titleLarge" style={styles.subtitle}> Lektionen:</Text>
            
            <Button
                icon={() => (
                  <Icon name="book-open-variant" size={18} color="#96414b" />
                )}
                onPress={() => navigation.navigate('Lectio prima')}
                textColor="#96414b"
            >
                <Text
                  variant="titleLarge"
                  style={styles.buttonText}
                >
                  Lectio Prima
                </Text>
             </Button>
            
            <Text style={styles.text}>{'\n'}</Text>
            
            <Text variant="titleLarge" style={styles.subtitle}> Unterlagen:</Text>
            
            <Button
                icon={() => (
                  <Icon name="book-open-page-variant" size={18} color="#96414b" />
                )}
              onPress={() => navigation.navigate('Vocabularium')}
            >
               <Text
                 variant="titleLarge"
                 style={styles.buttonText}
               >
                 Vokabelkartei
               </Text>
            </Button>
            
            <Button
                icon={() => (
                  <Icon name="book-open-page-variant" size={18} color="#96414b" />
                )}
              onPress={() => navigation.navigate('Grammatik')}
            >
               <Text
                 variant="titleLarge"
                 style={styles.buttonText}
               >
                 Grammatik
               </Text>
            </Button>
            
            <Drawer.CollapsedItem>
            <Drawer.Section title="Some title">
              <Drawer.Item
                label="First Item"
                active={active === 'first'}
                onPress={() => setActive('first')}
              />
              <Drawer.Item
                label="Second Item"
                active={active === 'second'}
                onPress={() => setActive('second')}
              />
            </Drawer.Section>
            </Drawer.CollapsedItem>
            {/*funktioniert noch nicht sadge */}
            
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
     // backgroundColor: '#F5FCFF',
      padding: 25,
    },
    text: {
      textAlign: 'center',
      marginBottom: 20,
      margin: 10,
    },
      image: {
        width: width,
        height: height*0.35,
      },
    buttonText: {
      color: '#96414b',
    },
      subtitle: {
        color: '#6b6066',
        alignItems: 'center',
      },
  });

export default AnfScreen;

