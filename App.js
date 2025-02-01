import React from "react";
import { StyleSheet,SafeAreaView,Platform,StatusBar,View } from "react-native";
import { useDimensions } from "@react-native-community/hooks";

export default function App() {
  console.log("App executed");
  
  console.log(useDimensions());
  return (
    <SafeAreaView style={styles.container}>
      <View style={{
        backgroundColor: "dodgerblue",
        width: "100%",
        height: "30%",
      }}></View>
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop:Platform.OS === "ios"? StatusBar.currentHeight:0,
  },
});
