export interface IMessage {
  id: string;
  senderId: number;
  receiverId: number;
  text: string;
  date: string;
  isRead: boolean;
}
