import { configureStore } from '@reduxjs/toolkit';
import usersReducer from 'src/store/usersSlice';
import tradesReducer from 'src/store/tradesSlice';
import messagesReducer from 'src/store/massagesSlice';

export const store = configureStore({
  reducer: {
    users: usersReducer,
    trades: tradesReducer,
    messages: messagesReducer
  }
});

export default store;