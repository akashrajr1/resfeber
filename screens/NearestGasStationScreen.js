import React, { Component } from 'react';
import { View, ImageBackground, Dimensions, Image, ScrollView, ToastAndroid } from 'react-native';
import { Actions } from "react-native-router-flux";
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Text, Right } from 'native-base';
import Footer from '../src/components/MoreScreenFooter';

export class ActivitiesScreen extends Component {
  render() {
    return (
      <View style={{flex:0.893}}>
        <ScrollView>
        <View style={{flex:1}}>
          <ImageBackground style={{height: 150, width: Dimensions.get('window').width}} source={require('../src/images/gas.jpg')}>
            <View style={{top: 10, left: 10, right: 0, bottom: 0}}>
              <Text style={{fontSize: 20, fontWeight: 'bold', color: '#ffffff'}}>Fuel Up!</Text>
              <Text style={{fontSize: 12, fontWeight: 'bold', color: '#ffffff'}}>Get a refill from a nearby gas station for an uninterrupted drive. </Text>
            </View>
          </ImageBackground>
          </View>


          <Content>
            <Card>
              <CardItem>
                <Image source={require('../src/images/chevron.jpg')} style={{height: 35, width: 35}}/>
                <Text style={{fontSize: 20, fontWeight: 'bold', width: 220}}>  Chevron</Text>
                <Left>
                  <Button transparent textStyle={{color: '#87838B'}} onPress={() => {ToastAndroid.show('Navigating to Chevron now!', ToastAndroid.SHORT);}}>
                    <Icon name="navigate" />
                    <Text> Go </Text>
                  </Button>
                </Left>
              </CardItem>
              <CardItem>
                <View style={{flex:3}}>
                  <Text note>Amenities: </Text>
                  <View style={{height: 10, width: 10}}/>
                  <View style={{flex:3, flexDirection: 'row'}}>
                    <View style={{flex:3}}>
                      <View style={{flex:1, flexDirection:'row'}}>
                        <Image source={require('../src/images/mcd.jpg')} style={{height: 30, width: 30}}/>
                        <View style={{width: 10}}/>
                        <Image source={require('../src/images/se.jpg')} style={{height: 30, width: 30}}/>
                      </View>
                      <View style={{height: 10, width: 10}}/>
                      <Text note>0.5 Miles Away</Text>
                    </View>
                  </View>
                </View>
            </CardItem>
            </Card>
          </Content>


          <Content>
            <Card>
              <CardItem>
                <Image source={require('../src/images/mobil.jpg')} style={{height: 35, width: 35}}/>
                <Text style={{fontSize: 20, fontWeight: 'bold', width: 220}}>  Mobil</Text>
                <Left>
                  <Button transparent textStyle={{color: '#87838B'}} onPress={() => {ToastAndroid.show('Navigating to Mobil now!', ToastAndroid.SHORT);}}>
                    <Icon name="navigate" />
                    <Text> Go </Text>
                  </Button>
                </Left>
              </CardItem>
              <CardItem>
                <View style={{flex:3}}>
                  <Text note> Amenities: </Text>
                  <View style={{height: 10, width: 10}}/>
                  <View style={{flex:3, flexDirection: 'row'}}>
                    <View style={{flex:3}}>
                      <View style={{flex:1, flexDirection:'row'}}>
                        <Image source={require('../src/images/king.jpg')} style={{height: 30, width: 30}}/>
                        <View style={{width: 10}}/>
                        <Image source={require('../src/images/se.jpg')} style={{height: 30, width: 30}}/>
                      </View>
                      <View style={{height: 10, width: 10}}/>
                      <Text note>0.7 Miles Away</Text>
                    </View>
                  </View>
                </View>
            </CardItem>
            </Card>
          </Content>



          <Content>
            <Card>
              <CardItem>
                <Image source={require('../src/images/arco.jpg')} style={{height: 35, width: 35}}/>
                <Text style={{fontSize: 20, fontWeight: 'bold', width: 220}}>  ARCO</Text>
                <Left>
                  <Button transparent textStyle={{color: '#87838B'}} onPress={() => {ToastAndroid.show('Navigating to ARCO now!', ToastAndroid.SHORT);}}>
                    <Icon name="navigate" />
                    <Text> Go </Text>
                  </Button>
                </Left>
              </CardItem>
              <CardItem>
                <View style={{flex:3}}>
                  <Text note>Amenities: </Text>
                  <View style={{height: 10, width: 10}}/>
                  <View style={{flex:3, flexDirection: 'row'}}>
                    <View style={{flex:3}}>
                      <View style={{flex:1, flexDirection:'row'}}>
                        <Image source={require('../src/images/se.jpg')} style={{height: 30, width: 30}}/>
                        <View style={{width: 10}}/>
                      </View>
                      <View style={{height: 10, width: 10}}/>
                      <Text note>2 Miles Away</Text>
                    </View>
                  </View>
                </View>
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
