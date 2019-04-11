import React, { Component } from 'react';
import { View, ImageBackground, Dimensions, Image, ScrollView, ToastAndroid } from 'react-native';
import { Actions } from "react-native-router-flux";
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Text, Right } from 'native-base';
import Footer from '../src/components/FoodScreenFooter';

export class ActivitiesScreen extends Component {
  render() {
    return (
      <View style={{flex:0.893}}>
        <ScrollView>
        <View style={{flex:1}}>
          <ImageBackground style={{height: 150, width: Dimensions.get('window').width}} source={require('../src/images/food_screen.jpg')}>
            <View style={{top: 10, left: 10, right: 0, bottom: 0}}>
              <Text style={{fontSize: 20, fontWeight: 'bold', color: '#ffffff'}}>Time to grab lunch!</Text>
              <Text style={{fontSize: 12, fontWeight: 'bold', color: '#ffffff'}}>Discover best places to eat nearby! </Text>
            </View>
          </ImageBackground>
          </View>


          <Content>
            <Card>
              <CardItem>
                <Text style={{fontSize: 20, fontWeight: 'bold', width: 285}}>Mediterranean Grill & Cafe</Text>
                <Right>
                  <Text style={{ backgroundColor: "green", color: "white", fontWeight: 'bold' }}> 4.7 </Text>
                </Right>
              </CardItem>
              <CardItem>
                <View style={{flex:3}}>
                  <View style={{flex:3, flexDirection: 'row'}}>
                    <Image source={require('../src/images/mgc.jpg')} style={{height: 90, width: 90}}/>
                    <View style={{height: 100, width: 10}}/>
                    <View style={{flex:3}}>
                      <Text style={{fontSize: 15, width: 150}}>Mediterranean</Text>
                      <Text>$ <Text style={{fontSize: 13}}>20 per person </Text></Text>
                      <View style={{flex:1, flexDirection: 'row'}}>
                        <Icon active name="beer" style={{ color: "black" }}/>
                        <Text style={{fontSize: 13}}>Serves Alcohol </Text>
                      </View>
                      <Text note>0.5 Miles Away</Text>
                    </View>
                    <Left>
                      <Button transparent textStyle={{color: '#87838B'}} onPress={() => {ToastAndroid.show('Navigating to Mediterranean Grill & Cafe now!', ToastAndroid.SHORT);}}>
                        <Icon name="navigate" />
                        <Text>Go</Text>
                      </Button>
                    </Left>
                  </View>
                </View>
            </CardItem>
            </Card>
          </Content>

          <Content>
            <Card>
              <CardItem>
                <Text style={{fontSize: 20, fontWeight: 'bold', width: 285}}>Sal's Mexican Restaurant</Text>
                <Right>
                  <Text style={{ backgroundColor: "green", color: "white", fontWeight: 'bold' }}> 4.5 </Text>
                </Right>
              </CardItem>
              <CardItem>
                <View style={{flex:3}}>
                  <View style={{flex:3, flexDirection: 'row'}}>
                    <Image source={require('../src/images/sal.jpg')} style={{height: 90, width: 90}}/>
                    <View style={{height: 100, width: 10}}/>
                    <View style={{flex:3}}>
                      <Text style={{fontSize: 15, width: 150}}>Mexican</Text>
                      <Text>$ <Text style={{fontSize: 13}}>20 per person </Text></Text>
                      <Text note>0.7 Miles Away</Text>
                    </View>
                    <Left>
                      <Button transparent textStyle={{color: '#87838B'}} onPress={() => {ToastAndroid.show('Navigating to Sal\'s Mexican Restaurant now!', ToastAndroid.SHORT);}}>
                        <Icon name="navigate" />
                        <Text>Go</Text>
                      </Button>
                    </Left>
                  </View>
                </View>
            </CardItem>
            </Card>
          </Content>


          <Content>
            <Card>
              <CardItem>
                <Text style={{fontSize: 20, fontWeight: 'bold', width: 285}}>Yard House</Text>
                <Right>
                  <Text style={{ backgroundColor: "green", color: "white", fontWeight: 'bold' }}> 4.4 </Text>
                </Right>
              </CardItem>
              <CardItem>
                <View style={{flex:3}}>
                  <View style={{flex:3, flexDirection: 'row'}}>
                    <Image source={require('../src/images/yh.jpg')} style={{height: 90, width: 90}}/>
                    <View style={{height: 100, width: 10}}/>
                    <View style={{flex:3}}>
                      <Text style={{fontSize: 15, width: 150}}>American, Asian, Vegetarian</Text>
                      <Text>$ <Text style={{fontSize: 13}}>30 per person </Text></Text>
                      <Text note>1 Mile Away</Text>
                    </View>
                    <Left>
                      <Button transparent textStyle={{color: '#87838B'}} onPress={() => {ToastAndroid.show('Navigating to Yard House now!', ToastAndroid.SHORT);}}>
                        <Icon name="navigate" />
                        <Text>Go</Text>
                      </Button>
                    </Left>
                  </View>
                </View>
            </CardItem>
            </Card>
          </Content>


          <Content>
            <Card>
              <CardItem>
                <Text style={{fontSize: 20, fontWeight: 'bold', width: 285}}>Pismo's Coastal Grill</Text>
                <Right>
                  <Text style={{ backgroundColor: "#00cc00", color: "white", fontWeight: 'bold' }}> 4.2 </Text>
                </Right>
              </CardItem>
              <CardItem>
                <View style={{flex:3}}>
                  <View style={{flex:3, flexDirection: 'row'}}>
                    <Image source={require('../src/images/pcg.jpg')} style={{height: 90, width: 90}}/>
                    <View style={{height: 100, width: 10}}/>
                    <View style={{flex:3}}>
                      <Text style={{fontSize: 15, width: 150}}>Seafood</Text>
                      <Text>$ <Text style={{fontSize: 13}}>30 per person </Text></Text>
                      <View style={{flex:1, flexDirection: 'row'}}>
                        <Icon active name="beer" style={{ color: "black" }}/>
                        <Text style={{fontSize: 13}}>Serves Alcohol </Text>
                      </View>
                      <Text note>0.5 Miles Away</Text>
                    </View>
                    <Left>
                      <Button transparent textStyle={{color: '#87838B'}} onPress={() => {ToastAndroid.show('Navigating to Pismo\'s Coastal Grill now!', ToastAndroid.SHORT);}}>
                        <Icon name="navigate" />
                        <Text>Go</Text>
                      </Button>
                    </Left>
                  </View>
                </View>
            </CardItem>
            </Card>
          </Content>


          <Content>
            <Card>
              <CardItem>
                <Text style={{fontSize: 20, fontWeight: 'bold', width: 285}}>Luna Pizzeria & Italian Restaurant</Text>
                <Right>
                  <Text style={{ backgroundColor: "#00cc00", color: "white", fontWeight: 'bold' }}> 4.3 </Text>
                </Right>
              </CardItem>
              <CardItem>
                <View style={{flex:3}}>
                  <View style={{flex:3, flexDirection: 'row'}}>
                    <Image source={require('../src/images/luna.jpg')} style={{height: 90, width: 90}}/>
                    <View style={{height: 100, width: 10}}/>
                    <View style={{flex:3}}>
                      <Text style={{fontSize: 15, width: 150}}>Italian, Pizza</Text>
                      <Text>$ <Text style={{fontSize: 13}}>20 per person </Text></Text>
                      <View style={{flex:1, flexDirection: 'row'}}>
                        <Icon active name="beer" style={{ color: "black" }}/>
                        <Text style={{fontSize: 13}}>Serves Alcohol </Text>
                      </View>
                      <Text note>1.2 Miles Away</Text>
                    </View>
                    <Left>
                      <Button transparent textStyle={{color: '#87838B'}} onPress={() => {ToastAndroid.show('Navigating to Luna Pizzeria & Italian Restaurant now!', ToastAndroid.SHORT);}}>
                        <Icon name="navigate" />
                        <Text>Go</Text>
                      </Button>
                    </Left>
                  </View>
                </View>
            </CardItem>
            </Card>
          </Content>


          <Content>
            <Card>
              <CardItem>
                <Text style={{fontSize: 20, fontWeight: 'bold', width: 285}}>Taqueria Don Pepe</Text>
                <Right>
                  <Text style={{ backgroundColor: "green", color: "white", fontWeight: 'bold' }}> 4.4 </Text>
                </Right>
              </CardItem>
              <CardItem>
                <View style={{flex:3}}>
                  <View style={{flex:3, flexDirection: 'row'}}>
                    <Image source={require('../src/images/dp.jpg')} style={{height: 90, width: 90}}/>
                    <View style={{height: 100, width: 10}}/>
                    <View style={{flex:3}}>
                      <Text style={{fontSize: 15, width: 150}}>Mexican, Italian, Pizza</Text>
                      <Text>$ <Text style={{fontSize: 13}}>15 per person </Text></Text>
                      <Text note>0.2 Miles Away</Text>
                    </View>
                    <Left>
                      <Button transparent textStyle={{color: '#87838B'}} onPress={() => {ToastAndroid.show('Navigating to Taqueria Don Pepe now!', ToastAndroid.SHORT);}}>
                        <Icon name="navigate" />
                        <Text>Go</Text>
                      </Button>
                    </Left>
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
