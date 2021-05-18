// @ts-nocheck
// others
import { TPhotoData } from '../components/types';

export const areRevertedSizes = (angle: number): boolean =>
  angle === 90 || angle === 270;

export const clearRect = ({
  canvas: operationEditedCanvas,
  context2D: operationEditedContext,
}: TPhotoData): void => {
  operationEditedContext.clearRect(
    0,
    0,
    operationEditedCanvas.width,
    operationEditedCanvas.height
  );
};

export const passSizesToCanvas = ({
  angle,
  canvas,
  image: { height, width },
}: TPhotoData): void => {
  const _areRevertedSizes = areRevertedSizes(angle);
  canvas.width = _areRevertedSizes ? height : width;
  canvas.height = _areRevertedSizes ? width : height;
};

export const previewImage = (
  { canvas: editedCanvas, imageRef: { current } }: TPhotoData,
  canvas: HTMLCanvasElement | undefined = undefined
): void => {
  if (canvas) {
    current.src = canvas.toDataURL();
  } else {
    current.src = editedCanvas.toDataURL();
  }
};

export const getCheckedPosition = (
  cropArea: number,
  currentValue: number,
  maxSize: number,
  nextValue: number
): boolean =>
  nextValue <= 0 && nextValue + -cropArea > maxSize ? nextValue : currentValue;

export const changePositionImage = (
  photoData: TPhotoData,
  left: number = 0,
  top: number = 0
): void => {
  const {
    angle,
    cropArea,
    image: { height, width },
    imagePosition,
    imageRef,
  } = photoData;
  const roundedLeft = left | 0;
  const roundedTop = top | 0;
  const maxSizeWidth = areRevertedSizes(angle) ? -height : -width;
  const maxSizeHeight = areRevertedSizes(angle) ? -width : -height;

  photoData.imagePosition.left = getCheckedPosition(
    cropArea,
    imagePosition.left,
    maxSizeWidth,
    roundedLeft
  );
  photoData.imagePosition.top = getCheckedPosition(
    cropArea,
    imagePosition.top,
    maxSizeHeight,
    roundedTop
  );

  imageRef.current.style.transform = `translate(${imagePosition.left}px, ${imagePosition.top}px)`;
};

export const centerPictureCropper = (photoData: TPhotoData) => {
  const { angle, cropArea, image } = photoData;
  const { height, width } = image;
  const x = width / 2 - cropArea / 2;
  const y = height / 2 - cropArea / 2;

  photoData.imagePosition.left = 0;
  photoData.imagePosition.top = 0;
  photoData.mouseCoordinates.clientX = 0;
  photoData.mouseCoordinates.clientY = 0;

  if (areRevertedSizes(angle)) {
    changePositionImage(photoData, -y, -x);
  } else {
    changePositionImage(photoData, -x, -y);
  }
};
