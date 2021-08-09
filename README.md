# React Photo Editor

Library for photo editing and exporting. Includes basic functions to manage photo position with different filters.

## Installation

You need to install styled-components & react.

```json
{
  "scripts": {
    "install": "npm install & npm link ./react-photo-editor"
  }
}
```

## Usage

```typescript
import { PhotoEditor } from './react-photo-editor';

export const App = () => <PhotoEditor cropArea={230} panel={Panel} />;
```

## Documentation

```typescript
export type TPhotoEditorProps = {
  componentWrapperStyles?: ComponentType<any>;
  cropArea?: number;
  panel?: ComponentType<any>;
  src?: string;
};
```

<br /><br />
<b>componentWrapperStyles:</b> [optional]

```typescript
componentWrapperStyles?: ComponentType<any>;
```

You can pass styled components instead of default. But remember all styles will be provide by you.
<br /><br />
<b>cropArea:</b> [optional]

```typescript
cropArea?: number;
```

This is area to crop image. Default is 100 it means: 100x100px;
<br /><br />
<b>cropArea:</b> [optional]

```typescript
panel?: ComponentType<any>;
```

You should pass panel to control image position, size & filters. This component will receive TPanelPropsRender & your props.
<br /><br />
<b>src:</b> [optional]

```typescript
src?: string;
```

You can pass default image. Because otherwise the image will be empty.
<br /><br />

```typescript
export type TPanelPropsRender = {
  exportImage: (fileName: string) => void;
  flipHorizontally: () => void;
  flipVertically: () => void;
  filter: (objectFilter: TFilter) => void;
  loadImage: (event: Event) => void;
  rotate: (angle: number) => void;
  zoom: (scale: number) => void;
};
```

<br /><br />
<b>exportImage:</b>

```typescript
exportImage: (fileName: string) => void;
```

This function export just image around crop. Image will be in square.
<br /><br />
<b>flipHorizontally:</b>

```typescript
flipHorizontally: () => void;
```

This function reverse photo in horizontally position.
<br /><br />
<b>flipVertically:</b>

```typescript
flipVertically: () => void;
```

This function reverse photo in vertically position.
<br /><br />
<b>flipVertically:</b>

```typescript
flipVertically: () => void;
```

This function reverse photo in vertically position.
<br /><br />
<b>flipVertically:</b>

```typescript
filter: () => void;
```

This function make some filter.
<br /><br />
<b>loadImage:</b>

```typescript
loadImage: (event: Event) => void;
```

This function will load image to canvas.
<br /><br />
<b>rotate:</b>

```typescript
rotate: (angle: number) => void;
```

This function rotate image. Angles wchich are supported (0, 90, 180, 270).
<br /><br />
<b>zoom:</b>

```typescript
zoom: (scale: number) => void;
```

This function support only zoom image.
