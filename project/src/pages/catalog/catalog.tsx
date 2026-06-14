import CardsList from '../../components/cards-list/cards-list';
import LevelsList from '../../components/levels-list/levels-list';
import TypesList from '../../components/types-list/types-list';

const Catalog = (): JSX.Element => (
  <main className="page-content">
    <div className="container">
      <div className="page-content__title-wrapper">
        <h1 className="subtitle page-content__subtitle">квесты в Санкт-Петербурге
        </h1>
        <h2 className="title title--size-m page-content__title">Выберите тематику</h2>
      </div>
      <div className="page-content__item">
        <form className="filter" action="#" method="get">
          <fieldset className="filter__section">
            <legend className="visually-hidden">Тематика</legend>
            <TypesList />
          </fieldset>
          <fieldset className="filter__section">
            <legend className="visually-hidden">Сложность</legend>
            <LevelsList />
          </fieldset>
        </form>
      </div>
      <h2 className="title visually-hidden">Выберите квест</h2>
      <CardsList />
    </div>
  </main>
);

export default Catalog;
