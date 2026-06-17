import { Link } from 'react-router-dom';
import { ReservationData } from '../../types/types';
import { levelLabels } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks/use-app';
import { deleteReservation } from '../../store/actions';
import { getIsDelletingReservationLoading } from '../../store/site-data/selectors';

type ReservationCardProps = {
  offer: ReservationData;
}

const ReservationCard = ({offer}: ReservationCardProps):JSX.Element => {
  const {title, previewImg, previewImgWebp, level} = offer.quest;
  const {id, date, time, location, peopleCount} = offer;
  const dispatch = useAppDispatch();
  const isDeletingLoading = useAppSelector(getIsDelletingReservationLoading);

  const handleClick = () => {
    dispatch(deleteReservation(id));
  };

  return (
    <div className="quest-card">
      <div className="quest-card__img">
        <picture>
          <source type="image/webp" srcSet={previewImgWebp} /><img src={previewImg} srcSet={previewImg} width="344" height="232" alt={title} />
        </picture>
      </div>
      <div className="quest-card__content">
        <div className="quest-card__info-wrapper">
          <span className="quest-card__info">[{`${date === 'today' ? 'сегодня' : 'завтра'}, ${time}.
          ${location.address}`}]
          </span>
        </div>
        <ul className="tags quest-card__tags">
          <li className="tags__item">
            <svg width="11" height="14" aria-hidden="true">
              <use xlinkHref="#icon-person"></use>
            </svg>{`${peopleCount}чел`}
          </li>
          <li className="tags__item">
            <svg width="14" height="14" aria-hidden="true">
              <use xlinkHref="#icon-level"></use>
            </svg>{levelLabels[level]}
          </li>
        </ul>
        <Link to='#'>
          <button className="btn btn--accent btn--secondary quest-card__btn" type="button" onClick={handleClick} disabled={isDeletingLoading}>Отменить</button>
        </Link>
      </div>
    </div>
  );
};

export default ReservationCard;
