import ICategory from '../Interfaces/ICategory';

export default class Category {
  protected id?: string;
  protected parent: "Category" | null;
  protected name: string;

  constructor(category: ICategory) {
    this.id = category.id;
    this.parent = category.parent;
    this.name = category.name;
  }

  public getId() {
    return this.id;
  }

  public setId(id: string) {
    this.id = id;
  }

  public getParent() {
    return this.parent;
  }

  public setParent(parent: "Category" | null) {
    this.parent = parent;
  }

  public getName() {
    return this.name;
  }

  public setName(name: string) {
    this.name = name;
  }
}