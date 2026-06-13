import { levels, types } from '../const';

export type LevelName = typeof levels[number];
export type TypeName = typeof types[number];

export type Offer = {
  id: string;
  title: string;
  previewImg: string;
  previewImgWebp: string;
  level: LevelName;
  type: TypeName;
  peopleMinMax: [number, number];
  description: string;
  coverImg: string;
  coverImgWebp: string;
};
