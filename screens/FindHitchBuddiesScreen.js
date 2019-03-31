import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { Actions } from "react-native-router-flux";
import Footer from '../src/components/MoreScreenFooter';

export class FindHitchBuddiesScreen extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        <Text>Find Hitch Buddies</Text>
        <Footer/>
      </View>
    )
  }
};

export default FindHitchBuddiesScreen;
