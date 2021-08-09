// @ts-nocheck
// others
import { TPhotoData } from '../components/types';

const adjustImageSizes = (photoData: TPhotoData): void => {
  countSizes(photoData);
  setZoom(photoData);
};

const countSizes = (photoData: TPhotoData) => {
  const { cropArea: maxSize, image } = photoData;
  const { height, width } = image;

  switch (true) {
    case height === width:
      assignMaxSize(image, maxSize);
      break;
    default:
      scaleImage(image, maxSize);
      break;
  }
};

const assignMaxSize = (image: Image, maxSize: number) => {
  image.height = maxSize;
  image.width = maxSize;
};

const scaleImage = (image: Image, maxSize: number) => {
  const { height, width } = image;

  if (height > width) {
    image.height *= maxSize / width;
    image.width = maxSize;
  } else {
    image.height = maxSize;
    image.width *= maxSize / height;
  }
};

const setZoom = (photoData: TPhotoData) => {
  const { image, zoom } = photoData;

  image.height *= zoom;
  image.width *= zoom;
};

export default adjustImageSizes;
