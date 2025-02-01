import React, { use } from "react";
import { StyleSheet,SafeAreaView,Platform,StatusBar,View } from "react-native";
import { useWindowDimensions } from "react-native";
import {useDeviceOrientation} from '@react-native-community/hooks'


export default function App() {
  console.log("App executed");
  
  console.log(useWindowDimensions());
  const orientation = useDeviceOrientation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={{
        backgroundColor: "dodgerblue",
        width: "100%",
        height:orientation=== "landscape"? "100%":"30%",
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
