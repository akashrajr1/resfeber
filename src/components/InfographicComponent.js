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
                <Image source={require('D:/Work/Booking.com Hackathon/Resfeber/src/images/las_vegas.jpg')}  style={{width: 50, height: 50}}/>
                <Body>
                  <Text>  Vegas Baaaaby! Time to hit the road!</Text>
                  <Text>  Lets get your jam on!</Text>
                  <Text note>  Go to More -> Road Trip Playlist</Text>
                </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
