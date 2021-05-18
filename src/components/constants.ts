// others
import { TPhotoData } from './types';

export const linesStyles = [
  {
    height: '1px',
    width: '100%',
    top: '33.33333%',
  },
  {
    height: '1px',
    width: '100%',
    top: '66.6666%',
  },
  {
    height: '100%',
    width: '1px',
    left: '33.33333%',
  },
  {
    height: '100%',
    width: '1px',
    left: '66.66666%',
  },
];

export const photoData: TPhotoData = {
  angle: 0,
  canvas: document.createElement('canvas'),
  context2D: null,
  cropArea: 0,
  filters: [],
  image: null,
  imagePosition: {
    left: 0,
    top: 0,
  },
  imageRef: null,
  mouseCoordinates: {
    clientX: 0,
    clientY: 0,
  },
  reader: new FileReader(),
  flipVertically: 1,
  flipHorizontally: 1,
  selectedFile: [],
  zoom: 1,
};

export enum FlipMode {
  flipVertically = 'flipVertically',
  flipHorizontally = 'flipHorizontally',
}

export enum Filter {
  blur = 'blur',
  brightness = 'brightness',
  contrast = 'contrast',
  grayscale = 'grayscale',
  hueRotate = 'hue-rotate',
  invert = 'invert',
  opacity = 'opacity',
  saturate = 'saturate',
  sepia = 'sepia',
}
