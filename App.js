import React from "react";
import {View } from "react-native";



export default function App() {
  console.log("App executed");
  return (
    
      <View style={{
        backgroundColor: "dodgerblue",
        flex: 1,
        flexDirection: "row",
        justifyContent: "center", // main axis
        alignItems: "center", // cross axis
      
        
      }}>
      <View style={{
        backgroundColor: "gold",
        width: 100,
        height: 100,
        top: 20,
        right: 20,
        position: "absolute"
      }} />
      <View style={{
        backgroundColor: "tomato",
        width: 100,
        height: 100
      }} />
      <View style={{
        backgroundColor: "blue",
        width: 100,
        height: 100
      }} />
      
      
    </View>
  );
}




