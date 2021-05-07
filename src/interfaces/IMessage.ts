export interface IMessage {
  id: number;
  tradeId: number;
  senderId: number;
  receiverId: number | undefined;
  text: string;
  date: string;
  isRead: boolean;
};