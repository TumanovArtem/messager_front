export interface IUser {
  id: number;
  login: string;
  role: 'buyer' | 'seller';
  avatar: string;
  rating: number;
}