import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { Actions } from "react-native-router-flux";
import Footer from '../src/components/MoreScreenFooter';

export class MarkAsVisitedScreen extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        <Text>Visited</Text>
        <Footer/>
      </View>
    )
  }
};

export default MarkAsVisitedScreen;
