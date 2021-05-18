// @ts-nocheck
import styled from 'styled-components';

// styles
import { ClassNames } from './classNames';

export const PhotoEditor = styled.section`
  text-align: center;

  .${ClassNames.imageWrapper} {
    display: flex;
    justify-content: center;
    overflow: hidden;
  }

  .${ClassNames.imageContainer} {
    cursor: move;
    min-height: ${({ cropArea }) => cropArea}px;
    min-width: ${({ cropArea }) => cropArea}px;
    position: relative;
    user-select: none;

    &:hover .${ClassNames.line} {
      opacity: 1;
    }
  }

  .${ClassNames.image} {
    display: block;
    left: 0;
    position: absolute;
    top: 0;
  }

  .${ClassNames.pictureCropper} {
    border: 2px solid white;
    border-radius: 50%;
    box-shadow: 0 0 0 100vw rgba(0, 0, 0, 0.4);
    box-sizing: border-box;
    height: ${({ cropArea }) => cropArea}px;
    overflow: hidden;
    pointer-events: none;
    position: relative;
    width: ${({ cropArea }) => cropArea}px;
  }

  .${ClassNames.line} {
    background-color: rgba(255, 255, 255, 0.5);
    left: 0;
    opacity: 0;
    position: absolute;
    top: 0;
    transition: 0.25s;
  }
`;
