import { createReducer } from '@reduxjs/toolkit';
import { Offer, User } from '../types/types';
import { fetchOffer, fetchOffers, fetchUserStatus, loginUser, logoutUser, resetFilters, setLevel, setType } from './actions';
import { AuthorizationStatus } from '../const';

type State = {
  offers: Offer[];
  level: string;
  type: string;
  isOffersLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  user: User['email'];
  offer: Offer | null;
  isOfferLoading: boolean;
}

const initialState: State = {
  offers: [],
  level: 'any',
  type: 'all',
  isOffersLoading: false,
  authorizationStatus: AuthorizationStatus.NoAuth,
  user: '',
  offer: null,
  isOfferLoading: false
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setLevel, (state, action) => {
      state.level = action.payload;
    })
    .addCase(setType, (state, action) => {
      state.type = action.payload;
    })
    .addCase(resetFilters, (state) => {
      state.level = 'any';
      state.type = 'all';
    })
    .addCase(fetchOffers.pending, (state) => {
      state.isOffersLoading = true;
    })
    .addCase(fetchOffers.fulfilled, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(fetchOffers.rejected, (state) => {
      state.isOffersLoading = true;
    })
    .addCase(fetchUserStatus.fulfilled, (state) => {
      state.authorizationStatus = AuthorizationStatus.Auth;
    })
    .addCase(fetchUserStatus.rejected, (state) => {
      state.authorizationStatus = AuthorizationStatus.NoAuth;
    })
    .addCase(loginUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.authorizationStatus = AuthorizationStatus.Auth;
    })
    .addCase(logoutUser.fulfilled, (state) => {
      state.user = '';
      state.authorizationStatus = AuthorizationStatus.NoAuth;
    })
    .addCase(fetchOffer.pending, (state) => {
      state.isOfferLoading = true;
    })
    .addCase(fetchOffer.fulfilled, (state, action) => {
      state.isOfferLoading = false;
      state.offer = action.payload;
    })
    .addCase(fetchOffer.rejected, (state) => {
      state.isOfferLoading = true;
    });
});
