// @ts-nocheck
import { ComponentType } from 'react';

// others
import { TPhotoEditorProps } from './PhotoEditor';

// styles
import { PhotoEditor as PhotoEditorStyled } from './PhotoEditorStyled';

const withPhotoEditorStyles =
  <T extends object>() =>
  (Component: ComponentType<T>) =>
  (props: TPhotoEditorProps) => {
    const { componentWrapperStyles } = props;

    if (componentWrapperStyles) {
      const ComponentWrapperStyles = componentWrapperStyles;
      return (
        <ComponentWrapperStyles {...props}>
          <Component {...props} />
        </ComponentWrapperStyles>
      );
    }

    return (
      <PhotoEditorStyled {...props}>
        <Component {...props} />
      </PhotoEditorStyled>
    );
  };

export default withPhotoEditorStyles;
