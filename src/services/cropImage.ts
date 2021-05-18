// @ts-nocheck
// others
import { TPhotoData } from '../components/types';

// services
import adjustImageSizes from './adjustImageSizes';
import { passSizesToCanvas } from './common';

const cropImage = (
  photoData: TPhotoData,
  positionX: number,
  positionY: number
): void => {
  const { context2D, cropArea } = photoData;
  const editedCroppedImageData = context2D.getImageData(
    positionX,
    positionY,
    cropArea,
    cropArea
  );

  adjustImageSizes(photoData);
  passSizesToCanvas(photoData);
  context2D.putImageData(editedCroppedImageData, 0, 0);
};

export default cropImage;
