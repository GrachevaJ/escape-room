import { createReducer } from '@reduxjs/toolkit';
import { Offer } from '../types/types';
import { setLevel, setOffers, setType } from './actions';

type State = {
  offers: Offer[];
  level: string;
  type: string;
}

const initialState: State = {
  offers: [],
  level: 'any',
  type: 'all'
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setLevel, (state, action) => {
      state.level = action.payload;
    })
    .addCase(setType, (state, action) => {
      state.type = action.payload;
    });
});
