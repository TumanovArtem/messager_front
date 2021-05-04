import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from 'src/interfaces/IUser';
import { IUsersStore } from 'src/interfaces/store';

const initialState : IUsersStore = {
  data: [
    {
      id: 0,
      login: 'Batman',
      avatar: 'static/img/buyer.png',
      rating: -5
    },
    {
      id: 1,
      login: 'Chanaaar',
      avatar: 'static/img/seller.png',
      rating: 55
    },
  ],
  currentUser: {
    id: 0,
    login: 'Batman',
    avatar: 'static/img/buyer.png',
    rating: -5
  },
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<IUser>) => {
      state.data.push(action.payload);
    }
  } 
});

export const { addUser } = usersSlice.actions;

export default usersSlice.reducer;