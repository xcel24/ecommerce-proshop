import express, { Request, Response } from 'express';
import Product from '../models/Product';

const router = express.Router();

//GET all products
router.get('/', async (req: Request, res: Response) => {
  const products = await Product.find({});

  res.json(products);
});

router.get('/:id', async (req: Request, res: Response) => {
  const productId = req.params.id;
  const requiredProduct = await Product.findById({ productId });

  if (!productId) res.status(404).json({ message: 'Product not found' });
  else {
    res.json({ product: requiredProduct });
  }
});

export default router;
