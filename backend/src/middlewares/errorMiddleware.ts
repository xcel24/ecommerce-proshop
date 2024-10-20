import { Request, Response, NextFunction } from 'express';

export const notFound = (req: Request, res: Response, next: NextFunction) => {
  const error: Error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);

  next(error);
};

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let statusCode: number = res.statusCode === 200 ? 500 : res.statusCode;
  let message: string = err.message;

  if (err.name === 'Cast Error') {
    statusCode = 404;
    message = 'Resource Not Found';
  }

  res.status(statusCode).json({ message });
};
