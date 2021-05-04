export interface ITrade {
  id: number;
  hash: string;
  sellerId: number;
  buyerId: number;
  method: string;
  money: number;
  paid: boolean;
}