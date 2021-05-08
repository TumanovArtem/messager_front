import { createSlice } from '@reduxjs/toolkit';
import { IUsersStore } from 'src/interfaces/store';

const initialState : IUsersStore = {
  data: [
    {
      id: 0,
      login: 'Batman',
      avatar: 'static/img/buyer.png',
      ratingPros: 37,
      ratingCons: 1
    },
    {
      id: 1,
      login: 'Iron Man',
      avatar: 'static/img/seller.png',
      ratingPros: 20,
      ratingCons: 2
    },
  ],
  currentUser: 0
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    switchUser: (state) => {
      state.currentUser = state.currentUser === 0 ? 1 : 0;
    }
  } 
});

export const { switchUser } = usersSlice.actions;

export const usersReducer = usersSlice.reducer;