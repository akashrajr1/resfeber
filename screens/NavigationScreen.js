import React, { Component } from 'react';
import { Text, View, ImageBackground, Dimensions, ScrollView } from 'react-native';
import { Actions } from "react-native-router-flux";


import Footer from '../src/components/NavigationScreenFooter';
import NavigationComponent from '../src/components/NavigationComponent';
import InfographicComponent from '../src/components/InfographicComponent';
import InfographicComponent2 from '../src/components/InfographicComponent2';

export class NavigationScreen extends Component {
  render() {
    return (
      <View style={{flex:1}}>
          <ImageBackground style={{height: 320, width: Dimensions.get('window').width}} source={require('../src/images/navigate2.jpg')}>
          </ImageBackground>
          <InfographicComponent2/>
          <Footer/>
      </View>
    )
  }
};

export default NavigationScreen;
