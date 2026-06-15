import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import type { History } from 'history';
import { LevelName, Offer, TypeName, User, UserAuth } from '../types/types';
import type { AxiosInstance } from 'axios';
import { ApiRoute, AppRoute } from '../const';
import { Token } from '../utils';
import history from '../history';

type Extra = {
  api: AxiosInstance;
  history: History;
}

export const Action = {
  SET_LEVEL: 'level/set',
  SET_TYPE: 'type/set',
  RESET_FILTERS: 'filters/reset',
  FETCH_OFFERS: 'offers/fetch',
  FETCH_USER_STATUS: 'user/fetch-status',
  LOGIN_USER: 'user/login'
};

export const setLevel = createAction<LevelName>(Action.SET_LEVEL);
export const setType = createAction<TypeName>(Action.SET_TYPE);
export const resetFilters = createAction(Action.RESET_FILTERS);

export const fetchOffers = createAsyncThunk<Offer[], undefined, {extra: Extra}>(
  Action.FETCH_OFFERS,
  async (_, {extra}) => {
    const {api} = extra;
    const {data} = await api.get<Offer[]>(ApiRoute.Offers);

    return data;
  }
);

export const fetchUserStatus = createAsyncThunk<User, undefined, {extra: Extra}>(
  Action.FETCH_USER_STATUS,
  async (_, {extra}) => {
    const {api} = extra;
    const {data} = await api.get<User>(ApiRoute.Login);

    return data;
  }
);

export const loginUser = createAsyncThunk<UserAuth['email'], UserAuth, {extra: Extra}>(
  Action.LOGIN_USER,
  async ({email, password}, {extra}) => {
    const {api} = extra;
    const {data} = await api.post<User>(ApiRoute.Login, {email, password});
    const {token} = data;

    Token.save(token);
    history.push(AppRoute.Catalog);

    return email;
  }
);

