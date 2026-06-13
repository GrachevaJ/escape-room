import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

const NotFound = ():JSX.Element => (
  <main className="decorated-page quest-page">
    <div className="decorated-page__decor" aria-hidden="true">
      <picture>
        <source type="image/webp" srcSet="img/content/crypt/crypt-size-m.webp, img/content/crypt/crypt-size-m@2x.webp 2x" /><img src="img/content/crypt/crypt-size-m.jpg" srcSet="img/content/crypt/crypt-size-m@2x.jpg 2x" width="1366" height="768" alt="" />
      </picture>
    </div>
    <div className="container container--size-l">
      <div className="quest-page__content">
        <h1 className="title title--size-l title--uppercase quest-page__title">404<br/>страница не найдена</h1>
        <Link className="btn btn--accent btn--cta quest-page__btn" to={AppRoute.Catalog}>на главную</Link>
      </div>
    </div>
  </main>
);

export default NotFound;
