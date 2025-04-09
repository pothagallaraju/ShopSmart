import React from 'react';
import { useNavigate } from 'react-router-dom';
import { categories } from '../data';
import { Layers } from 'lucide-react';

export const Categories: React.FC = () => {
  const navigate = useNavigate();

  const getCategoryImage = (category: string) => {
    switch (category.toLowerCase()) {
      case 'electronics':
        return 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=800';
      case 'wearables':
        return 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800';
      case 'clothing':
        return 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800';
      case 'sports':
        return 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800';
      default:
        return 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'electronics':
        return '🔌';
      case 'wearables':
        return '⌚';
      case 'clothing':
        return '👕';
      case 'sports':
        return '⚽';
      default:
        return '📦';
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="flex items-center gap-2 mb-8">
        <Layers className="h-6 w-6 text-blue-600" />
        <h1 className="text-2xl font-bold text-gray-900">Shop by Category</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <div
            key={category}
            onClick={() => navigate(`/?category=${category}`)}
            className="group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all"
          >
            <div className="relative h-48">
              <img
                src={getCategoryImage(category)}
                alt={category}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end p-6">
                <div className="text-white">
                  <span className="text-2xl mb-2">{getCategoryIcon(category)}</span>
                  <h2 className="text-2xl font-bold">{category}</h2>
                  <p className="text-gray-200 text-sm mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    Click to browse {category.toLowerCase()}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};