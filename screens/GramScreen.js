// screens/GramScreen.js
import React, { useRef, useState, useEffect } from 'react';
import { View, StyleSheet, Image, ScrollView, SafeAreaView, Dimensions, Modal, AppRegistry,  TouchableOpacity } from 'react-native';
import { Button, Text, Drawer, DataTable, TextInput } from 'react-native-paper';
import { WebView, webviewRef } from 'react-native-webview';

const { width, height } = Dimensions.get('window')

const WIDTH = Dimensions.get('window').width,
      HEIGHT = Dimensions.get('window').height

const caseNumbers = ["Nominativ","Genitiv", "Dativ", "Akkusativ", "Vokativ", "Ablativ"];
const personWords = ["1.P. sg.", "2.P. sg.", "3.P. sg.", "1.P. pl.", "2.P. pl.", "3.P. pl.",];
const aDeklWords = ["amica", "amicae", "amicae", "amicam", "amica", "amica"];
const oDeklMWords = ["amicus", "amici", "amico", "amicum", "amice", "amico"];
const oDeklNWords = ["templum", "templi", "templo", "templum", "templum", "templo"];
const aKonjPraesAktIndWords = ["amo", "amas", "amat", "amamus", "amatis", "amant"];
const aKonjPraesAktIndDtWords = ["ich liebe", "du liebst", "er/sie/es liebt", "wir lieben", "ihr liebt", "sie lieben"];
const eKonjPraesAktIndWords = ["moneo", "mones", "monet", "monemus", "monetis", "monent"];
const eKonjPraesAktIndDtWords = ["ich mahne", "du mahnst", "er/sie/es mahnt", "wir mahnen", "ihr mahnt", "sie mahnen"];

const GramScreen = () => {
  return (
          
          <SafeAreaView style={styles.container}>
          <ScrollView>
          <View style={styles.container}>
          
              <Text variant="titleMedium" style={styles.text}>
                  {'\n'}
                  A/O-Deklination:
              </Text>
              
              

                <View style={styles.boop}>

                  <DataTable>
                    <DataTable.Header style={styles.tableHeader}>
                      <DataTable.Title>
                          Fälle
                      </DataTable.Title>
                      <DataTable.Title>
                          A-Deklination
                      </DataTable.Title>
                      <DataTable.Title>
                         O-Dekl. Maskulin
                      </DataTable.Title>
                      <DataTable.Title>
                          O-Dekl. Neutrum
                      </DataTable.Title>
                    </DataTable.Header>
              
                  {caseNumbers.map((cases, index) => <DataTable.Row>
                          <DataTable.Cell>{cases}</DataTable.Cell>
                          <DataTable.Cell>{aDeklWords[index]}</DataTable.Cell>
                          <DataTable.Cell>{oDeklMWords[index]}</DataTable.Cell>
                          <DataTable.Cell>{oDeklNWords[index]}</DataTable.Cell>
                      </DataTable.Row>)}
                  </DataTable>
                </View>
              
              <Text variant="titleMedium" style={styles.text}>
                  {'\n'}
                  A-Konjugation Präsens Aktiv Indikativ:
              </Text>
          
              <View style={styles.boop}>

                <DataTable>
                  <DataTable.Header style={styles.tableHeader}>
                    <DataTable.Title>
                        Person
                    </DataTable.Title>
                    <DataTable.Title numberOfLines={3}>
                        A-Konj. Präsens Aktiv Indikativ
                    </DataTable.Title>
                    <DataTable.Title>
                        Deutsch
                    </DataTable.Title>
                    </DataTable.Header>
            
                {personWords.map((pers, index) => <DataTable.Row>
                        <DataTable.Cell>{pers}</DataTable.Cell>
                                 <DataTable.Cell>{aKonjPraesAktIndWords[index]}</DataTable.Cell>
                                 <DataTable.Cell>{aKonjPraesAktIndDtWords[index]}</DataTable.Cell>
                    </DataTable.Row>)}
                </DataTable>

              </View>
          
              <Text variant="titleMedium" style={styles.text}>
                  {'\n'}
                  E-Konjugation Präsens Aktiv Indikativ:
              </Text>
          
              <View style={styles.boop}>

                <DataTable>
                  <DataTable.Header style={styles.tableHeader}>
                    <DataTable.Title>
                        Person
                    </DataTable.Title>
                    <DataTable.Title numberOfLines={3}>
                        E-Konj. Präsens Aktiv Indikativ
                    </DataTable.Title>
                    <DataTable.Title>
                        Deutsch
                    </DataTable.Title>
                    </DataTable.Header>
            
                {personWords.map((pers, index) => <DataTable.Row>
                        <DataTable.Cell>{pers}</DataTable.Cell>
                                 <DataTable.Cell>{eKonjPraesAktIndWords[index]}</DataTable.Cell>
                                 <DataTable.Cell>{eKonjPraesAktIndDtWords[index]}</DataTable.Cell>
                    </DataTable.Row>)}
                </DataTable>
        

              </View>
          
          
          
          </View>
          </ScrollView>
          </SafeAreaView>
          
    );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#FFFFFF',
  },
    
  text: {
      textAlign: 'justify',
      marginRight: 30,
      lineHeight: 40,
      marginLeft: 30,
  },
    boop: {
        textAlign: 'justify',
        marginRight: width*0.1,
        lineHeight: 40,
        marginLeft: 30,
        flexDirection: 'row',
    },
    beep: {
        textAlign: 'justify',
        marginRight: width*0.7,
        lineHeight: 40,
        marginLeft: 30,
        flexDirection: 'row',
    },
    
  
  });

export default GramScreen;

