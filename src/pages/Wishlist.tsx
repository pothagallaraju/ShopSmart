import React from 'react';
import { Heart } from 'lucide-react';

export const Wishlist: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="flex items-center gap-2 mb-8">
        <Heart className="h-6 w-6 text-red-500" />
        <h1 className="text-2xl font-bold text-gray-900">My Wishlist</h1>
      </div>
      <div className="bg-white rounded-lg shadow-md p-8 text-center">
        <Heart className="h-12 w-12 text-gray-300 mx-auto mb-4" />
        <h2 className="text-xl font-semibold text-gray-700 mb-2">Your wishlist is empty</h2>
        <p className="text-gray-500">
          Start adding items to your wishlist by clicking the heart icon on products you love.
        </p>
      </div>
    </div>
  );
};