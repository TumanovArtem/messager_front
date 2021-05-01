import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IMessage } from 'src/interfaces/IMessage';
import { IMessagesStore } from 'src/interfaces/store';

const initialState : IMessagesStore = {
  data: [
    {
      id: 0,
      tradeId: 0,
      fromId: 0,
      toId: 1,
      text: 'Never gonna give you up',
      date: new Date()
    },
    {
      id: 1,
      tradeId: 0,
      fromId: 0,
      toId: 1,
      text: 'Never gonna let you down',
      date: new Date()
    },
    {
      id: 2,
      tradeId: 0,
      fromId: 1,
      toId: 0,
      text: 'Never gonna run around',
      date: new Date()
    },
    {
      id: 3,
      tradeId: 0,
      fromId: 0,
      toId: 1,
      text: 'and desert you',
      date: new Date()
    }
  ]
};

export const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    addMessage: (state, action: PayloadAction<IMessage>) => {
      state.data.push(action.payload);
    }
  }
});

export const { addMessage } = messagesSlice.actions;
export default messagesSlice.reducer;