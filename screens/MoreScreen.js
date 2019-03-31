import React, { Component } from 'react';
import { View, Text, Button, Image, Dimensions, ImageBackground } from 'react-native';
import { Actions } from "react-native-router-flux";
import Footer from '../src/components/MoreScreenFooter';
import ButtonListComponent from '../src/components/ButtonListComponent';

export class NavigationScreen extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        <ImageBackground style={{height: 165, width: Dimensions.get('window').width}} source={require('../src/images/more_screen.jpeg')}>
          <View style={{top: 10, left: 10, right: 0, bottom: 0}}>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: '#ffffff'}}>Essentials.</Text>
          </View>
        </ImageBackground>
        <View style={{height: 15, width: Dimensions.get('window').width, backgroundColor: "#ffffff"}}/>
        <ButtonListComponent/>
        <Footer/>
      </View>
    )
  }
};

export default NavigationScreen;
