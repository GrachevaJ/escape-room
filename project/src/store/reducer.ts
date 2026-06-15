import { createReducer } from '@reduxjs/toolkit';
import { Offer } from '../types/types';
import { fetchOffers, fetchUserStatus, resetFilters, setLevel, setType } from './actions';
import { AuthorizationStatus } from '../const';

type State = {
  offers: Offer[];
  level: string;
  type: string;
  isOffersLoading: boolean;
  authorizationStatus: AuthorizationStatus;
}

const initialState: State = {
  offers: [],
  level: 'any',
  type: 'all',
  isOffersLoading: true,
  authorizationStatus: AuthorizationStatus.NoAuth
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
      state.isOffersLoading = false;
    })
    .addCase(fetchOffers.fulfilled, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(fetchOffers.rejected, (state) => {
      state.isOffersLoading = false;
    })
    .addCase(fetchUserStatus.fulfilled, (state) => {
      state.authorizationStatus = AuthorizationStatus.Auth;
    })
    .addCase(fetchUserStatus.rejected, (state) => {
      state.authorizationStatus = AuthorizationStatus.NoAuth;
    });
});
