import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/use-app';
import { fetchReservations } from '../../store/actions';
import BookingCard from '../reservation-card/reservation-card';
import MyQuestsEmpty from '../my-quests-empty/my-quests-emty';

const ReservationCardsList = ():JSX.Element => {
  const dispatch = useAppDispatch();
  const reservations = useAppSelector((state) => state.reservations);

  useEffect(() => {
    dispatch(fetchReservations());
  }, [dispatch]);

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
