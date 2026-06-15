import { levels, types } from '../const';
import store from '../store/store';

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

export type Location = {
  address: string;
  coords: [number, number];
};

export type BookingInfo = {
  id: string;
  location: Location;
  slots: {
    today: {
      time: string;
      isAvailable: boolean;
    }[];
    tomorrow: {
     time: string;
     isAvailable: boolean;
    }[];
  };
};

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type User = {
  email: string;
  token: string;
};

export type UserAuth = Pick<User, 'email'> & {password: string};
