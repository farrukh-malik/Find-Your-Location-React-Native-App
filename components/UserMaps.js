import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import MapView from 'react-native-maps';

class UserMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }


    render() {
        let userLocationMarker = null;
        if (this.props.userLocation) {
            userLocationMarker = <MapView.Marker coordinate={this.props.userLocation} />;
        }
        return (
            <View style={styles.mapContainer}>
                <MapView
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0622,
                        longitudeDelta: 0.0421,
                    }}
                    region={this.props.userLocation}
                    style={styles.map}>
                    {/* <MapView.Marker coordinate={this.props.userLocation} /> */}
                    {userLocationMarker}
                </MapView>
            </View>
        );
    }


}

// let userLocationMarker = null;
// if (this.props.userLocation) {
//     userLocationMarker = <MapView.Marker coordinate={this.props.userLocation} />;
// }

const styles = StyleSheet.create({
    mapContainer: {
        width: '100%',
        height: 200,
        marginTop: 20
    },
    map: {
        width: '100%',
        height: 200,
    },
});

export default UserMap;