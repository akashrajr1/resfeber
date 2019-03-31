import React, {Component} from 'react';
import {View, Text} from 'react-native';
import axios from 'axios';

class ActivitiesCardList extends Component{
  state = { albums : [] };

  componentWillMount(){
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => {
                this.setState({albums: response.data});
                console.log(response);
            })
            .then(error => console.log(error));
  }
  renderAlbums(){
    return this.state.albums.map(album => <Text key ={album.title}> {album.title} </Text>);
  }
  render() {
    console.log(this.state);
    return(
      <View>
        {this.renderAlbums()}
      </View>
    );
  }
};

export default ActivitiesCardList;
