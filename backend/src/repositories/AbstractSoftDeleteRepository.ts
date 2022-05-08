import {
  ISoftDeletedDocument,
  ISoftDeletedModel,
} from '../models/utils/softDelete';
import { AbstractRepository } from './AbstractRepository';

export abstract class AbstractSoftDeleteRepository<
  T extends ISoftDeletedDocument
> extends AbstractRepository<T> {
  abstract getModel(): ISoftDeletedModel<T>;

  async delete(id: string): Promise<T> {
    return this.getModel().deleteById(id);
  }
}
