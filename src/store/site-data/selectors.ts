import { createSelector } from '@reduxjs/toolkit';
import { StoreSlice } from '../../const';
import { BookingInfo, Offer, ReservationData, State } from '../../types/types';
import { getLevel, getType } from '../site-process/selectors';

export const getIsOffersLoading = ({[StoreSlice.SiteData]: SITE_DATA}: State): boolean => SITE_DATA.isOffersLoading;
export const getOffers = ({[StoreSlice.SiteData]: SITE_DATA}: State): Offer[] => SITE_DATA.offers;

export const getIsOfferLoading = ({[StoreSlice.SiteData]: SITE_DATA}: State): boolean => SITE_DATA.isOfferLoading;
export const getOffer = ({[StoreSlice.SiteData]: SITE_DATA}: State): Offer | null => SITE_DATA.offer;


export const getIsBookingInfoLoading = ({[StoreSlice.SiteData]: SITE_DATA}: State): boolean => SITE_DATA.isBookingInfoLoading;
export const getBookingInfo = ({[StoreSlice.SiteData]: SITE_DATA}: State): BookingInfo[] => SITE_DATA.bookingInfo;

export const getReservationData = ({[StoreSlice.SiteData]: SITE_DATA}: State): ReservationData | null => SITE_DATA.reservationData;

export const getIsReservationsLoading = ({[StoreSlice.SiteData]: SITE_DATA}: State): boolean => SITE_DATA.isReservationsLoading;
export const getReservations = ({[StoreSlice.SiteData]: SITE_DATA}: State): ReservationData[] => SITE_DATA.reservations;
export const getIsDelletingReservationLoading = ({[StoreSlice.SiteData]: SITE_DATA}: State): boolean => SITE_DATA.isDeletingReservationLoading;

export const selectOffers = createSelector([getOffers, getLevel, getType], (offers, level, type) => offers
  .filter((offer) => level === 'any' || offer.level === level)
  .filter((offer) => type === 'all' || offer.type === type));

