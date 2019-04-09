import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text, StyleProvider } from 'native-base';
import { ToastAndroid, View } from 'react-native';
import { Actions } from "react-native-router-flux";
import getTheme from 'D:/Work/Booking.com Hackathon/Resfeber/native-base-theme/components';
import material from 'D:/Work/Booking.com Hackathon/Resfeber/native-base-theme/variables/material';

export default class FooterTabsIconTextExample extends Component {
  componentWillMount() {
  }
  render() {
    return (
      <View style={{flex:1}}>
        <StyleProvider style={getTheme(material)}>
          <Container>
            <Content />
            <Footer>
              <FooterTab>
                <Button vertical onPress={ ()=> Actions.navigation()}>
                  <Icon active name="navigate" />
                  <Text>Navigate</Text>
                </Button>
                <Button vertical onPress={ ()=> Actions.activities()}>
                  <Icon name="happy" />
                  <Text>Activities</Text>
                </Button>
                <Button vertical onPress={ ()=> Actions.food()}>
                  <Icon name="pizza" />
                  <Text>Food</Text>
                </Button>
                <Button vertical active onPress={ ()=> Actions.more()}>
                  <Icon name="apps" />
                  <Text>More</Text>
                </Button>
              </FooterTab>
            </Footer>
          </Container>
        </StyleProvider>
      </View>
    );
  }
}
