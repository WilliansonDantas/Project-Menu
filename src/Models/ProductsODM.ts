import {
  Model,
  models,
  Schema,
  isValidObjectId,
  UpdateQuery,
} from 'mongoose';
import AbstractODM from './AbstractODM';
import IProducts from '../Interfaces/IProducts';
import HttpException from '../Utils/HttpException';

class CategoryODM extends AbstractODM<IProducts> {
  constructor() {
    const schema = new Schema<IProducts>({
      categories: [{
        parent: { type: String },
        name: { type: String },
      }],
      name: { type: String, required: true },
      qty: { type: Number, required: true },
      price: { type: Number, required: true },
    });
    
    super(schema, 'products');
  }

  public async create(obj: IProducts): Promise<IProducts> {
    return this.model.create({ ...obj });
  }

  public async findById(id: string): Promise<IProducts | null> {
    if (!isValidObjectId(id)) throw new HttpException(422, 'Invalid mongo id');
    return this.model.findById(id);
  }

  public async update(id: string, obj: Partial<IProducts>):
  Promise<IProducts | null> {
    if (!isValidObjectId(id)) throw new HttpException(422, 'Invalid mongo id');
    
    return this.model.findByIdAndUpdate(
      { _id: id },
      { ...obj } as UpdateQuery<IProducts>,
      { new: true },
    );    
  }

  public async remove(id: string) {
    if (!isValidObjectId(id)) throw new HttpException(422, 'Invalid mongo id');
    await this.model.deleteOne({ _id: id });
  }
}

export default CategoryODM;
