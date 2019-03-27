// Settings.js

import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { Actions } from "react-native-router-flux";
import Footer from '../src/components/FoodScreenFooter';


export class NavigationScreen extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        <Text> Fooood </Text>
        <Footer/>
      </View>
    )
  }
};

export default NavigationScreen;
