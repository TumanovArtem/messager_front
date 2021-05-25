import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IMessage } from 'src/interfaces/IMessage';
import { ITrade } from 'src/interfaces/ITrade';
import { ITradesStore } from 'src/interfaces/store';

const initialState: ITradesStore = {
  data: [
    {
      id: 'a',
      sellerId: 0,
      buyerId: 1,
      method: 'Amazon Gift Card',
      amount: 77,
      paid: true,
      date: '2021-05-04T11:55:50.417',
      messages: [
        {
          id: 'dfsfsd',
          senderId: 0,
          receiverId: 1,
          text: 'Never gonna give you up',
          date: '2021-05-04T11:55:50.417',
          isRead: true
        },
        {
          id: 'fsdss',
          senderId: 0,
          receiverId: 1,
          text: 'Never gonna let you down',
          date: '2021-05-04T11:55:50.417',
          isRead: true
        },
        {
          id: 'asdasdc3',
          senderId: 1,
          receiverId: 0,
          text: 'Never gonna run around',
          date: '2021-05-04T11:55:50.417',
          isRead: true
        },
        {
          id: 'ffdsfsdfg4',
          senderId: 0,
          receiverId: 1,
          text: 'and desert you',
          date: '2021-05-04T11:55:50.417',
          isRead: false
        }
      ]
    },
    {
      id: 'ab',
      sellerId: 0,
      buyerId: 1,
      method: 'iTunes Gift Card',
      amount: 30,
      paid: false,
      date: '2021-05-04T11:55:50.417',
      messages: []
    },
    {
      id: 'abc',
      sellerId: 0,
      buyerId: 1,
      method: 'PayPal',
      amount: 500,
      paid: false,
      date: '2021-05-04T11:55:50.417',
      messages: [
        {
          id: 'fw32fg',
          senderId: 1,
          receiverId: 0,
          text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry',
          date: '2021-05-04T11:55:50.417',
          isRead: true
        },
        {
          id: 'gfg23rg',
          senderId: 0,
          receiverId: 1,
          text: 'Lorem Ipsum has been the industrys standard dummy text',
          date: new Date('2021-05-04').toString(),
          isRead: true
        },
        {
          id: 'gfdg322',
          senderId: 1,
          receiverId: 0,
          text: 'Lorem Ipsum is simply dummy text',
          date: new Date('2021-05-04').toString(),
          isRead: false
        }
      ]
    }
  ],
  currentTrade: null
};

type ReadProps = {
  id: string;
  receiverId: number;
};

export const tradesSlice = createSlice({
  name: 'trades',
  initialState,
  reducers: {
    addTrade: (state, action: PayloadAction<ITrade>) => {
      state.data.push(action.payload);
    },
    executeTransaction: (state) => {
      const trade = state.data.find(
        ({ id }: ITrade) => id === state.currentTrade
      );
      trade && (trade.paid = true);
    },
    changeCurrentTrade: (state, action: PayloadAction<string | null>) => {
      state.currentTrade = action.payload;
    },
    deleteTrade: (state, action: PayloadAction<string>) => {
      const newData = state.data.filter(
        ({ id }: ITrade) => id !== action.payload
      );
      return {
        ...state,
        data: newData,
        currentTrade: null
      };
    },
    switchRoles: (state) => {
      const data = state.data.map((trade: ITrade) => ({
        ...trade,
        sellerId: trade.buyerId,
        buyerId: trade.sellerId
      }));
      return { ...state, data };
    },
    addMessage: (state, { payload }: PayloadAction<IMessage>) => {
      state.data
        .find(({ id }: ITrade) => id === state.currentTrade)!
        .messages.push(payload);
    },
    readMessages: (state, { payload }: PayloadAction<ReadProps>) => {
      state.data
        .find(({ id }: ITrade) => id === payload.id)!
        .messages.filter(
          ({ receiverId }: IMessage) => receiverId === payload.receiverId
        )
        .map((message) => {
          message.isRead = true;
          return message;
        });
    }
  }
});

export const {
  changeCurrentTrade,
  executeTransaction,
  deleteTrade,
  switchRoles,
  addMessage,
  readMessages
} = tradesSlice.actions;
export const tradesReducer = tradesSlice.reducer;
