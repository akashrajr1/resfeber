import React, { Component } from 'react';
import { View, ScrollView, ImageBackground, Dimensions, ToastAndroid } from 'react-native';
import { Actions } from "react-native-router-flux";
import Footer from '../src/components/MoreScreenFooter';

import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button, Card, CardItem, Icon } from 'native-base';

export class FindHitchBuddiesScreen extends Component {
  render() {
    return (
      <View style={{flex:0.893}}>
        <ScrollView>
        <View style={{flex:1}}>
          <ImageBackground style={{height: 150, width: Dimensions.get('window').width}} source={require('../src/images/hitch.jpg')}>
            <View style={{top: 10, left: 10, right: 0, bottom: 0}}>
              <Text style={{fontSize: 20, fontWeight: 'bold', color: '#ffffff'}}>New Friends. New Experiences</Text>
              <Text style={{fontSize: 12, fontWeight: 'bold', color: '#ffffff'}}>Discover people around you and offer rides. </Text>
            </View>
          </ImageBackground>
          </View>
            <Content>
              <Card>
                <CardItem>
                  <Left>
                    <Thumbnail circle style={{height: 50, width:50}} source={require('D:/Work/Booking.com Hackathon/Resfeber/src/images/liam.jpg')} />
                    <Text>Liam</Text>
                    <Text note> USA</Text>
                  </Left>
                  <Right>
                    <Icon name='paper-plane'style={{ color: "#000000" }} onPress={() => {ToastAndroid.show('Wohoooo! Navigating to Liam!', ToastAndroid.SHORT);}} />
                    <Text note> 0.5 miles </Text>
                  </Right>
                </CardItem>
                <CardItem>
                  <Text>I like to read, program computers, play video games, and am a big Maroon 5 fan!</Text>
                </CardItem>
                <CardItem>
                  <Text note> Speaks English.</Text>
                </CardItem>
              </Card>
            </Content>
            <Content>
              <Card>
                <CardItem>
                  <Left>
                    <Thumbnail circle style={{height: 50, width:50}} source={require('D:/Work/Booking.com Hackathon/Resfeber/src/images/melissa.jpg')} />
                    <Text>Melissa</Text>
                    <Text note> USA</Text>
                  </Left>
                  <Right>
                    <Icon name='paper-plane'style={{ color: "#000000" }}  onPress={() => {ToastAndroid.show('Wohoooo! Navigating to Melissa!', ToastAndroid.SHORT);}} />
                    <Text note> 0.7 miles </Text>
                  </Right>
                </CardItem>
                <CardItem>
                  <Text>I  like to paint and do gardening, and occasionaly go for hiking trips!</Text>
                </CardItem>
                <CardItem>
                  <Text note> Speaks English and Spanish.</Text>
                </CardItem>
              </Card>
            </Content>
            <Content>
              <Card>
                <CardItem>
                  <Left>
                    <Thumbnail circle style={{height: 50, width:50}} source={require('D:/Work/Booking.com Hackathon/Resfeber/src/images/adrian.jpg')} />
                    <Text>Harshdeep</Text>
                    <Text note> India</Text>
                  </Left>
                  <Right>
                    <Icon name='paper-plane'style={{ color: "#000000" }}  onPress={() => {ToastAndroid.show('Wohoooo! Navigating to Harshdeep!', ToastAndroid.SHORT);}} />
                    <Text note> 0.8 miles </Text>
                  </Right>
                </CardItem>
                <CardItem>
                  <Text>I just moved to the US, teach Computer Science at Columbia, and love exploring new places, food and cultures.</Text>
                </CardItem>
                <CardItem>
                  <Text note> Speaks English and Hindi.</Text>
                </CardItem>
              </Card>
            </Content>

            <Content>
              <Card>
                <CardItem>
                  <Left>
                    <Thumbnail circle style={{height: 50, width:50}} source={require('D:/Work/Booking.com Hackathon/Resfeber/src/images/nikita.jpg')} />
                    <Text>Nikita</Text>
                    <Text note> Russia</Text>
                  </Left>
                  <Right>
                    <Icon name='paper-plane'style={{ color: "#000000" }}  onPress={() => {ToastAndroid.show('Wohoooo! Navigating to Nikita!', ToastAndroid.SHORT);}} />
                    <Text note> 0.95 miles </Text>
                  </Right>
                </CardItem>
                <CardItem>
                  <Text>Hiker, Traveler, Always Curious!</Text>
                </CardItem>
                <CardItem>
                  <Text note> Speaks English and Russian.</Text>
                </CardItem>
              </Card>
            </Content>
            <Content>
              <Card>
                <CardItem>
                  <Left>
                    <Thumbnail circle style={{height: 50, width:50}} source={require('D:/Work/Booking.com Hackathon/Resfeber/src/images/val.jpg')} />
                    <Text>Valentina</Text>
                    <Text note> Italy</Text>
                  </Left>
                  <Right>
                    <Icon name='paper-plane'style={{ color: "#000000" }}  onPress={() => {ToastAndroid.show('Wohoooo! Navigating to Valentina!', ToastAndroid.SHORT);}} />
                    <Text note> 1.2 miles </Text>
                  </Right>
                </CardItem>
                <CardItem>
                  <Text>School teacher. Curiosity drives me to explore new places and get a better perspective of the world we imhabit.</Text>
                </CardItem>
                <CardItem>
                  <Text note> Speaks English, Italian, and Spanish.</Text>
                </CardItem>
              </Card>
            </Content>
        </ScrollView>
        <Footer/>
      </View>
    )
  }
};

export default FindHitchBuddiesScreen;
