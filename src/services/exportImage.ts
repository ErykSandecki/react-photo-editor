// others
import { TPhotoData } from '../components/types';

const exportImage = (photoData: TPhotoData, fileName: string) => {
  const link = document.createElement('a');

  link.download = `${fileName}.png`;
  link.href = photoData.canvas.toDataURL();
  link.click();
};

export default exportImage;
