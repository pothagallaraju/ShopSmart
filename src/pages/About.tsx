import React from 'react';
import { Users, ShieldCheck, Truck, HeartHandshake } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        {/* Hero Section */}
        <div className="relative h-[400px]">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600"
            alt="Store"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 flex items-center">
            <div className="px-8">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                About ShopSmart
              </h1>
              <p className="text-xl text-gray-200 max-w-2xl">
                Your trusted destination for quality products and exceptional shopping experience since 2020.
              </p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="px-8 py-12">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Customer First</h3>
              <p className="text-gray-600">
                We prioritize our customers' needs and satisfaction above all else.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Assured</h3>
              <p className="text-gray-600">
                Every product meets our high standards of quality and authenticity.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-gray-600">
                Swift and reliable shipping to get your products to you quickly.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <HeartHandshake className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Community Focus</h3>
              <p className="text-gray-600">
                Building lasting relationships with our customers and partners.
              </p>
            </div>
          </div>
        </div>

        {/* Story Section */}
        <div className="bg-gray-50 px-8 py-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Our Story</h2>
            <p className="text-gray-600 mb-6">
              Founded in 2020, ShopSmart emerged from a simple vision: to create an online shopping 
              destination that combines quality products with intelligent shopping assistance. Our 
              journey began during the global pandemic when we recognized the growing need for a 
              smarter, more personalized online shopping experience.
            </p>
            <p className="text-gray-600 mb-6">
              Today, we serve thousands of customers worldwide, offering a curated selection of 
              products across multiple categories. Our AI-powered shopping assistant helps customers 
              find exactly what they're looking for, while our dedicated team ensures every 
              purchase meets our high standards of quality and service.
            </p>
            <p className="text-gray-600">
              We're more than just an e-commerce platform; we're a community of shoppers and 
              sellers, united by our commitment to excellence, innovation, and customer satisfaction.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};