import multer from 'multer';
import { tmpdir } from 'os';
import { randomFileName } from '../utils/fileUtils';
import { messages } from './messages';

const pathUpload = process.env.UPLOAD_PATH || tmpdir;

export const multerConfig: multer.Options = {
  storage: multer.diskStorage({
    destination: pathUpload,
    filename: (_, file, cb) => {
      randomFileName(file.originalname).then((newFileName) =>
        cb(null, newFileName)
      );
    },
  }),
  limits: {
    fileSize: 10 * 1024 * 1024,
  },
  fileFilter: (_, file, cb) => {
    const allowedMimes = [
      'image/jpeg',
      'image/pjpeg',
      'image/png',
      'image/gif',
      'text/csv',
      'application/pdf',
    ];

    if (allowedMimes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error(messages.INVALID_FILE));
    }
  },
};
