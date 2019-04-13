import React, { Component } from 'react';
import { View, ImageBackground, Dimensions, ScrollView, Image, Platform, TextInput, StyleSheet } from 'react-native';
import { Actions } from "react-native-router-flux";
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Text, Right } from 'native-base';

export class InitialFormScreen extends Component {
  render() {
    return (
      <View style={{flex:1}}>
      <ImageBackground style={{height: 150, width: Dimensions.get('window').width}} source={require('../src/images/rt.jpg')}>
        <View style={{top: 10, left: 10, right: 0, bottom: 0}}>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: '#ffffff'}}>Ready for the road trip of a lifetime?</Text>
          <Text style={{fontSize: 12, fontWeight: 'bold', color: '#ffffff'}}>Let's get you started! </Text>
        </View>
      </ImageBackground>
      <Container>
        <Content>
          <Card>
            <CardItem>
                <Text><Icon name="navigate" />  Going to: </Text>
                <TextInput style = {styles.input}
                 underlineColorAndroid = "transparent"
                 placeholder = "eg. New York"
                 autoCapitalize = "none"/>
            </CardItem>
            <CardItem>
                <Text><Icon name="man" />  No. of People: </Text>
                <TextInput style = {styles.input}
                 underlineColorAndroid = "transparent"
                 placeholder = "eg. 4"
                 autoCapitalize = "none"/>
            </CardItem>
            <CardItem>
                <Text><Icon name="pizza" />  Meal Budget ($): </Text>
                <TextInput style = {styles.input}
                 underlineColorAndroid = "transparent"
                 placeholder = "eg. 25"
                 autoCapitalize = "none"/>
            </CardItem>
            <CardItem>
                <Text><Icon name="home" />  Hotel Stay Budget ($): </Text>
                <TextInput style = {styles.input}
                 underlineColorAndroid = "transparent"
                 placeholder = "eg. 200"
                 autoCapitalize = "none"/>
            </CardItem>
            <CardItem>
              <View style={{width:50}}/>
              <Button success textStyle={{color: '#87838B'}} onPress={ ()=> Actions.navigation()}>
                <Icon name="navigate" />
                <Text> Let's hit the road! </Text>
              </Button>
            </CardItem>
          </Card>
        </Content>
      </Container>
      </View>
    )
  }
};

export default InitialFormScreen;


const styles = StyleSheet.create({
   container: {
      paddingTop: 23
   },
   input: {
      margin: 5,
      height: 35,
      width: 120,
      borderWidth: 0.5
   }
})
