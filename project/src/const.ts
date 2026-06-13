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

export const levels = ['easy', 'medium', 'hard'];
export const types = ['adventures', 'horror', 'mystic', 'detective', 'sci-fi'];

export const levelLabels: Record<LevelName, string> = {
  'easy': 'легкий',
  'medium': 'средний',
  'hard': 'сложный'
};

export const typeLabels: Record<TypeName, string> = {
  'adventures': 'приключение',
  'horror': 'ужасы',
  'mystic': 'мистика',
  'detective': 'детектив',
  'sci-fi': 'научная фантастика'
};

