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
      login: 'Chanaaar',
      avatar: 'static/img/seller.png',
      ratingPros: 20,
      ratingCons: 2
    },
  ],
  currentUser: {
    id: 0,
    login: 'Batman',
    avatar: 'static/img/buyer.png',
    ratingPros: 37,
    ratingCons: 1
  },
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    switchUser: (state) => {
      state.currentUser = state.currentUser.id === 0 ? state.data[1] : state.data[0];
    }
  } 
});

export const { switchUser } = usersSlice.actions;

export default usersSlice.reducer;