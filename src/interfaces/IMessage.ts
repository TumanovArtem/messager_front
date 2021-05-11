export interface IMessage {
  id: number;
  tradeHash: string;
  senderId: number;
  receiverId: number | undefined;
  text: string;
  date: string;
  isRead: boolean;
};