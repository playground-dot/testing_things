import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Gallery from './src/Gallery';
import FullScreenGallery from './src/FullScreenGallery';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Gallery" component={Gallery} />
        <Stack.Screen name="FullScreenGallery" component={FullScreenGallery} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
