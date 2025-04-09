export interface Message {
  id: string;
  content: string;
  sender: 'user' | 'assistant';
  timestamp: Date;
  products?: Product[];
}

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  tags: string[];
  stock: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface SearchFilters {
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  query?: string;
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  paymentMethod: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface PaymentMethod {
  id: string;
  name: string;
  description: string;
  enabled: boolean;
}

export interface AdminState {
  isAuthenticated: boolean;
  user: {
    id: string;
    email: string;
    role: 'admin' | 'user';
  } | null;
}