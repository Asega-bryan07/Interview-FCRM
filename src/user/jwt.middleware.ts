// JWT Authentication Middleware

import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class JwtMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const token = req.headers['authorization'];
    if (token) {
      try {
        const decoded = jwt.verify(token, 'your_secret_key');
        req['user'] = decoded;
      } catch (error) {
        // to handle the invalid token
        console.error('Invalid token:', error.message);
      }
    }
    next();
  }
}
