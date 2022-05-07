import { Request, Response, NextFunction } from 'express';
import { messages } from '../config/messages';
import jwt from '../utils/jwt';

async function checkToken(req: Request): Promise<object> {
  return new Promise((resolve, reject) => {
    const authorization: string = req.headers.authorization;

    if (!authorization)
      reject({ status: 401, auth: false, message: messages.TOKEN_NOT_FOUND });

    const parts = authorization.split(' ');
    if (parts.length !== 2) {
      return reject({
        status: 401,
        auth: false,
        message: messages.INVALID_TOKEN,
      });
    }

    const [scheme, token] = parts;

    if (!/^Bearer$/i.test(scheme)) {
      return reject({
        status: 401,
        auth: false,
        message: messages.INVALID_TOKEN,
      });
    }

    jwt.verify(token, function (err: any, decoded: any) {
      if (err)
        reject({ status: 401, auth: false, message: messages.INVALID_TOKEN });

      resolve(decoded);
    });
  });
}
export async function auth(req: Request, res: Response, next: NextFunction) {
  try {
    const decoded = await checkToken(req);
    // se tudo estiver ok, salva no request para uso posterior
    req['userId'] = decoded['id'];

    return next();
  } catch (e) {
    return res.status(e.status).json(e);
  }
}

export interface AuthenticatedRequest extends Request {
  userId: string;
  userType: number;
}
