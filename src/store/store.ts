import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  usersReducer,
  tradesReducer,
  bitcoinRateReducer
} from 'src/store/slices';

const reducer = combineReducers({
  users: usersReducer,
  trades: tradesReducer,
  bitcoinRate: bitcoinRateReducer
});

const store = configureStore({
  reducer
});

export default store;
