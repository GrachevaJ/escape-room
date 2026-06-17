import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/use-app';
import Card from '../card/card';
import { resetFilters } from '../../store/actions';
import Spinner from '../spinner/spinner';
import CardsListEmpty from '../cards-list-empty/cards-list-empty';


const CardsList = ():JSX.Element => {
  const dispatch = useAppDispatch();
  const isOffersLoading = useAppSelector((state) => state.isOffersLoading);
  const offers = useAppSelector((state) => state.offers
    .filter((offer) => state.level === 'any' || offer.level === state.level)
    .filter((offer) => state.type === 'all' || offer.type === state.type));

  useEffect(() => () => {
    dispatch(resetFilters());
  }, [dispatch]);

  if (isOffersLoading) {
    return <Spinner />;
  }

  if (offers.length === 0) {
    return <CardsListEmpty />;
  }

  return (
    <div className="cards-grid">
      {offers.map((offer) => <Card key={offer.id} offer={offer} />)}
    </div>
  );
};

export default CardsList;

