import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Title } from 'native-base';
export default class HeaderTitleExample extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>Resfeber</Title>
          </Body>
        </Header>
      </Container>
    );
  }
}
