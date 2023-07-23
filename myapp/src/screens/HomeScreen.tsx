import React, { useEffect, useState } from 'react';
import { Button, FlatList, StyleSheet, Text, View, Image } from 'react-native';
import { Appbar } from 'react-native-paper';
import { collection, doc, DocumentData, getDocs, getFirestore, QueryDocumentSnapshot } from 'firebase/firestore';
import { StatusBar } from 'expo-status-bar';
import { interpolateNode } from 'react-native-reanimated';


export default function HomeScreen({navigation}: any) {
  console.log("Home Screen...");



  const [documents, setDocuments] = useState([])

  const getCrossings = async () => { 
    try{
      console.log("Getting Crossings....");
      const documents: any = [];
     const db = getFirestore();
      
      const querySnapshot = await getDocs(collection(db, "crossings"));
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        const docData = doc.data();
        documents.push(docData);

        setDocuments(documents)
      });

    }catch(error){
      console.log("Something Went Wrong..");
    }
  }

  useEffect(
    ()=>{
      getCrossings();
      
      
    },documents);

  console.log("Getting Crossings....");
  console.log(documents);

  // List Item Layout
const Item = (itemData:any) => (
  <View style={styles.item}>
    
    
         {/* <img   style={{
            height: 50,
            width: 120,
            
          }}
          src= {itemData.logo}></img> */}


          <Image source={{uri: itemData.imageUrl}} style={styles.img}/>


     <Text style={styles.title} >{itemData.name}</Text>
     {/* if ({itemData.status == 1}) {
      <Text style={styles.title} >Status: Open</Text>
     }else if ({itemData.status == 2}) {
      <Text style={styles.title} >Status: Closed</Text>
      
     }else if ({itemData.status == 3}) {
      <Text style={styles.title} >Status: Is Opening</Text>
      
     }else{
      <Text style={styles.title} >Status: Is Closing</Text>
     } */}

     {
      itemData.status == 1 ?
      <Text style={styles.subTitle} >Status: Open</Text>:
      itemData.status == 2 ?
      <Text style={styles.subTitle} >Status: Closed</Text>:
      itemData.status == 3 ?
      <Text style={styles.subTitle} >Status: Is Opening</Text>:
      itemData.status == 4 ?
      <Text style={styles.subTitle} >Status: Is Closing</Text>:
      <View></View>
     }
     {/* <Text style={styles.subTitle} >Status: {itemData.status}</Text> */}
     
     <Text style={styles.subTitle} >Latitude: {itemData.location["latitude"]}</Text>
     <Text style = {styles.subTitle}>Longitude: {itemData.location["longitude"]}</Text>
    
     {/* <Text style={styles.title} >{itemData.timings}</Text> */}


  </View>
);

// Specified to execute renderItem function and create Item Views
const renderItem = ({item}:any) => Item(item);
  


// Functional Component


  return (


    <View style={styles.container}>
    <StatusBar style="auto" />
    <FlatList data={documents} renderItem={renderItem}/>
  </View>

  );

}


// const [locations, setLocations] = useState([])


// useEffect(() => {
//   const loadData = async () => {
//       const querySnapshot = await getDocs(collection(db, "crossings"));
//       setLocations(     querySnapshot.forEach((doc) => {
//                console.log(doc.id, " => ", doc.data());
//       const docData = doc.data();)
//   };

//   loadData()
// }, [setLocations]);


// return (
//       <FlatList data={locations}
          // renderItem={({ item }) => (
          //     <View></View>
          // )}
//       />
// )


//   }


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
      width: "95%",
      padding: 6,
      margin: 6,
      borderRadius: 7
     },
  
     title: {
      //fontFamily: 'serif',
      fontSize: 20,

      fontWeight: 'bold',
      // color: '#2E5984'
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
     },


    textStyle:{
      fontSize: 24,
      color: "#f00",
      marginBottom: 20,
      alignContent: "center",
      justifyContent: 'center'
    },
  
    background:{
      
      fontSize: 24,
      marginBottom: 20,
      margin: 20,
      alignContent: "center",
      justifyContent: 'center'
    
    },
  
    item: {
      borderColor: 'grey',
      borderWidth: 0.5,
      backgroundColor: '#fff',
      padding: 8,
      margin: 6,
      width: 300,
      alignContent: "center",
      justifyContent: 'center',
      borderRadius: 10,
      shadowColor: '#171717',
      shadowOffset: {width: -2, height: 4},
      shadowOpacity: 1,
      shadowRadius: 3,
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
    }
  
  });
  