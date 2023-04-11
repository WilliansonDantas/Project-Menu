import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET || 'secret';

export default class ValidateJWT {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
  }

  public async validate() {
    const token = this.req.headers.authorization;

    if (!token) {
      return this.res.status(403).json({ message: 'Token not found' });
    }
    try {
      jwt.verify(token, secret);
      return this.next();
    } catch (error) {
      this.next(error);
    }
  }
}
