import { WIDTH } from './constants';

const multiplier = WIDTH < 350 ? 0.82 : 1;

export enum SIZES {
  TEXT_14 = 14 * multiplier,
  TEXT_16 = 16 * multiplier,
  TEXT_18 = 18 * multiplier,
}
