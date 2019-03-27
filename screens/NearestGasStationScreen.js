import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { Actions } from "react-native-router-flux";
import Footer from '../src/components/MoreScreenFooter';

export class NearestGasStationScreen extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        <Text> Gas </Text>
        <Footer/>
      </View>
    )
  }
};

export default NearestGasStationScreen;
