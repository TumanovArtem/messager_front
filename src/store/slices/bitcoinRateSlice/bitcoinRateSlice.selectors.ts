import { IStoreState } from "src/interfaces/store";

export const getBitcoinRateSelector = (state : IStoreState) => state.bitcoinRate.USD;