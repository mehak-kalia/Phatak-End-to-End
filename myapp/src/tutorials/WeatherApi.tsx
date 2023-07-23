import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native';

// List Item Layout
const Item = (itemData:any) => (
  <View style={styles.item}>
     
     <Text style={styles.title} >{itemData.name}</Text>
     <Text style={styles.subTitle} >{itemData.release_date}</Text>
  </View>
);

// Specified to execute renderItem function and create Item Views
const renderItem = ({item}:any) => Item(item);

// Functional Component
export default function App() {

  const url = "http://api.weatherapi.com/v1/forecast.json?key=fee761543426465f86e171504222707&q=Ludhiana&days=1&aqi=no&alerts=no";
  const [news, setNews] = useState([]);
  const [showIndicator, setIndicator] = useState(true);

  const getNewsFromNewsAPI = async () =>{
    try{  

      const resposneFromAPI = await fetch(url);
      console.log("resposneFromAPI");
      console.log(resposneFromAPI);

      // Convert the Raw Response into JSON
      const jsonData = await resposneFromAPI.json();
      console.log("jsonData");
      console.log(jsonData);
      
      const articles = jsonData['forecast']['forecastday'];
      console.log("articles");
      console.log(articles);
      
      setNews(articles);
      setIndicator(false);

    }catch(error){
      console.error("Something Went Wrong: "+error);
    }
  }

  useEffect(()=> {
    getNewsFromNewsAPI();
  }, []);

  return (
    <View style={styles.background}>
      <StatusBar style="auto" />
      
      {
        showIndicator ? <ActivityIndicator/> 
        : <FlatList data={news} renderItem={renderItem}/> 
      }
      
      
      
    </View>
  );

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
    alignContent: "center",
    justifyContent: 'center',
    borderRadius: 10,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },

  title: {
    fontSize: 16,
    color: '#000000',
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

  image: {
    width: 300,
    height: 200,
    margin: 8
  }


});