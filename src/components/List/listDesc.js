import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import Constants from "../../Constants";
import MapImage from "../../assets/mapimage.png"
const ListDesc=(props)=>{
    const navigation=useNavigation()
    return(
        <View style={{height:"100%",flex:1,backgroundColor:"white"}}>
        <ScrollView style={{height:"100%",flex:1}}>
        <Pressable onPress={()=>navigation.goBack()}>
        <View style={{flexDirection:"row",alignItems:"center",padding:10}} >
        <MaterialIcons
        name="arrow-back-ios" style={[styles.textstyle,{fontSize:30}]} size={30}/>
        <Text style={[styles.textstyle,{marginLeft:-10,marginTop:-2}]}>Back</Text>
        </View>
        </Pressable>
        <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between"
    ,marginTop:20,paddingStart:20,paddingEnd:20
    }}>
        <Text style={[styles.textstyle,{
            fontSize:25,fontWeight:"900"
        }]}>
        {props?.route?.params?.text}
        </Text>
        <SimpleLineIcons
        name="star"
        style={{color:"#000",fontWeight:"900"}}
        size={25}
        />
        </View>
        <Text style={[styles.textstyle,{
            fontSize:15,fontWeight:"600",marginStart:15
        }]}>
        {props?.route?.params?.subtext}
        </Text>
        <Pressable style={styles.buttonstyle}>
        <Text style={styles.buttontext}>
        Available
        </Text>
        </Pressable>
        <Pressable style={[styles.buttonstyle,{backgroundColor:"#353b3c",marginTop:10}]}>
        <Text style={styles.buttontext}>
        Directions
        </Text>
        </Pressable>
        <Text style={[styles.buttontext,{color:"black",textAlign:"center",marginTop:10,marginBottom:10,fontSize:13}]}>
        Distance is not available
        </Text>
        <View style={{
            flexDirection:"row",justifyContent:"space-between",alignItems:"center",
            borderRadius:15,backgroundColor:"#eef5eb",padding:10,paddingStart:20,paddingEnd:20}}>
        <View>
        <Text style={[styles.buttontext,{color:"#84c574",textAlign:"left",fontWeight:"700"}]}>
        Socket A
        </Text>
        <Text style={[styles.buttontext,{color:"#84c574",textAlign:"left",fontWeight:"700"}]}>
        Type 2
        </Text>
        <Text style={[styles.buttontext,{color:"#84c574",textAlign:"left",fontWeight:"700"}]}>
        (Available)
        </Text>
        </View>
        <View style={{flexDirection:"row",alignItems:"center"}}>
        <MaterialCommunityIcons
        name="car-battery"
        size={30}
        color="#000"
        />
        <Text style={[styles.buttontext,{color:"#84c574",textAlign:"left",fontWeight:"700",fontSize:18,marginStart:10}]}>
        22.0 kW
        </Text>
        </View>
        </View>
        <View style={{width:Constants.width-20,height:180,margin:10,marginTop:20}}>
        <Image source={MapImage} style={{width:"100%",height:"100%",borderRadius:15}}/>
        </View>
        <Pressable style={[styles.buttonstyle,{backgroundColor:"#fff",borderColor:"#626564",borderWidth:1,marginTop:10}]}>
        <Text style={[styles.buttontext,{color:'#626564'}]}>
        Show on the map
        </Text>
        </Pressable>
        </ScrollView>
        </View>
    )
}
const styles=StyleSheet.create({
    textstyle:{
        fontFamily: Constants.fontFamily,
        fontSize: 20,
        fontWeight:"800",
        color: '#000',
    },
    buttonstyle:{
        borderRadius:20,
        backgroundColor:Constants.colors.primaryColor,
        paddingTop:10,
        paddingBottom:10,
        marginStart:30,
        marginEnd:30,
        marginTop:20
    },
    buttontext:{
        textAlign:"center",
        fontFamily: Constants.fontFamily,
        fontSize: 15,
        // fontWeight:"800",
        color: '#fff',
    }
})
export default ListDesc