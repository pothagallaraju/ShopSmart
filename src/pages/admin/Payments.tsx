import React, { useState } from 'react';
import { CreditCard, ToggleLeft as Toggle, Plus, Pencil } from 'lucide-react';
import { PaymentMethod } from '../../types';
import toast from 'react-hot-toast';

const initialPaymentMethods: PaymentMethod[] = [
  {
    id: '1',
    name: 'Credit Card',
    description: 'Accept all major credit cards',
    enabled: true
  },
  {
    id: '2',
    name: 'PayPal',
    description: 'Safe and secure PayPal payments',
    enabled: true
  },
  {
    id: '3',
    name: 'Bank Transfer',
    description: 'Direct bank transfer payments',
    enabled: false
  },
  {
    id: '4',
    name: 'Cryptocurrency',
    description: 'Accept Bitcoin and other major cryptocurrencies',
    enabled: false
  }
];

export const Payments: React.FC = () => {
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>(initialPaymentMethods);
  const [isAddingMethod, setIsAddingMethod] = useState(false);
  const [newMethod, setNewMethod] = useState<Partial<PaymentMethod>>({
    name: '',
    description: '',
    enabled: true
  });

  const handleToggle = (id: string) => {
    setPaymentMethods(methods =>
      methods.map(method =>
        method.id === id
          ? { ...method, enabled: !method.enabled }
          : method
      )
    );
    const method = paymentMethods.find(m => m.id === id);
    if (method) {
      toast.success(`${method.name} ${method.enabled ? 'disabled' : 'enabled'}`);
    }
  };

  const handleAddMethod = () => {
    if (!newMethod.name || !newMethod.description) {
      toast.error('Please fill in all fields');
      return;
    }

    const method: PaymentMethod = {
      id: Date.now().toString(),
      name: newMethod.name,
      description: newMethod.description,
      enabled: newMethod.enabled ?? true
    };

    setPaymentMethods([...paymentMethods, method]);
    setNewMethod({ name: '', description: '', enabled: true });
    setIsAddingMethod(false);
    toast.success('Payment method added successfully');
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Payment Methods</h2>
        <button
          onClick={() => setIsAddingMethod(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors flex items-center gap-2"
        >
          <Plus className="h-5 w-5" />
          Add Method
        </button>
      </div>

      {isAddingMethod && (
        <div className="bg-gray-50 p-6 rounded-lg mb-6">
          <h3 className="text-lg font-semibold mb-4">Add Payment Method</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                value={newMethod.name}
                onChange={(e) => setNewMethod({ ...newMethod, name: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <input
                type="text"
                value={newMethod.description}
                onChange={(e) => setNewMethod({ ...newMethod, description: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={newMethod.enabled}
                onChange={(e) => setNewMethod({ ...newMethod, enabled: e.target.checked })}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label className="text-sm text-gray-700">
                Enable this payment method
              </label>
            </div>
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setIsAddingMethod(false)}
                className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleAddMethod}
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                Add Method
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {paymentMethods.map((method) => (
          <div
            key={method.id}
            className="bg-white p-6 rounded-lg shadow-md flex items-start justify-between"
          >
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-2 rounded-lg">
                <CreditCard className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">{method.name}</h3>
                <p className="text-sm text-gray-500">{method.description}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                className="p-1 hover:bg-gray-100 rounded-full"
                title="Edit"
              >
                <Pencil className="h-4 w-4 text-gray-600" />
              </button>
              <button
                onClick={() => handleToggle(method.id)}
                className={`p-1 rounded-full ${
                  method.enabled ? 'text-green-600' : 'text-gray-400'
                }`}
                title={method.enabled ? 'Disable' : 'Enable'}
              >
                <Toggle className="h-6 w-6" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};