import React from 'react';
import { View, Image, StyleSheet, ScrollView } from 'react-native';

// Manually import the images
import astronautRidingHorse from './assets/astronaut_riding_horse.webp';
import babyMonkey from './assets/baby_monkey.webp';
import candyPalace from './assets/candy_palace.webp';
import eagle from './assets/eagle.jpg';
import fightingKomodoDragons from './assets/fighting_komodo_dragons.jpg';
import friendlyCone from './assets/friendly_cone.jpg';
import iconsInStarrySky from './assets/icons_in_starry_sky.webp';
import lemon from './assets/lemon.jpg';
import lilLizard from './assets/lil_lizard.jpg';
import lookingUpInTree from './assets/looking_up_in_tree.jpg';
import parrot from './assets/parrot.webp';
import peacockFeather from './assets/peacock_feather.jpg';
import pug from './assets/pug.jpg';
import sadPolarBear from './assets/sad_polar_bear.jpg';
import sheepdog from './assets/sheepdog.webp';
import sunglassesCat from './assets/sunglasses_cat.jpg';
import sunsetTree from './assets/sunset_tree.jpg';
import taikiWaititi from './assets/taiki_waititi.jpeg';
import waterfall from './assets/waterfall.jpeg';

const imageMapping = {
  "astronaut_riding_horse.webp": astronautRidingHorse,
  "baby_monkey.webp": babyMonkey,
  "candy_palace.webp": candyPalace,
  "eagle.jpg": eagle,
  "fighting_komodo_dragons.jpg": fightingKomodoDragons,
  "friendly_cone.jpg": friendlyCone,
  "icons_in_starry_sky.webp": iconsInStarrySky,
  "lemon.jpg": lemon,
  "lil_lizard.jpg": lilLizard,
  "looking_up_in_tree.jpg": lookingUpInTree,
  "parrot.webp": parrot,
  "peacock_feather.jpg": peacockFeather,
  "pug.jpg": pug,
  "sad_polar_bear.jpg": sadPolarBear,
  "sheepdog.webp": sheepdog,
  "sunglasses_cat.jpg": sunglassesCat,
  "sunset_tree.jpg": sunsetTree,
  "taiki_waititi.jpeg": taikiWaititi,
  "waterfall.jpeg": waterfall,
};

const Gallery = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        {Object.keys(imageMapping).map((fileName, index) => (
          <Image key={index} source={imageMapping[fileName]} style={styles.image} />
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
    paddingTop: 20,
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
