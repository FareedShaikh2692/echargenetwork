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
        <View style={{height:"100%",flex:1}}>
        <ScrollView style={{height:"100%",flex:1,marginBottom:5}}>
        {activeTab==="map"?
        <Map/>
        :
        activeTab==="list"?
        <List/>
        :
        activeTab==="charge"?
        <Charge/>
        :
        activeTab==="about"?
        <About/>
        :
        <Me/>
        }
        </ScrollView>
        <View style={styles.container}>
        <Pressable onPress={()=>setactiveTab('map')} style={[styles.tabItem]}>
            <SimpleLineIcons name='globe' style={[styles.tabIcon, {color: activeTab==='map'?Constants.colors.iconColor:'#fff',}]} />
            <Text style={[styles.tabLabel, {color: activeTab==='map'?Constants.colors.iconColor:'#fff', }]}>Map</Text>
        </Pressable>
        <Pressable onPress={()=>setactiveTab('list')} style={styles.tabItem}>
            <MaterialIcons name='list-alt' style={[styles.tabIcon, {color: activeTab==='list'?Constants.colors.iconColor:'#fff', }]} />
            <Text style={[styles.tabLabel, {color: activeTab==='list'?Constants.colors.iconColor:'#fff', }]}>List</Text>
        </Pressable>
        <Pressable onPress={()=>setactiveTab('charge')} style={styles.tabItem}>
            <MaterialCommunityIcons name='line-scan' style={[styles.tabIcon, {color: activeTab==='charge'?Constants.colors.iconColor:'#fff', }]} />
            <Text style={[styles.tabLabel, {color: activeTab==='charge'?Constants.colors.iconColor:'#fff', }]}>Charge</Text>
        </Pressable>
    <Pressable onPress={()=>setactiveTab('me')} style={styles.tabItem}>
    <SimpleLineIcons name='user' style={[styles.tabIcon, {color: activeTab==='me'?Constants.colors.iconColor:'#fff', }]} />
    <Text style={[styles.tabLabel, {color: activeTab==='me'?Constants.colors.iconColor:'#fff', }]}>Me</Text>
</Pressable>
<Pressable onPress={()=>setactiveTab('about')} style={styles.tabItem}>
<Feather name='info' style={[styles.tabIcon, {color: activeTab==='about'?Constants.colors.iconColor:'#fff', }]} />
<Text style={[styles.tabLabel, {color: activeTab==='about'?Constants.colors.iconColor:'#fff', }]}>About</Text>
</Pressable>
    </View>
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