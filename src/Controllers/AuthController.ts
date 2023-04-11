import { NextFunction, Request, Response } from 'express';
import tokenGenerator from '../Utils/tokenGenerator';


export default class AuthController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
  }

  public async login() {
      try {
        const token = tokenGenerator();
        return this.res.status(200).json({ token });
    } catch (error) {
      this.next(error);
    }
  }
}
