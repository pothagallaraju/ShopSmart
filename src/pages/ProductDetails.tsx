import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../data';
import { ShoppingCart, ArrowLeft, Package, Clock, Shield } from 'lucide-react';

interface ProductDetailsProps {
  onAddToCart: (productId: string) => void;
}

export const ProductDetails: React.FC<ProductDetailsProps> = ({ onAddToCart }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto p-4">
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold text-gray-900">Product not found</h2>
          <button
            onClick={() => navigate('/')}
            className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-800"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-4">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 inline-flex items-center text-gray-600 hover:text-gray-800"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-full rounded-lg shadow-lg"
          />
          {product.stock < 5 && (
            <span className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm">
              Low Stock
            </span>
          )}
        </div>

        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
          <p className="text-gray-600 mb-6">{product.description}</p>
          
          <div className="flex items-center gap-2 mb-6">
            <span className="text-2xl font-bold text-gray-900">
              ${product.price.toFixed(2)}
            </span>
            {product.stock > 0 ? (
              <span className="text-green-600 bg-green-100 px-3 py-1 rounded-full text-sm">
                In Stock
              </span>
            ) : (
              <span className="text-red-600 bg-red-100 px-3 py-1 rounded-full text-sm">
                Out of Stock
              </span>
            )}
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {product.tags.map(tag => (
              <span
                key={tag}
                className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          <button
            onClick={() => onAddToCart(product.id)}
            disabled={product.stock === 0}
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed mb-8 flex items-center justify-center gap-2"
          >
            <ShoppingCart className="h-5 w-5" />
            Add to Cart
          </button>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-2 text-gray-600">
              <Package className="h-5 w-5" />
              <span>Free Shipping</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Clock className="h-5 w-5" />
              <span>2-Day Delivery</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Shield className="h-5 w-5" />
              <span>1 Year Warranty</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};