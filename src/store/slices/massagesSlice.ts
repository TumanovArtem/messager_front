import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IMessage } from 'src/interfaces/IMessage';
import { IMessagesStore } from 'src/interfaces/store';

const initialState : IMessagesStore = {
  data: [
    {
      id: 0,
      tradeId: 0,
      senderId: 0,
      receiverId: 1,
      text: 'Never gonna give you up',
      date: new Date("2021-05-03").toString(),
      isRead: true
    },
    {
      id: 1,
      tradeId: 0,
      senderId: 0,
      receiverId: 1,
      text: 'Never gonna let you down',
      date: new Date("2021-05-03").toString(),
      isRead: true
    },
    {
      id: 2,
      tradeId: 0,
      senderId: 1,
      receiverId: 0,
      text: 'Never gonna run around',
      date: new Date("2021-05-03").toString(),
      isRead: true
    },
    {
      id: 3,
      tradeId: 0,
      senderId: 0,
      receiverId: 1,
      text: 'and desert you',
      date: new Date("2021-05-03").toString(),
      isRead: false
    },
    {
      id: 4,
      tradeId: 2,
      senderId: 1,
      receiverId: 0,
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
      date: new Date('2021-05-04').toString(),
      isRead: true
    },
    {
      id: 5,
      tradeId: 2,
      senderId: 0,
      receiverId: 1,
      text: 'Lorem Ipsum has been the industrys standard dummy text',
      date: new Date('2021-05-04').toString(),
      isRead: true
    },
    {
      id: 6,
      tradeId: 2,
      senderId: 1,
      receiverId: 0,
      text: 'Lorem Ipsum is simply dummy text',
      date: new Date('2021-05-04').toString(),
      isRead: false
    },
  ]
};

type ReadProps = {
  tradeId: number;
  receiverId: number;
};

export const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    addMessage: (state, action: PayloadAction<IMessage>) => {
      state.data.push(action.payload);
    },
    readMessages: (state, action: PayloadAction<ReadProps>) => {
      state.data
        .filter((message : IMessage) => 
          message.tradeId === action.payload.tradeId 
          && message.receiverId === action.payload.receiverId)
        .map(message => message.isRead = true)
    }
  }
});

export const { addMessage, readMessages } = messagesSlice.actions;
export default messagesSlice.reducer;