import { ITrade } from 'src/interfaces/ITrade';
import { IStoreState } from 'src/interfaces/store';

export const getTradesSelector = (state: IStoreState): ITrade[] =>
  state.trades.data;
export const getCurrentTradeSelector = (state: IStoreState): ITrade =>
  state.trades.data.find((trade) => trade.hash === state.trades.currentTrade)!;
