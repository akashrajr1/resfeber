import React, { Component } from 'react';
import { View, ImageBackground, Dimensions, Image, ScrollView } from 'react-native';
import { Actions } from "react-native-router-flux";
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Text, Right } from 'native-base';

import Footer from '../src/components/ActivitiesScreenFooter';

export class ActivitiesScreen extends Component {
  render() {
    return (
      <View style={{flex:0.893}}>
        <ScrollView>
        <View style={{flex:1}}>
          <ImageBackground style={{height: 165, width: Dimensions.get('window').width}} source={require('../src/images/road_trip.jpg')}>
            <View style={{top: 10, left: 10, right: 0, bottom: 0}}>
              <Text style={{fontSize: 20, fontWeight: 'bold', color: '#ffffff'}}>Wander. Wonder.</Text>
              <Text style={{fontSize: 12, fontWeight: 'bold', color: '#ffffff'}}>Discover nearby places you might be interested in. </Text>
            </View>
          </ImageBackground>
          </View>
          <Content>
            <Card>
              <CardItem>
                  <Text>Liam</Text>
                <Right>
                  <Icon name='paper-plane'style={{ color: "#000000" }} />
                  <Text note> 0.5 miles </Text>
                </Right>
              </CardItem>
              <CardItem>
              <Body>
                <Image source={require('../src/images/road_trip.jpg')} style={{height: 150, width: 321, flex: 1}}/>
              </Body>
            </CardItem>
              <CardItem>
                <Text>I like to read, program computers, play video games, and am a big Maroon 5 fan!</Text>
              </CardItem>
              <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Icon name="flag" />
                  <Text>1,926 stars</Text>
                </Button>
              </Left>
            </CardItem>
            </Card>
          </Content>
          <Content>
            <Card>
              <CardItem>
                  <Text>Liam</Text>
                <Right>
                  <Icon name='paper-plane'style={{ color: "#000000" }} />
                  <Text note> 0.5 miles </Text>
                </Right>
              </CardItem>
              <CardItem>
              <Body>
                <Image source={require('../src/images/road_trip.jpg')} style={{height: 150, width: 321, flex: 1}}/>
              </Body>
            </CardItem>
              <CardItem>
                <Text>I like to read, program computers, play video games, and am a big Maroon 5 fan!</Text>
              </CardItem>
              <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Icon name="flag" />
                  <Text>1,926 stars</Text>
                </Button>
              </Left>
            </CardItem>
            </Card>
          </Content>
          <Content>
            <Card>
              <CardItem>
                  <Text>Liam</Text>
                <Right>
                  <Icon name='paper-plane'style={{ color: "#000000" }} />
                  <Text note> 0.5 miles </Text>
                </Right>
              </CardItem>
              <CardItem>
              <Body>
                <Image source={require('../src/images/road_trip.jpg')} style={{height: 150, width: 321, flex: 1}}/>
              </Body>
            </CardItem>
              <CardItem>
                <Text>I like to read, program computers, play video games, and am a big Maroon 5 fan!</Text>
              </CardItem>
              <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Icon name="flag" />
                  <Text>1,926 stars</Text>
                </Button>
              </Left>
            </CardItem>
            </Card>
          </Content>
          <Content>
            <Card>
              <CardItem>
                  <Text>Liam</Text>
                <Right>
                  <Icon name='paper-plane'style={{ color: "#000000" }} />
                  <Text note> 0.5 miles </Text>
                </Right>
              </CardItem>
              <CardItem>
              <Body>
                <Image source={require('../src/images/road_trip.jpg')} style={{height: 150, width: 321, flex: 1}}/>
              </Body>
            </CardItem>
              <CardItem>
                <Text>I like to read, program computers, play video games, and am a big Maroon 5 fan!</Text>
              </CardItem>
              <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Icon name="flag" />
                  <Text>1,926 stars</Text>
                </Button>
              </Left>
            </CardItem>
            </Card>
          </Content>
          <Content>
            <Card>
              <CardItem>
                  <Text>Liam</Text>
                <Right>
                  <Icon name='paper-plane'style={{ color: "#000000" }} />
                  <Text note> 0.5 miles </Text>
                </Right>
              </CardItem>
              <CardItem>
              <Body>
                <Image source={require('../src/images/road_trip.jpg')} style={{height: 150, width: 321, flex: 1}}/>
              </Body>
            </CardItem>
              <CardItem>
                <Text>I like to read, program computers, play video games, and am a big Maroon 5 fan!</Text>
              </CardItem>
              <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Icon name="flag" />
                  <Text>1,926 stars</Text>
                </Button>
              </Left>
            </CardItem>
            </Card>
          </Content>
        </ScrollView>
        <Footer/>
      </View>
    )
  }
}

export default ActivitiesScreen
