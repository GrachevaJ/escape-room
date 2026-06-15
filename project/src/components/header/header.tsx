import { Link, useLocation } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks/use-app';
import App from '../app/app';

const Header = ():JSX.Element => {
  const authorzationStatus = useAppSelector((state) => state.authorizationStatus);
  const location = useLocation();

  return (
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
              <Link className={`link ${location.pathname === AppRoute.Catalog ? 'active' : ''}`} to={AppRoute.Catalog}>Квесты</Link>
            </li>
            <li className="main-nav__item">
              <Link className={`link ${location.pathname === AppRoute.Contacts ? 'active' : ''}`} to={AppRoute.Contacts}>Контакты</Link>
            </li>
            {authorzationStatus === AuthorizationStatus.Auth ? (
              <li className="main-nav__item">
                <Link className={`link ${location.pathname === AppRoute.MyQuests ? 'active' : ''}`} to={AppRoute.MyQuests}>Мои бронирования</Link>
              </li>
            ) : ''}
          </ul>
        </nav>
        <div className="header__side-nav">
          {location.pathname === '/login' ? '' : (
            <Link className="btn btn--accent header__side-item" to={AppRoute.Login}>{authorzationStatus === AuthorizationStatus.Auth ? 'Выйти' : 'Войти'}</Link>
          )}
          <a className="link header__side-item header__phone-link" href="tel:88003335599">8 (000) 111-11-11</a>
        </div>
      </div>
    </header>
  );
};
export default Header;
