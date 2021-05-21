import { IUser } from 'src/interfaces/IUser';
import { IStoreState } from 'src/interfaces/store';

export const getUsersSelector = (state: IStoreState): IUser[] =>
  state.users.data;
export const getCurrentUserSelector = (state: IStoreState): IUser =>
  state.users.data.find((user) => user.id === state.users.currentUser)!;
