import jwt from 'jsonwebtoken';
import { User } from '../models/user.js';

export const authenticateUser = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.replace('Bearer ', '');

    if (!token) {
      throw { type: 'auth', message: 'No authorization token provided' };
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id).select('-password');

    if (!user) {
      throw { type: 'auth', message: 'User not found' };
    }

    req.user = user;
    next();
  } catch (error) {
    next({ type: 'auth', message: 'Invalid or expired token' });
  }
};