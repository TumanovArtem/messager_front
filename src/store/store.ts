import { combineReducers, configureStore } from '@reduxjs/toolkit';
import usersReducer from 'src/store/slices/usersSlice';
import tradesReducer from 'src/store/slices/tradesSlice';
import messagesReducer from 'src/store/slices/massagesSlice';
import bitcoinRateReducer from 'src/store/slices/bitcoinRateSlice';

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