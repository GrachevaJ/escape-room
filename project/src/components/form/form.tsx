import { Link } from 'react-router-dom';

type Slot = {
  time: string;
  isAvailable: boolean;
}

type FormProps = {
  today: Slot[] | undefined;
  tomorrow: Slot[] | undefined;
}

const Form = ({today, tomorrow}: FormProps):JSX.Element => (
  <form className="booking-form" action="https://echo.htmlacademy.ru/" method="post">
    <fieldset className="booking-form__section">
      <legend className="visually-hidden">Выбор даты и времени</legend>
      <fieldset className="booking-form__date-section">
        <legend className="booking-form__date-title">Сегодня</legend>
        <div className="booking-form__date-inner-wrapper">
          {today?.map((item) => (
            <label className="custom-radio booking-form__date" key={item.time}>
              <input type="radio" id={`today${item.time}`} name="date" required value={`today${item.time}`} disabled={!item.isAvailable}/><span className="custom-radio__label">{item.time}</span>
            </label>
          ))}
        </div>
      </fieldset>
      <fieldset className="booking-form__date-section">
        <legend className="booking-form__date-title">Завтра</legend>
        <div className="booking-form__date-inner-wrapper">
          {tomorrow?.map((item) => (
            <label className="custom-radio booking-form__date" key={item.time}>
              <input type="radio" id={`tomorrow${item.time}`} name="date" required value={`tomorrow${item.time}`} disabled={!item.isAvailable}/><span className="custom-radio__label">{item.time}</span>
            </label>
          ))}
        </div>
      </fieldset>
    </fieldset>
    <fieldset className="booking-form__section">
      <legend className="visually-hidden">Контактная информация</legend>
      <div className="custom-input booking-form__input">
        <label className="custom-input__label" htmlFor="name">Ваше имя</label>
        <input type="text" id="name" name="name" placeholder="Имя" required pattern="[А-Яа-яЁёA-Za-z'- ]{1,}" />
      </div>
      <div className="custom-input booking-form__input">
        <label className="custom-input__label" htmlFor="tel">Контактный телефон</label>
        <input type="tel" id="tel" name="tel" placeholder="Телефон" required pattern="[0-9]{10,}" />
      </div>
      <div className="custom-input booking-form__input">
        <label className="custom-input__label" htmlFor="person">Количество участников</label>
        <input type="number" id="person" name="person" placeholder="Количество участников" required />
      </div>
      <label className="custom-checkbox booking-form__checkbox booking-form__checkbox--children">
        <input type="checkbox" id="children" name="children" />
        <span className="custom-checkbox__icon">
          <svg width="20" height="17" aria-hidden="true">
            <use xlinkHref="#icon-tick"></use>
          </svg>
        </span>
        <span className="custom-checkbox__label">Со мной будут дети</span>
      </label>
    </fieldset>
    <button className="btn btn--accent btn--cta booking-form__submit" type="submit">Забронировать</button>
    <label className="custom-checkbox booking-form__checkbox booking-form__checkbox--agreement">
      <input type="checkbox" id="id-order-agreement" name="user-agreement" required />
      <span className="custom-checkbox__icon">
        <svg width="20" height="17" aria-hidden="true">
          <use xlinkHref="#icon-tick"></use>
        </svg>
      </span>
      <span className="custom-checkbox__label">Я&nbsp;согласен с
        <Link className="link link--active-silver link--underlined" to="#"> правилами обработки персональных данных</Link>&nbsp;и пользовательским соглашением
      </span>
    </label>
  </form>
);

export default Form;
