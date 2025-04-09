import React from 'react';
import { Link } from 'react-router-dom';
import { Package, ShoppingBag, CreditCard, TrendingUp } from 'lucide-react';

export const DashboardHome: React.FC = () => {
  const stats = [
    {
      title: 'Total Products',
      value: '45',
      change: '+12.5%',
      trend: 'up',
      link: '/admin/products'
    },
    {
      title: 'Active Orders',
      value: '28',
      change: '+18.2%',
      trend: 'up',
      link: '/admin/orders'
    },
    {
      title: 'Total Sales',
      value: '$12,845',
      change: '+25.8%',
      trend: 'up',
      link: '/admin/orders'
    },
    {
      title: 'Payment Methods',
      value: '4',
      change: 'Active',
      trend: 'neutral',
      link: '/admin/payments'
    }
  ];

  const recentOrders = [
    {
      id: '1',
      customer: 'John Doe',
      amount: '$199.99',
      status: 'pending',
      date: '2025-03-20'
    },
    {
      id: '2',
      customer: 'Jane Smith',
      amount: '$299.98',
      status: 'processing',
      date: '2025-03-19'
    },
    {
      id: '3',
      customer: 'Mike Johnson',
      amount: '$149.99',
      status: 'shipped',
      date: '2025-03-18'
    }
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Dashboard Overview</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, index) => (
          <Link
            key={index}
            to={stat.link}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm font-medium text-gray-500">{stat.title}</div>
              {stat.trend === 'up' && (
                <TrendingUp className="h-5 w-5 text-green-500" />
              )}
            </div>
            <div className="flex items-baseline">
              <div className="text-2xl font-semibold text-gray-900">{stat.value}</div>
              <div className={`ml-2 text-sm ${
                stat.trend === 'up' ? 'text-green-500' : 'text-gray-500'
              }`}>
                {stat.change}
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link
              to="/admin/products"
              className="flex flex-col items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
            >
              <Package className="h-8 w-8 text-blue-600 mb-2" />
              <span className="text-sm font-medium text-blue-600">Add Product</span>
            </Link>
            <Link
              to="/admin/orders"
              className="flex flex-col items-center p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
            >
              <ShoppingBag className="h-8 w-8 text-green-600 mb-2" />
              <span className="text-sm font-medium text-green-600">View Orders</span>
            </Link>
            <Link
              to="/admin/payments"
              className="flex flex-col items-center p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors"
            >
              <CreditCard className="h-8 w-8 text-purple-600 mb-2" />
              <span className="text-sm font-medium text-purple-600">Payments</span>
            </Link>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Recent Orders</h3>
          <div className="space-y-4">
            {recentOrders.map((order) => (
              <div key={order.id} className="flex items-center justify-between">
                <div>
                  <div className="font-medium">Order #{order.id}</div>
                  <div className="text-sm text-gray-500">{order.customer}</div>
                </div>
                <div className="text-right">
                  <div className="font-medium">{order.amount}</div>
                  <div className="text-sm text-gray-500">{order.status}</div>
                </div>
              </div>
            ))}
            <Link
              to="/admin/orders"
              className="block text-center text-sm text-blue-600 hover:text-blue-800 mt-4"
            >
              View All Orders →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};