import React from 'react';
import { Link, Outlet, useNavigate, useLocation } from 'react-router-dom';
import { Package, ShoppingBag, CreditCard, LogOut, LayoutDashboard } from 'lucide-react';
import { useAdminStore } from '../../store/adminStore';
import toast from 'react-hot-toast';

const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { logout, user } = useAdminStore();

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
    toast.success('Logged out successfully');
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <ShoppingBag className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold">Admin Panel</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-gray-600">{user?.email}</span>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 text-gray-600 hover:text-red-600"
              >
                <LogOut className="h-5 w-5" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-6">
          <nav className="bg-white rounded-lg shadow p-4">
            <ul className="space-y-2">
              <li>
                <Link
                  to="/admin"
                  className={`flex items-center gap-2 px-4 py-2 rounded-md ${
                    isActive('/admin')
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <LayoutDashboard className="h-5 w-5" />
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  to="/admin/products"
                  className={`flex items-center gap-2 px-4 py-2 rounded-md ${
                    isActive('/admin/products')
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Package className="h-5 w-5" />
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/admin/orders"
                  className={`flex items-center gap-2 px-4 py-2 rounded-md ${
                    isActive('/admin/orders')
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <ShoppingBag className="h-5 w-5" />
                  Orders
                </Link>
              </li>
              <li>
                <Link
                  to="/admin/payments"
                  className={`flex items-center gap-2 px-4 py-2 rounded-md ${
                    isActive('/admin/payments')
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <CreditCard className="h-5 w-5" />
                  Payment Methods
                </Link>
              </li>
            </ul>
          </nav>

          <main className="bg-white rounded-lg shadow p-6">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;