import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "./components/HomePage";
const Stack = createNativeStackNavigator();

const Routes=()=>{

    return(
        <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen
        name="/"
        component={HomePage}
        />
        </Stack.Navigator>
    );
}
export default Routes