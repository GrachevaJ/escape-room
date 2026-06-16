import { AddressesType, LevelName, TypeName } from './types/types';

export enum AppRoute {
  Catalog = '/',
  Login = '/login',
  Contacts = '/contacts',
  Quest = '/quest',
  Booking = '/booking',
  MyQuests = '/my-quests',
  NotFound = '/404'
}

export enum HttpCode {
  NotFound = 404
}

export enum AuthorizationStatus {
    Auth = 'AUTH',
    NoAuth = 'NO_AUTH',
    Unknown = 'UNKNOWN',
}

export enum ApiRoute {
  Offers = '/quest',
  Login = '/login',
  Logout = '/logout',
  Booking = '/booking',
  MyQuests = '/my-quests'
}

export const levels = ['any', 'easy', 'medium', 'hard'];
export const types = ['all', 'adventures', 'horror', 'mystic', 'detective', 'sci-fi'];

export const levelLabels: Record<LevelName, string> = {
  'any': 'любой',
  'easy': 'легкий',
  'medium': 'средний',
  'hard': 'сложный'
};

export const typeLabels: Record<TypeName, string> = {
  'all': 'все квесты',
  'adventures': 'приключения',
  'horror': 'ужасы',
  'mystic': 'мистика',
  'detective': 'детектив',
  'sci-fi': 'sci-fi'
};

export const ADDRESSES: AddressesType[] = [
  {
    id: '1',
    address: 'Полюстровский парк, м. Ладожская',
    coords: [59.965364, 30.424033]
  },
  {
    id: '2',
    address: 'Касимовская ул., 10, м. Волковская',
    coords: [59.896668, 30.360406]
  },
  {
    id: '3',
    address: 'Автозаводский пр-д, 1, м. Шушары',
    coords: [59.821797, 30.420984]
  },
  {
    id: '4',
    address: 'Полюстровский пр.,84, м. Лесная',
    coords: [59.987804, 30.352889]
  },
  {
    id: '5',
    address: 'Торфяная дор., 7, м. Старая Деревня',
    coords: [59.989623 , 30.259075]
  },
  {
    id: '6',
    address: 'пр. Большевиков, 18 лит. А, м. Дыбенко',
    coords: [59.908405, 30.482974]
  },
  {
    id: '7',
    address: 'наб. реки Карповки 5, лит П, м. Петроградская',
    coords: [59.968456, 30.31759]
  },
  {
    id: '8',
    address: 'Аллея 100 летия Комсомола, м. Политехническая',
    coords: [60.022639, 30.365151]
  },
  {
    id: '9',
    address: 'Лиговский пр., 30 лит А, м. Пл. Восстания',
    coords: [59.92746882478306, 30.36065457317038]
  }
];
