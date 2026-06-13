import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

const Header = ():JSX.Element => (
  <header className="header">
    <div className="container container--size-l">
      <Link to={AppRoute.Catalog}>
        <span className="logo header__logo">
          <svg width="134" height="52" aria-hidden="true">
            <use xlinkHref="#logo"></use>
          </svg>
        </span>
      </Link>
      <nav className="main-nav header__main-nav">
        <ul className="main-nav__list">
          <li className="main-nav__item">
            <Link className="link " to={AppRoute.Catalog}>Квесты</Link>
          </li>
          <li className="main-nav__item">
            <Link className="link" to={AppRoute.Contacts}>Контакты</Link>
          </li>
          <li className="main-nav__item">
            <Link className="link" to={AppRoute.MyQuests}>Мои бронирования</Link>
          </li>
        </ul>
      </nav>
      <div className="header__side-nav">
        <a className="btn btn--accent header__side-item" href="#">Выйти</a>
        <a className="link header__side-item header__phone-link" href="tel:88003335599">8 (000) 111-11-11</a>
      </div>
    </div>
  </header>
);

export default Header;
