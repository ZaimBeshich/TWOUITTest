import { Image, ImageSourcePropType, PixelRatio } from 'react-native';
import { HEIGHT, WIDTH } from '../constants/constants';

export const scaleImageHeight = (
  source: ImageSourcePropType,
  desiredWidth: number
) => {
  const { width: imageWidth, height: imageHeight } =
    Image.resolveAssetSource(source);
  return (desiredWidth / imageWidth) * imageHeight;
};

export const scale = (size: number): number =>
  PixelRatio.roundToNearestPixel((WIDTH / 375) * size);

export const verticalScale = (size: number): number =>
  PixelRatio.roundToNearestPixel((HEIGHT / 812) * size);
