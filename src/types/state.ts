import { AuthorizationStatus } from '../const';
import { BookingInfo, Offer, ReservationData } from './types';

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
}

export type SiteProcess = {
  level: string;
  type: string;
}

export type SiteData = {
  offers: Offer[];
  isOffersLoading: boolean;
  offer: Offer | null;
  isOfferLoading: boolean;
  bookingInfo: BookingInfo[];
  isBookingInfoLoading: boolean;
  reservationData: ReservationData | null;
  reservations: ReservationData[];
  isReservationsLoading: boolean;
  isDeletingReservationLoading: boolean;
}
