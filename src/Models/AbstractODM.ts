import {
  Model,
  models,
  Schema,
  model,
} from 'mongoose';

class AbstractODM<T> {
  protected model: Model<T>;
  private schema: Schema;
  private modelName: string;

  constructor(schema: Schema, modelName: string) {
    this.schema = schema;
    this.modelName = modelName;
    this.model = models[this.modelName] || model(this.modelName, this.schema);
  }

  public async find(): Promise<T[]> {
    return this.model.find();
  }
}

export default AbstractODM;
