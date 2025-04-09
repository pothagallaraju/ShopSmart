import React from 'react';
import { Message } from '../types';
import { Bot, User, Volume2 } from 'lucide-react';
import { clsx } from 'clsx';

interface ChatMessageProps {
  message: Message;
  onSpeak: () => void;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message, onSpeak }) => {
  const isAssistant = message.sender === 'assistant';

  return (
    <div
      className={clsx(
        'flex gap-3 p-4 rounded-lg',
        isAssistant ? 'bg-blue-50' : 'bg-gray-50'
      )}
    >
      <div className="flex-shrink-0">
        {isAssistant ? (
          <Bot className="h-6 w-6 text-blue-600" />
        ) : (
          <User className="h-6 w-6 text-gray-600" />
        )}
      </div>
      <div className="flex-1">
        <div className="flex items-start justify-between gap-4">
          <p className="text-sm text-gray-900">{message.content}</p>
          {isAssistant && (
            <button
              onClick={onSpeak}
              className="flex-shrink-0 p-1 hover:bg-blue-100 rounded-full transition-colors"
              title="Listen to response"
            >
              <Volume2 className="h-4 w-4 text-blue-600" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};