import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { filter, map, switchMap } from 'rxjs/operators';
import { MyEpic } from './store';

const initialState = {
  bitcoinRate: 0
};

export const bitcoinRateSlice = createSlice({
  name: 'bitcoinRate',
  initialState,
  reducers: {
    fetchBitcoinRate: (state, action: PayloadAction<any>) => {
      console.log(action.payload)
    }
  }
});

export const bitcoinRateEpic: MyEpic = action$ =>
  action$.pipe(
    map(action => bitcoinRateSlice.actions.fetchBitcoinRate(fetch('https://api.coindesk.com/v1/bpi/currentprice/USD.json')))
  );
