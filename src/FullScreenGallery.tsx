import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './types';
type FullScreenGalleryNavigationProp = StackNavigationProp<RootStackParamList, 'FullScreenGallery'>;

interface FullScreenGalleryProps {
  navigation: FullScreenGalleryNavigationProp;
  route: any
}

import React, { useRef, useState, useEffect } from 'react';
import { FlatList, Dimensions, View, Text, StyleSheet, Image } from 'react-native';
import { ImageActionsFooter } from './components/ImageActionsFooter';
import ZoomableImage from './components/ZoomableImage';

const FOOTER_HEIGHT = 80;

const FullScreenGallery: React.FC<FullScreenGalleryProps> = ({ route: { params: { initialImageIndex, images, imageDimensions } } }) => {
  const flatListRef = useRef<FlatList<string>>(null);
  const [isLayoutReady, setIsLayoutReady] = useState(false);
  const screenWidth = Dimensions.get('window').width;
  const [currentMediaIndex, setCurrentMediaIndex] = useState(initialImageIndex ?? 0);
  // Keep track of which image is zoomed
  const [zoomedScale, setZoomedScale] = useState(1);
  const [zoomedIndex, setZoomedIndex] = useState(undefined);

  const getItemLayout = (_: any, index: number) => {
    return {
      length: screenWidth * (zoomedIndex === index ? zoomedIndex: 1),
      offset: screenWidth * index * zoomedScale,
      index,
    }
  }

  // Handle when FlatList layout is ready
  const handleLayout = () => {
    console.log("handling layout")
    setIsLayoutReady(true);
  };

  useEffect(() => {
    // Only scroll once layout is ready and images are available
    if (isLayoutReady && flatListRef.current && images.length > 0) {
      flatListRef.current.scrollToIndex({ index: initialImageIndex, animated: false });
    }
  }, [isLayoutReady, initialImageIndex, images]);

  const renderItem = ({ item: { image }, index }: any) => {
    const dimensions = imageDimensions[index]
    if (!dimensions) {
      console.log("no dimensions")
      return (
        <View style={{ width: screenWidth, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Loading...</Text>
      </View>
      )
    }
    const { width, height } = dimensions;
    const aspectRatio = width / height;
    const availableHeight = Dimensions.get('window').height - FOOTER_HEIGHT;
    const imageHeight = screenWidth / aspectRatio; // Calculate the height based on the aspect ratio

    return (
      <View style={{
        width: screenWidth,
        height: availableHeight,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        {/* <ZoomableImage image={image} index={index} imageHeight={imageHeight} setZoomedScale={setZoomedScale} setZoomedIndex={setZoomedIndex}/> */}
        <Image source={image} style={{ width: screenWidth, height: imageHeight, resizeMode: "contain" }} />
      </View>




    )
  }

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={images}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        keyExtractor={(_, index) => String(index)}
        showsHorizontalScrollIndicator={false}
        getItemLayout={getItemLayout}
        // Important - Ensures the layout is complete before trying to scroll to the given index
        onLayout={handleLayout}
        onMomentumScrollEnd={(event) => {
          const contentOffsetX = event.nativeEvent.contentOffset.x;
          const newIndex = Math.floor(contentOffsetX / screenWidth);
          console.log('Current Index:', newIndex);
          if (newIndex !== currentMediaIndex) {
            setCurrentMediaIndex(newIndex);
          }
        }}
        onScrollToIndexFailed={(info) => {
          setTimeout(() => {
            flatListRef.current?.scrollToIndex({
              index: info.index,
              animated: false,
            });
          }, 100);
        }}
      />
      <View style={styles.footer}>
      <ImageActionsFooter favourited={images[currentMediaIndex].favourited}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  footer: {
    height: FOOTER_HEIGHT,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 16,
    zIndex: 1,
  },
});

export default FullScreenGallery;
