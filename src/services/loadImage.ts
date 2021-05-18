// @ts-nocheck
// others
import { TPhotoData } from '../components/types';

// services
import adjustImageSizes from './adjustImageSizes';
import {
  centerPictureCropper,
  passSizesToCanvas,
  previewImage,
} from './common';

const drawImage = (photoData: TPhotoData) => {
  const { image } = photoData;
  const { height, width } = image;

  photoData.context2D.drawImage(image, 0, 0, width, height);
};

const loadImage = (event: Event, photoData: TPhotoData) => {
  const { reader } = photoData;
  photoData.selectedFile = event.target.files;

  reader.onload = (e) => {
    photoData.image = new Image();

    photoData.image.onload = () => {
      adjustImageSizes(photoData);
      passSizesToCanvas(photoData);
      drawImage(photoData);
      centerPictureCropper(photoData);
      previewImage(photoData, photoData.canvas);
    };

    photoData.image.src = e.target.result;
  };

  reader.readAsDataURL(photoData.selectedFile[0]);
};

export default loadImage;
