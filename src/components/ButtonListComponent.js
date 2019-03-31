import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text, Icon, Left, Body, Right, Switch, Button,View } from 'native-base';
import { Actions } from "react-native-router-flux";

export default class ListIconExample extends Component {
  render() {
    return (
      <View style={{flex:5}}>
        <Container>
          <Content>
            <ListItem icon onPress={ ()=> Actions.markAsVisited()}>
              <Left>
                <Button style={{ backgroundColor: "#ffcc00" }}>
                  <Icon active name="flag" style={{ color: "#000000" }} />
                </Button>
              </Left>
              <Body>
                <Text>Mark as Visited</Text>
              </Body>
            </ListItem>
            <ListItem icon onPress={ ()=> Actions.roadTrip()}>
              <Left>
                <Button style={{ backgroundColor: "#ffcc00" }}>
                  <Icon active name="play" style={{ color: "#000000" }}/>
                </Button>
              </Left>
              <Body>
                <Text>Road Trip Playlist</Text>
              </Body>
            </ListItem>
            <ListItem icon onPress={ ()=> Actions.gasStation()}>
              <Left>
                <Button style={{ backgroundColor: "#ffcc00" }}>
                  <Icon active name="speedometer" style={{ color: "#000000" }}/>
                </Button>
              </Left>
              <Body>
                <Text>Nearest Gas Station</Text>
              </Body>
            </ListItem>
            <ListItem icon onPress={ ()=> Actions.hotelRoom()}>
              <Left>
                <Button style={{ backgroundColor: "#ffcc00" }}>
                  <Icon active name="home" style={{ color: "#000000" }}/>
                </Button>
              </Left>
              <Body>
                <Text>Book a Hotel Room</Text>
              </Body>
            </ListItem>
            <ListItem icon onPress={ ()=> Actions.hitchBuddies()}>
              <Left>
                <Button style={{ backgroundColor: "#ffcc00" }}>
                  <Icon active name="body" style={{ color: "#000000" }}/>
                </Button>
              </Left>
              <Body>
                <Text>Find Hitch-Buddies</Text>
              </Body>
            </ListItem>
          </Content>
        </Container>
      </View>
    );
  }
}
