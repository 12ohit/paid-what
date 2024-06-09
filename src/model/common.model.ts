export interface ILog {
  amount: number;
  whoBought: string;
  whoPaid: string;
  buyDate: string;
  itemName: string;
}

export interface IFormattedLog {
  amount: number;
  whoBought: string;
  whoPaid: string;
  buyDate: Date;
  itemName: string;
}
