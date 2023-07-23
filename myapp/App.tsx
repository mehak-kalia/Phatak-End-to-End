import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Dimensions, Button , Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import HomeScreen from './src/functional-comps/home'
import ProfileScreen from './src/functional-comps/profile'
import OrdersScreen from './src/functional-comps/orders'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { color } from 'react-native-reanimated';
import ClassComponent from './src/tutorials/ClassComponentQuotes';
import NewsApp from './src/tutorials/NewsAPI';
import LinkedIn from './src/tutorials/LinkedInJobsUi';
import SignInScreen from './src/screens/SignInScreen';
import { initializeApp } from "firebase/app";
import { firebaseConfig } from './src/helper/Constants';
import RegisterScreen from './src/screens/RegisterScreen';
import ViewBoxesWithColorAndText from './src/tutorials/UIPractice';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import SplashScreen from './src/screens/SplashScreen';
import { Appbar } from 'react-native-paper';
import HomeScreen from './src/screens/HomeScreen';
import MapViewScreen from './src/screens/MapViewScreen';
//import HomeScreen from './src/functional-comps/home';

// Install: 
// npm install @react-navigation/native
// npm install @react-navigation/native-stack
// npm install react-native-screens react-native-safe-area-context


// Create the Object of Stack
const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

const Tab = createMaterialTopTabNavigator();

// return (
//   <NavigationContainer>
//     <Stack.Navigator initialRouteName='Home'>
//       <Stack.Screen name='Home' component={HomeScreen}/>
//       <Stack.Screen name='Profile' component={ProfileScreen}/>
//       <Stack.Screen name='Orders' component={OrdersScreen}/>
//     </Stack.Navigator>
//   </NavigationContainer>
// );
// }*/

// export default function App() {

//   return (
//     <NavigationContainer>
//       <Drawer.Navigator screenOptions={{
//         drawerStyle: {
//           backgroundColor: '#c6cbef',
//           width: 240,

//     },
//   }}
//   initialRouteName = 'Home'
// >

//         <Drawer.Screen name='Home' component={HomeScreen} />
//         <Drawer.Screen name='Profile' component={ProfileScreen}/>
//         <Drawer.Screen name='Orders' component={OrdersScreen}/>
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }



// export default function App() {

//   // Initialize Firebase
// const app = initializeApp(firebaseConfig);

//   return (
//     <NavigationContainer>
//       <Tab.Navigator screenOptions={{
//         tabBarStyle : {
          
//         }


//   }}
//   initialRouteName = 'Home'
// >



//         <Tab.Screen name='Sign In' component={SignInScreen} />
//         <Tab.Screen name='Register' component={RegisterScreen} />
//         <Tab.Screen name='Profile' component={ProfileScreen}/>
//         <Tab.Screen name='Orders' component={OrdersScreen}/>
//         <Tab.Screen name='Class Component' component={ClassComponent}/>
//         <Tab.Screen name='LinkedIn' component={LinkedIn}/> */}
//         {/* {/* <Tab.Screen name='News' component={NewsApp}/> */}
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }


export default function App({navigation}:any) {


    const [showSplash, setShowSplash] = useState(true);
    const [loggedIn, setLoggedIn] = useState(false);
    // const navigation = useNavigation();
  
    initializeApp(firebaseConfig);
  
    useEffect(
      ()=>{
        const auth = getAuth();
        
        onAuthStateChanged(auth, (user) =>{
          if(user != null){
            console.log("User is already Registered or Logged In: "+user.uid);
            setLoggedIn(true);
          }

          setTimeout(()=>{setShowSplash(false);}, 3000)
        });
  
        // async function showSplashScreen() {
        //   // Reference to Authentication Module
        //   const auth = getAuth();
        //   if(auth.currentUser != null){
        //     console.log("User is already Registered or Logged In: "+auth.currentUser.uid);
        //     setLoggedIn(true);
        //   }else{
        //     console.log("User is not Registered or Logged In");
        //   }
        //   await new Promise(resolve => setTimeout(resolve, 3000));
        //   console.log("Wait for 3 seconds over...");
        //   setShowSplash(false);
        // }
  
      },
        
      []);

      function navigateToMapViewScreen(){
        console.log("Navigating...");
        navigation.navigate("MapViewScreen")    
      }

      
    
  
      if(showSplash){
      //   return(
      //   <NavigationContainer>
      //   <Stack.Navigator initialRouteName='SplashScreen'>
      //     <Stack.Screen name='SignInScreen' component={SignInScreen}/>
      //     <Stack.Screen name='RegisterScreen' component={RegisterScreen}/>
      //     <Stack.Screen name='HomeScreen' component={HomeScreen}/>
      //     <Stack.Screen name='SplashScreen' component={SplashScreen} options={{header: () => null}}/>
      //   </Stack.Navigator>
      // </NavigationContainer>)
      return (

        <View style = {styles.container}>

        <Image source = {require("../myapp/assets/Phatak.png")} style = {styles.img}></Image>
        <Text style = {styles.title}>PhatakStatus</Text>

        </View>

    );
      }
  
      if(loggedIn){
        return (
          <NavigationContainer>
            <Stack.Navigator initialRouteName='HomeScreen'>
              <Stack.Screen name='SignInScreen' component={SignInScreen}/>

              <Stack.Screen name='RegisterScreen' component={RegisterScreen}/>
              <Stack.Screen name='HomeScreen' component={HomeScreen} options={{
              title: "PhatakApp",
              headerRight: ()=>(
                <Appbar style = {{backgroundColor: "white", shadowColor: "white", shadowOpacity: 0}}>
                     <Appbar.Action
                      // https://materialdesignicons.com/ (for icon names)
                      icon="logout"
                      onPress = {()=> {
                        const auth = getAuth();
                        auth.signOut();
                        setLoggedIn(false)
                        setShowSplash(true);
                      }}
                      />
                      <Appbar.Action
                      // https://materialdesignicons.com/ (for icon names)
                      icon="map" 
                      onPress = {()=> {
                        navigateToMapViewScreen();
                       
                      }}
                      />
                </Appbar>

              )
            }}/>
          </Stack.Navigator>
        </NavigationContainer>
      );
      }else{
        return (
          <NavigationContainer>
            <Stack.Navigator initialRouteName='SignInScreen'>
              <Stack.Screen name='SignInScreen' component={SignInScreen}/>
              <Stack.Screen name='RegisterScreen' component={RegisterScreen}/>
              <Stack.Screen name='HomeScreen' component={HomeScreen}/>
            </Stack.Navigator>
          </NavigationContainer>
        );
      }
      
  
  



  // return (
  //   <NavigationContainer>
  //     <Stack.Navigator initialRouteName='SignInScreen' >
  //       <Stack.Screen name='SignInScreen' component={SignInScreen}/>
  //       <Stack.Screen name='RegisterScreen' component={RegisterScreen}/>
  //       <Stack.Screen name='HomeScreen' component={HomeScreen}/>
  //       <Stack.Screen name='UI Attempt' component={ViewBoxesWithColorAndText}/>
  //     </Stack.Navigator>
  //   </NavigationContainer>
  // );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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
});

