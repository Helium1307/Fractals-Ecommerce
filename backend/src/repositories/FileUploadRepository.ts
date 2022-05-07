import { AbstractRepository } from './AbstractRepository';
import { ISoftDeletedModel } from '../models/utils/softDelete';
import { FileUpload, IFileUpload } from '../models/FileUpload';

export class FileUploadRepository extends AbstractRepository<IFileUpload> {
  getModel(): ISoftDeletedModel<IFileUpload> {
    return FileUpload;
  }
}
