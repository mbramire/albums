// import a lib to help create component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

const App = () => {
  // style={{ flex: 1 }} might not be necessary with the latest version of react,
  // it is intended to tell the view to fill the entire screen.
  return (
    <View style={{ flex: 1 }}>
      <Header headerText='Albums' />
      <AlbumList />
    </View>
  );
};

// Render componoent to device
// first argument must match application name
AppRegistry.registerComponent('albums', () => App);
