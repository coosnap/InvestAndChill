export class Price {
  acountFeeForWebsite: number = 0;
  bonus: string | null = '';
  commitmentTime: number = 0;
  description: string | null = null;
  id: number = -1;
  minimumBudget: number = 0;
  name: string | null = null;
  navFee: number = 0
  profitRateCommitment: number = 0

  constructor(props: IPrice) {
    Object.assign(this, props)
  }
}

export interface IPrice {
  acountFeeForWebsite?: number;
  bonus?: string;
  commitmentTime?: number;
  description?: string;
  id?: number;
  minimumBudget?: number;
  name?: string;
  navFee?: number
  profitRateCommitment?: number
}

export class Payment {
  fee: number = 0;
  unit: string | null = null;
  discountFee: number = 0;
  saveFee: number = 0;
  amount: number = 0;

  constructor(props?: any) {
    Object.assign(this, props)
  }

}
