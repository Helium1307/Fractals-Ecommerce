import { AppDocument } from '../models/AppDocument';
import {
  Model,
  FilterQuery,
  HydratedDocument,
  QueryWithHelpers,
} from 'mongoose';
import { ResultPage } from '../models/utils/ResultPage';

export abstract class AbstractRepository<
  T extends AppDocument,
  Filter = FilterQuery<T>
> {
  abstract getModel(): Model<T>;

  async findAll(_filter: Filter): Promise<T[]> {
    const filter = await this.fillFilter(_filter);
    return this.getModel().find(filter);
  }

  async findOne(filter: Filter): Promise<T> {
    return this.getModel().findOne(filter);
  }

  protected createPaginate(
    filter: FilterQuery<T>
  ): QueryWithHelpers<
    Array<HydratedDocument<T, {}, {}>>,
    HydratedDocument<T, {}, {}>,
    {},
    T
  > {
    return this.getModel().find(filter);
  }

  async paginate(
    _filter: Filter,
    limit = 10,
    page = 1
  ): Promise<ResultPage<T>> {
    const usePage = Math.max(0, page ? page - 1 : 0);

    const filter = await this.fillFilter(_filter);

    const count = await this.getModel().countDocuments(filter);

    const result = await this.createPaginate(filter)
      .limit(limit)
      .skip(limit * usePage);

    return {
      currentPage: usePage + 1,
      itensPerPage: limit,
      totalItems: count,
      totalItemsPage: result.length,
      totalPages: Math.ceil(count / limit),
      result,
    };
  }

  async findById(id: string): Promise<T> {
    return this.getModel().findById(id);
  }

  async save(entity: T): Promise<T> {
    return entity.save();
  }

  async exists(_filter: Filter): Promise<boolean> {
    const filter = await this.fillFilter(_filter);
    const result = await this.getModel().exists(filter).exec();
    return result != null;
  }

  async delete(id: string): Promise<T> {
    return this.getModel().findOneAndDelete({
      _id: id,
    } as any);
  }

  fillFilterWithName(
    filter: FilterQuery<any>,
    name: string,
    id?: string
  ): FilterQuery<T> {
    filter.name = {
      $regex: new RegExp(`^${name}$`, 'i'),
    };

    if (id) {
      filter._id = {
        $ne: id,
      };
    }

    return filter;
  }

  async fillFilter(filter: Filter): Promise<FilterQuery<T>> {
    return filter;
  }
}
