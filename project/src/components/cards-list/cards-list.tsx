import type { Offer } from '../../types/types';
import Card from '../card/card';

type CardsListProps = {
  offers: Offer[];
  place?: 'catalog' | 'my-quests';
}

const CardsList = ({offers, place = 'catalog'}: CardsListProps):JSX.Element => (
  <div className="cards-grid">
    {offers.map((offer) => <Card key={offer.id} place={place} offer={offer} />)}
  </div>
);

export default CardsList;

