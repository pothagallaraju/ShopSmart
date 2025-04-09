import { CartItem } from '../models/cartItem.js';
import { logger } from '../utils/logger.js';

export const cartController = {
  async getCart(req, res, next) {
    try {
      const cartItems = await CartItem.find({ user: req.user._id })
        .populate('product');

      res.json(cartItems);
    } catch (error) {
      next(error);
    }
  },

  async addToCart(req, res, next) {
    try {
      const { product_id, quantity } = req.body;

      let cartItem = await CartItem.findOne({
        user: req.user._id,
        product: product_id
      });

      if (cartItem) {
        cartItem.quantity += quantity;
        await cartItem.save();
      } else {
        cartItem = await CartItem.create({
          user: req.user._id,
          product: product_id,
          quantity
        });
      }

      await cartItem.populate('product');
      res.json(cartItem);
    } catch (error) {
      next(error);
    }
  },

  async updateCartItem(req, res, next) {
    try {
      const { quantity } = req.body;

      const cartItem = await CartItem.findOneAndUpdate(
        {
          _id: req.params.id,
          user: req.user._id
        },
        { quantity },
        { new: true }
      ).populate('product');

      if (!cartItem) {
        return res.status(404).json({ error: 'Cart item not found' });
      }

      res.json(cartItem);
    } catch (error) {
      next(error);
    }
  },

  async removeFromCart(req, res, next) {
    try {
      const result = await CartItem.deleteOne({
        _id: req.params.id,
        user: req.user._id
      });

      if (result.deletedCount === 0) {
        return res.status(404).json({ error: 'Cart item not found' });
      }

      res.status(204).send();
    } catch (error) {
      next(error);
    }
  }
};