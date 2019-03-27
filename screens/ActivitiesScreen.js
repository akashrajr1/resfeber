import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from "react-native-router-flux";

import Footer from '../src/components/ActivitiesScreenFooter';

export class ActivitiesScreen extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        <Text>This is Activities </Text>
        <Footer/>
      </View>
    )
  }
}

export default ActivitiesScreen
