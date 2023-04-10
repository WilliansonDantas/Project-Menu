import { Schema } from 'mongoose';
import AbstractODM from './AbstractODM';
import ICategory from '../Interfaces/ICategory';

class CategoryODM extends AbstractODM<ICategory> {
  constructor() {
    const schema = new Schema<ICategory>({
      parent: { type: String, required: true },
      name: { type: String, required: true },
    });
    
    super(schema, 'categories');
  }
}

export default CategoryODM;
