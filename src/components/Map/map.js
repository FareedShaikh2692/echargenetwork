import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View, SafeAreaView } from "react-native";
import { LatLng, LeafletView } from 'react-native-leaflet-view';
import Constants from "../../Constants";

const Map = () => {
    const DEFAULT_COORDINATE = {
        lat: 37.78825,
        lng: -122.4324,
    };
    return (
        <View style={styles.root}>
            <Text>Statistics</Text>
            <LeafletView style={{height:'100%'}}
                mapMarkers={[
                    {
                        position: DEFAULT_COORDINATE,
                        icon: '📍',
                        size: [32, 32],
                    },
                ]}
                mapCenterPosition={DEFAULT_COORDINATE}
            />
        </View >
    );
}
const styles = StyleSheet.create({
    root: {
        flex: 1,
        padding: Constants.height,       
    },
});
export default Map