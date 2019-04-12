import React, { Component } from 'react';
import { View, ImageBackground, Dimensions, Image, ScrollView, ToastAndroid } from 'react-native';
import { Actions } from "react-native-router-flux";
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Text, Right } from 'native-base';
import Footer from '../src/components/MoreScreenFooter';

export class BookAHotelRoomScreen extends Component {
  render() {
    return (
      <View style={{flex:0.893}}>
        <ScrollView>
        <View style={{flex:1}}>
          <ImageBackground style={{height: 150, width: Dimensions.get('window').width}} source={require('../src/images/hotel.jpg')}>
            <View style={{top: 10, left: 10, right: 0, bottom: 0}}>
              <Text style={{fontSize: 20, fontWeight: 'bold', color: '#ffffff'}}>Anchor, Ahoy!</Text>
              <Text style={{fontSize: 12, fontWeight: 'bold', color: '#ffffff'}}>Discover places to rest for the night. </Text>
            </View>
          </ImageBackground>
          </View>

          <Content>
            <Card>
              <CardItem>
                  <Text>Made with <Image source={require('../src/images/love.jpg')} style={{height: 30, width: 30}}/> using<Image source={require('../src/images/bcom2.jpg')} style={{height: 60, width: 100}}/>API</Text>
              </CardItem>
            </Card>
          </Content>

          <Content>
            <Card>
              <CardItem>
                <Text style={{fontSize: 20, fontWeight: 'bold', width: 285}}>Bakersfield River Run RV Park</Text>
                <Right>
                  <Text style={{ backgroundColor: "green", color: "white", fontWeight: 'bold' }}> 9.1 </Text>
                </Right>
              </CardItem>
              <CardItem>
                <Image source={require('../src/images/location.jpg')} style={{height: 30, width: 30}}/>
                  <Text note> 3715 Burr Street, Bakersfield, CA </Text>
              </CardItem>
              <CardItem>
                <View style={{flex:3}}>
                  <View style={{flex:3, flexDirection: 'row'}}>
                    <Image source={require('../src/images/h1_1.jpg')} style={{height: 100, width: 100}}/>
                    <View style={{height: 90, width: 12}}/>
                    <Image source={require('../src/images/h1_2.jpg')} style={{height: 100, width: 100}}/>
                    <View style={{height: 90, width: 12}}/>
                    <Image source={require('../src/images/h1_3.jpg')} style={{height: 100, width: 100}}/>
                  </View>
                </View>
            </CardItem>
            <CardItem>
              <View style={{flex:3}}>
                <View style={{flex:3, flexDirection: 'row'}}>
                  <Image source={require('../src/images/swim.jpg')} style={{height: 20, width: 20}}/>
                  <Text note> Swimming Pool </Text>
                  <Text>  </Text>
                  <Image source={require('../src/images/parking.jpg')} style={{height: 20, width: 20}}/>
                  <Text note> Free Parking </Text>
                  <Text>  </Text>
                  <Image source={require('../src/images/wifi.jpg')} style={{height: 20, width: 20}}/>
                  <Text note> Free Wifi </Text>
                </View>
                <View style={{height:5}}/>
                <View style={{flex:3, flexDirection: 'row'}}>
                  <Image source={require('../src/images/pet.jpg')} style={{height: 20, width: 20}}/>
                  <Text note> Pet Friendly </Text>
                  <Text>  </Text>
                  <Image source={require('../src/images/fit.jpg')} style={{height: 20, width: 20}}/>
                  <Text note> Fitness Center </Text>
                </View>
              </View>
            </CardItem>
            <CardItem>
              <Text> Price for your Stay: $94.38 </Text>
              <Right>
                <Text style={{ backgroundColor: "green", color: "white", fontWeight: 'bold' }}> BEST PRICE </Text>
              </Right>
            </CardItem>
            <CardItem>
              <View style={{flex:3}}>
                <Right>
                <Button rounded success textStyle={{color: '#ffcc00'}} onPress={() => {ToastAndroid.show('Redirecting to Booking.com', ToastAndroid.SHORT);}}>
                  <Icon name="key" />
                  <Text>Book via Booking.com</Text>
                </Button>
                </Right>
              </View>
            </CardItem>
            </Card>
          </Content>

          <Content>
            <Card>
              <CardItem>
                <Text style={{fontSize: 20, fontWeight: 'bold', width: 285}}>Vagabond Inn Bakersfield North</Text>
                <Right>
                  <Text style={{ backgroundColor: "#73e600", color: "white", fontWeight: 'bold' }}> 6.4 </Text>
                </Right>
              </CardItem>
              <CardItem>
                <Image source={require('../src/images/location.jpg')} style={{height: 30, width: 30}}/>
                  <Text note> 6100 Knudson Drive, Bakersfield, CA </Text>
              </CardItem>
              <CardItem>
                <View style={{flex:3}}>
                  <View style={{flex:3, flexDirection: 'row'}}>
                    <Image source={require('../src/images/h2_1.jpg')} style={{height: 100, width: 100}}/>
                    <View style={{height: 90, width: 12}}/>
                    <Image source={require('../src/images/h2_2.jpg')} style={{height: 100, width: 100}}/>
                    <View style={{height: 90, width: 12}}/>
                    <Image source={require('../src/images/h2_3.jpg')} style={{height: 100, width: 100}}/>
                  </View>
                </View>
            </CardItem>
            <CardItem>
              <View style={{flex:3}}>
                <View style={{flex:3, flexDirection: 'row'}}>
                  <Image source={require('../src/images/swim.jpg')} style={{height: 20, width: 20}}/>
                  <Text note> Swimming Pool </Text>
                  <Text>  </Text>
                  <Image source={require('../src/images/parking.jpg')} style={{height: 20, width: 20}}/>
                  <Text note> Free Parking </Text>
                  <Text>  </Text>
                  <Image source={require('../src/images/wifi.jpg')} style={{height: 20, width: 20}}/>
                  <Text note> Free Wifi </Text>
                </View>
                <View style={{height:5}}/>
                <View style={{flex:3, flexDirection: 'row'}}>
                  <Image source={require('../src/images/pet.jpg')} style={{height: 20, width: 20}}/>
                  <Text note> Pet Friendly </Text>
                  <Text>  </Text>
                  <Image source={require('../src/images/break.jpg')} style={{height: 20, width: 20}}/>
                  <Text note> Free Breakfast </Text>
                </View>
              </View>
            </CardItem>
            <CardItem>
              <Text> Price for your Stay: $98.51 </Text>
                <Text style={{ backgroundColor: "red", color: "white", fontWeight: 'bold' }}> HIGH DEMAND </Text>
            </CardItem>
            <CardItem>
              <View style={{flex:3}}>
                <Right>
                <Button rounded success textStyle={{color: '#ffcc00'}} onPress={() => {ToastAndroid.show('Redirecting to Booking.com', ToastAndroid.SHORT);}}>
                  <Icon name="key" />
                  <Text>Book via Booking.com</Text>
                </Button>
                </Right>
              </View>
            </CardItem>
            </Card>
          </Content>

          <Content>
            <Card>
              <CardItem>
                <Text style={{fontSize: 20, fontWeight: 'bold', width: 285}}>Motel 6 Bakersfield East</Text>
                <Right>
                  <Text style={{ backgroundColor: "green", color: "white", fontWeight: 'bold' }}> 7.0 </Text>
                </Right>
              </CardItem>
              <CardItem>
                <Image source={require('../src/images/location.jpg')} style={{height: 30, width: 30}}/>
                  <Text note> 8223 East Brundage Lane, Bakersfield, CA </Text>
              </CardItem>
              <CardItem>
                <View style={{flex:3}}>
                  <View style={{flex:3, flexDirection: 'row'}}>
                    <Image source={require('../src/images/h3_1.jpg')} style={{height: 100, width: 100}}/>
                    <View style={{height: 90, width: 12}}/>
                    <Image source={require('../src/images/h3_2.jpg')} style={{height: 100, width: 100}}/>
                    <View style={{height: 90, width: 12}}/>
                    <Image source={require('../src/images/h3_3.jpg')} style={{height: 100, width: 100}}/>
                  </View>
                </View>
            </CardItem>
            <CardItem>
              <View style={{flex:3}}>
                <View style={{flex:3, flexDirection: 'row'}}>
                  <Image source={require('../src/images/swim.jpg')} style={{height: 20, width: 20}}/>
                  <Text note> Swimming Pool </Text>
                  <Text>  </Text>
                  <Image source={require('../src/images/wifi.jpg')} style={{height: 20, width: 20}}/>
                  <Text note> Free Wifi </Text>
                </View>
                <View style={{height:5}}/>
                <View style={{flex:3, flexDirection: 'row'}}>
                  <Image source={require('../src/images/pet.jpg')} style={{height: 20, width: 20}}/>
                  <Text note> Pet Friendly </Text>
                  <Text>  </Text>
                  <Image source={require('../src/images/dis.jpg')} style={{height: 20, width: 20}}/>
                  <Text note> Disabled Friendly </Text>
                </View>
              </View>
            </CardItem>
            <CardItem>
              <Text> Price for your Stay: $99.91 </Text>

            </CardItem>
            <CardItem>
              <View style={{flex:3}}>
                <Right>
                <Button rounded success textStyle={{color: '#ffcc00'}} onPress={() => {ToastAndroid.show('Redirecting to Booking.com', ToastAndroid.SHORT);}}>
                  <Icon name="key" />
                  <Text>Book via Booking.com</Text>
                </Button>
                </Right>
              </View>
            </CardItem>
            </Card>
          </Content>


          <Content>
            <Card>
              <CardItem>
                <Text style={{fontSize: 20, fontWeight: 'bold', width: 285}}>Motel 6 Bakersfield Convention Center</Text>
                <Right>
                  <Text style={{ backgroundColor: "#73e600", color: "white", fontWeight: 'bold' }}> 7.3 </Text>
                </Right>
              </CardItem>
              <CardItem>
                <Image source={require('../src/images/location.jpg')} style={{height: 30, width: 30}}/>
                  <Text note> 1350 Easton Drive, Bakersfield, CA </Text>
              </CardItem>
              <CardItem>
                <View style={{flex:3}}>
                  <View style={{flex:3, flexDirection: 'row'}}>
                    <Image source={require('../src/images/h4_1.jpg')} style={{height: 100, width: 100}}/>
                    <View style={{height: 90, width: 12}}/>
                    <Image source={require('../src/images/h4_2.jpg')} style={{height: 100, width: 100}}/>
                    <View style={{height: 90, width: 12}}/>
                    <Image source={require('../src/images/h4_3.jpg')} style={{height: 100, width: 100}}/>
                  </View>
                </View>
            </CardItem>
            <CardItem>
              <View style={{flex:3}}>
                <View style={{flex:3, flexDirection: 'row'}}>
                  <Image source={require('../src/images/swim.jpg')} style={{height: 20, width: 20}}/>
                  <Text note> Swimming Pool </Text>
                  <Text>  </Text>
                  <Image source={require('../src/images/parking.jpg')} style={{height: 20, width: 20}}/>
                  <Text note> Free Parking </Text>
                  <Text>  </Text>
                  <Image source={require('../src/images/wifi.jpg')} style={{height: 20, width: 20}}/>
                  <Text note> Free Wifi </Text>
                </View>
                <View style={{height:5}}/>
                <View style={{flex:3, flexDirection: 'row'}}>
                  <Image source={require('../src/images/pet.jpg')} style={{height: 20, width: 20}}/>
                  <Text note> Pet Friendly </Text>
                  <Text>  </Text>
                  <Image source={require('../src/images/dis.jpg')} style={{height: 20, width: 20}}/>
                  <Text note> Disabled Friendly </Text>
                </View>
              </View>
            </CardItem>
            <CardItem>
              <Text> Price for your Stay: $100 </Text>
            </CardItem>
            <CardItem>
              <View style={{flex:3}}>
                <Right>
                <Button rounded success textStyle={{color: '#ffcc00'}} onPress={() => {ToastAndroid.show('Redirecting to Booking.com', ToastAndroid.SHORT);}}>
                  <Icon name="key" />
                  <Text>Book via Booking.com</Text>
                </Button>
                </Right>
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

export default BookAHotelRoomScreen
