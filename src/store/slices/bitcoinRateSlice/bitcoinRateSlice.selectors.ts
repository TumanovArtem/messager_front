import { IStoreState } from 'src/interfaces/store';

export const getBitcoinRateSelector = (state: IStoreState): number | null =>
  state.bitcoinRate.USD;
