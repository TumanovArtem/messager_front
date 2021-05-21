import { IMessage } from 'src/interfaces/IMessage';
import { IStoreState } from 'src/interfaces/store';

export const getMessagesSelector = (state: IStoreState): IMessage[] =>
  state.messages.data;
