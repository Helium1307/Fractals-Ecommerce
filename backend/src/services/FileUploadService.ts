import { readFile, unlink } from 'fs/promises';
import { AbstractService } from './AbstractService';
import { messages } from '../config/messages';
import logger from '../logger';
import { IFileUpload, FileUpload } from '../models/FileUpload';
import { FileUploadDTO, FileDTO } from '../models/dto/FileUploadDTO';
import { FileUploadRepository } from '../repositories/FileUploadRepository';
import { fileUploadSchema } from '../schemas/fileUpload.schema';
// import { uploadFile } from '../provider/s3client';
import AppError from '../errors/AppError';

export class FileUploadService extends AbstractService<
  IFileUpload,
  FileUploadDTO
> {
  constructor() {
    super(new FileUploadRepository());
  }

  protected async createEntity(dto: FileUploadDTO): Promise<IFileUpload> {
    return new FileUpload(dto);
  }

  getObjectNotFoundMessage() {
    return messages.FILE_UPLOAD_NOT_FOUND;
  }

  getValidationSchema() {
    return fileUploadSchema;
  }

  // async create(dto: FileUploadDTO): Promise<IFileUpload> {
  //   throw Error('utilizar o método de upload');
  // }

  // async update(id: string, dto: FileUploadDTO): Promise<IFileUpload> {
  //   throw Error('utilizar o método de upload');
  // }

  // async uploadFromPath(
  //   dto: FileUploadDTO,
  //   file: FileDTO
  // ): Promise<IFileUpload> {
  //   const buffer = await readFile(file.path);
  //   const upload = await this.upload(dto, buffer);

  //   unlink(file.path);

  //   return upload;
  // }

  // async upload(dto: FileUploadDTO, content: Buffer): Promise<IFileUpload> {
  //   try {
  //     let path = 'govapp';
  //     path += dto.resource ? `/${dto.resource}` : '';
  //     path += dto.resourceId ? `/${dto.resourceId}` : '';

  //     const uploadResult = await uploadFile({
  //       name: dto.name,
  //       path: path,
  //       body: content,
  //     });

  //     if (uploadResult.success) {
  //       const fileUpload = new FileUpload({
  //         name: dto.name,
  //         resource: dto.resource,
  //         resourceId: dto.resourceId,
  //         key: uploadResult.key,
  //         mimeType: dto.mimeType,
  //       });

  //       return this.repository.save(fileUpload);
  //     } else {
  //       console.log(uploadResult);
  //       throw new AppError(messages.FILE_UPLOAD_ERROR);
  //     }
  //   } catch (e) {
  //     logger.error(e);
  //     throw new AppError(messages.FILE_UPLOAD_ERROR);
  //   }
  // }
}
