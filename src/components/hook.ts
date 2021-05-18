// @ts-nocheck
import { useEffect } from 'react';

// others
import { FlipMode } from './constants';
import { TFilter, TPhotoData } from './types';

// services
import cropImage from '../services/cropImage';
import exportImage from '../services/exportImage';
import loadImage from '../services/loadImage';
import {
  updateImage,
  flip,
  filter,
  rotate,
  zoom,
} from '../services/imageModify';

const useHook = (photoData: TPhotoData) => {
  useEffect(() => {
    const { canvas } = photoData;
    photoData.context2D = canvas.getContext('2d');
    // eslint-disable-next-line
  }, []);

  const resetData = () => {
    photoData.angle = 0;
    photoData.filters = [];
    photoData.flipVertically = 1;
    photoData.flipHorizontally = 1;
    photoData.zoom = 1;
  };

  const exportImageHandler = (fileName: string) => {
    const { left, top } = photoData.imagePosition;
    cropImage(photoData, left * -1, top * -1);
    exportImage(photoData, fileName);
    updateImage(photoData);
  };

  return {
    exportImage: (fileName: string) => exportImageHandler(fileName),
    filter: (objectFilter: TFilter) => filter(photoData, objectFilter),
    flipHorizontally: () => flip(photoData, FlipMode.flipHorizontally),
    flipVertically: () => flip(photoData, FlipMode.flipVertically),
    grayscale: () => {},
    loadImage: (event: Event) => {
      resetData();
      loadImage(event, photoData);
    },
    makeBright: () => {},
    makeDark: () => {},
    rotate: (angle) => {
      rotate(photoData, angle);
    },
    zoom: (value: number) => zoom(photoData, value),
  };
};

export default useHook;
