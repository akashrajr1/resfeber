import React, { Component } from 'react';
import { Dimensions, StyleSheet, View,Text } from 'react-native';
import MapView from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 37.771707;
const LONGITUDE = -122.4053769;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const GOOGLE_MAPS_APIKEY = 'AIzaSyBJ5uRqrPjwpADUuSbDABgq1n7BzMIAFek';

class NavigationComponent extends Component {

  constructor(props) {
    super(props);

    // Los Angeles to Las Vegas
    this.state = {
      coordinates: [
        {
          latitude: 40.7,
          longitude: -73.99,
        },
        {
          latitude: 36.1699,
          longitude: -115.1398,
        },
      ],
    };

    this.mapView = null;
  }

  onMapPress = (e) => {
    this.setState({
      coordinates: [
        ...this.state.coordinates,
        e.nativeEvent.coordinate,
      ],
    });
  }

  render() {
    return (
      <View style={styles.containerStyle}>
        <MapView style={styles.mapStyle}
          initialRegion={{
            latitude: LATITUDE,
            longitude: LONGITUDE,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }}
          style={StyleSheet.absoluteFill}
          ref={c => this.mapView = c}
          onPress={this.onMapPress}
        >
          {this.state.coordinates.map((coordinate, index) =>
            <MapView.Marker key={`coordinate_${index}`} coordinate={coordinate} />
          )}
          {(this.state.coordinates.length >= 2) && (
            <MapViewDirections
              origin={this.state.coordinates[0]}
              waypoints={ (this.state.coordinates.length > 2) ? this.state.coordinates.slice(1, -1): null}
              destination={this.state.coordinates[this.state.coordinates.length-1]}
              apikey={GOOGLE_MAPS_APIKEY}
              strokeWidth={3}
              strokeColor="hotpink"
              onStart={(params) => {
                console.log(`Started routing between "${params.origin}" and "${params.destination}"`);
              }}
              onReady={(result) => {
                this.mapView.fitToCoordinates(result.coordinates, {
                  edgePadding: {
                    right: (width / 20),
                    bottom: (height / 20),
                    left: (width / 20),
                    top: (height / 20),
                  }
                });
              }}
              onError={(errorMessage) => {
                // console.log('GOT AN ERROR');
              }}
            />
          )}
        </MapView>
      </View>
    );
  }
}

const styles = {
	containerStyle: {
		flex:4,
		justifyContent: 'center',
    alignItems: 'stretch',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
		alignItems: 'center',
		backgroundColor: 'lightblue'
	},
//Dimensions.get('window').height
	mapStyle: {
		left: 0,
		right: 0,
		top: 0,
		bottom: 0
		//position: 'absolu'
	}

}

export default NavigationComponent;
