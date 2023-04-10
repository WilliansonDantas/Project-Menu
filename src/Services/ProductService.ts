import Product from '../Domain/Products';
import IProducts from '../Interfaces/IProducts';
import ProductODM from '../Models/ProductsODM';
import HttpException from '../Utils/HttpException';

export default class ProductService {
  private createProductDomain(product: IProducts | null): Product | Error {
    if (product) {
      return new Product(
        product,
      );
    }
    throw new HttpException(404, 'Product not found');
  }

  public async productCreate(product: IProducts) {
    const productODM = new ProductODM();
    const newProduct = await productODM.create(product);
    return this.createProductDomain(newProduct);
  }

  public async productFindById(id: string) {
    const productODM = new ProductODM();
    const ProductId = await productODM.findById(id);
    return this.createProductDomain(ProductId);
  }

  public async productFind() {
    const productODM = new ProductODM();
    const productList = await productODM.find();
    return productList.map((product: IProducts) => this.createProductDomain(product));
  }

  public async productUpdate(id: string, product: IProducts) {
    const productODM = new ProductODM();
    const productId = await productODM.update(id, product);
    return this.createProductDomain(productId);
  }

  public async productDelete(id: string) {
    const productODM = new ProductODM();
    const productId = await productODM.remove(id);
    return productId;
  }
}