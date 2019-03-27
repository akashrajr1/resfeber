import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { Actions } from "react-native-router-flux";
import Footer from '../src/components/MoreScreenFooter';

export class RoadTripPlaylistScreen extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        <Text>Road Trip</Text>
        <Footer/>
      </View>
    )
  }
};

export default RoadTripPlaylistScreen;
