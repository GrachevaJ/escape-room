import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/use-app';
import { loginUser } from '../../store/actions';
import { UserAuth } from '../../types/types';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

const Login = ():JSX.Element => {
  const dispatch = useAppDispatch();
  const [loginError, setLoginError] = useState<string | null>(null);

  const {register, handleSubmit, formState: {errors, isSubmitting}} = useForm<UserAuth & {'user-agreement': boolean}>();

  const onSubmit = async (data: UserAuth & {'user-agreement': boolean}) => {
    try {
      await dispatch(loginUser(data)).unwrap();
    } catch (error) {
      setLoginError('Ошибка авторизации');
    }
  };


  return (
    <main className="decorated-page login">
      <div className="decorated-page__decor" aria-hidden="true">
        <picture>
          <source type="image/webp" srcSet="img/content/maniac/maniac-size-m.webp, img/content/maniac/maniac-size-m@2x.webp 2x" /><img src="img/content/maniac/maniac-size-m.jpg" srcSet="img/content/maniac/maniac-size-m@2x.jpg 2x" width="1366" height="768" alt="" />
        </picture>
      </div>
      <div className="container container--size-l">
        <div className="login__form">
          <form className="login-form" action="https://echo.htmlacademy.ru/" method="post" onSubmit={(evt) => void handleSubmit(onSubmit)(evt)}>
            <div className="login-form__inner-wrapper">
              <h1 className="title title--size-s login-form__title">Вход</h1>
              <div className="login-form__inputs">
                <div className="custom-input login-form__input">
                  <label className="custom-input__label" htmlFor="email">E&nbsp;&ndash;&nbsp;mail</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Адрес электронной почты"
                    {...register('email', {
                      required : 'Введите email',
                      pattern: {value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'Некорректный адрес электронной почты'
                      }
                    })}
                  />
                  {errors.email && <span style={{color: '#f2890f'}}>{errors.email.message}</span>}
                </div>
                <div className="custom-input login-form__input">
                  <label className="custom-input__label" htmlFor="password">Пароль</label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Пароль"
                    {...register('password', {
                      required: 'Введите пароль',
                      minLength: {value: 3, message: 'Минимум 3 символа'},
                      maxLength: {value: 15, message: 'Максимум 15 символов'},
                      pattern: {value: /(?=.*[A-Za-zА-Яа-яЁё])(?=.*\d)/, message: 'Пароль должен содержать минимум одну букву и одну цифру'}
                    })}
                  />
                  {errors.password && <span style={{color: '#f2890f'}}>{errors.password.message}</span>}
                </div>
              </div>
              {loginError && <span style={{color: '#f2890f'}}>{loginError}</span>}
              <button className="btn btn--accent btn--general login-form__submit" type="submit" disabled={isSubmitting}>{isSubmitting ? 'Вход...' : 'Войти'}</button>
              {errors['user-agreement'] && <span style={{color: '#f2890f', margin: 'auto'}}>{errors['user-agreement'].message}</span>}
            </div>
            <label className="custom-checkbox login-form__checkbox">
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
                <Link className="link link--active-silver link--underlined" to="#">правилами обработки персональных данных</Link>&nbsp;и пользовательским соглашением
              </span>
            </label>
          </form>
        </div>
      </div>
    </main>
  );
};
export default Login;
