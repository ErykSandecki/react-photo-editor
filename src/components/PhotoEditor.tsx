// @ts-nocheck
import {
  ComponentType,
  FunctionComponent,
  useRef,
  useEffect,
  useState,
} from 'react';

// components
import useHook from './hook';
import withPhotoEditorStyles from './withPhotoEditorStyles';

// others
import { linesStyles, photoData } from './constants';

// services
import { changePositionImage } from '../services/common';

// styles
import { ClassNames } from './classNames';

export type TPhotoEditorProps = {
  componentWrapperStyles?: ComponentType<any>;
  cropArea?: number;
  panel?: ComponentType<any>;
  src?: string;
};

const PhotoEditor: FunctionComponent<TPhotoEditorProps> = ({
  cropArea = 100,
  panel,
  src,
  ...restProps
}) => {
  const [isPressing, setPressing] = useState(false);
  const imageRef = useRef(null);
  const { ...restData } = useHook(photoData);
  const Panel = panel;

  const updateMouseCoordinates = (event: Event) => {
    photoData.mouseCoordinates.clientX = event.clientX;
    photoData.mouseCoordinates.clientY = event.clientY;
  };

  const onMouseDownHandler = (event) => {
    if (photoData.image) {
      updateMouseCoordinates(event);
      setPressing(true);
    }
  };

  const onMouseMoveHandler = (event) => {
    if (isPressing) {
      const { mouseCoordinates } = photoData;
      const { clientX: prevClientX, clientY: prevClientY } = mouseCoordinates;
      const { left, top } = photoData.imagePosition;
      const offsetLeft = left + (event.clientX - prevClientX);
      const offsetTop = top + (event.clientY - prevClientY);

      updateMouseCoordinates(event);
      changePositionImage(photoData, offsetLeft, offsetTop);
    }
  };

  useEffect(() => {
    photoData.cropArea = cropArea;
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    photoData.imageRef = imageRef;
  }, [imageRef]);

  return (
    <>
      <div className={ClassNames.imageWrapper}>
        <div
          onMouseDown={onMouseDownHandler}
          onMouseLeave={() => setPressing(false)}
          onMouseMove={onMouseMoveHandler}
          onMouseUp={() => setPressing(false)}
          className={ClassNames.imageContainer}
        >
          <img
            alt="avatar"
            className={ClassNames.image}
            ref={imageRef}
            draggable={false}
            {...(src ? { src: src } : null)}
          />
          <div className={ClassNames.pictureCropper}>
            {linesStyles.map((styles, index) => (
              <div className={ClassNames.line} key={index} style={styles} />
            ))}
          </div>
        </div>
      </div>
      {panel && <Panel {...restData} {...restProps} />}
    </>
  );
};

export default withPhotoEditorStyles<TPhotoEditorProps>()(PhotoEditor);
