// screens/MusScreen.jsx
import React, { useRef, useState, useEffect } from 'react';
import { Component } from 'react';
import { View, StyleSheet, Image, ScrollView, SafeAreaView, Dimensions, Modal, AppRegistry,  TouchableOpacity } from 'react-native';
import { Button, Text, Drawer, SegmentedButtons, TextInput, Dialog, Portal, Colors, DataTable, } from 'react-native-paper';
import Slider from '@react-native-community/slider';
import { WebView } from 'react-native-webview';
import Signature from 'react-native-signature-canvas';
import SignatureScreen from 'react-native-signature-canvas';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CheckBox from 'expo-checkbox';




const { width, height } = Dimensions.get('window')

const WIDTH = Dimensions.get('window').width,
      HEIGHT = Dimensions.get('window').height


const MusITScreen = ({ navigation }) => {
    
    const [text, setText] = useState('');
    const aufgabeEinsWords = ["praeponere", "peragunt",];
    const aufgabeZweiWords = ["1.", "2.",];
    const aufgabeDreiWords = ["Die Stadtmaus lädt die Landmaus als erstes ein","Die Landmaus reist in die Stadt", "Die Landmaus beschließt in der Stadt zu bleiben"];
    
    
    let [checkedState, setCheckedState] = useState( new Array(aufgabeDreiWords.length).fill(false) );
    const [toggleButton, setToggleButton] = useState(false);
    
    const handleOnChange = (position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
                                                     index === position ? !item : item
                                                     );
        
        setCheckedState(updatedCheckedState);
    }; //ka wieso aber es funktioniert lol nested array go brrr
    
    
    const [scrollEnabled, setScrollEnabled] = useState(true);
    
    const [signature, setSign] = useState(null);
    
    
    
    const handleScroll = () => {
        ref.current.changePenColor('rgba(5, 5, 5, 0)'); //0 opacity = pen leaves no traces but is actually drawing. cannot find a better solution atm. fix later.
        setScrollEnabled(true);
    };
    
    const handleWrite = () => {
        ref.current.draw();
        ref.current.changePenColor('rgba(30, 46, 125, 1)');
        ref.current.changePenSize(1,1.5);
        setScrollEnabled(false);
    };
    
    const askBox = () => {
        handleClear();
        //TODO fix popup
    };
    
    const handleClear = () => {
        handleEraser();
        ref.current.clearSignature();
        handleWrite();
    };
    
    const handleEraser = () => {
        ref.current.changePenColor('rgba(30, 46, 125, 1)'); //have to do this or else eraser won't work after scroll option was toggled bc of opacity setting
        ref.current.erase();
        ref.current.changePenSize(4,4);
        console.log("eraser");
        setScrollEnabled(false);
    };
    
    const handleUndo = () => {
        console.log("undo");
        ref.current.undo();
    };
    
    const handleRedo = () => {
        console.log("redo");
        ref.current.redo();
    };
    
    
    const style = `.m-signature-pad {box-shadow: black; border: none; }
                  .m-signature-pad--body {border: none;}
                  .m-signature-pad--footer {display: none; margin: 0px;}
                  body,html {
                  width: ${width}px; height: ${height}px;}`;
    
    const ref = useRef();
    
    
    
    
    
    
    
    
    const [firstVisit, setFirstVisit] = useState(true);
    const [visitorVisible, setVisitorVisible] = useState(false);
    const [visitorText, setVisitorText] = useState('');
    
    const [modalVisible, setModalVisible] = useState(false);
    const [popupText, setPopupText] = useState('');
    
    
    const [value, setValue] = React.useState('');
    

 
    const [writeVisible, setWriteVisible] = React.useState(false);
    const [itVisible, setItVisible] = React.useState(false);
    const hideDialog = () => {
        setItVisible(false);
        setWriteVisible(false);
    };

    const handleWordClick = (text) => {
      setPopupText(text);
      setModalVisible(true);
    };
    
    
    
    const handleVisitor = (text) => {
        useEffect(() => {
            setVisitorText(text);
          }, []);
        useEffect(() => {
            setVisitorVisible(true);
          }, []);
    };
    
    const VisitorCheck = () => {
        useEffect(() => {
            setFirstVisit(false);
          }, []);
    };
    
    
    
    const VisitorController = () => {
        if (firstVisit==true) {
        handleVisitor('Klicke auf ein violettes Wort, um es im Wörterbuch anzuzeigen. Wenn du eine Übersetzung niederschreiben möchtest, klicke auf "Stift" oder "Radiergummi". Um nach unten und oben zu scrollen, klicke auf "Scrollen". ');
        VisitorCheck();
        }
    };
    
    
    return (
       
      <SafeAreaView style={styles.container}>
      <ScrollView>
      <View style={styles.container}>
            
            <VisitorController/>

            <Image
                source={require('./pictures/mus_rusticus.png')}
                style={styles.image}
                resizeMode="contain"  // contain, cover, stretch, center, repeat
            />
            
            
            <Text variant="titleLarge" style={styles.headline}>
                Arbeitsaufgaben zum Interpretationstext
            </Text>

            <Text variant="titleMedium" style={styles.text}>
                Der folgende Interpretationstext ist Grundlage für die Lösung der zehn Arbeitsaufgaben.
                Lies zuerst sorgfältig die Aufgabenstellungen und löse diese dann auf der Basis
                des Interpretationstextes.
            </Text>
            
            
            <View style={styles.buttons}>
                <Button icon = "eye" onPress={() => setItVisible(true)}>
                  Interpretationstext anzeigen
                </Button>
                
                <Button icon = "pen" onPress={() => setWriteVisible(true)}>
                  Notizen öffnen
                </Button>
            </View>
            
            
            <Text variant="titleMedium" style={styles.text}>
                {'\n'}{'\n'}
                1. Trennen Sie die folgenden Wörter in Präfix/Suffix und Grundwort und geben Sie die
                im Kontext passende deutsche Bedeutung der einzelnen Elemente in Klammern an.
                Nominalsuffixe sind in der Form des Nominativ Singular anzugeben; für das Grundwort
                gilt: Verben sind im Infinitiv, Substantive und Adjektive im Nominativ Singular anzugeben.
            </Text>
            
            <View style={styles.boop}>
                <DataTable>
                    <DataTable.Header style={styles.tableHeader}>
                      <DataTable.Title>zusammengesetztes Wort</DataTable.Title>
                      <DataTable.Title>Präfix oder Suffix (Bedeutung)   +   Grundwort (Bedeutung)</DataTable.Title>
                    </DataTable.Header>
                      <DataTable.Row>
                        <DataTable.Cell> z. B. libertati </DataTable.Cell>
                        <DataTable.Cell> liber (frei) + Suffix -tas (Eigenschaft) </DataTable.Cell>
                      </DataTable.Row>
            
                    <DataTable.Row>
                      <DataTable.Cell> z. B. conveniunt </DataTable.Cell>
                      <DataTable.Cell> Präfix con- (zusammen) + venire (kommen)</DataTable.Cell>
                    </DataTable.Row>
            
                      {aufgabeEinsWords.map(word => <DataTable.Row>
                        <DataTable.Cell>{word}</DataTable.Cell>
                        <DataTable.Cell>
                            <TextInput
                                left
                                placeholder="Tippen Sie Ihre Antwort ein."
                                multiline={true}
                                mode='outlined'
                                onChangeText={text => setText(text)}
                            />
                        </DataTable.Cell>
                    </DataTable.Row>)}
            
                </DataTable>
            </View>
            
            
            <Text variant="titleMedium" style={styles.text}>
                {'\n'}{'\n'}{'\n'}
                2. Listen Sie in der Tabelle zwei verschiedene lateinische Begriffe/Wendungen aus dem
                Sachfeld „Reise“ auf, die im Interpretationstext vorkommen und nicht
                als Vokabel angegeben sind. (2 Punkte)
            </Text>
            
            <View style={styles.boop}>
                <DataTable>
                    <DataTable.Header style={styles.tableHeader}>
                      <DataTable.Title></DataTable.Title>
                      <DataTable.Title>Sachfeld „Reise“ (lateinisches Textzitat)</DataTable.Title>
                    </DataTable.Header>
                    {aufgabeZweiWords.map(word => <DataTable.Row>
                      <DataTable.Cell>{word}</DataTable.Cell>
                      <DataTable.Cell>
                          <TextInput
                              left
                              multiline={true}
                              mode='outlined'
                              placeholder="Tippen Sie Ihre Antwort ein."
                              onChangeText={text => setText(text)}
                          />
                      </DataTable.Cell>
                    </DataTable.Row>)}
                </DataTable>
            </View>
            
            
            <Text variant="titleMedium" style={styles.text}>
                {'\n'}{'\n'}{'\n'}
                3. Überprüfen Sie die Richtigkeit der Aussagen anhand des Interpretationstextes. Kreuzen
                Sie die Box an, wenn eine Aussage dem Interpretationstext zu entnehmen ist. Kreuzen Sie die Box
                nicht an, wenn eine Aussage dem Interpretationstext nicht zu entnehmen ist.
                Stellen Sie nicht angekreuzte Aussagen in der entsprechenden Spalte auf Deutsch richtig. (3 Punkte)
            </Text>
            
            <View style={styles.beep}>
                <DataTable>
                    <DataTable.Header style={styles.tableHeader}>
                      <DataTable.Title>Aussage</DataTable.Title>
                      <DataTable.Title>ankreuzen, wenn richtig</DataTable.Title>
                      <DataTable.Title>Richtigstellung (dt.)</DataTable.Title>
                    </DataTable.Header>
                    {aufgabeDreiWords.map((word, index) => <DataTable.Row>
                      <DataTable.Cell>{word}</DataTable.Cell>
                      <DataTable.Cell>
                        <CheckBox
                            disabled={false}
                            value={checkedState[index]}
                            onValueChange={(value) => handleOnChange(index)}
                        />
                      </DataTable.Cell>
                      <DataTable.Cell>
                          <TextInput
                              left
                              multiline={true}
                              mode='outlined'
                              placeholder="Tippen Sie Ihre Antwort ein."
                              onChangeText={text => setText(text)}
                          />
                      </DataTable.Cell>
                    </DataTable.Row>) }
                </DataTable>
            </View>

                    
            
            
            
            <Portal>
            <Dialog visible={itVisible}>
            {/*todo: change background color to white*/}
              <Dialog.Title>IT-Text</Dialog.Title>
                <Dialog.ScrollArea>
                  <ScrollView contentContainerStyle={{paddingHorizontal: 0}}>
                    
                    <Text variant="titleLarge" style={{alignItems: 'justify'}}>
                        Einleitung: Wie Landmaus und Stadtmaus leben.{'\n'}
                    </Text>
                    <Text variant="titleMedium" style={{alignItems: 'justify'}}>
                        Olim rusticus urbanum murem mus paupere fertur {'\n'}
                        <Text
                            style={styles.popupWord}
                            onPress={() => handleWordClick('accipere: (hier: ) empfangen')}
                        >
                            accepisse
                        </Text>
                        {} cavo, veterem vetus hospes amicum. (...){'\n'}
                        Tandem urbanus ad hunc „quid te iuvat“, inquit, „amice,{'\n'}
                        praerupti {}
                        <Text
                            style={styles.popupWord}
                            onPress={() => handleWordClick('nemus nemoris, n.: Wald')}
                        >
                            nemoris
                        </Text>
                        {} patientem vivere dorso?{'\n'}
                        Vis tu homines urbemque feris praeponere silvis?{'\n'}
                        carpe viam, mihi crede, comes. (...){'\n'}
                        (..............................) haec ubi dicta{'\n'}
                        <Text
                            style={styles.popupWord}
                            onPress={() => handleWordClick('agrestis, agrestis, m.: Landkind')}
                        >
                            agrestem
                        </Text>
                        {} {}
                        <Text
                            style={styles.popupWord}
                            onPress={() => handleWordClick('pepulere = pepulerunt')}
                        >
                            pepulere
                        </Text>
                    , domo levis exsilit; Inde{'\n'}
                    ambo propositum peragunt iter, urbis {}
                    <Text
                        style={styles.popupWord}
                        onPress={() => handleWordClick('aveo, aves, avere: sich bemühen')}
                    >
                        aventes
                    </Text>
                    {'\n'}moenia nocturni subrepere. (...){'\n'}
                    (..............................) Cum ponit uterque{'\n'}
                    in locuplete domo vestigia, rubro ubi cocco{'\n'}
                    tincta super lectos canderet vestis eburnos{'\n'}
                    multaque de magna superessent fercula cena.{'\n'}
                    (..............................) Cum subito ingens{'\n'}
                    valvarum strepitus lectis excussit utrumque. {'\n'}
                    (..............................) Tum rusticus: "Haud mihi vita {'\n'}
                    est opus hac" ait et "Valeas: Me silva cavosque{'\n'}
                    tutus ab insidiis tenui, solabitur ervo."
            
                    </Text>
                    
                  </ScrollView>
                </Dialog.ScrollArea>
                <Dialog.Actions>
                  <Button icon = "eye-off" onPress={() => hideDialog()}>Schließen</Button>
                </Dialog.Actions>
              </Dialog>
            </Portal>
            
            {/*end IT-text*/}
            
            
            
            
            
            
            
            
            
            
            <Portal>
                <Dialog visible={writeVisible}>
                <Dialog.Title>Notizen</Dialog.Title>
                <Dialog.ScrollArea>
                <ScrollView scrollEnabled={false} contentContainerStyle={{paddingHorizontal: 0}}>
            
                    <View style={styles.buttons}>
                        <SegmentedButtons
                           value={value}
                           onValueChange={setValue}
                           buttons={[
                             {
                                 value: 'erase',
                                // label: 'Radierer',
                                 icon: 'eraser',
                                 onPress: handleEraser,
                             },
                             {
                                 value: 'draw',
                                 //label: 'Stift',
                                 icon: 'draw-pen',
                                 onPress: handleWrite,
                             },
                             {
                                 value: 'undo',
                                // label: 'Rückgängig',
                                 icon: 'undo-variant',
                                 onPress: handleUndo,
                             },
                             {
                                 value: 'redo',
                               //  label: 'Wiederholen',
                                 icon: 'redo-variant',
                                 onPress: handleRedo,
                             },
                             {
                                 value: 'clear',
                                // label: 'Neu',
                                 icon: 'trash-can-outline',
                                 onPress: askBox,
                             },
                           ]}
                         />
                    </View>
                
            
                    <View style={{ width: width*0.8, height: height*0.4,}}>
           
            
                        <SignatureScreen
                            bgSrc={URI='https://st2.depositphotos.com/1041372/7044/v/950/depositphotos_70445225-stock-illustration-illustration-of-a-sheet-of.jpg'}
                            descriptionText='Übersetze!'
                            ref={ref}
                          
                            bgWidth={width}
                            bgHeight={height}
                            webStyle={style}
                            dotSize='2'
                            minWidth='1'
                            maxWidth='1.5'
                            penColor='null'
                            minDistance='0'
                            trimWhitespace={true}
                            throttle= "0"
                        />
                    </View>
                    {/*todo: make notes stay upon closing, change pen color bc null is disgusting coding*/}
            

            </ScrollView>
              </Dialog.ScrollArea>
                <Dialog.Actions>
                  <Button icon = "eye-off" onPress={() => hideDialog()}>Schließen</Button>
                </Dialog.Actions>
              </Dialog>
            </Portal>
            {/*end note pad portal*/}
            
            
            
            <Modal
              transparent={true}
              animationType="slide"
              visible={visitorVisible}
              onRequestClose={() => setVisitorVisible(false)}
            >
              <View style={styles.modalOverlay}>
                <View style={styles.modalView}>
                  <Text>{visitorText}</Text>
                  <Button icon = "close-circle" onPress={() => setVisitorVisible(false)}>
                     Schließen
                  </Button>
                </View>
              </View>
            </Modal>
            {/*Button to close first visit popup*/}
            
            
            
            
            <Modal
              transparent={true}
              animationType="slide"
              visible={modalVisible}
              onRequestClose={() => setModalVisible(false)}
            >
              <View style={styles.modalOverlay}>
                <View style={styles.modalView}>
                  <Text>{popupText}</Text>
                   <Button icon = "close-circle" onPress={() => setModalVisible(false)}>
                     Schließen
                  </Button>
                </View>
              </View>
            </Modal>
            {/*Button to close text popups*/}
            
        </View>
                
      </ScrollView>
      </SafeAreaView>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
     //justifyContent: 'justify',
      backgroundColor: '#FFFFFF',
    },
    text: {
      textAlign: 'justify',
      marginLeft: 30,
      marginRight: 30,
      lineHeight: 30,
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
          marginTop: 0,
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
      headline: {
          textAlign: 'justify',
          marginLeft: 30,
          marginRight: 30,
          lineHeight: 40,
          fontWeight: "bold",
      },
      
  });


export default MusITScreen;
