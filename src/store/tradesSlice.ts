import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITrade } from 'src/interfaces/ITrade';
import { ITradesStore } from 'src/interfaces/store';

const initialState : ITradesStore = {
  data: [
    {
      id: 0,
      sellerId: 0,
      buyerId: 1,
      method: 'Amazon Gift Card',
      money: 77,
      paid: true
    },
    {
      id: 1,
      sellerId: 0,
      buyerId: 1,
      method: 'iTunes Gift Card',
      money: 30,
      paid: false
    },
  ],
  currentTrade: {
    id: 0,
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
    changeCurrentTrade: (state, action: PayloadAction<ITrade>) => {
      state.currentTrade = action.payload;
    }
  }
});

export const { changeCurrentTrade } = tradesSlice.actions;
export default tradesSlice.reducer;