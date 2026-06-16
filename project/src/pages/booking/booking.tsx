import { Link } from 'react-router-dom';
import Map from '../../components/map/map';
import { useAppSelector } from '../../hooks/use-app';
import { useState } from 'react';
import { BookingInfo } from '../../types/types';

const Booking = ():JSX.Element => {
  const bookingInfo = useAppSelector((state) => state.bookingInfo);
  const [activeAddressId, setActiveAddressId] = useState<BookingInfo['id']>(bookingInfo[0].id);

  const handleClick = (id: BookingInfo['id']) => {
    setActiveAddressId(id);
  };
  const activeBookingInfo = bookingInfo.find((item) => item.id === activeAddressId);
  const activeAddress = activeBookingInfo?.location.address;
  const activeSlotsToday = activeBookingInfo?.slots.today;
  const activeSlotsTomorrow = activeBookingInfo?.slots.tomorrow;

  // eslint-disable-next-line no-console
  console.log(activeBookingInfo);

  return (
    <main className="page-content decorated-page">
      <div className="decorated-page__decor" aria-hidden="true">
        <picture>
          <source type="image/webp" srcSet="img/content/maniac/maniac-bg-size-m.webp, img/content/maniac/maniac-bg-size-m@2x.webp 2x" /><img src="img/content/maniac/maniac-bg-size-m.jpg" srcSet="img/content/maniac/maniac-bg-size-m@2x.jpg 2x" width="1366" height="1959" alt="" />
        </picture>
      </div>
      <div className="container container--size-s">
        <div className="page-content__title-wrapper">
          <h1 className="subtitle subtitle--size-l page-content__subtitle">Бронирование квеста
          </h1>
          <p className="title title--size-m title--uppercase page-content__title">Маньяк</p>
        </div>
        <div className="page-content__item">
          <div className="booking-map">
            <div className="map">
              <div className="map__container">
                <Map locations={bookingInfo.map((item) => ({
                  id: item.id,
                  ...item.location
                }))} activeOffer={activeAddressId} onMarkerClick={handleClick}
                />
              </div>
            </div>
            <p className="booking-map__address">{`Вы выбрали: ${activeAddress || ''}`}</p>
          </div>
        </div>
        <form className="booking-form" action="https://echo.htmlacademy.ru/" method="post">
          <fieldset className="booking-form__section">
            <legend className="visually-hidden">Выбор даты и времени</legend>
            <fieldset className="booking-form__date-section">
              <legend className="booking-form__date-title">Сегодня</legend>
              <div className="booking-form__date-inner-wrapper">
                {activeSlotsToday?.map((item) => (
                  <label className="custom-radio booking-form__date" key={item.time}>
                    <input type="radio" id={`today${item.time}`} name="date" required value={`today${item.time}`} disabled={!item.isAvailable}/><span className="custom-radio__label">{item.time}</span>
                  </label>
                ))}
              </div>
            </fieldset>
            <fieldset className="booking-form__date-section">
              <legend className="booking-form__date-title">Завтра</legend>
              <div className="booking-form__date-inner-wrapper">
                {activeSlotsTomorrow?.map((item) => (
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
              <input type="checkbox" id="children" name="children" checked />
              <span className="custom-checkbox__icon">
                <svg width="20" height="17" aria-hidden="true">
                  <use xlinkHref="#icon-tick"></use>
                </svg>
              </span>
              <span className="custom-checkbox__label">Со&nbsp;мной будут дети</span>
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
      </div>
    </main>
  );
};
export default Booking;
