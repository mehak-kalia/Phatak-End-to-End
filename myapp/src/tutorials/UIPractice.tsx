import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { color } from 'react-native-reanimated';
import { Colors } from 'react-native-paper';


//export default function LinkedIn() {

  const ViewBoxesWithColorAndText = () => {
    return (
      <View
        style= {styles.container}
      >

        <View style = {styles.space}></View>
        <Text style = {{color: "#0575F5", fontSize: 15, alignContent: 'flex-end', justifyContent: 'flex-end', alignItems: 'flex-end', flexDirection: 'row', alignSelf: 'flex-end', textAlign: 'right'}}>Edit</Text>
       

      
       {/* Row 1*/}
        <View style = {styles.list}>
          {/* Item 1*/}
        <View style = {styles.item}>
        <Text> </Text>
        
          {/* <View style = {styles.CircleShape}></View> */}
          <View style = {styles.list}>
          <View style = {[styles.CircleShape, {backgroundColor: '#0F97FF'}]}>
          <Text> </Text>
          <Ionicons name="calendar-sharp" size={23} color = "white" />
          </View>
          <Text>                        </Text>
          <Text style = {[styles.title, {fontWeight: 'bold'}]}>8</Text>
          </View>
          <Text style = {styles.height}>   </Text>

          <Text style = {styles.textStyle}>Today</Text>
          {/* <Button icon={{ uri: 'https://avatars0.githubusercontent.com/u/17571969?v=3&s=400' }}>
  Press me
</Button> */}
        </View>
          {/* Item 2*/}
        <View style = {styles.item}>
        <Text> </Text>
        
        <View style = {styles.list}>
        <View style = {[styles.CircleShape, {backgroundColor: '#FF0F57'}]}>
          <Text> </Text>
          <Ionicons name="time-outline" size={23} color = "white" />
          </View>
          <Text>                        </Text>
          <Text style = {[styles.title, {fontWeight: 'bold'}]}>8</Text>
          </View>
        <Text style = {styles.height}>   </Text>
        <Text style = {styles.textStyle}>Scheduled</Text>
        </View>
        {/* <Text style = {styles.textStyle}>hello</Text> */}
        </View>


        {/*Row 2*/}
        <View style = {styles.list}>

          {/*Item 3*/}
        <View style = {styles.item}>
        <Text> </Text>
        <View style = {styles.list}>
        <View style = {[styles.CircleShape, {backgroundColor: '#989B9B'}]}>
          <Text> </Text>
          <Ionicons name="albums" size={23} color = "white" />
          </View>
          <Text>                        </Text>
          <Text style = {[styles.title, {fontWeight: 'bold'}]}>8</Text>
          </View>
        <Text style = {styles.height}>   </Text>
        <Text style = {styles.textStyle}>All</Text>
        </View>

        {/*Itme 4*/}  
        <View style = {styles.item}>
        <Text> </Text>
        <View style = {styles.list}>
          <View style = {[styles.CircleShape, {backgroundColor: '#FF9F0F'}]}>
          <Text> </Text>
          <Ionicons name="flag-sharp" size={23} color = "white" />
          </View>
          <Text>                        </Text>
          <Text style = {[styles.title, {fontWeight: 'bold'}]}>0</Text>
          </View>
        <Text style = {styles.height}>   </Text>
        <Text style = {styles.textStyle}>Flagged</Text>
        </View>
        {/* <Text style = {styles.textStyle}>hello</Text> */}
        </View>
        <Text style = {styles.title}>My Lists</Text>

        {/*Long Item 1*/}
        <View style = {styles.longitem}>
        <View style = {styles.list}>
        <View style = {[styles.CircleShape, {backgroundColor: '#FF9F0F'}]}>
          <Text> </Text>
          <Ionicons name="list" size={23} color = "white" />
          </View>
          <Text>      </Text>
          <Text style = {[styles.title, {fontSize: 15, padding: 5}]}>Reminders</Text>
          <Text>                                                 </Text> 
          <Text style = {[{fontSize: 15, color: 'grey', textAlign: 'right', padding: 5}]}>0</Text>
          <Ionicons name="arrow-forward" size={23} color = "grey" style = {{padding: 3}}/>
          </View>
        </View>


        {/*Long Item 2*/}
        <View style = {styles.longitem}>
        <View style = {styles.list}>
        <View style = {[styles.CircleShape, {backgroundColor: '#FFF70F'}]}>
          <Text> </Text>
          <Ionicons name="list" size={23} color = "white" />
          </View>
          <Text>      </Text>
          <Text style = {[styles.title, {fontSize: 15, padding: 5}]}>Family</Text>
          <Text>                                                         </Text> 
          <Text style = {[{fontSize: 15, color: 'grey', textAlign: 'right',padding: 5 }]}>8</Text>
          <Ionicons name="arrow-forward" size={23} color = "grey" style = {{padding: 3}}/>
          
          </View>
        </View>

      </View>
    );
      }
  
 export default ViewBoxesWithColorAndText;
  const styles = StyleSheet.create({

    height: {

      fontSize: 5

    },

    space: {
      height: 50

    },

    container: {
      flex: 1,

      backgroundColor: 'black',
      padding: 12

    },
  
    textStyle:{
      fontSize: 18,
      color: "grey",
      marginBottom: 20,
      alignContent: "center",
      // justifyContent: 'flex-end',
      // alignSelf: 'flex-end',
      //textAlignVertical: 'bottom',
      //margin: 50
      //height: 11
    },
  
    list:{
      
      //fontSize: 24,
      //marginBottom: 20,
      //margin: 20,
      alignContent: "center",
      //justifyContent: 'center',
      color: 'black',
      flexDirection:'row',
      //padding: 12,
      //margin: 12,
      //flexGrow: 5
    
    },
  
    item: {
      //borderColor: '#37383a',
      borderWidth: 0.5,
      backgroundColor: '#101010',
      padding: 20,
      margin: 6,
      width: 180,
      height: 85,
      alignContent: "center",
      justifyContent: 'center',
      textAlign: 'bottom',
      borderRadius: 10,
      shadowColor: '#171717',
      shadowOffset: {width: -2, height: 4},
      shadowOpacity: 0.2,
      shadowRadius: 3,

    },

    longitem: {
      //borderColor: '#37383a',
      borderWidth: 0.5,
      backgroundColor: '#101010',
      padding: 6,
      margin: 4,
      width: '100%',
      height: 60,
      alignContent: "center",
      justifyContent: 'center',
      borderRadius: 10,
      shadowColor: '#171717',
      shadowOffset: {width: -2, height: 4},
      shadowOpacity: 0.2,
      shadowRadius: 3,

    },
  
    title: {
      fontSize: 24,
      color: 'white',
      flexDirection: "row",
      alignContent: "center",
      justifyContent: 'center'
    },
  
    subTitle: {
      fontSize: 12,
      color: 'grey',
      alignContent: "center",
      justifyContent: 'center'
    },
  
    small : {
      fontSize: 10,
      color: 'grey',
      alignContent: "center",
      justifyContent: 'center'
    },

    CircleShape: {
      width: 32,
      height: 32,
      borderRadius: 150 / 2,
      //backgroundColor: '#107E86',
      alignSelf: 'flex-start',
      flexDirection: 'row',
      alignItems: 'center',
      //justifyContent: 'center'
    },
  
  });


