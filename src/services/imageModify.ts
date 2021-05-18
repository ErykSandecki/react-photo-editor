// @ts-nocheck
// orthers
import { FlipMode } from '../components/constants';
import { TFilter, TPhotoData } from '../components/types';

// services
import adjustImageSizes from './adjustImageSizes';
import {
  centerPictureCropper,
  passSizesToCanvas,
  previewImage,
} from './common';

const modifyPositionImage = (photoData: TPhotoData) => {
  adjustImageSizes(photoData);
  passSizesToCanvas(photoData);
  makeTranslate(photoData);
  makeRotate(photoData);
  makeScale(photoData);
  applyFilters(photoData);
  drawImage(photoData);
};

const makeTranslate = ({ context2D, canvas }: TPhotoData) => {
  context2D.translate(canvas.width / 2, canvas.height / 2);
};

const makeRotate = ({ angle, context2D }: TPhotoData): void =>
  context2D.rotate((angle * Math.PI) / 180);

const makeScale = ({
  context2D,
  flipVertically,
  flipHorizontally,
}: TPhotoData) => {
  context2D.scale(flipVertically, flipHorizontally);
};

const applyFilters = ({ context2D, filters }: TPhotoData) => {
  const appliedFilters = filters
    .map(({ name, value }) => `${name}(${value})`)
    .join(' ');

  context2D.filter = appliedFilters;
};

const drawImage = (photoData: TPhotoData) => {
  const { context2D, image } = photoData;
  const { height, width } = image;

  context2D.drawImage(image, -width / 2, -height / 2, width, height);
};

export const updateImage = (photoData: TPhotoData) => {
  modifyPositionImage(photoData);
  previewImage(photoData);
};

export const flip = (photoData: TPhotoData, flipMode: FlipMode) => {
  photoData[flipMode] = photoData[flipMode] === 1 ? -1 : 1;
  
  updateImage(photoData);
};

export const filter = (photoData: TPhotoData, filter: TFilter) => {
  const { filters } = photoData;
  const { name } = filter;
  const filteredFilters = filters.filter(({ name: _name }) => _name !== name);

  photoData.filters = [...filteredFilters, filter];
  updateImage(photoData);
};

export const rotate = (photoData: TPhotoData, angle: number) => {
  photoData.angle = angle;

  updateImage(photoData);
  centerPictureCropper(photoData);
};

export const zoom = (photoData: TPhotoData, value: number) => {
  photoData.zoom = value;

  updateImage(photoData);
  centerPictureCropper(photoData);
};
