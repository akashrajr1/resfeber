// Settings.js

import React, { Component } from 'react';
import { View, Text, Button,  ImageBackground, Dimensions } from 'react-native';
import { Actions } from "react-native-router-flux";
import Footer from '../src/components/FoodScreenFooter';


export class NavigationScreen extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        <ImageBackground style={{height: 165, width: Dimensions.get('window').width}} source={require('../src/images/food_screen.jpg')}>
          <View style={{top: 10, left: 10, right: 0, bottom: 0}}>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: '#ffffff'}}>Food. Beer. Fun Times.</Text>
            <Text style={{fontSize: 12, fontWeight: 'bold', color: '#ffffff'}}>Discover delectable dishes around you. </Text>
          </View>
        </ImageBackground>
        <Footer/>
      </View>
    )
  }
};

export default NavigationScreen;
