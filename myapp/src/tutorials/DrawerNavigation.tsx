import React from 'react';
import { StyleSheet, Text, View, Dimensions, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import HomeScreen from './src/tutorials/home'
// import ProfileScreen from './src/tutorials/profile'
// import OrdersScreen from './src/tutorials/orders'
import { createDrawerNavigator } from '@react-navigation/drawer';

// Install: 
// npm install @react-navigation/native
// npm install @react-navigation/native-stack
// npm install react-native-screens react-native-safe-area-context


// Create the Object of Stack
const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{
        drawerStyle: {
          backgroundColor: '#c6cbef',
          width: 240,
          
    },
  }}
  initialRouteName = 'Home'
>
{/* 
        <Drawer.Screen name='Home' component={HomeScreen} />
        <Drawer.Screen name='Profile' component={ProfileScreen}/>
        <Drawer.Screen name='Orders' component={OrdersScreen}/> */}
      </Drawer.Navigator>
    </NavigationContainer>
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