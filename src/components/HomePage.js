import React, { useState } from "react";
import { StyleSheet, Text, View, Pressable, ScrollView } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign"
import Feather from "react-native-vector-icons/Feather"
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import Constants from "../Constants";
import Map from "./Map/map";
import List from "./List/list";
import Charge from "./Charge/charge";
import About from "./About/about";
import Me from "./Me/me";
const HomePage=()=>{
    const [activeTab,setactiveTab]=useState("me")
    return(
        <View style={{height:"100%",flex:1,backgroundColor:"white"}}>
        <ScrollView style={{height:"100%",flex:1}}>
        
        <Me/>
        
        </ScrollView>
        
        </View>
    );
}

const styles=StyleSheet.create({
    container: {
        width:"100%",
        backgroundColor: Constants.colors.navBarColor,
        padding: 10,
        paddingStart:20,
        paddingEnd:20,
        justifyContent: 'space-between',
        flexDirection: 'row',
        position: 'relative',
        bottom: 0,
        left: 0,
        right: 0,
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    tabItem: {
        alignItems: 'center',
    },
    tabIcon: {
        fontSize: 25,
        color: '#fff',
    },
    tabLabel: {
        fontFamily: Constants.fontFamily,
        fontSize: 15,
        color: '#fff',
        marginTop: 4,
    },
})
export default HomePage