export interface ITrade {
  id: number;
  hash: string;
  sellerId: number;
  buyerId: number;
  method: string;
  amount: number;
  paid: boolean;
  date: string;
}