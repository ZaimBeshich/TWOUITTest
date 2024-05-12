import * as React from 'react';
import { SvgXml } from 'react-native-svg';

export default function Icon({ icon, width, height, style }: IconProps) {
  return <SvgXml width={width} height={height} xml={icon} style={style} />;
}

export type IconProps = {
  icon: any;
  width: number;
  height: number;
  style?: {};
};
