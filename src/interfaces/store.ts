import { IBitcoinRate } from './IBitcoinRate';
import { ITrade } from './ITrade';
import { IUser } from './IUser';

export interface IUsersStore {
  data: IUser[];
  currentUser: number;
}

export interface ITradesStore {
  data: ITrade[];
  currentTrade: string | null;
}

export interface IStoreState {
  users: IUsersStore;
  trades: ITradesStore;
  bitcoinRate: IBitcoinRate;
}
