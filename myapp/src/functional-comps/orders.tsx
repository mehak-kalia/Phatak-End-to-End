import React from 'react';
import { StyleSheet, Text, View, Dimensions, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function OrdersScreen() {

    return (
      <View style={styles.container}>
        <Text>This is Orders Screen</Text>
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