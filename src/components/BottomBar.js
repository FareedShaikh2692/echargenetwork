import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Pressable, ScrollView } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign"
import Feather from "react-native-vector-icons/Feather"
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import Constants from "../Constants";


const BottomBar=({navigation})=>{
const [location,setlocation]=useState("/")
const navigationdata=navigation?.getCurrentRoute()?.name
useEffect(()=>{
    if(navigationdata)
setlocation(navigationdata);
},[])
return(
    <View style={styles.container}>
        <Pressable onPress={()=>{
            setlocation("/map")
            navigation.navigate('/map')}} style={[styles.tabItem]}>
            <SimpleLineIcons name='globe' style={[styles.tabIcon, {color: location==='/map'?Constants.colors.iconColor:'#fff',}]} />
            <Text style={[styles.tabLabel, {color: location==='/map'?Constants.colors.iconColor:'#fff', }]}>Map</Text>
        </Pressable>
        <Pressable onPress={()=>{navigation.navigate('/list')
        setlocation("/list")
    }} style={styles.tabItem}>
            <MaterialIcons name='list-alt' style={[styles.tabIcon, {color: location==='/list'?Constants.colors.iconColor:'#fff', }]} />
            <Text style={[styles.tabLabel, {color: location==='/list'?Constants.colors.iconColor:'#fff', }]}>List</Text>
        </Pressable>
        <Pressable onPress={()=>{navigation.navigate('/charge')
        setlocation("/charge")
    }} style={styles.tabItem}>
            <MaterialCommunityIcons name='line-scan' style={[styles.tabIcon, {color: location==='/charge'?Constants.colors.iconColor:'#fff', }]} />
            <Text style={[styles.tabLabel, {color: location==='/charge'?Constants.colors.iconColor:'#fff', }]}>Charge</Text>
        </Pressable>
    <Pressable onPress={()=>{navigation.navigate('/')
    setlocation("/")
}} style={styles.tabItem}>
    <SimpleLineIcons name='user' style={[styles.tabIcon, {color: location==='/'?Constants.colors.iconColor:'#fff', }]} />
    <Text style={[styles.tabLabel, {color: location==='/'?Constants.colors.iconColor:'#fff', }]}>Me</Text>
</Pressable>
<Pressable onPress={()=>{navigation.navigate('/about')
setlocation("/about")
}} style={styles.tabItem}>
<Feather name='info' style={[styles.tabIcon, {color: location==='/about'?Constants.colors.iconColor:'#fff', }]} />
<Text style={[styles.tabLabel, {color: location==='/about'?Constants.colors.iconColor:'#fff', }]}>About</Text>
</Pressable>
    </View>
)
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
export default BottomBar