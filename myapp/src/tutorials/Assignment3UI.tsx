import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native';





// Functional Component
export default function App() {

  const url = "http://api.weatherapi.com/v1/forecast.json?key=fee761543426465f86e171504222707&q=Ludhiana&days=1&aqi=no&alerts=no";
  const [news, setNews] = useState([]);
  const [showIndicator, setIndicator] = useState(true);

var prompt = require('prompt-sync')()

let noOfBricks = Number(prompt("Enter Required No. Of Bricks:"));

function brickInWall(input: any){
let bricksPlaced = 0
let johnTurn = 1

while(bricksPlaced<input){

    // // for(let i =0; i<noOfBricks; i++){
    //     bricksPlaced+= 1
    //     bricksPlaced += 2
    //     console.log(bricksPlaced);
        

    // // }
    //let noOfTurns = 1
    
    //console.log("i is:"+i);

    
    bricksPlaced += johnTurn
    let initialbricks = bricksPlaced-johnTurn
    if(bricksPlaced>=input){
        console.log("working1");
        let init = johnTurn + (input - bricksPlaced) 
        bricksPlaced += (input - bricksPlaced)
        console.log("Johns turn"+initialbricks +"+"+ init+"="+bricksPlaced);
        console.log("Last Brick Planted by John");
        let jackTurn = johnTurn-1
        console.log("No. Of Turns\nJohn: "+johnTurn+"\nJack: "+jackTurn);
        break
    }
    //let initialbricks = bricksPlaced-johnTurn
    console.log("Johns turn"+initialbricks +"+"+ johnTurn+"="+bricksPlaced);

    bricksPlaced += johnTurn*2
    let initialbricks2 = bricksPlaced -(johnTurn*2)
    if(bricksPlaced>=input){
        console.log("working3");
        let init2 = johnTurn*2 + (input - bricksPlaced);
        bricksPlaced += (input - bricksPlaced)
        console.log("Jacks turn "+initialbricks2 +"+"+ init2+"="+bricksPlaced);
        console.log("Last Brick Planted by Jack");
        console.log("No. Of Turns\nJohn: "+johnTurn+"\nJack: "+johnTurn);
        break
    }
    //let initialbricks2 = bricksPlaced -(johnTurn*2)
    console.log("Jacks turn "+initialbricks2 +"+"+ johnTurn*2+"="+bricksPlaced);
    


    johnTurn += 1;

}

console.log(bricksPlaced);}

brickInWall(noOfBricks);

  

  useEffect(()=> {
    brickInWall(noOfBricks);
  }, []);

  return (
    <View style={styles.background}>
      <StatusBar style="auto" />

      
      
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