import { IFileUpload } from 'models';

export interface FileDTO {
  /** Name of the form field associated with this file. */
  fieldname: string;
  /** Name of the file on the uploader's computer. */
  originalname: string;

  /** Value of the `Content-Type` header for this file. */
  mimetype: string;
  /** Size of the file in bytes. */
  size: number;

  /** `DiskStorage` only: Directory to which this file has been uploaded. */
  destination: string;
  /** `DiskStorage` only: Name of this file within `destination`. */
  filename: string;
  /** `DiskStorage` only: Full path to the uploaded file. */
  path: string;
  /** `MemoryStorage` only: A Buffer containing the entire file. */
  buffer: Buffer;
}

export class FileUploadDTO {
  name: string;
  resource: string;
  resourceId: string;
  mimeType: string;
}

export class FileUploadResultDTO {
  id: string;
  name: string;
  key: string;
  resource: string;
  resourceId: string;
  mimeType: string;
  url: string;
}

export class FileUploadListDTO {
  id: string;
  name: string;
  key: string;
  resource: string;
  resourceId: string;
  mimeType: string;
  createdAt: Date;
}

export async function createFileUploadResult(
  fileUpload: IFileUpload,
  generateUrl: (key: string) => Promise<string>
): Promise<FileUploadResultDTO> {
  if (!fileUpload) return null;

  const dto: FileUploadResultDTO = {
    id: fileUpload.id,
    name: fileUpload.name,
    resource: fileUpload.resource,
    resourceId: fileUpload.resourceId,
    key: fileUpload.key,
    mimeType: fileUpload.mimeType,
    url: await generateUrl(fileUpload.key),
  };

  return dto;
}

export function createFileUploadList(
  fileUpload: IFileUpload
): FileUploadListDTO {
  if (!fileUpload) return null;

  const dto: FileUploadListDTO = {
    id: fileUpload.id,
    resource: fileUpload.resource,
    resourceId: fileUpload.resourceId,
    name: fileUpload.name,
    key: fileUpload.key,
    mimeType: fileUpload.mimeType,
    createdAt: fileUpload.createdAt,
  };

  return dto;
}

export function createFileDTOFromMulterFile(
  file: Express.Multer.File
): FileDTO {
  return {
    buffer: file.buffer,
    destination: file.destination,
    fieldname: file.fieldname,
    filename: file.filename,
    mimetype: file.mimetype,
    originalname: file.originalname,
    path: file.path,
    size: file.size,
  };
}
