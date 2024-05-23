import { NextFunction, Request, Response } from 'express';

import { ENV } from '../config/env.config';
import { errorRespond } from '../utils/responseHandler';

export const authorize = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const mixtoken = req.headers.authorization;

  const token = String(mixtoken).split(' ');

  if (token.length <= 1) {
    const data = { status: 400, message: 'Missing bearer token' };
    return errorRespond(data, req, res);
  }

  const verifyToken = token[1];

  if (verifyToken !== ENV.VISITOR_SECRET) {
    const data = { status: 401, message: 'Not a valid visitor' };
    return errorRespond(data, req, res);
  }
  next();
};
