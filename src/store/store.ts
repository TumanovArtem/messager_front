import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  usersReducer,
  tradesReducer,
  messagesReducer,
  bitcoinRateReducer
} from 'src/store/slices';

const reducer = combineReducers({
  users: usersReducer,
  trades: tradesReducer,
  messages: messagesReducer,
  bitcoinRate: bitcoinRateReducer
});

const store = configureStore({
  reducer
});

export default store;
