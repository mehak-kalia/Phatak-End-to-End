import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View, Text, TouchableOpacity , Image} from'react-native';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, getFirestore, setDoc } from "firebase/firestore";


export default function RegisterScreen({navigation}: any) {

  function register(){
    console.log("Register.....");
    console.log("Name: "+name+" Email: "+email+" Password: "+password);
    
    const auth = getAuth();
    const db = getFirestore();
    
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("User Registered....");

      const docToInsert = {
        name: name,
        email: email,
        password: password
      }

      setDoc(doc(db, "users", user.uid), docToInsert);
      navigation.navigate("HomeScreen");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("Error Occurred...."+errorCode+" "+errorMessage);
    });
  }

  function navigateToLoginScreen(){
    navigation.navigate("SignInScreen")    
  }

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
      <View style={styles.container}>

        <Image source = {require("../../assets/Phatak.png")} style = {styles.img}></Image>
        <Text style = {styles.title}>PhatakStatus</Text>

        <TextInput style={styles.input}
            placeholder='Full Name'
            value={name}
            onChangeText={setName}
        />

        <TextInput style={styles.input}
            placeholder='Email ID'
            value={email}
            onChangeText={setEmail}
        />
        <TextInput style={styles.input}
            placeholder='Password'
            value={password}
            onChangeText={setPassword}
            secureTextEntry
        />
        {/* <Button
            title='Register' onPress={register}
        />
         */}
        <TouchableOpacity  onPress = {register}>
      <View style = {styles.button}>
      <Text style = {{}}>Register</Text>
      </View>

      </TouchableOpacity>
      <Text>   </Text>

      <TouchableOpacity  onPress = {navigateToLoginScreen}>
      <Text >Existing User? Login Here</Text>

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
        borderColor: 'gray',
        width: '100%',
        borderWidth: 1,
        borderRadius: 12,
        padding: 8,
        margin: 8
    },

    text: {
        fontSize: 16,
        margin: 12,
        color: 'blue'
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