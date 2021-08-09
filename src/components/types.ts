import { MutableRefObject } from 'react';

// others
import { Filter } from './constants';

export type TMouseCoordinates = {
  clientX: number;
  clientY: number;
};

export type TFilter = {
  name: Filter;
  value: string;
};

export type TImagePosition = {
  left: number;
  top: number;
};

export type TPhotoData = {
  angle: number;
  canvas: HTMLCanvasElement;
  context2D: CanvasRenderingContext2D | null;
  cropArea: number;
  filters: Array<TFilter>;
  image: CanvasImageSource | null;
  imagePosition: TImagePosition;
  imageRef: MutableRefObject<HTMLInputElement> | null;
  mouseCoordinates: TMouseCoordinates;
  reader: FileReader;
  flipVertically: 1 | -1;
  flipHorizontally: 1 | -1;
  selectedFile: Array<Blob>;
  zoom: number;
};

export type TPanelPropsRender = {
  exportImage: (fileName: string) => void;
  flipHorizontally: () => void;
  flipVertically: () => void;
  filter: (objectFilter: TFilter) => void;
  loadImage: (event: Event) => void;
  rotate: (angle: number) => void;
  zoom: (scale: number) => void;
};
