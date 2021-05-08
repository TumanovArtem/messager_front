import { IBitcoinRate } from './IBitcoinRate';
import { IMessage } from './IMessage';
import { ITrade } from './ITrade';
import { IUser } from './IUser';

export interface IUsersStore {
  data: IUser[];
  currentUser: number;
}

export interface ITradesStore {
  data: ITrade[];
  currentTrade: number | null;
}

export interface IMessagesStore {
  data: IMessage[];
}

export interface IStoreState {
  users: IUsersStore;
  trades: ITradesStore;
  messages: IMessagesStore;
  bitcoinRate: IBitcoinRate;
}