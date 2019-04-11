import React, { Component } from 'react';
import { Image, ImageBackground } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';

export default class CardImageExample extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Card>
            <CardItem>
                <Image source={require('D:/Work/Booking.com Hackathon/Resfeber/src/images/right_turn.jpg')}  style={{width: 50, height: 50}}/>
                <Body>
                  <Text>  Turn Right at 1st Cross Street onto </Text>
                  <Text>  Howard Street.</Text>
                  <Text note>   Song:  </Text>
                </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
