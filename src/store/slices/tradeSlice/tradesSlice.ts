import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITrade } from 'src/interfaces/ITrade';
import { ITradesStore } from 'src/interfaces/store';

const initialState: ITradesStore = {
  data: [
    {
      id: 0,
      hash: 'a',
      sellerId: 0,
      buyerId: 1,
      method: 'Amazon Gift Card',
      amount: 77,
      paid: true,
      date: '2021-05-04T11:55:50.417'
    },
    {
      id: 1,
      hash: 'ab',
      sellerId: 0,
      buyerId: 1,
      method: 'iTunes Gift Card',
      amount: 30,
      paid: false,
      date: '2021-05-04T11:55:50.417'
    },
    {
      id: 2,
      hash: 'abc',
      sellerId: 0,
      buyerId: 1,
      method: 'PayPal',
      amount: 500,
      paid: false,
      date: '2021-05-04T11:55:50.417'
    }
  ],
  currentTrade: null
};

export const tradesSlice = createSlice({
  name: 'trades',
  initialState,
  reducers: {
    addTrade: (state, action: PayloadAction<ITrade>) => {
      state.data.push(action.payload);
    },
    executeTransaction: (state) => {
      const trade = state.data.find(
        ({ hash }: ITrade) => hash === state.currentTrade
      );
      trade && (trade.paid = true);
    },
    changeCurrentTrade: (state, action: PayloadAction<string | null>) => {
      state.currentTrade = action.payload;
    },
    deleteTrade: (state, action: PayloadAction<number>) => {
      const newData = state.data.filter(
        ({ id }: ITrade) => id !== action.payload
      );
      return {
        ...state,
        data: newData,
        currentTrade: null
      };
    },
    switchRoles: (state) => {
      const data = state.data.map((trade: ITrade) => ({
        ...trade,
        sellerId: trade.buyerId,
        buyerId: trade.sellerId
      }));
      return { ...state, data };
    }
  }
});

export const {
  changeCurrentTrade,
  executeTransaction,
  deleteTrade,
  switchRoles
} = tradesSlice.actions;
export const tradesReducer = tradesSlice.reducer;
