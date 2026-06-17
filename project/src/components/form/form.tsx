import { Link } from 'react-router-dom';
import {useForm} from 'react-hook-form';
import { useAppDispatch } from '../../hooks/use-app';
import { postBookingData } from '../../store/actions';


type Slot = {
  time: string;
  isAvailable: boolean;
}

type FormProps = {
  today: Slot[] | undefined;
  tomorrow: Slot[] | undefined;
  placeId: string;
  peopleMinMax: [number, number] | undefined;
  offerId: string | undefined;
}

type BookingFormData = {
  dateSlot: string;
  name: string;
  tel: string;
  peopleCount: number;
  children: boolean;
  'user-agreement': boolean;
}

const Form = ({today, tomorrow, placeId, peopleMinMax, offerId}: FormProps):JSX.Element => {
  const dispatch = useAppDispatch();
  const [minPeople, maxPeople] = peopleMinMax as [number, number];

  const {register, handleSubmit, formState: {errors, isSubmitting}} = useForm<BookingFormData>();

  const onSubmit = (data: BookingFormData) => {
    const [date, time] = data.dateSlot.split('-');

    if (!offerId) {
      return;
    }

    const bookingData = {
      date,
      time,
      contactPerson: data.name,
      phone: data.tel,
      withChildren: data.children,
      peopleCount: data.peopleCount,
      placeId,
      id: offerId
    };

    dispatch(postBookingData(bookingData));
  };

  return (
    <form className="booking-form" action="https://echo.htmlacademy.ru/" method="post" onSubmit={(evt) => {void handleSubmit(onSubmit)(evt);}}>
      <fieldset className="booking-form__section">
        <legend className="visually-hidden">Выбор даты и времени</legend>
        <fieldset className="booking-form__date-section">
          <legend className="booking-form__date-title">Сегодня</legend>
          <div className="booking-form__date-inner-wrapper">
            {today?.map((item) => (
              <label className="custom-radio booking-form__date" key={`today-${item.time}`}>
                <input
                  type="radio"
                  id={`today-${item.time}`}
                  value={`today-${item.time}`}
                  disabled={!item.isAvailable}
                  {...register('dateSlot', {required: 'Выберите время квеста'})}
                /><span className="custom-radio__label">{item.time}</span>
              </label>
            ))}
          </div>
        </fieldset>
        <fieldset className="booking-form__date-section">
          <legend className="booking-form__date-title">Завтра</legend>
          <div className="booking-form__date-inner-wrapper">
            {tomorrow?.map((item) => (
              <label className="custom-radio booking-form__date" key={item.time}>
                <input
                  type="radio"
                  id={`tomorrow-${item.time}`}
                  value={`tomorrow-${item.time}`}
                  disabled={!item.isAvailable}
                  {...register('dateSlot', {required: 'Выберите время квеста'})}
                /><span className="custom-radio__label">{item.time}</span>
              </label>
            ))}
          </div>
          {errors.dateSlot && <span style={{color: '#f2890f'}}>{errors.dateSlot.message}</span>}
        </fieldset>
      </fieldset>
      <fieldset className="booking-form__section">
        <legend className="visually-hidden">Контактная информация</legend>
        <div className="custom-input booking-form__input">
          <label className="custom-input__label" htmlFor="name">Ваше имя</label>
          <input
            type="text"
            id="name"
            placeholder="Имя"
            {...register('name', {
              required: 'Введите ваше имя',
              minLength: {value: 1, message: 'Минимум 1 символ'},
              maxLength: {value: 15, message: 'Максимум 15 символов'},
              pattern: {value: /^[А-Яа-яЁёA-za-z'-]+$/,
                message: 'Имя может содержать только буквы'
              }
            })}
          />
          {errors.name && <span style={{color: '#f2890f'}}>{errors.name.message}</span>}
        </div>
        <div className="custom-input booking-form__input">
          <label className="custom-input__label" htmlFor="tel">Контактный телефон</label>
          <input
            type="tel"
            id="tel"
            placeholder="Телефон"
            {...register('tel', {
              required: 'Введите номер телефона в формате +7XXXXXXXXXX',
              pattern: {value: /^\+7\d{10}$/, message: 'Неверно указан номер'}
            })}
          />
          {errors.tel && <span style={{color: '#f2890f'}}>{errors.tel.message}</span>}
        </div>
        <div className="custom-input booking-form__input">
          <label className="custom-input__label" htmlFor="person">Количество участников</label>
          <input
            type="number"
            id="person"
            placeholder="Количество участников"
            {...register('peopleCount', {
              required: 'Укажите число участников',
              valueAsNumber: true,
              min: {
                value: minPeople, message: `Минимальное количество участников для этого квеста: ${minPeople}`
              },
              max: {
                value: maxPeople, message: `Максимальное количество участников для этого квеста: ${maxPeople}`
              }
            })}
          />
          {errors.peopleCount && <span style={{color: '#f2890f'}}>{errors.peopleCount.message}</span>}
        </div>
        <label className="custom-checkbox booking-form__checkbox booking-form__checkbox--children">
          <input type="checkbox" id="children" {...register('children')} />
          <span className="custom-checkbox__icon">
            <svg width="20" height="17" aria-hidden="true">
              <use xlinkHref="#icon-tick"></use>
            </svg>
          </span>
          <span className="custom-checkbox__label">Со мной будут дети</span>
        </label>
      </fieldset>
      {errors['user-agreement'] && <span style={{color: '#f2890f', margin: 'auto'}}>{errors['user-agreement'].message}</span>}
      <button className="btn btn--accent btn--cta booking-form__submit" type="submit" disabled={isSubmitting}>{isSubmitting ? 'Отправка...' : 'Забронировать'}</button>
      <label className="custom-checkbox booking-form__checkbox booking-form__checkbox--agreement">
        <input
          type="checkbox"
          id="id-order-agreement"
          {...register('user-agreement', {required: 'Необходимо подтвердить согласие'})}
        />
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
};
export default Form;
