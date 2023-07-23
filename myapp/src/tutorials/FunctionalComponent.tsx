import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

// Functional Component
export default function App() {

  /*const quotes = [
    "Be Exceptional",
    "Search the Candle rather than cursing the darkness",
    "Work hard, Be Successful",
    "Your future is all about connecting the dots in past",
    "Work with joy and fill in joy"
  ];

  let [idx, setIndex] = useState(0);
  //let [message, setMessage] = useState("MyWhatsApp")
  //var i = idx; // initially i is 0 because idx is 0

  console.log("Idx is: "+idx);

  if(idx == quotes.length-1){
    idx = 0;
  }

  if(idx < 0){
    idx = quotes.length-1;
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.textStyle} >{quotes[idx]}</Text>
      <Button title='NEXT QUOTE' onPress={(event) => setIndex(++idx)}></Button>
      
      <Button title='PREVIOUS QUOTE' onPress={(event) => setIndex(--idx)}></Button>
    </View>
  );

  /*return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Welcome to React Native with Expo</Text>
      <Text>This is Awesome</Text>
      <StatusBar style="auto" />
    </View>
  );*/


  //var prompt = require('prompt-sync')();

  let conversation1 = {
      contact1: '+91 99999 11111',
      contact2: '+91 99999 22222',
      messages: [
          {
              text: 'hello',
              sender: '+91 99999 11111',
              timeStamp: '19th July 2022, 16:00',
              status: 1 // 1 -> sent, 2 -> delivered, 3 -> seen
          }
  
      ]
  }
  
  let conversation2 = {
      contact1: '+91 99999 11111',
      contact2: '+91 99999 33333',
      messages: [
          {
              text: 'Aur Bhai. Kya hall ?',
              sender: '+91 99999 11111',
              timeStamp: '19th July 2022, 16:00',
              status: 2 // 1 -> sent, 2 -> delivered, 3 -> seen
          },
          {
              text: 'Badhiya. Tum Sunao ?',
              sender: '+91 99999 33333',
              timeStamp: '20th July 2022, 12:15',
              status: 1 // 1 -> sent, 2 -> delivered, 3 -> seen
          },
          {
              text: 'Aur Bhai. Kya hall ?',
              sender: '+91 99999 11111',
              timeStamp: '19th July 2022, 16:00',
              status: 2 // 1 -> sent, 2 -> delivered, 3 -> seen
          }
  
      ]
  }
  
  let conversation3 = {
      contact1: '+91 99999 11111',
      contact2: '+91 88888 44444',
      messages: [
          {
              text: 'JavaScript Shuru Ho Gayi ?',
              sender: '+91 99999 11111',
              timeStamp: '20th July 2022, 13:00',
              status: 2 // 1 -> sent, 2 -> delivered, 3 -> seen
          },
          {
              text: 'Haan Bhai, Recursion thoda takleef de raha hai',
              sender: '+91 88888 44444',
              timeStamp: '21th July 2022, 19:35',
              status: 3 // 1 -> sent, 2 -> delivered, 3 -> seen
          },
  
      ]
  }
  
  // Array of Objects
  //                  0             1             2
  let myWhatsApp = [conversation1, conversation3, conversation2]
  
  //console.table(myWhatsApp)
  
  for(let idx=0;idx<myWhatsApp.length;idx++){
      console.log(myWhatsApp[idx]);
  }

  



  let [idx, setIndex] = useState(0);
  let [idx1, setIndex1] = useState(0);

  //let [message, setMessage] = useState("MyWhatsApp")
  //var i = idx; // initially i is 0 because idx is 0

  console.log("Idx is: "+idx);

  if(idx == myWhatsApp.length-1){
    idx = 0;
  }

  if(idx < 0){
    idx = myWhatsApp.length-1;
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.textStyle} >{myWhatsApp[idx]['messages'][idx1]['text']}</Text>
      <Button title='NEXT QUOTE' onPress={(event) => setIndex(++idx)}></Button>
      
      <Button title='PREVIOUS QUOTE' onPress={(event) => setIndex(--idx)}></Button>
    </View>
  );


}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textStyle:{
    fontSize: 24,
    color: "#f00",
    marginBottom: 20
  }

});