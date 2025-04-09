import OpenAI from 'openai';
import { logger } from '../utils/logger.js';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export const aiController = {
  async generateResponse(req, res, next) {
    try {
      const { message, context } = req.body;

      const completion = await openai.chat.completions.create({
        model: "gpt-4-turbo-preview",
        messages: [
          {
            role: "system",
            content: "You are a helpful shopping assistant. Provide relevant product recommendations and answer questions about products in a friendly and professional manner."
          },
          {
            role: "user",
            content: `Context: ${JSON.stringify(context)}\nUser message: ${message}`
          }
        ],
        temperature: 0.7,
        max_tokens: 500
      });

      res.json({
        response: completion.choices[0].message.content,
        context: context
      });
    } catch (error) {
      next(error);
    }
  }
};