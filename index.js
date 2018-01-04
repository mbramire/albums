// import a lib to help create component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

const App = () => {
  return (
    <View>
      <Header headerText='Albums' />
      <AlbumList />
    </View>
  );
};

// Render componoent to device
// first argument must match application name
AppRegistry.registerComponent('albums', () => App);
