import express from 'express';
import { aiController } from '../controllers/aiController.js';
import { authenticateUser } from '../middleware/auth.js';

const router = express.Router();

router.use(authenticateUser);
router.post('/chat', aiController.generateResponse);

export const aiRoutes = router;