import React, { Component } from 'react';
import { View, ImageBackground, Dimensions, Image, ScrollView, ToastAndroid, Slider } from 'react-native';
import { Actions } from "react-native-router-flux";
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Text, Right } from 'native-base';
import Footer from '../src/components/MoreScreenFooter';

export class RoadTripPlaylistScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 50,
      curTime: null,
      startTime: null,
      minutes: null,
      seconds: null,
    };
  }
  change(value) {
    this.setState(() => {
      return {
        value: parseFloat(value),
      };
    });
  }
  componentWillMount() {
    this.setState({startTime: new Date()});
    this.setState({minutes: 0});
    this.setState({startTime: 0});
  }
  componentDidMount() {
    var t = new Date((new Date()-this.state.startTime).toString());
    setInterval( () => {
      this.setState({
        seconds:this.state.seconds+1
      })
    },1000)
  }
  render() {
    const {value} = this.state;
    return (
      <View style={{flex:0.893}}>
        <ScrollView>

          <Content>
            <Card>
              <CardItem>
                <Image source={require('../src/images/pharell.jpg')} style={{height: 35, width: 35}}/>
                <Body>
                  <Text style={{fontSize: 20, fontWeight: 'bold', width: 220}}>  Happy</Text>
                  <Text note>   Pharell Williams </Text>
                </Body>
              </CardItem>
              <CardItem>
                <Image source={require('../src/images/happy.jpg')} style={{height: 260, width: 322}}/>
              </CardItem>
              <CardItem>
                <Text>{this.state.minutes}:{this.state.seconds}</Text>
                <View style={{flex:1}}>
                  <Slider step={1} maximumValue={100000} onValueChange={this.change.bind(this)} value={value}/>
                </View>
                <Text> 4:01 </Text>
              </CardItem>
              <CardItem>
                <View style={{width:25}}/>
                <Icon active name="shuffle" />
                <View style={{width:50}}/>
                <Image source={require('../src/images/pause.jpg')} style={{height: 35, width: 35}}/>
                <View style={{width:50}}/>
                <Icon active name="skip-forward" />
                <View style={{width:50}}/>
                <Icon active name="share" />
              </CardItem>
            </Card>
          </Content>


        </ScrollView>
        <Footer/>
      </View>
    )
  }
}

export default RoadTripPlaylistScreen
