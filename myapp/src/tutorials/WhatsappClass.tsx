import { StatusBar } from "expo-status-bar";
import { Component, useState } from "react";
import { Button, StyleSheet, Text, View } from 'react-native';

// App is Child Class
// Component is Parent Class
export default class App extends Component{

  //const api = { 'foo': 'bar', 'foz': 'baz'};
 

  /*render(){
    return (
     // Object.entries(api).map(([key, value]) => {
        return <View key={key}>{value}</View>
      })
    )
  

}*/
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