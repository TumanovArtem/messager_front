import { IUser } from './IUser';

export interface IUsersStore {
  data: IUser[],
  currentUser: IUser
}

export interface IStoreState {
  users: IUsersStore
}