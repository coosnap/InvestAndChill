import {IStock, Stock} from "./stock";

export class Article {
  content: string | null = null;
  createDate: string | null = null;
  id: number = -1;
  label: string | null = null;
  stockId: IStock | null = null;
  title: string;
  url: string | null = null;
  views: number = 0;

  constructor(props: Partial<IArticle>) {
    if (props.stockId) {
      props.stockId = new Stock(props.stockId)
    }
    Object.assign(this, props)

  }

}

export interface IArticle {
  content: string;
  createDate: string;
  id: number;
  label: string;
  stockId: Stock;
  title: string;
  url: string;
  views: number;
}
