import React, { Component } from 'react';
import { View, Text, ImageBackground, Dimensions } from 'react-native';
import { Actions } from "react-native-router-flux";

import Footer from '../src/components/ActivitiesScreenFooter';
import ActivitiesCardListComponent from '../src/components/ActivitiesCardListComponent';

export class ActivitiesScreen extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        <ImageBackground style={{height: 165, width: Dimensions.get('window').width}} source={require('../src/images/road_trip.jpg')}>
          <View style={{top: 10, left: 10, right: 0, bottom: 0}}>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: '#ffffff'}}>Wander. Wonder.</Text>
            <Text style={{fontSize: 12, fontWeight: 'bold', color: '#ffffff'}}>Discover nearby places you might be interested in. </Text>
          </View>
        </ImageBackground>
        <ActivitiesCardListComponent/>
        <Footer/>
      </View>
    )
  }
}

export default ActivitiesScreen
