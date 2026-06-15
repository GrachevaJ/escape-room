import { LevelName, TypeName } from './types/types';

export enum AppRoute {
  Catalog = '/',
  Login = '/login',
  Contacts = '/contacts',
  Quest = '/quest',
  Booking = '/booking',
  MyQuests = '/my-quests'
}

export enum AuthorizationStatus {
    Auth = 'AUTH',
    NoAuth = 'NO_AUTH',
    Unknown = 'UNKNOWN',
}

export enum ApiRoute {
  Offers = '/quest',
  Login = '/login'
}

export const levels = ['any', 'easy', 'medium', 'hard'];
export const types = ['all', 'adventure', 'horror', 'mystic', 'detective', 'sci-fi'];

export const levelLabels: Record<LevelName, string> = {
  'any': 'любой',
  'easy': 'легкий',
  'medium': 'средний',
  'hard': 'сложный'
};

export const typeLabels: Record<TypeName, string> = {
  'all': 'все квесты',
  'adventure': 'приключения',
  'horror': 'ужасы',
  'mystic': 'мистика',
  'detective': 'детектив',
  'sci-fi': 'sci-fi'
};

