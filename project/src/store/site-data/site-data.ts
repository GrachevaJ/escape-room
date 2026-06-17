import { createSlice } from '@reduxjs/toolkit';
import { SiteData } from '../../types/state';
import { StoreSlice } from '../../const';
import { fetchOffers, fetchOffer, fetchBookingInfo, postBookingData, fetchReservations, deleteReservation } from '../actions';

const initialState: SiteData = {
  offers: [],
  isOffersLoading: false,
  offer: null,
  isOfferLoading: false,
  bookingInfo: [],
  isBookingInfoLoading: false,
  reservationData: null,
  reservations: [],
  isReservationsLoading: false,
  isDeletingReservationLoading: false
};

export const siteData = createSlice({
  name: StoreSlice.SiteData,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOffers.pending, (state) => {
        state.isOffersLoading = true;
      })
      .addCase(fetchOffers.fulfilled, (state, action) => {
        state.isOffersLoading = false;
        state.offers = action.payload;
      })
      .addCase(fetchOffers.rejected, (state) => {
        state.isOffersLoading = false;
      })
      .addCase(fetchOffer.pending, (state) => {
        state.isOfferLoading = true;
      })
      .addCase(fetchOffer.fulfilled, (state, action) => {
        state.isOfferLoading = false;
        state.offer = action.payload;
      })
      .addCase(fetchOffer.rejected, (state) => {
        state.isOfferLoading = false;
      })
      .addCase(fetchBookingInfo.pending, (state) => {
        state.isBookingInfoLoading = true;
      })
      .addCase(fetchBookingInfo.fulfilled, (state, action) => {
        state.isBookingInfoLoading = false;
        state.bookingInfo = action.payload;
      })
      .addCase(postBookingData.fulfilled, (state, action) => {
        state.reservationData = action.payload;
      })
      .addCase(fetchReservations.pending, (state) => {
        state.isReservationsLoading = true;
      })
      .addCase(fetchReservations.fulfilled, (state, action) => {
        state.isReservationsLoading = false;
        state.reservations = action.payload;
      })
      .addCase(deleteReservation.pending, (state) => {
        state.isDeletingReservationLoading = true;
      })
      .addCase(deleteReservation.fulfilled, (state, action) => {
        state.isDeletingReservationLoading = false;
        const deletedId = action.meta.arg;
        state.reservations = state.reservations.filter((item) => item.id !== deletedId);
      });
  },
});
