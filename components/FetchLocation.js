import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class FetchLocation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <Button title="Get Location" onPress={this.props.onGetLocation}></Button>
        );
    }
}

export default FetchLocation;

// const fetchLoccation = props => {
//     return (
//         <Button title="Get Location" onPress={props.onGetLocation}></Button>
//     );
// }
