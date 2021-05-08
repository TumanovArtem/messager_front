import { IStoreState } from "src/interfaces/store";

export const getUsersSelector = (state : IStoreState) => state.users.data;
export const getCurrentUserSelector = (state : IStoreState) => 
  state.users.data.find(user =>
    user.id === state.users.currentUser
  ) || state.users.data[0];