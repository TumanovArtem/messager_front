import { IMessage } from './IMessage';

export interface ITrade {
  id: string;
  sellerId: number;
  buyerId: number;
  messages: IMessage[];
  method: string;
  amount: number;
  paid: boolean;
  date: string;
}
