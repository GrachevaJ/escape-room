import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { LevelName, Offer, TypeName } from '../types/types';
import type { AxiosInstance } from 'axios';
import { ApiRoute } from '../const';

export const Action = {
  SET_LEVEL: 'level/set',
  SET_TYPE: 'type/set',
  RESET_FILTERS: 'filters/reset',
  FETCH_OFFERS: 'offers/fetch'
};

export const setLevel = createAction<LevelName>(Action.SET_LEVEL);
export const setType = createAction<TypeName>(Action.SET_TYPE);
export const resetFilters = createAction(Action.RESET_FILTERS);

export const fetchOffers = createAsyncThunk<Offer[], undefined, {extra: AxiosInstance}>(
  Action.FETCH_OFFERS,
  async (_, {extra: api}) => {
    const {data} = await api.get<Offer[]>(ApiRoute.Offers);

    return data;
  }
);
