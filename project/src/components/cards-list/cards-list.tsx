import { useAppSelector } from '../../hooks/use-app';
import Card from '../card/card';

type CardsListProps = {
  place?: 'catalog' | 'my-quests';
}

const CardsList = ({place = 'catalog'}: CardsListProps):JSX.Element => {
  const offers = useAppSelector((state) => state.offers);

  return (
    <div className="cards-grid">
      {offers.map((offer) => <Card key={offer.id} place={place} offer={offer} />)}
    </div>
  );
};

export default CardsList;

