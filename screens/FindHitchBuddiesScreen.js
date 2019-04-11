import React, { Component } from 'react';
import { View, ScrollView, ImageBackground, Dimensions } from 'react-native';
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
                    <Thumbnail circle style={{height: 50, width:50}} source={require('D:/Work/Booking.com Hackathon/Resfeber/src/images/food_screen.jpg')} />
                    <Text>Liam</Text>
                    <Text note> USA</Text>
                  </Left>
                  <Right>
                    <Icon name='paper-plane'style={{ color: "#000000" }} />
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
                    <Thumbnail circle style={{height: 50, width:50}} source={require('D:/Work/Booking.com Hackathon/Resfeber/src/images/food_screen.jpg')} />
                    <Text>Melissa</Text>
                    <Text note> USA</Text>
                  </Left>
                  <Right>
                    <Icon name='paper-plane'style={{ color: "#000000" }} />
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
                    <Thumbnail circle style={{height: 50, width:50}} source={require('D:/Work/Booking.com Hackathon/Resfeber/src/images/food_screen.jpg')} />
                    <Text>Mike</Text>
                    <Text note> USA</Text>
                  </Left>
                  <Right>
                    <Icon name='paper-plane'style={{ color: "#000000" }} />
                    <Text note> 0.8 miles </Text>
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
                    <Thumbnail circle style={{height: 50, width:50}} source={require('D:/Work/Booking.com Hackathon/Resfeber/src/images/food_screen.jpg')} />
                    <Text>Hank</Text>
                    <Text note> USA</Text>
                  </Left>
                  <Right>
                    <Icon name='paper-plane'style={{ color: "#000000" }} />
                    <Text note> 0.8 miles </Text>
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
                    <Thumbnail circle style={{height: 50, width:50}} source={require('D:/Work/Booking.com Hackathon/Resfeber/src/images/food_screen.jpg')} />
                    <Text>Nikita</Text>
                    <Text note> Russia</Text>
                  </Left>
                  <Right>
                    <Icon name='paper-plane'style={{ color: "#000000" }} />
                    <Text note> 0.8 miles </Text>
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
                    <Thumbnail circle style={{height: 50, width:50}} source={require('D:/Work/Booking.com Hackathon/Resfeber/src/images/food_screen.jpg')} />
                    <Text>Xiang Yu</Text>
                    <Text note> China</Text>
                  </Left>
                  <Right>
                    <Icon name='paper-plane'style={{ color: "#000000" }} />
                    <Text note> 0.8 miles </Text>
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
        </ScrollView>
        <Footer/>
      </View>
    )
  }
};

export default FindHitchBuddiesScreen;
