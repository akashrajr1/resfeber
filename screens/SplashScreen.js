import React, { Component } from 'react';
import { View, ImageBackground, Dimensions, ScrollView, Image, Platform } from 'react-native';
import { Actions } from "react-native-router-flux";
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Text, Right } from 'native-base';

export class InitialFormScreen extends Component {
  componentDidMount(){
    setInterval( () => {
      Actions.init()
    },3000)
  }
  render() {
    return (
      <Text> Yo </Text>
    )
  }
};

export default InitialFormScreen;
