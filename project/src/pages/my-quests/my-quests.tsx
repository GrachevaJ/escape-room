import CardsList from '../../components/cards-list/cards-list';
import { Offer } from '../../types/types';

type MyQuestsProps = {
  offers: Offer[];
}

const MyQuests = ({offers}: MyQuestsProps):JSX.Element => (
  <>
    <header className="header">
      <div className="container container--size-l">
        <a className="logo header__logo" href="index.html" aria-label="Перейти на Главную">
          <svg width="134" height="52" aria-hidden="true">
            <use xlinkHref="#logo"></use>
          </svg>
        </a>
        <nav className="main-nav header__main-nav">
          <ul className="main-nav__list">
            <li className="main-nav__item">
              <a className="link not-disabled" href="index.html">Квесты</a>
            </li>
            <li className="main-nav__item">
              <a className="link" href="contacts.html">Контакты</a>
            </li>
            <li className="main-nav__item">
              <a className="link active" href="my-quests.html">Мои бронирования</a>
            </li>
          </ul>
        </nav>
        <div className="header__side-nav">
          <a className="btn btn--accent header__side-item" href="#">Выйти</a>
          <a className="link header__side-item header__phone-link" href="tel:88003335599">8 (000) 111-11-11</a>
        </div>
      </div>
    </header>
    <main className="page-content decorated-page">
      <div className="decorated-page__decor" aria-hidden="true">
        <picture>
          <source type="image/webp" srcSet="img/content/maniac/maniac-bg-size-m.webp, img/content/maniac/maniac-bg-size-m@2x.webp 2x" /><img src="img/content/maniac/maniac-bg-size-m.jpg" srcSet="img/content/maniac/maniac-bg-size-m@2x.jpg 2x" width="1366" height="1959" alt="" />
        </picture>
      </div>
      <div className="container">
        <div className="page-content__title-wrapper">
          <h1 className="title title--size-m page-content__title">Мои бронирования</h1>
        </div>
        <CardsList offers={offers} place='my-quests' />
      </div>
    </main>
    <footer className="footer">
      <div className="container container--size-l">
        <div className="socials">
          <ul className="socials__list">
            <li className="socials__item">
              <a className="socials__link" href="#" aria-label="Skype" target="_blank" rel="nofollow noopener noreferrer">
                <svg className="socials__icon socials__icon--default" width="28" height="28" aria-hidden="true">
                  <use xlinkHref="#icon-skype-default"></use>
                </svg>
                <svg className="socials__icon socials__icon--interactive" width="28" height="28" aria-hidden="true">
                  <use xlinkHref="#icon-skype-interactive"></use>
                </svg>
              </a>
            </li>
            <li className="socials__item">
              <a className="socials__link" href="#" aria-label="ВКонтакте" target="_blank" rel="nofollow noopener noreferrer">
                <svg className="socials__icon socials__icon--default" width="28" height="28" aria-hidden="true">
                  <use xlinkHref="#icon-vk-default"></use>
                </svg>
                <svg className="socials__icon socials__icon--interactive" width="28" height="28" aria-hidden="true">
                  <use xlinkHref="#icon-vk-interactive"></use>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  </>
);

export default MyQuests;
