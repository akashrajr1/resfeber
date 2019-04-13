import React, { Component } from 'react';
import { View, ImageBackground, Dimensions, ScrollView, Image, Platform } from 'react-native';
import { Actions } from "react-native-router-flux";
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Text, Right } from 'native-base';

export class InitialFormScreen extends Component {
  componentDidMount(){
    setTimeout( () => {
      Actions.init()
    },3000)
  }
  render() {
    return (
      <Content>
        <Card>
          <View style={{height:75}}/>
          <ImageBackground style={{backgroundColor:'#ffc000', height: 350, width: 353}} source={require('../src/images/logo.jpg')}>
          </ImageBackground>
          <View style={{height:75}}/>
        </Card>
      </Content>
    )
  }
};

export default InitialFormScreen;
