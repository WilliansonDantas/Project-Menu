import { NextFunction, Request, Response } from 'express';
import IProducts from '../Interfaces/IProducts';
import ProductService from '../Services/ProductService';

export default class ProductController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: ProductService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new ProductService();
  }

  public async create() {
    const product: IProducts = {
      categories: this.req.body.categories,
      name: this.req.body.name,
      qty: this.req.body.qty,
      price: this.req.body.price,
    };

    try {
      const newProduct = await this.service.productCreate(product);
      return this.res.status(201).json(newProduct);
    } catch (error) {
      this.next(error);
    }
  }

  public async findById() {
    const { id } = this.req.params;
    try {
      const productId = await this.service.productFindById(id);
      return this.res.status(200).json(productId);
    } catch (error) {
      this.next(error);
    }
  }

  public async findAll() {
    try {
      const allProducts = await this.service.productFind();
      return this.res.status(200).json(allProducts);
    } catch (error) {
      this.next(error);
    }
  }

  public async update() {
    const { id } = this.req.params;
    const product = this.req.body;
    try {
      const productIdUpdate = await this.service.productUpdate(id, product);
      return this.res.status(200).json(productIdUpdate);
    } catch (error) {
      this.next(error);
    }
  }

  public async delete() {
    const { id } = this.req.params;
    try {
      const productId = await this.service.productDelete(id);
      return this.res.status(200).json(productId);
    } catch (error) {
      this.next(error);
    }
  }
}