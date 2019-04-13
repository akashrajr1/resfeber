import React, { Component } from 'react';
import { View, ImageBackground, Dimensions, ScrollView, Image, Platform } from 'react-native';
import { Actions } from "react-native-router-flux";
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Text, Right } from 'native-base';

export class InitialFormScreen extends Component {
  render() {
    return (
      <View style={{flex:1}}>
      <Container>
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Body>
                  <Text>Ready for the most memorable road trip ever?</Text>
                  <Text note>Let's start with some basic info!</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: 'Image URL'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
          <Text> Yo </Text>
          <Button transparent textStyle={{color: '#87838B'}} onPress={ ()=> Actions.navigation()}>
            <Icon name="navigate" />
            <Text> Go </Text>
          </Button>
      </View>
    )
  }
};

export default InitialFormScreen;
