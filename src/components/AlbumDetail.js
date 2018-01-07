import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

// Funtional component album is a destructured argument
const AlbumDetail = ({ album }) => {
  // destructuring album keys, and style keys
  const { thumbnail_image, title, artist, image, url } = album;
  const { thumbnailStyle,
          headerContentStyle,
          headerTextStyle,
          albumArtStyle,
          thumbnailContainerStyle } = styles;

  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image
            style={thumbnailStyle}
            source={{ uri: thumbnail_image }}
          />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{ title }</Text>
          <Text>{ artist }</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image
          style={albumArtStyle}
          source={{ uri: image }}
        />
      </CardSection>

      <CardSection>
        <Button onPress={() => Linking.openURL(url)}>
          Buy Now!
        </Button>
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  albumArtStyle: {
    height: 300,
    flex: 1,
    width: null // trick that gets the image to stretch to fit screen
  }
}
export default AlbumDetail;
