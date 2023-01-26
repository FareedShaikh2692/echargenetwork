import React, { useEffect, useState } from "react";
import { Dimensions, Pressable, StyleSheet, Text, View } from "react-native";
import { RNCamera } from 'react-native-camera';
import QRCodeScanner from 'react-native-qrcode-scanner';
import Constants from "../../Constants";

const Charge=()=>{
    const [camera,setcamera]=useState()
    const [barCode,setbarCode]=useState()
    useEffect(()=>{
        if(barCode)
        barCode.forEach(barcode => console.log("barcode",barcode.data))
    },[barCode])
    return(
        <View >
        <QRCodeScanner
        onRead={(e)=>console.warn("Scanned QR value!",e)}
        flashMode={RNCamera.Constants.FlashMode.torch}
        fadeIn
        reactivate
        reactivateTimeout={10}
        topContent={
            <View style={{width:"100%"}}>
          <Text style={styles.centerText}>
            Scan QR code next to the socket which you would like to use
          </Text>
          <View
          style={styles.qrBox}
          />
          </View>
        }
       
        cameraStyle={{
            width:Dimensions.get('window').width,
            height:Dimensions.get('window').height}}
      />
        </View>
    );
}
const styles = StyleSheet.create({
    qrBox:{
        position:"absolute",
        zIndex:999,
        borderWidth: 2,
          borderRadius: 2,
          borderColor: Constants.colors.iconColor,
          paddingTop:"100%",
          marginStart:10,
          marginEnd:10,
          width:"95%",
          top:150
    },  
    centerText: {
      flex: 1,
      position:"absolute",
      zIndex:99,
      fontSize: 18,
      top:20,
      marginStart:15,
      marginEnd:10,
      color: '#848786',
      textAlign:"center",
      backgroundColor:"white",
      padding:10,
      fontWeight:"400",
      paddingStart:20,
      paddingEnd:20,
      borderRadius:5
    },
   
  });
export default Charge