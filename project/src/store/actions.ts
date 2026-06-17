import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import type { History } from 'history';
import { BookingData, BookingInfo, LevelName, Offer, ReservationData, TypeName, User, UserAuth } from '../types/types';
import { ApiRoute, AppRoute, HttpCode } from '../const';
import { Token } from '../utils';
import { AxiosError, AxiosInstance, AxiosResponse } from 'axios';

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
  LOGIN_USER: 'user/login',
  LOGOUT_USER: 'user/logout',
  FETCH_OFFER: 'offer/fetch',
  FETCH_BOOKING_INFO: 'booking-info/fetch',
  POST_BOOKING_DATA: 'booking-data/post',
  FETCH_RESERVATIONS: 'reservation/fetch',
  DELETE_RESERVATION: 'reservation/delete'
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
    const {api, history} = extra;
    const {data} = await api.post<User>(ApiRoute.Login, {email, password});
    const {token} = data;

    Token.save(token);
    history.push(AppRoute.Catalog);

    return email;
  }
);

export const logoutUser = createAsyncThunk<void, undefined, {extra: Extra}>(
  Action.LOGOUT_USER,
  async (_, {extra}) => {
    const {api} = extra;
    await api.delete(ApiRoute.Logout);

    Token.drop();
  }
);

export const fetchOffer = createAsyncThunk<Offer, Offer['id'], {extra: Extra}>(
  Action.FETCH_OFFER,
  async (id, {extra}) => {
    const {api, history} = extra;

    try {
      const {data} = await api.get<Offer>(`${ApiRoute.Offers}/${id}`);

      return data;
    } catch (error) {
      const axiosError = error as AxiosError;

      if (axiosError.response?.status === HttpCode.NotFound) {
        history.push(AppRoute.NotFound);
      }

      return Promise.reject(error);
    }
  }
);

export const fetchBookingInfo = createAsyncThunk<BookingInfo[], Offer['id'], {extra: Extra}>(
  Action.FETCH_BOOKING_INFO,
  async (id, {extra}) => {
    const {api} = extra;
    const {data} = await api.get<BookingInfo[]>(`${ApiRoute.Offers}/${id}${ApiRoute.Booking}`);

    return data;
  }
);

export const postBookingData = createAsyncThunk<ReservationData, BookingData & {id: string}, {extra: Extra}>(
  Action.POST_BOOKING_DATA,
  async (bookingData, {extra}) => {
    const {api, history} = extra;
    const {id: questId, ...bookingDataBody} = bookingData;
    const response: AxiosResponse<ReservationData> = await api.post<ReservationData>(`${ApiRoute.Offers}/${questId}${ApiRoute.Booking}`, bookingDataBody);

    history.push(ApiRoute.MyQuests);
    return response.data;
  }
);

export const fetchReservations = createAsyncThunk<ReservationData[], undefined, {extra: Extra}>(
  Action.FETCH_RESERVATIONS,
  async (_, {extra}) => {
    const {api} = extra;
    const {data} = await api.get<ReservationData[]>(ApiRoute.Reservation);

    return data;
  }
);

export const deleteReservation = createAsyncThunk<void, ReservationData['id'], {extra: Extra}>(
  Action.DELETE_RESERVATION,
  async (id, {extra}) => {
    const {api} = extra;
    await api.delete(`${ApiRoute.Reservation}/${id}`);
  }
);

