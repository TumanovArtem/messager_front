export interface IMessage {
  id: string;
  tradeHash: string;
  senderId: number;
  receiverId: number;
  text: string;
  date: string;
  isRead: boolean;
}
