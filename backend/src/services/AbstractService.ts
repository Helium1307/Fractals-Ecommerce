import Joi from 'joi';
import { FilterQuery } from 'mongoose';
import { copyProps } from '../utils/objectUtils';
import { messages } from '../config/messages';
import { AppObjectNotFoundError } from '../errors/AppObjectNotFoundError';
import { AbstractRepository } from '../repositories/AbstractRepository';
import { AppDocument } from '../models/AppDocument';
import { ResultPage } from 'models/utils/ResultPage';
import { ContainerInject, Injectable } from '../inject';

export abstract class AbstractService<T extends AppDocument, C, U = C>
  implements Injectable
{
  protected repository: AbstractRepository<T>;

  constructor(repository: AbstractRepository<T>) {
    this.repository = repository;
  }

  inject(_container: ContainerInject): void {}

  protected getObjectNotFoundMessage(): string {
    return messages.OBJECT_NOT_FOUND;
  }

  protected abstract getValidationSchema(
    update: boolean
  ): Joi.ObjectSchema | null;

  protected abstract createEntity(dto: C): Promise<T>;

  protected async updateEntity(entity: T, dto: U): Promise<void> {
    copyProps(entity, dto);
  }

  async validate(dto: C | U, id?: string): Promise<void> {
    const validationSchema = this.getValidationSchema(!!id);
    if (validationSchema) {
      await validationSchema.validateAsync(dto, { abortEarly: false });
    }
  }

  async findAll(filter: FilterQuery<T> = {}): Promise<T[]> {
    return this.repository.findAll(filter);
  }

  async paginate(
    filter: FilterQuery<T> = {},
    limit = 10,
    page = 1
  ): Promise<ResultPage<T>> {
    return this.repository.paginate(filter, limit, page);
  }

  async findById(id: string): Promise<T> {
    const entity = await this.repository.findById(id);
    if (!entity) {
      throw new AppObjectNotFoundError(this.getObjectNotFoundMessage());
    }

    return entity;
  }

  async create(dto: C): Promise<T> {
    await this.validate(dto);

    const entity = await this.createEntity(dto);

    return this.repository.save(entity);
  }

  async update(id: string, dto: U): Promise<T> {
    const entity = await this.findById(id);

    await this.validate(dto, id);

    await this.updateEntity(entity, dto);

    return this.repository.save(entity);
  }

  async delete(id: string): Promise<T> {
    await this.findById(id);
    return this.repository.delete(id);
  }
}
