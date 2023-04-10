import { NextFunction, Request, Response } from 'express';
import ICategory from '../Interfaces/ICategory';
import CategoryService from '../Services/CategoryService';

export default class CategoryController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: CategoryService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new CategoryService();
  }

  public async findAll() {
    try {
      const allCategories = await this.service.categoryFind();
      return this.res.status(200).json(allCategories);
    } catch (error) {
      this.next(error);
    }
  }
}