import { NextFunction, Request, Response } from 'express';
import Product from '../models/Product';

/**
 *
 * @param req
 * @param res
 */
export const getProducts = async (req: Request, res: Response) => {
  const products = await Product.find({});

  res.json(products);
};

/**
 *
 * @param req
 * @param res
 * @param next
 */

export const getProductById = async (req: Request, res: Response) => {
  const productId = req.params.id;
  try {
    const requiredProduct = await Product.findById({ _id: productId });
    if (!requiredProduct) {
      res.status(404);
      throw new Error('Product not found');
    } else {
      res.json({ product: requiredProduct });
    }
  } catch (error) {
    res.status(404);
    throw new Error('Product not found');
  }
};
