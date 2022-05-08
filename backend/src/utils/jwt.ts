import jwt from 'jsonwebtoken';

function sign(payload: string | object | Buffer, expiresIn = 3600) {
  return jwt.sign(payload, process.env.TOKEN_SECRET, {
    expiresIn, //expira em 60 minutos
  });
}

function verify(token: string, cb: jwt.VerifyCallback) {
  jwt.verify(token, process.env.TOKEN_SECRET, cb);
}

export default {
  sign,
  verify,
};
