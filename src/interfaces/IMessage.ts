export interface IMessage {
  id: number;
  tradeHash: string;
  senderId: number;
  receiverId: number;
  text: string;
  date: string;
  isRead: boolean;
}
