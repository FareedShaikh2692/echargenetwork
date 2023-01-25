import React from "react";
import { SafeAreaView } from "react-native";
import Routes from "./src/routes";
import { NavigationContainer } from '@react-navigation/native';

const App=()=>{
  return(
    <SafeAreaView style={{flex:1}}>
    <NavigationContainer style={{flex:1}}>
    <Routes/>
    </NavigationContainer>
    </SafeAreaView>
  );
}

export default App