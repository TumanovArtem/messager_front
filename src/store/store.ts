import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { usersReducer } from 'src/store/slices';
import { tradesReducer } from 'src/store/slices';
import { messagesReducer } from 'src/store/slices';
import { bitcoinRateReducer } from 'src/store/slices';

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