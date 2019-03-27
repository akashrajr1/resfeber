import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Actions } from "react-native-router-flux";


import Footer from '../src/components/NavigationScreenFooter';
import NavigationComponent from '../src/components/NavigationComponent';

export class NavigationScreen extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        <NavigationComponent/>
        <Text> YO</Text>
        <Footer/>
      </View>
    )
  }
};

export default NavigationScreen;
