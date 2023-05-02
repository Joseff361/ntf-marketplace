export interface Bid {
  id: string;
  name: string;
  price: number;
  image: any;
  date: string;
}

export interface NTF {
  id: string;
  name: string;
  creator: string;
  price: number;
  description: string;
  image: any;
  bids: Bid[];
}
