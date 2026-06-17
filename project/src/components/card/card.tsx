import { Link } from 'react-router-dom';
import { AppRoute, levelLabels } from '../../const';
import { Offer } from '../../types/types';

type CardProps = {
  offer: Offer;
}

const Card = ({offer}: CardProps):JSX.Element => {
  const {id, title, previewImg, previewImgWebp, level, peopleMinMax} = offer;
  return (
    <div className="quest-card">
      <div className="quest-card__img">
        <picture>
          <source type="image/webp" srcSet={previewImgWebp} /><img src={previewImg} srcSet={previewImg} width="344" height="232" alt={title} />
        </picture>
      </div>
      <div className="quest-card__content">
        <div className="quest-card__info-wrapper"><Link to={`${AppRoute.Quest}/${id}`} className="quest-card__link" >{title}</Link>
        </div>
        <ul className="tags quest-card__tags">
          <li className="tags__item">
            <svg width="11" height="14" aria-hidden="true">
              <use xlinkHref="#icon-person"></use>
            </svg>{`${peopleMinMax[0]}-${peopleMinMax[1]}чел`}
          </li>
          <li className="tags__item">
            <svg width="14" height="14" aria-hidden="true">
              <use xlinkHref="#icon-level"></use>
            </svg>{levelLabels[level]}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
