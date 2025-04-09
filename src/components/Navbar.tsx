import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, ShoppingBag, Grid, Heart, Phone, Info } from 'lucide-react';

interface NavbarProps {
  cartItemCount: number;
  onCartClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ cartItemCount, onCartClick }) => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-8">
            <Link to="/" className="text-xl font-bold text-blue-600 flex items-center gap-2">
              <ShoppingBag className="h-8 w-8" />
              ShopSmart
            </Link>
            <div className="hidden md:flex items-center gap-6">
              <Link to="/categories" className="text-gray-600 hover:text-blue-600 flex items-center gap-1">
                <Grid className="h-4 w-4" />
                Categories
              </Link>
              <Link to="/wishlist" className="text-gray-600 hover:text-blue-600 flex items-center gap-1">
                <Heart className="h-4 w-4" />
                Wishlist
              </Link>
              <Link to="/about" className="text-gray-600 hover:text-blue-600 flex items-center gap-1">
                <Info className="h-4 w-4" />
                About Us
              </Link>
              <Link to="/contact" className="text-gray-600 hover:text-blue-600 flex items-center gap-1">
                <Phone className="h-4 w-4" />
                Contact Us
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link
              to="/admin/login"
              className="text-gray-600 hover:text-blue-600"
            >
              Admin
            </Link>
            <button
              onClick={onCartClick}
              className="relative p-2 hover:bg-gray-100 rounded-full"
            >
              <ShoppingCart className="h-6 w-6 text-gray-600" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};