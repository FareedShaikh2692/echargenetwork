import React from "react";
import { Text, Image, StyleSheet, View } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome"
import Entypo from "react-native-vector-icons/Entypo"
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons"
const styles = StyleSheet.create({
    body: {
        flex: 1,
        padding: 10

    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10
    },
    username: {
        fontSize: 18,
    },
    tinyLogo: {
        width: 100,
        height: 100,

    },
    icon: {
        width: 50,
        height: 50,
        borderRadius: 50
    },
    iconStyle: {
        fontWeight: "500",
        paddingTop: 8,
        paddingLeft: 5,
        backgroundColor: "#3A3939",
        borderRadius: 50,
        height: 50,
        width: 50,
    },
    iconrecentStyle: {
        fontWeight: "500",
        paddingTop: 8,
        paddingLeft: 10,
        backgroundColor: "#3A3939",
        borderRadius: 50,
        height: 50,
        width: 50,
    },
    iconactivecycleStyle: {
        fontWeight: "500",
        paddingTop: 7,
        paddingLeft: 8,
        backgroundColor: "#3A3939",
        borderRadius: 50,
        height: 50,
        width: 50,
    },
    iconbalenceStyle: {
        fontWeight: "500",
        paddingTop: 7,
        paddingLeft: 8,
        backgroundColor: "#3A3939",
        borderRadius: 50,
        height: 50,
        width: 50,
    },
    iconprofileStyle: {
        fontWeight: "500",
        paddingTop: 7,
        paddingLeft: 8,
        backgroundColor: "#3A3939",
        borderRadius: 50,
        height: 50,
        width: 50,
    },
    iconSecurityStyle: {
        fontWeight: "500",
        paddingTop: 7,
        paddingLeft: 8,
        backgroundColor: "#3A3939",
        borderRadius: 50,
        height: 50,
        width: 50,
    },
    div: {
        flexDirection: 'row',
        alignItems: "center",
        paddingBottom: 10,
        flex: 1,
        marginStart: 10,
        marginEnd: 10
    },
});

const Me = () => {
    return (
        <View style={styles.body}>
            <View style={{ flexDirection: 'row' }} >
                <View >
                    <Image
                        style={styles.tinyLogo}
                        source={{
                            uri: 'https://reactnative.dev/img/tiny_logo.png',
                        }}
                    />
                </View>
                <View style={{ paddingLeft: 20, paddingTop: 10 }}>
                    <Text style={[styles.titleText,{marginLeft:0}]}>Welcome</Text>
                    <Text style={styles.username}>Joyraj</Text>
                    <Text>Balance:0</Text>
                </View>
            </View>

            <View style={{ flexDirection: 'row', marginTop: 20 }} >
                <View style={styles.div}>
                    <FontAwesome
                        style={styles.iconStyle}
                        name='wifi'
                        color='#ffffff'
                        size={35}
                    />
                    <Text style={styles.titleText} >Card</Text>
                </View>
            </View>

            <View style={{ flexDirection: 'row', marginTop: 5 }} >
                <View style={styles.div}>
                    <FontAwesome
                        style={styles.iconrecentStyle}
                        name='clock-o'
                        color='#ffffff'
                        size={35}
                    />
                    <Text style={styles.titleText} >Recent</Text>
                </View>
            </View>

            <View style={{ flexDirection: 'row', marginTop: 5 }} >
                <View style={styles.div}>
                    <SimpleLineIcons
                        style={styles.iconStyle}
                        name='graph'
                        color='#ffffff'
                        size={35}
                    />
                    <Text style={styles.titleText} >Statistics</Text>
                </View>
            </View>

            <View style={{ flexDirection: 'row', marginTop: 5 }} >
                <View style={styles.div}>
                    <SimpleLineIcons
                        style={styles.iconactivecycleStyle}
                        name='settings'
                        color='#ffffff'
                        size={35}
                    />
                    <Text style={styles.titleText} >Active Cycles</Text>
                </View>
            </View>

            <View style={{ flexDirection: 'row', marginTop: 5 }} >
                <View style={styles.div}>
                    <SimpleLineIcons
                        style={styles.iconbalenceStyle}
                        name='credit-card'
                        color='#ffffff'
                        size={35}
                    />
                    <Text style={styles.titleText} >Balance</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 5 }} >
                <View style={styles.div}>
                    <SimpleLineIcons
                        style={styles.iconprofileStyle}
                        name='user'
                        color='#ffffff'
                        size={35}
                    />
                    <Text style={styles.titleText} >Profile</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 5 }} >
                <View style={styles.div}>
                    <SimpleLineIcons
                        style={styles.iconSecurityStyle}
                        name='lock'
                        color='#ffffff'
                        size={35}
                    />
                    <Text style={styles.titleText} >Security</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 20 }} >
                <View style={styles.div}>
                    <SimpleLineIcons
                        style={styles.iconStyle}
                        name='login'
                        color='#ffffff'
                        size={35}
                    />
                    <Text style={styles.titleText} >Logout</Text>
                </View>
            </View>
        </View>
    );
}
export default Me