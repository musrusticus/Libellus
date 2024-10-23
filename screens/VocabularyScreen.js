// screens/VocabularyScreen.js
import React, { useRef, useState, useEffect } from 'react';
import { View, StyleSheet, Image, ScrollView, SafeAreaView, Dimensions, Modal, AppRegistry,  TouchableOpacity } from 'react-native';
import { Button, Text, Drawer, DataTable, TextInput } from 'react-native-paper';
import { WebView, webviewRef } from 'react-native-webview';

const { width, height } = Dimensions.get('window')

const WIDTH = Dimensions.get('window').width,
      HEIGHT = Dimensions.get('window').height

const VocabularyScreen = () => {
    
        const primaLatinWords = ["video, vides, videre, vidi, visum", "post", "schola/-ae f.", "dico, dicis, dicere, dixi, dictum", "salve(te", "et", "tum", "amicus/-i m.", "puer/-i m.", "sum, es, esse, fui", "magnus 3", "parvus 3", "puella/-ae f.", "sed", "amica/-ae f.", "clamo, clamas, clamare, clamavi, clamatum", "respondeo, respondes, respondere, responsi, responsum", "nunc", "ambulo, ambulas, ambulare, ambulavi, ambulatum", "rideo, rides, ridere, risi, risum"];
        const primaGermanWords = ["sehen", "nach", "Schule", "sagen", "sei(d) gegrüßt, hallo", "und", "dann, damals", "Freund", "Bub", "sein", "groß", "klein", "Mädchen", "aber, sondern", "Freundin", "rufen", "antworten", "nun", "spazieren", "lachen" ];
    
  return (
          
          <SafeAreaView style={styles.container}>
          <ScrollView>
          <View style={styles.container}>
          
          <Text variant="titleMedium" style={styles.text}>
              {'\n'}
              Lectio prima:
          </Text>
          
          
          <View style={styles.boop}>
              <DataTable>
                <DataTable.Header style={styles.tableHeader}>
                  <DataTable.Title>
                      Latein
                  </DataTable.Title>
                  <DataTable.Title>
                      Deutsch
                  </DataTable.Title>
                </DataTable.Header>
          
                  {primaLatinWords.map((lat, index) => <DataTable.Row>
                    <DataTable.Cell>{lat}</DataTable.Cell>
                    <DataTable.Cell>{primaGermanWords[index]}</DataTable.Cell>
                  </DataTable.Row>)}
              </DataTable>
          
            </View>
          
          </View>
          </ScrollView>
          </SafeAreaView>

  );
    
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
   //justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  text: {
    textAlign: 'justify',
    marginLeft: 30,
    marginRight: width*0.6,
    lineHeight: 40,
    flexDirection: 'row',
  },
  image: {
    width: width,
    height: height*0.15,
    flex: 1,
    backgroundColor: '#fdf5e8',
    justifyContent: 'center',
  },
  popupWord: {
    color: 'purple',
    //textDecorationLine: 'underline',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', //darker screen for popup
  },
  modalView: {
    width: '80%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  writing: {
    flex: 0.5,
    flexDirection: 'column',
    backgroundColor: '#fdf5e8',
    justifyContent: 'center',
  },
    buttons: {
        marginLeft: 30,
        marginRight: 30,
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    einleitung: {
        textAlign: 'justify',
        alignItems: 'justify',
        margin: 30,
    },
    boop: {
        textAlign: 'justify',
        marginRight: 30,
        lineHeight: 40,
        marginLeft: 30,
        flexDirection: 'row',
    },
    beep: {
        textAlign: 'justify',
        marginRight: 50,
        lineHeight: 40,
        marginLeft: 30,
        flexDirection: 'row',
    },
    
});


export default VocabularyScreen;

