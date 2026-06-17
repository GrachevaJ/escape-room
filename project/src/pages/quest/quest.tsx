import { Link, useParams } from 'react-router-dom';
import { AppRoute, levelLabels, typeLabels } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks/use-app';
import Spinner from '../../components/spinner/spinner';
import { fetchBookingInfo, fetchOffer } from '../../store/actions';
import { useEffect, useState } from 'react';
import { getIsOfferLoading, getOffer } from '../../store/site-data/selectors';

const Quest = ():JSX.Element => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const isOfferLoading = useAppSelector(getIsOfferLoading);
  const offer = useAppSelector(getOffer);
  const [offerId, setOfferId] = useState<string>('');

  useEffect(() => {
    const {id} = params;
    if (id) {
      dispatch(fetchOffer(id));
      dispatch(fetchBookingInfo(id));
      setOfferId(id);
    }
  }, [params, dispatch]);

  if (isOfferLoading) {
    return <Spinner />;
  }

  if (!offer) {
    return <p className="title title--size-s page-content__title">Данные не найдены</p>;
  }

  const {title, level, type, peopleMinMax, description, coverImg, coverImgWebp} = offer;

  return (
    <main className="decorated-page quest-page">
      <div className="decorated-page__decor" aria-hidden="true">
        <picture>
          <source type="image/webp" srcSet={coverImgWebp} /><img src={coverImg} srcSet={coverImg} width="1366" height="768" alt="" />
        </picture>
      </div>
      <div className="container container--size-l">
        <div className="quest-page__content">
          <h1 className="title title--size-l title--uppercase quest-page__title">{title}</h1>
          <p className="subtitle quest-page__subtitle"><span className="visually-hidden">Жанр:</span>{typeLabels[type]}
          </p>
          <ul className="tags tags--size-l quest-page__tags">
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
          <p className="quest-page__description">{description}</p>
          <Link className="btn btn--accent btn--cta quest-page__btn" to={`${AppRoute.Quest}/${offerId}${AppRoute.Booking}`}>Забронировать</Link>
        </div>
      </div>
    </main>
  );
};
export default Quest;
