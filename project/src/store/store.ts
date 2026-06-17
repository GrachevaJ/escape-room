import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './rootReducer';
import { fetchOffers, fetchUserStatus } from './actions';
import { createAPI } from '../api';
import history from '../history';

const api = createAPI();
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    thunk: {
      extraArgument: {
        api,
        history
      },
    },
  }),
});

store.dispatch(fetchUserStatus());
store.dispatch(fetchOffers());

export default store;
