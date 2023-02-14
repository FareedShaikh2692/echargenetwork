import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "./components/HomePage";
import ListDesc from "./components/List/listDesc";
import { useNavigation } from "@react-navigation/native";
import BottomBar from "./components/BottomBar";
import { View,ScrollView, } from "react-native";
import Charge from "./components/Charge/charge";
import Map from "./components/Map/map";
import List from "./components/List/list";
import About from "./components/About/about";
const Stack = createNativeStackNavigator();

const Routes=()=>{
    const navigation=useNavigation()
    return(
        <>
        
        <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen
        name="/"
        component={HomePage}
        />
        <Stack.Screen
        name="/charge"
        component={Charge}
        />
        <Stack.Screen
        name="/map"
        component={Map}
        />
        <Stack.Screen
        name="/list"
        component={List}
        />
        <Stack.Screen
        name="/about"
        component={About}
        />
        <Stack.Screen
        name="/list-desc"
        component={ListDesc}
        />
        </Stack.Navigator>
        <BottomBar
        navigation={navigation}
        />
        
        </>
    );
}
export default Routes