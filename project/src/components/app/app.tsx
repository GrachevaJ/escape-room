import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import Catalog from '../../pages/catalog/catalog';
import Login from '../../pages/login/login';
import Contacts from '../../pages/contacts/contacts';
import Quest from '../../pages/quest/quest';
import Booking from '../../pages/booking/booking';
import MyQuests from '../../pages/my-quests/my-quests';
import NotFound from '../../pages/not-found/not-found';
import PrivateRoute from '../private-route/private-route';
import Layout from '../layout/layout';

const App = (): JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Catalog />} />
        <Route path={AppRoute.Login} element={<Login />} />
        <Route path={AppRoute.Contacts} element={<Contacts />} />
        <Route path={`${AppRoute.Quest}/:id`} element={<Quest />} />

        <Route path={AppRoute.Booking}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.Auth}
            >
              <Booking />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.MyQuests}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.Auth}
            >
              <MyQuests />
            </PrivateRoute>
          }
        />
      </Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
