import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FetchLocation from './components/FetchLocation'
import UserMap from './components/UserMaps'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userLocation: null
    }
  }

  getUserLocationHandler = () => {

    navigator.geolocation.getCurrentPosition(position => {
      this.setState({
        userLocation: {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.0622,
          longitudeDelta: 0.0421
        }
      })
      console.log("Position: ", position)

    }), error => console.log(error);
    ;

    console.log("Pressed the button")
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>To Find Your Location In A Map Press Button..!</Text>
        <FetchLocation onGetLocation={this.getUserLocationHandler}></FetchLocation>
        <UserMap userLocation={this.state.userLocation} />
        <Text>Hello Farrukh</Text>
        <Text>Your app is created..!</Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    paddingLeft: 30,
    paddingRight: 30,
    backgroundColor: '#32B76C',
    color: '#f0ffff',
    fontSize: 30,
  },
});
