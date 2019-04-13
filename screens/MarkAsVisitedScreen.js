import React, { Component } from 'react';
import { View, ImageBackground, Dimensions, ToastAndroid, ScrollView } from 'react-native';
import { Actions } from "react-native-router-flux";
import Footer from '../src/components/MoreScreenFooter';
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Text, Right } from 'native-base';


export class MarkAsVisitedScreen extends Component {
  render() {
    return (
      <View style={{flex:0.95}}>
      <ScrollView>

        <Content>
          <Card>
            <ImageBackground style={{backgroundColor:'#ffc000', height: 350, width: 354}} source={require('../src/images/ggh.jpg')}>
            <View style={{top: 60, left: 10, right: 0, bottom: 0}}>
              <Text style={{fontSize: 50, fontWeight: 'bold', color: '#ffffff'}}>Kudos! You visited the Golden Gate Bridge!</Text>
            </View>
            </ImageBackground>
            <CardItem>
              <View style={{width: 17}}/>
              <Button success textStyle={{color: '#87838B'}} onPress={() => {ToastAndroid.show('Opening Gallery!', ToastAndroid.SHORT);}}>
                <Icon name="share" />
                <Text>Share Photos on Facebook!</Text>
              </Button>
            </CardItem>
          </Card>
        </Content>

      </ScrollView>
      <Footer/>
      </View>
    )
  }
};

export default MarkAsVisitedScreen;
