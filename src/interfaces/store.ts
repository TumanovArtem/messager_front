import { IBitcoinRate } from './IBitcoinRate';
import { IMessage } from './IMessage';
import { ITrade } from './ITrade';
import { IUser } from './IUser';

export interface IUsersStore {
  data: IUser[];
  currentUser: IUser;
}

export interface ITradesStore {
  data: ITrade[];
  currentTrade: ITrade;
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