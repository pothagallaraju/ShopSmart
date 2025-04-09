import jwt from 'jsonwebtoken';
import { User } from '../models/user.js';
import { logger } from '../utils/logger.js';

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d'
  });
};

export const authController = {
  async signup(req, res, next) {
    try {
      const { email, password } = req.body;

      const userExists = await User.findOne({ email });
      if (userExists) {
        return res.status(400).json({ error: 'User already exists' });
      }

      const user = await User.create({
        email,
        password
      });

      res.status(201).json({
        user: {
          id: user._id,
          email: user.email
        },
        token: generateToken(user._id)
      });
    } catch (error) {
      next(error);
    }
  },

  async login(req, res, next) {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({ email });
      if (!user || !(await user.matchPassword(password))) {
        return res.status(401).json({ error: 'Invalid email or password' });
      }

      res.json({
        user: {
          id: user._id,
          email: user.email
        },
        token: generateToken(user._id)
      });
    } catch (error) {
      next(error);
    }
  }
};