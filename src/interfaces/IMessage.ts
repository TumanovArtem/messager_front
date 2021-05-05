export interface IMessage {
  id: number;
  tradeId: number;
  senderId: number;
  receiverId: number;
  text: string;
  date: string;
  isRead: boolean;
};