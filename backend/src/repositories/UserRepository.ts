import { ISoftDeletedModel } from '../models/utils';
import { FilterQuery } from 'mongoose';
import { User, IUser } from '../models/User';
import { AbstractRepository } from './AbstractRepository';
import { FilterUser } from '../filters/FilterUser';
import { equasIgnoreCase, likeIgnoreCase, notEquals } from './utils';

export class UserRepository extends AbstractRepository<IUser, FilterUser> {
  getModel(): ISoftDeletedModel<IUser> {
    return User;
  }

  async findForLogin(username: string): Promise<IUser> {
    return User.findOne(
      {
        email: equasIgnoreCase(username),
      },
      '+password'
    );
  }

  async existsUserWithEmail(email: string, id?: string): Promise<boolean> {
    return this.exists({ email, idNotEquals: id });
  }

  async fillFilter(_filter: FilterUser): Promise<FilterQuery<IUser>> {
    const filter: FilterQuery<IUser> = {};

    if (_filter.name) {
      filter.name = equasIgnoreCase(_filter.name);
    }

    if (_filter.nameLike) {
      filter.name = likeIgnoreCase(_filter.nameLike);
    }

    if (_filter.email) {
      filter.email = _filter.email;
    }

    if (_filter.emailNotEquals) {
      filter.email = notEquals(_filter.emailNotEquals);
    }

    if (_filter.id) {
      filter.id = _filter.id;
    }

    if (_filter.idNotEquals) {
      filter._id = notEquals(_filter.idNotEquals);
    }

    return filter;
  }
}
