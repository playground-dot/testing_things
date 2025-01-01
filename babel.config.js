module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    // Reanimated plugin has to be listed last (according to https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/installation/#babel-plugin)
    "react-native-reanimated/plugin",
  ]
};
