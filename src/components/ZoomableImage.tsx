import React from 'react';
import { Dimensions } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, runOnJS } from 'react-native-reanimated';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';

const screenWidth =  Dimensions.get('window').width;

const ZoomableImage = ({ image, index, imageHeight, setZoomedScale, setZoomedIndex }: any) => {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const doubleTap = Gesture.Tap()
    .maxDuration(250)
    .numberOfTaps(2)
    .onEnd(() => {
      scale.value = withTiming(scale.value === 1 ? 2 : 1, { duration: 500 });
      runOnJS(setZoomedScale)(scale.value === 1 ? 2 : 1);
      runOnJS(setZoomedIndex)(index);
    });

  return (
        <GestureDetector gesture={doubleTap} >
          <Animated.Image
            source={image}
            style={[
              {
                width: screenWidth,
                height: imageHeight,
                resizeMode: 'contain',
              },
              animatedStyle,
            ]}
          />
        </GestureDetector>
  );
};


export default ZoomableImage;