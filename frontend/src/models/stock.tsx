export class Stock {
  id: number = -1;
  symbol: string | null = null;
  companyName: string | null = null;
  note: string | null = null;
  sizeOfCompany: number = 0;
  logo: string | null = null;

  constructor(props: Partial<IStock>) {
    Object.assign(this, props)
  }
}

export interface IStock {
  id?: number;
  symbol?: string;
  companyName?: string;
  note?: string;
  sizeOfCompany?: number;
  logo?: string;
}
