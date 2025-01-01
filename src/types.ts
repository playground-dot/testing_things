import { ImageMap } from "./data/images";

export type ImageDimensions = {
    height: number;
    imageIndex: number;
    width: number;
};

export type RootStackParamList = {
    Gallery: undefined;
    FullScreenGallery: { initialImageIndex: number, images: ImageMap, imageDimensions: ImageDimensions[] };
};
