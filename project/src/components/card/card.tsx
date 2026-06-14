import { Link } from 'react-router-dom';
import { AppRoute, levelLabels } from '../../const';
import { Offer } from '../../types/types';

type CardProps = {
  offer: Offer;
  place?: 'catalog' | 'my-quests';
}

const Card = ({offer, place}: CardProps):JSX.Element => {
  const {id, title, previewImg, previewImgWebp, level, peopleMinMax} = offer;
  return (
    <Link to={`${AppRoute.Quest}/${id}`}>
      <div className="quest-card">
        <div className="quest-card__img">
          <picture>
            <source type="image/webp" srcSet={previewImgWebp} /><img src={previewImg} srcSet={previewImg} width="344" height="232" alt={title} />
          </picture>
        </div>
        <div className="quest-card__content">
          <div className="quest-card__info-wrapper"><Link to={`${AppRoute.Quest}/${id}`} className="quest-card__link" >{title}</Link>
            {place === 'my-quests' ? (<span className="quest-card__info">[сегодня,&nbsp;17:00. наб. реки Карповки&nbsp;5, лит&nbsp;П<br/>м. Петроградская]</span>) : ''}
          </div>
          <ul className="tags quest-card__tags">
            <li className="tags__item">
              <svg width="11" height="14" aria-hidden="true">
                <use xlinkHref="#icon-person"></use>
              </svg>{place === 'my-quests' ? '6&nbsp;чел' : (
                `${peopleMinMax[0]}-${peopleMinMax[1]}чел`
              )}
            </li>
            <li className="tags__item">
              <svg width="14" height="14" aria-hidden="true">
                <use xlinkHref="#icon-level"></use>
              </svg>{levelLabels[level]}
            </li>
          </ul>
          {place === 'my-quests' ? (
            <Link to={AppRoute.Booking}>
              <button className="btn btn--accent btn--secondary quest-card__btn" type="button">Отменить</button>
            </Link>) : ''}
        </div>
      </div>
    </Link>
  );
};

export default Card;
