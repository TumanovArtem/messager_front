import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IMessage } from 'src/interfaces/IMessage';
import { IMessagesStore } from 'src/interfaces/store';

const initialState : IMessagesStore = {
  data: [
    {
      id: 0,
      tradeHash: 'a',
      senderId: 0,
      receiverId: 1,
      text: 'Never gonna give you up',
      date: "2021-05-04T11:55:50.417",
      isRead: true
    },
    {
      id: 1,
      tradeHash: 'a',
      senderId: 0,
      receiverId: 1,
      text: 'Never gonna let you down',
      date: "2021-05-04T11:55:50.417",
      isRead: true
    },
    {
      id: 2,
      tradeHash: 'a',
      senderId: 1,
      receiverId: 0,
      text: 'Never gonna run around',
      date: "2021-05-04T11:55:50.417",
      isRead: true
    },
    {
      id: 3,
      tradeHash: 'a',
      senderId: 0,
      receiverId: 1,
      text: 'and desert you',
      date: "2021-05-04T11:55:50.417",
      isRead: false
    },
    {
      id: 4,
      tradeHash: 'abc',
      senderId: 1,
      receiverId: 0,
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry',
      date: "2021-05-04T11:55:50.417",
      isRead: true
    },
    {
      id: 5,
      tradeHash: 'abc',
      senderId: 0,
      receiverId: 1,
      text: 'Lorem Ipsum has been the industrys standard dummy text',
      date: new Date('2021-05-04').toString(),
      isRead: true
    },
    {
      id: 6,
      tradeHash: 'abc',
      senderId: 1,
      receiverId: 0,
      text: 'Lorem Ipsum is simply dummy text',
      date: new Date('2021-05-04').toString(),
      isRead: false
    },
  ]
};

type ReadProps = {
  tradeHash?: string;
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
          message.tradeHash === action.payload.tradeHash 
          && message.receiverId === action.payload.receiverId)
        .map(message => message.isRead = true)
    }
  }
});

export const { addMessage, readMessages } = messagesSlice.actions;
export const messagesReducer = messagesSlice.reducer;