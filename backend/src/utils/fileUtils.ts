import { Request } from 'express';
import { randomBytes } from 'crypto';
import {
  createFileDTOFromMulterFile,
  FileDTO,
} from '../models/dto/FileUploadDTO';

export async function randomFileName(
  originalFileName: string
): Promise<string> {
  return new Promise((resolve, reject) => {
    let ext = '';
    let fileName = originalFileName;
    const extIndex = originalFileName.lastIndexOf('.');

    if (extIndex >= 0) {
      ext = originalFileName.substring(extIndex, originalFileName.length);
      fileName = originalFileName.substring(0, extIndex);
    }

    randomBytes(16, (err, hash) => {
      if (err) {
        reject(err);
      } else {
        resolve(`${fileName}-${hash.toString('hex')}${ext}`);
      }
    });
  });
}

export function filesMulterToFileDTO(req: Request): FileDTO[] {
  const processFiles: FileDTO[] = [];

  if (req.files) {
    if (Array.isArray(req.files)) {
      req.files.forEach((file) => {
        processFiles.push(createFileDTOFromMulterFile(file));
      });
    } else {
      for (const fieldname in req.files) {
        req.files[fieldname].forEach((file) => {
          processFiles.push(createFileDTOFromMulterFile(file));
        });
      }
    }
  } else if (req.file) {
    processFiles.push(createFileDTOFromMulterFile(req.file));
  }

  return processFiles;
}
