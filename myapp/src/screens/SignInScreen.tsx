import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, Button, Touchable, TouchableOpacity ,Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TextInput } from 'react-native-gesture-handler';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { color } from 'react-native-reanimated';
//import {  } from "../../assets/app.png";

// Install: 
// npm install @react-navigation/native
// npm install @react-navigation/native-stack
// npm install react-native-screens react-native-safe-area-context

export default function SignInScreen({navigation}:any) {

  function signIn(){

    console.log( "Email: "+email+" Password: "+password);
    
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("User Logged In...."+user.uid);
      navigation.navigate("HomeScreen");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("Error Occurred...."+errorCode+" "+errorMessage);
    });
  }



  function navigateToRegisterScreen(){
    console.log("Navigating...");
    navigation.navigate("RegisterScreen")    
  }

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  return (
    <View style={styles.container}>
    <Image source = {require("../../assets/Phatak.png")} style = {styles.img}></Image>
    <Text style = {styles.title}>PhatakStatus</Text>
      <TextInput 
      style = {styles.input} 
      placeholder ='Email Id'
      value={email}
      onChangeText={setEmail}></TextInput>
      <TextInput 
      style = {styles.input} 
      placeholder = 'Password' 
      secureTextEntry
      value={password}
      onChangeText={setPassword}></TextInput>
      {/* <Button title='Sign In' onPress={signIn}/> */}
      <TouchableOpacity  onPress = {signIn}>
      <View style = {styles.button}>
      <Text style = {{alignContent: 'center', justifyContent: 'center', textAlign: 'center'}}>Sign In</Text>
      </View>

      </TouchableOpacity>
      <Text>   </Text>

      <TouchableOpacity  onPress = {navigateToRegisterScreen}>
      <Text >New User? Register Here!</Text>

      </TouchableOpacity>

      


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
    borderRadius: 5,
    alignSelf: 'center',
    textAlignVertical: 100
   }

});

