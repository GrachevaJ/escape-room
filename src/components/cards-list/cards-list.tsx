import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/use-app';
import Card from '../card/card';
import Spinner from '../spinner/spinner';
import CardsListEmpty from '../cards-list-empty/cards-list-empty';
import { getIsOffersLoading, selectOffers } from '../../store/site-data/selectors';
import { resetFilters } from '../../store/site-process/site-process';


const CardsList = ():JSX.Element => {
  const dispatch = useAppDispatch();
  const isOffersLoading = useAppSelector(getIsOffersLoading);
  const offers = useAppSelector(selectOffers);

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

