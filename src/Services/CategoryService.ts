import Category from '../Domain/Category';
import ICategory from '../Interfaces/ICategory';
import CategoryODM from '../Models/CategoryODM';

export default class CategoryService {
  private createCategoryDomain(category: unknown): Category | undefined {
    if (category instanceof Object) {
      return new Category(category as ICategory);
    }
    return undefined;
  }

  public async categoryFind() {
    const categoryODM = new CategoryODM();
    const categoryList = await categoryODM.find();
    return categoryList.map((category) => this.createCategoryDomain(category));
  }
}