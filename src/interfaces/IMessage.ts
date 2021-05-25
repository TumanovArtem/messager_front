export interface IMessage {
  tradeHash: string;
  senderId: number;
  receiverId: number;
  text: string;
  date: string;
  isRead: boolean;
}
