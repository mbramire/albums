import React, { Component } from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';

// Class based component
class AlbumList extends Component {
  constructor() {
    super();
    this.state = { albums: [] };
  }

  // lifecycle method
  componentWillMount() {
    // debugger; like pry
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data }));
  }

  render() {
    return (
      <View>
        <Text>album list</Text>
      </View>
    );
  }
}

export default AlbumList;
