import IProducts from '../Interfaces/IProducts';
import ICategory from '../Interfaces/ICategory';

export default class Products {
  protected id?: string;
  protected categories: ICategory[];
  protected name: string;
  protected qty: number;
  protected price: number;

  constructor(product: IProducts) {
    this.id = product.id;
    this.categories = product.categories;
    this.name = product.name;
    this.qty = product.qty;
    this.price = product.price;
  }

  public getId() {
    return this.id;
  }

  public setId(id: string) {
    this.id = id;
  }

  public getCategories() {
    return this.categories;
  }

  public setCategories(categories: ICategory[]) {
    this.categories = categories;
  }

  public getName() {
    return this.name;
  }

  public setName(name: string) {
    this.name = name;
  }

  public getQty() {
    return this.qty;
  }

  public setQty(qty: number) {
    this.qty = qty;
  }

  public getPrice() {
    return this.price;
  }

  public setPrice(price: number) {
    this.price = price;
  }
}