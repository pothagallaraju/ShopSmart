import React from 'react';
import { CartItem } from '../types';
import { Trash2, Plus, Minus } from 'lucide-react';

interface CartProps {
  items: CartItem[];
  onUpdateQuantity: (productId: string, change: number) => void;
  onRemoveItem: (productId: string) => void;
}

export const Cart: React.FC<CartProps> = ({ items, onUpdateQuantity, onRemoveItem }) => {
  const total = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  if (items.length === 0) {
    return (
      <div className="bg-white p-4 rounded-lg shadow-md text-center text-gray-500">
        Your cart is empty
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md">
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-4">Shopping Cart</h2>
        <div className="space-y-4">
          {items.map((item) => (
            <div key={item.product.id} className="flex items-center gap-4">
              <img
                src={item.product.image}
                alt={item.product.name}
                className="w-16 h-16 object-cover rounded"
              />
              <div className="flex-1">
                <h3 className="font-medium">{item.product.name}</h3>
                <p className="text-sm text-gray-500">${item.product.price.toFixed(2)}</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => onUpdateQuantity(item.product.id, -1)}
                  disabled={item.quantity <= 1}
                  className="p-1 rounded hover:bg-gray-100 disabled:opacity-50"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-8 text-center">{item.quantity}</span>
                <button
                  onClick={() => onUpdateQuantity(item.product.id, 1)}
                  disabled={item.quantity >= item.product.stock}
                  className="p-1 rounded hover:bg-gray-100 disabled:opacity-50"
                >
                  <Plus className="h-4 w-4" />
                </button>
                <button
                  onClick={() => onRemoveItem(item.product.id)}
                  className="p-1 rounded hover:bg-gray-100 text-red-500"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t p-4">
        <div className="flex justify-between items-center mb-4">
          <span className="font-semibold">Total:</span>
          <span className="text-lg font-bold">${total.toFixed(2)}</span>
        </div>
        <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
          Checkout
        </button>
      </div>
    </div>
  );
};