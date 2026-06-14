import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/use-app';
import Card from '../card/card';
import { resetFilters } from '../../store/actions';
import Spinner from '../spinner/spinner';

type CardsListProps = {
  place?: 'catalog' | 'my-quests';
}

const CardsList = ({place = 'catalog'}: CardsListProps):JSX.Element => {
  const dispatch = useAppDispatch();
  const isOffersLoading = useAppSelector((state) => state.isOffersLoading);
  const offers = useAppSelector((state) => {
    if (place !== 'catalog') {
      return state.offers;
    }

    return state.offers
      .filter((offer) => state.level === 'any' || offer.level === state.level)
      .filter((offer) => state.type === 'all' || offer.type === state.type);
  });

  useEffect(() => () => {
    dispatch(resetFilters());
  }, [dispatch]);

  if (isOffersLoading) {
    return <Spinner />;
  }

  return (
    <div className="cards-grid">
      {offers.map((offer) => <Card key={offer.id} place={place} offer={offer} />)}
    </div>
  );
};

export default CardsList;

