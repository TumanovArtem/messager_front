import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from 'src/interfaces/IUser';
import { IUsersStore } from 'src/interfaces/store';

const initialState : IUsersStore = {
  data: [
    {
      login: 'Chanaaar',
      rating: 55
    },
    {
      login: 'Vasya',
      rating: -5
    }
  ],
  currentUser: {
    login: 'Buyer',
    rating: -20
  }
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<IUser>) => {
      state.data.push(action.payload);
    }
  } 
})

export const { addUser } = usersSlice.actions;

export default usersSlice.reducer;