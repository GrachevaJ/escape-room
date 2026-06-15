import { Link, useLocation } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks/use-app';
import { logoutUser } from '../../store/actions';


const Header = ():JSX.Element => {
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const location = useLocation();

  const isLoginPage = location.pathname === AppRoute.Login;
  const isContactsPage = location.pathname === AppRoute.Contacts;
  const isCatalogPage = location.pathname === AppRoute.Catalog;
  const isMyQuestsPage = location.pathname === AppRoute.MyQuests;
  const isAuthorized = authorizationStatus === AuthorizationStatus.Auth;

  const handleClick = () => {
    dispatch(logoutUser());
  };

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
              <Link className={`link ${isCatalogPage ? 'active' : ''}`} to={AppRoute.Catalog}>Квесты</Link>
            </li>
            <li className="main-nav__item">
              <Link className={`link ${isContactsPage ? 'active' : ''}`} to={AppRoute.Contacts}>Контакты</Link>
            </li>
            {authorizationStatus === AuthorizationStatus.Auth ? (
              <li className="main-nav__item">
                <Link className={`link ${isMyQuestsPage ? 'active' : ''}`} to={AppRoute.MyQuests}>Мои бронирования</Link>
              </li>
            ) : ''}
          </ul>
        </nav>
        <div className="header__side-nav">
          {!isLoginPage && !isAuthorized && (
            <Link className="btn btn--accent header__side-item" to={AppRoute.Login}>Войти</Link>
          )}

          {!isLoginPage && isAuthorized && (
            <Link className="btn btn--accent header__side-item" to='#' onClick={handleClick}>Выйти</Link>
          )}
          <a className="link header__side-item header__phone-link" href="tel:88003335599">8 (000) 111-11-11</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
