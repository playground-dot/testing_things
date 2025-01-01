import astronautRidingHorse from '../assets/astronaut_riding_horse.webp';
import babyMonkey from '../assets/baby_monkey.webp';
import candyPalace from '../assets/candy_palace.webp';
import eagle from '../assets/eagle.jpg';
import fightingKomodoDragons from '../assets/fighting_komodo_dragons.jpg';
import friendlyCone from '../assets/friendly_cone.jpg';
import iconsInStarrySky from '../assets/icons_in_starry_sky.webp';
import lemon from '../assets/lemon.jpg';
import lilLizard from '../assets/lil_lizard.jpg';
import lookingUpInTree from '../assets/looking_up_in_tree.jpg';
import parrot from '../assets/parrot.webp';
import peacockFeather from '../assets/peacock_feather.jpg';
import pug from '../assets/pug.jpg';
import sadPolarBear from '../assets/sad_polar_bear.jpg';
import sheepdog from '../assets/sheepdog.webp';
import sunglassesCat from '../assets/sunglasses_cat.jpg';
import sunsetTree from '../assets/sunset_tree.jpg';
import taikiWaititi from '../assets/taiki_waititi.jpeg';
import waterfall from '../assets/waterfall.jpeg';

export type ImageFileName =
  | "astronaut_riding_horse.webp"
  | "baby_monkey.webp"
  | "candy_palace.webp"
  | "eagle.jpg"
  | "fighting_komodo_dragons.jpg"
  | "friendly_cone.jpg"
  | "icons_in_starry_sky.webp"
  | "lemon.jpg"
  | "lil_lizard.jpg"
  | 'looking_up_in_tree.jpg'
  | "parrot.webp"
  | "peacock_feather.jpg"
  | "pug.jpg"
  | "sad_polar_bear.jpg"
  | "sheepdog.webp"
  | "sunglasses_cat.jpg"
  | "sunset_tree.jpg"
  | "taiki_waititi.jpeg"
  | "waterfall.jpeg";

export type ImageMap = { name: ImageFileName; image: any; favourited: boolean; }[]

export const imageMap: ImageMap = [
  {
    name:  "astronaut_riding_horse.webp",
    image: astronautRidingHorse,
    favourited: true,
  },
  {
    name: "baby_monkey.webp",
    image: babyMonkey,
    favourited: false,
  },
  {
    name: "candy_palace.webp",
    image: candyPalace,
    favourited: true,
  },
  {
    name: "eagle.jpg",
    image: eagle,
    favourited: false,
  },
  {
    name: "fighting_komodo_dragons.jpg",
    image: fightingKomodoDragons,
    favourited: true,
  },
  {
    name: "friendly_cone.jpg",
    image: friendlyCone,
    favourited: true,
  },
  {
    name: "icons_in_starry_sky.webp",
    image: iconsInStarrySky,
    favourited: true,
  },
  {
    name: "lemon.jpg",
    image: lemon,
    favourited: false,
  },
  {
    name: "lil_lizard.jpg",
    image: lilLizard,
    favourited: false,
  },
  {
    name: "looking_up_in_tree.jpg",
    image: lookingUpInTree,
    favourited: false,
  },
  {
    name: "parrot.webp",
    image: parrot,
    favourited: true,
  },
  {
    name: "peacock_feather.jpg",
    image: peacockFeather,
    favourited: false,
  },
  {
    name: "pug.jpg",
    image: pug,
    favourited: false,
  },
  {
    name: "sad_polar_bear.jpg",
    image: sadPolarBear,
    favourited: false,
  },
  {
    name: "sheepdog.webp",
    image: sheepdog,
    favourited: false,
  },
  {
    name: "sunglasses_cat.jpg",
    image: sunglassesCat,
    favourited: false,
  },
  {
    name: "sunset_tree.jpg",
    image: sunsetTree,
    favourited: true,
  },
  {
    name: "taiki_waititi.jpeg",
    image: taikiWaititi,
    favourited: false,
  },
  {
    name: "waterfall.jpeg",
    image: waterfall,
    favourited: false,
  },
]