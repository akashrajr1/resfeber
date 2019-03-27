import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { Actions } from "react-native-router-flux";
import Footer from '../src/components/MoreScreenFooter';
import ButtonListComponent from '../src/components/ButtonListComponent';

export class NavigationScreen extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        <ButtonListComponent/>
        <Footer/>
      </View>
    )
  }
};

export default NavigationScreen;
