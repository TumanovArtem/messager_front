import { AnyAction, applyMiddleware, combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import usersReducer from 'src/store/usersSlice';
import tradesReducer from 'src/store/tradesSlice';
import messagesReducer from 'src/store/massagesSlice';
import { createEpicMiddleware, Epic } from 'redux-observable';
import { bitcoinRateEpic } from './bitcoinRateSlice';

const reducer = combineReducers({
  users: usersReducer,
  trades: tradesReducer,
  messages: messagesReducer
});

export type MyState = ReturnType<typeof reducer>;
export type MyEpic = Epic<AnyAction, AnyAction, MyState>;

const epicMiddleware = createEpicMiddleware<AnyAction, AnyAction, MyState>();

const enhancer = applyMiddleware(epicMiddleware);

export const store = configureStore({
  reducer//,
  //enhancers: [enhancer]
});

//epicMiddleware.run(bitcoinRateEpic);

export default store;