// screens/MusScreen.jsx
import React, { useRef, useState, useEffect } from 'react';
import { Component } from 'react';
import { View, StyleSheet, Image, ScrollView, SafeAreaView, Dimensions, Modal, AppRegistry,  TouchableOpacity } from 'react-native';
import { Button, Text, Drawer, SegmentedButtons } from 'react-native-paper';
import Slider from '@react-native-community/slider';
import Signature from 'react-native-signature-canvas';
import SignatureScreen from 'react-native-signature-canvas';
import { WebView } from 'react-native-webview';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'



const { width, height } = Dimensions.get('window')

const WIDTH = Dimensions.get('window').width,
      HEIGHT = Dimensions.get('window').height


const MusScreen = ({ navigation }) => {
    
    
    const [firstVisit, setFirstVisit] = useState(true);
    const [visitorVisible, setVisitorVisible] = useState(false);
    const [visitorText, setVisitorText] = useState('');
    
    const [scrollEnabled, setScrollEnabled] = useState(true);
    
    const [signature, setSign] = useState(null);
    
    const [modalVisible, setModalVisible] = useState(false);
    const [askVisible, setAskVisible] = useState(false);
    const [popupText, setPopupText] = useState('');
    
    const [value, setValue] = React.useState('');

    
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
        //AskQuestion('Damit wird alles gelöscht! Möchtest du fortfahren?');
    };
    
    const AskQuestion = (text) => {
        setPopupText(text);
        setAskVisible(true);
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
      <ScrollView scrollEnabled={scrollEnabled}>
      <View style={styles.container}>
            
            <VisitorController/>

                <Image
                   source={require('./pictures/mure_cato.png')}
                   style={styles.image}
                   resizeMode="contain"  // contain, cover, stretch, center, repeat
                />
            <View style={styles.einleitung}>
                <Text variant="titleLarge">
                    Einleitung: Eine Maus und eine Katze treffen sich.
                </Text>
            </View>
            
            <Text variant="titleLarge" style={styles.text}>
                Mus quondam cecidit in {}
            
                <Text
                    style={styles.popupWord}
                    onPress={() => handleWordClick('dolium/-i n.: Fass')}
                >
                    dolium
                </Text>
            
                {} vini vel cervisiae. Cattus transiens audivit murem miserabiliter pipantem, quod exire non potuit. Et ait cattus:"Quare clamas?" Respondit mus: "Quia exire non {}
            <Text
                style={styles.popupWord}
                onPress={() => handleWordClick('valeo, vales, valere, valui: (hier: ) können')}
            >
                valeo
            </Text>
            ." Cattus: "Quid dabis mihi, si te extraxero?" Mus: "Quidquid postulaveris." Et ait cattus: "Si te {}
            <Text
                style={styles.popupWord}
                onPress={() => handleWordClick('hac vice: dieses Mal')}
            >
                hac vice
            </Text>
            {} liberavero, venies ad me, cum te vocavero?" Et ait mus: "Firmiter hoc promitto." Cattus: "Iura mihi!" Et mus iuravit. Cattus murem extraxit et ire permisit.{'\n'}
            Semel cattus {}
            <Text
                style={styles.popupWord}
                onPress={() => handleWordClick('esurio, esuris, esurire, esurivi: hungrig sein')}
            >
                esurivit
            </Text>
            {} et venit ad {}
            <Text
                style={styles.popupWord}
                onPress={() => handleWordClick('foramen, foraminis, n.: Loch')}
            >
                foramen
            </Text>
            {} muris et imperavit ei, ut exiret. Dixit mus: "Non faciam." Ait cattus iratus: "Nonne {}
            <Text
                style={styles.popupWord}
                onPress={() => handleWordClick('iurasti = iuravisti')}
            >
                iurasti
            </Text>
            {} mihi?" Respondit mus: "Frater, ebria fui, quando iuravi."
            
            </Text>
            {/*end lektionstext*/}
            
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
              visible={askVisible}
              onRequestClose={() => setAskVisible(false)}
            >
              <View style={styles.modalOverlay}>
                <View style={styles.modalView}>
                  <Text>{popupText}</Text>
                   <Button icon = "close-circle" onPress={() => setAskVisible(false)}>
                     Ja
                  </Button>
                  <Button icon = "close-circle" onPress={() => setAskVisible(false)}>
                     Nein
                  </Button>
                </View>
              </View>
            </Modal>
            {/*Button to close ask if delete all popup*/}
            
        </View>
            
            

            
            <View style={styles.buttons}>
            
            
                <SegmentedButtons
                   value={value}
                   onValueChange={setValue}
                   buttons={[
                     {
                         value: 'scroll',
                        // label: 'Scrollen',
                         icon: 'hand-pointing-up',
                         onPress: handleScroll,
                     },
                     {
                         value: 'draw',
                         //label: 'Stift',
                         icon: 'draw-pen',
                         onPress: handleWrite,
                     },
                     {
                         value: 'erase',
                        // label: 'Radierer',
                         icon: 'eraser',
                         onPress: handleEraser,
                     },
                     {
                         value: 'undo',
                        // label: 'Rückgängig',
                         icon: 'undo-variant',
                         onPress: handleUndo,
                     },
                     {
                         value: 'redo',
                        // label: 'Wiederholen',
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
            
            <View style={{ width: width*0.93, height: height*0.5,}}>
           
            
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
    marginRight: 30,
    lineHeight: 40,
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
        marginTop: 20,
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
    
});


export default MusScreen;
