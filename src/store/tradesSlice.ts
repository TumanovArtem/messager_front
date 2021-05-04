import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITrade } from 'src/interfaces/ITrade';
import { ITradesStore } from 'src/interfaces/store';

const initialState : ITradesStore = {
  data: [
    {
      id: 0,
      hash: '45aFD3Rr',
      sellerId: 0,
      buyerId: 1,
      method: 'Amazon Gift Card',
      money: 77,
      paid: true
    },
    {
      id: 1,
      hash: 'dSDs43g',
      sellerId: 0,
      buyerId: 1,
      method: 'iTunes Gift Card',
      money: 30,
      paid: false
    },
    {
      id: 2,
      hash: 'fdsf32',
      sellerId: 0,
      buyerId: 1,
      method: 'PayPal',
      money: 500,
      paid: false
    }
  ],
  currentTrade: {
    id: 0,
    hash: '45aFD3Rr',
    sellerId: 0,
    buyerId: 1,
    method: 'Amazon Gift Card',
    money: 77,
    paid: true
  }
}

export const tradesSlice = createSlice({
  name: 'trades',
  initialState,
  reducers: {
    addTrade: (state, action: PayloadAction<ITrade>) => {
      state.data.push(action.payload);
    },
    executeTransaction: (state) => {
      state.currentTrade.paid = true;
      const trade = state.data.find((trade : ITrade) => trade.id === state.currentTrade.id);
      trade && (trade.paid = true);
    },
    changeCurrentTrade: (state, action: PayloadAction<ITrade>) => {
      state.currentTrade = action.payload;
    },
    deleteTrade: (state, action: PayloadAction<ITrade>) => {
      const newData = state.data.filter((trade : ITrade) => trade.id !== action.payload.id);
      return {
        ...state,
        data: newData,
        currentTrade: newData[0]
      }
    }
  }
});

export const { changeCurrentTrade, executeTransaction, deleteTrade } = tradesSlice.actions;
export default tradesSlice.reducer;