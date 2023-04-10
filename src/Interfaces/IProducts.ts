import ICategory from "./ICategory";

export default interface IProducts {
  id?: string;
  categories: ICategory[];
  name: string;
  qty: number;
  price: number;
}
