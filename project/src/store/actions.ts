import { createAction } from '@reduxjs/toolkit';
import { LevelName, Offer, TypeName } from '../types/types';

export const Action = {
  SET_OFFERS: 'offers/set',
  SET_LEVEL: 'level/set',
  SET_TYPE: 'type/set'
};

export const setOffers = createAction<Offer[]>(Action.SET_OFFERS);
export const setLevel = createAction<LevelName>(Action.SET_LEVEL);
export const setType = createAction<TypeName>(Action.SET_TYPE);
