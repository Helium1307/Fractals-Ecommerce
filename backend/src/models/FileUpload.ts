import mongoose from 'mongoose';
import { createSchemaWithSoftDelete } from './utils/createSchema';
import { ISoftDeletedDocument, ISoftDeletedModel } from './utils/softDelete';

export interface IFileUpload extends ISoftDeletedDocument {
  name: string;
  key: string;
  resource: string;
  resourceId: string;
  mimeType: string;
}

const fileUploadSchema = createSchemaWithSoftDelete<IFileUpload>({
  name: {
    type: String,
    required: true,
  },
  key: {
    type: String,
    required: true,
  },
  resource: {
    type: String,
    default: null,
  },
  resourceId: {
    type: String,
    default: null,
  },
  mimeType: {
    type: String,
    required: true,
  },
});

export const FileUpload = mongoose.model<
  IFileUpload,
  ISoftDeletedModel<IFileUpload>
>('FileUpload', fileUploadSchema);
