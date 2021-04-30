export interface ITrade {
  id: number;
  sellerId: number;
  buyerId: number;
  method: string;
  money: number;
  paid: boolean;
}