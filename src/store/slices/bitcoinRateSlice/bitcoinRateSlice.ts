import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  USD: null
};

export const fetchBitcoinRate = createAsyncThunk(
  'bitcoinRate/fetch',
  async () => {
    const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice/USD.json');
    const body = await response.json();
    return body.bpi.USD.rate_float;
  }
);

export const bitcoinRateSlice = createSlice({
  name: 'bitcoinRate',
  initialState,
  reducers: {},
  //extraReducers: (builder) => {
  //  builder.addCase(fetchBitcoinRate.fulfilled, (state, action) => {
  //    state = action.payload;
  //  });
  extraReducers: {
    [`${fetchBitcoinRate.fulfilled}`]: (state, action) => {
      state.USD = action.payload;
    }
  }
});

export const bitcoinRateReducer = bitcoinRateSlice.reducer;

