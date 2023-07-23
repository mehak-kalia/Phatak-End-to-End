import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View, Text, TouchableOpacity , Image, Alert} from'react-native';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, getFirestore, setDoc } from "firebase/firestore";

export default function SplashScreen({navigation}:any) {
  
  
    return (

        <View style = {styles.container}>

        <Image source = {require("../../assets/Phatak.png")} style = {styles.img}></Image>
        <Text style = {styles.title}>PhatakStatus</Text>

        </View>

    );
  }



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 12,
      margin: 12
    },
  
    input:{
      borderColor: 'grey',
      width: '100%',
      padding: 12,
      margin: 12,
      borderWidth: 1,
      borderRadius: 5
  
  
    },
    text: {
      color: 'blue'
    },
    center: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
     img: {
      height: 150,
      width: 150,
      padding: 6,
      margin: 6
     },
  
     title: {
      //fontFamily: 'serif',
      fontSize: 24,
      //fontWeight: 'bold',
      color: '#2E5984'
     },
     button: {
      height: 35,
      width: 70,
      backgroundColor: '#F3CC09',
      justifyContent: 'center',
      alignContent: 'center',
      margin: 5,
      textAlign: 'center',
      borderRadius: 5
     }
  
  });
  