import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/use-app';
import { fetchReservations } from '../../store/actions';
import BookingCard from '../reservation-card/reservation-card';
import MyQuestsEmpty from '../my-quests-empty/my-quests-emty';
import Spinner from '../spinner/spinner';

const ReservationCardsList = ():JSX.Element => {
  const dispatch = useAppDispatch();
  const reservations = useAppSelector((state) => state.reservations);
  const isReservationsLoading = useAppSelector((state) => state.isReservationsLoading);

  useEffect(() => {
    dispatch(fetchReservations());
  }, [dispatch]);

  if (isReservationsLoading) {
    return <Spinner />;
  }

  if (reservations.length === 0) {
    return <MyQuestsEmpty />;
  }

  return (
    <div className="cards-grid">
      {reservations.map((offer) => <BookingCard key={offer.id} offer={offer} />)}
    </div>
  );
};

export default ReservationCardsList;
