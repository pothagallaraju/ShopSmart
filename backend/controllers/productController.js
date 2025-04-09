import { Product } from '../models/product.js';
import { logger } from '../utils/logger.js';

export const productController = {
  async getProducts(req, res, next) {
    try {
      const { category, minPrice, maxPrice, query } = req.query;
      
      let filter = {};
      
      if (category) {
        filter.category = category;
      }
      
      if (minPrice || maxPrice) {
        filter.price = {};
        if (minPrice) filter.price.$gte = parseFloat(minPrice);
        if (maxPrice) filter.price.$lte = parseFloat(maxPrice);
      }
      
      if (query) {
        filter.$or = [
          { name: { $regex: query, $options: 'i' } },
          { description: { $regex: query, $options: 'i' } }
        ];
      }

      const products = await Product.find(filter);
      res.json(products);
    } catch (error) {
      next(error);
    }
  },

  async getProductById(req, res, next) {
    try {
      const product = await Product.findById(req.params.id);
      
      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }

      res.json(product);
    } catch (error) {
      next(error);
    }
  }
};