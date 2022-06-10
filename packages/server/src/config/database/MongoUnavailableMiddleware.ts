import { HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import { plainToInstance } from 'class-transformer';
import { NextFunction, Request, Response } from 'express';
import { Connection } from 'mongoose';

import { DefaultResponseDto } from '../../shared';

@Injectable()
class MongoUnavailableMiddleware implements NestMiddleware {
  constructor(@InjectConnection() private readonly conn: Connection) {}

  use(req: Request, res: Response, next: NextFunction) {
    if (this.conn.readyState !== 1) {
      const body = plainToInstance(DefaultResponseDto, {
        name: 'Service Unavailable',
        status: HttpStatus.SERVICE_UNAVAILABLE.toString(),
        path: req.originalUrl,
      });

      res.status(HttpStatus.SERVICE_UNAVAILABLE).json(body);
      return;
    }

    next();
  }
}

export { MongoUnavailableMiddleware };
