import React from 'react';
import { StyleSheet, Text, View, Dimensions, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Install: 
// npm install @react-navigation/native
// npm install @react-navigation/native-stack
// npm install react-native-screens react-native-safe-area-context

export default function HomeScreen({navigation}:any) {

  return (
    <View style={styles.container}>
      <Text>This is Home Screen</Text>
      {/* <Button title='Go To Profile'
      onPress={()=>navigation.navigate("Profile")}
      /> */}
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
});