import React from "react";
import {View,SafeAreaView } from "react-native";



export default function App() {
  console.log("App executed");
  return (
    <SafeAreaView>

    <View style={{backgroundColor: "dodgerblue", flex: 1,flexDirection: "row"}}>
      <View style={{backgroundColor: "gold",width:100,height:100}}/>
      <View style={{backgroundColor: "tomato", width:100,height:100}}/>
      <View style={{backgroundColor: "dodgerblue", width:100,height:100}}/>
      
    </View>
    </SafeAreaView>
  );
}




