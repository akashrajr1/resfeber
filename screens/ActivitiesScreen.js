import React, { Component } from 'react';
import { View, ImageBackground, Dimensions, Image, ScrollView, ToastAndroid } from 'react-native';
import { Actions } from "react-native-router-flux";
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Text, Right } from 'native-base';

import Footer from '../src/components/ActivitiesScreenFooter';

export class ActivitiesScreen extends Component {
  render() {
    return (
      <View style={{flex:0.893}}>
        <ScrollView>
        <View style={{flex:1}}>
          <ImageBackground style={{height: 150, width: Dimensions.get('window').width}} source={require('../src/images/road_trip.jpg')}>
            <View style={{top: 10, left: 10, right: 0, bottom: 0}}>
              <Text style={{fontSize: 20, fontWeight: 'bold', color: '#ffffff'}}>Wander. Wonder.</Text>
              <Text style={{fontSize: 12, fontWeight: 'bold', color: '#ffffff'}}>Discover nearby places you might be interested in. </Text>
            </View>
          </ImageBackground>
          </View>


          <Content>
            <Card>
              <CardItem>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>Visit the iconic Golden Gate Bridge.</Text>
              </CardItem>
              <CardItem>
                <View style={{flex:3}}>
                  <View style={{flex:3, flexDirection: 'row'}}>
                    <Image source={require('../src/images/gg.jpg')} style={{height: 100, width: 100}}/>
                    <View style={{height: 100, width: 10}}/>
                    <View style={{flex:3}}>
                      <Text style={{width: 210}}>The icon of SF city, famed 4,200-ft. art deco suspension bridge open to car, bike & foot traffic.</Text>
                      <Text note>0.5 Miles Away.</Text>
                    </View>
                  </View>
                <Left>
                  <Button transparent textStyle={{color: '#87838B'}} onPress={() => {ToastAndroid.show('Navigating to Golden Gate Bridge now!', ToastAndroid.SHORT);}}>
                    <Icon name="navigate" />
                    <Text>Let's Go!</Text>
                  </Button>
                </Left>
                </View>
            </CardItem>
            </Card>
          </Content>



          <Content>
            <Card>
              <CardItem>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>Visit the prison in Alcatraz Island.</Text>
              </CardItem>
              <CardItem>
                <View style={{flex:3}}>
                  <View style={{flex:3, flexDirection: 'row'}}>
                    <Image source={require('../src/images/al.jpg')} style={{height: 100, width: 100}}/>
                    <View style={{height: 100, width: 10}}/>
                    <View style={{flex:3}}>
                      <Text style={{width: 210}}>Notorious prison & once home to Al Capone, now a museum with audio tour, accessible by ferry.</Text>
                      <Text note>1.3 Miles Away.</Text>
                    </View>
                  </View>
                <Left>
                  <Button transparent textStyle={{color: '#87838B'}} onPress={() => {ToastAndroid.show('Navigating to Alcatraz Island now!', ToastAndroid.SHORT);}}>
                    <Icon name="navigate" />
                    <Text>Let's Go!</Text>
                  </Button>
                </Left>
                </View>
            </CardItem>
            </Card>
          </Content>

          <Content>
            <Card>
              <CardItem>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>Shop at Fisherman's Wharf.</Text>
              </CardItem>
              <CardItem>
                <View style={{flex:3}}>
                  <View style={{flex:3, flexDirection: 'row'}}>
                    <Image source={require('../src/images/fw.jpg')} style={{height: 100, width: 100}}/>
                    <View style={{height: 100, width: 10}}/>
                    <View style={{flex:3}}>
                      <Text style={{width: 210}}>One of the city's busiest tourist areas, has souvenir shops and stalls selling crab and clam chowder in sourdough bread bowls.</Text>
                      <Text note>2.7 Miles Away.</Text>
                    </View>
                  </View>
                <Left>
                  <Button transparent textStyle={{color: '#87838B'}} onPress={() => {ToastAndroid.show('Navigating to Fisherman\'s Wharf now!', ToastAndroid.SHORT);}}>
                    <Icon name="navigate" />
                    <Text>Let's Go!</Text>
                  </Button>
                </Left>
                </View>
            </CardItem>
            </Card>
          </Content>



          <Content>
            <Card>
              <CardItem>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>Enjoy the scenery at Pier 39.</Text>
              </CardItem>
              <CardItem>
                <View style={{flex:3}}>
                  <View style={{flex:3, flexDirection: 'row'}}>
                    <Image source={require('../src/images/p39.jpg')} style={{height: 100, width: 100}}/>
                    <View style={{height: 100, width: 10}}/>
                    <View style={{flex:3}}>
                      <Text style={{width: 210}}>Bustling bayside pier featuring scenic views, sea-lion sightings, eateries, shops & entertainment.</Text>
                      <Text note>3.9 Miles Away.</Text>
                    </View>
                  </View>
                <Left>
                  <Button transparent textStyle={{color: '#87838B'}} onPress={() => {ToastAndroid.show('Navigating to Pier 39 now!', ToastAndroid.SHORT);}}>
                    <Icon name="navigate" />
                    <Text>Let's Go!</Text>
                  </Button>
                </Left>
                </View>
            </CardItem>
            </Card>
          </Content>



          <Content>
            <Card>
              <CardItem>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>Take a stroll around Union Square.</Text>
              </CardItem>
              <CardItem>
                <View style={{flex:3}}>
                  <View style={{flex:3, flexDirection: 'row'}}>
                    <Image source={require('../src/images/us.jpg')} style={{height: 100, width: 100}}/>
                    <View style={{height: 100, width: 10}}/>
                    <View style={{flex:3}}>
                      <Text style={{width: 210}}>Well-known vibrant neighborhood featuring a range of upscale shops, restaurants, hotels & nightlife.</Text>
                      <Text note>5.6 Miles Away.</Text>
                    </View>
                  </View>
                <Left>
                  <Button transparent textStyle={{color: '#87838B'}} onPress={() => {ToastAndroid.show('Navigating to Union Square now!', ToastAndroid.SHORT);}}>
                    <Icon name="navigate" />
                    <Text>Let's Go!</Text>
                  </Button>
                </Left>
                </View>
            </CardItem>
            </Card>
          </Content>



          <Content>
            <Card>
              <CardItem>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>Visit the symbol of SF - Lombard Street.</Text>
              </CardItem>
              <CardItem>
                <View style={{flex:3}}>
                  <View style={{flex:3, flexDirection: 'row'}}>
                    <Image source={require('../src/images/ls.jpg')} style={{height: 100, width: 100}}/>
                    <View style={{height: 100, width: 10}}/>
                    <View style={{flex:3}}>
                      <Text style={{width: 210}}>Lombard Street is an east–west street in San Francisco, California that is famous for a steep, one-block section with eight hairpin turns.</Text>
                      <Text note>7.7 Miles Away.</Text>
                    </View>
                  </View>
                <Left>
                  <Button transparent textStyle={{color: '#87838B'}} onPress={() => {ToastAndroid.show('Navigating to Lombard Street now!', ToastAndroid.SHORT);}}>
                    <Icon name="navigate" />
                    <Text>Let's Go!</Text>
                  </Button>
                </Left>
                </View>
            </CardItem>
            </Card>
          </Content>



          <Content>
            <Card>
              <CardItem>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>Enter the Dragon at ChinaTown.</Text>
              </CardItem>
              <CardItem>
                <View style={{flex:3}}>
                  <View style={{flex:3, flexDirection: 'row'}}>
                    <Image source={require('../src/images/ct.jpg')} style={{height: 100, width: 100}}/>
                    <View style={{height: 100, width: 10}}/>
                    <View style={{flex:3}}>
                      <Text style={{width: 210}}>The most established Chinatowns in the U.S. Beyond iconic Dragon’s Gate, a maze of streets and brims with dim-sum joints.</Text>
                      <Text note>7.8 Miles Away.</Text>
                    </View>
                  </View>
                <Left>
                  <Button transparent textStyle={{color: '#87838B'}} onPress={() => {ToastAndroid.show('Navigating to ChinaTown now!', ToastAndroid.SHORT);}}>
                    <Icon name="navigate" />
                    <Text>Let's Go!</Text>
                  </Button>
                </Left>
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
