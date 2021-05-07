import { IStoreState } from "src/interfaces/store";

export const getTradesSelector = (state : IStoreState) => state.trades.data;
export const getCurrentTradeSelector = (state : IStoreState) => 
  state.trades.data.find(trade => 
    trade.id === state.trades.currentTrade
  );