import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';

export default class CardImageExample extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Card>
            <CardItem>
                <Icon name="microphone" />
                <Body>
                  <Text>Hooray! You are all set! Time to get your jam on!</Text>
                  <Text note>Go to More -> Road Trip Playlist </Text>
                </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
