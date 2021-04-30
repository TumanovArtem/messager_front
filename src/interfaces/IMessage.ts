import { IUser } from "./IUser";

export interface IMessage {
  id: number;
  tradeId: number;
  fromId: number;
  toId: number;
  text: string;
  date: Date;
};