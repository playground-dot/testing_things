import React from 'react';
import { View, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { ImageDimensions, RootStackParamList } from './types';
import { imageMap } from './data/images';
import { dimensions } from './data/imageDimensions';
import { StackNavigationProp } from '@react-navigation/stack';

type GalleryScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Gallery'>;

interface GalleryProps {
  navigation: GalleryScreenNavigationProp;
}

const Gallery: React.FC<GalleryProps> = ({ navigation }) => {

  const getImageDimensions = (): ImageDimensions[] => {
        // in the real implementation Image.getSize will be used to get the dimensions from the cached images
        return imageMap.map((_image: any, index: number) => {
          return {
            height: dimensions[index].height,
            imageIndex: index,
            width: dimensions[index].width
          }
        });
  }

  const onPress = ({ initialImageIndex }:{ initialImageIndex: number }) => {
    navigation.navigate(
      'FullScreenGallery',
      {
        initialImageIndex,
        images: imageMap,
        imageDimensions: getImageDimensions()
      })
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.imageContainer}>
        {imageMap.map(({ image }, index) => (
          <TouchableOpacity key={index} onPress={() => onPress({ initialImageIndex: index })}>
            <Image key={index} source={image} style={styles.image} />
          </TouchableOpacity>

        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 100,
  },
  imageContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 100,
    margin: 10,
  },
});

export default Gallery;
