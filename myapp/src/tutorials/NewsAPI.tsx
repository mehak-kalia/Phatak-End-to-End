import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native';

// List Item Layout
const Item = (itemData:any) => (
  <View style={styles.item}>
     <Image source={{uri: itemData.urlToImage}} style={styles.image}/>
     <Text style={styles.title} >{itemData.title}</Text>
     <Text style={styles.subTitle} >{itemData.publishedAt}</Text>
  </View>
);

// Specified to execute renderItem function and create Item Views
const renderItem = ({item}:any) => Item(item);

// Functional Component
export default function NewsApp() {

  const url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=31c21508fad64116acd229c10ac11e84";
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
      
      const articles = jsonData['articles'];
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

// OCW60RD8DWMG0KVH