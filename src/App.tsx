import React, { useState, useRef, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Link, Navigate } from 'react-router-dom';
import { Message, Product, CartItem, SearchFilters } from './types';
import { ChatMessage } from './components/ChatMessage';
import { ProductCard } from './components/ProductCard';
import { ProductFilters } from './components/ProductFilters';
import { Cart } from './components/Cart';
import { Navbar } from './components/Navbar';
import { Categories } from './pages/Categories';
import { ProductDetails } from './pages/ProductDetails';
import { Wishlist } from './pages/Wishlist';
import { Contact } from './pages/Contact';
import { Send, X, Mic, MessageCircle, Phone } from 'lucide-react';
import { About } from './pages/About';
import { AdminLogin } from './pages/admin/Login';
import AdminDashboard from './pages/admin/Dashboard';
import { AdminProducts } from './pages/admin/Products';
import { Orders } from './pages/admin/Orders';
import { Payments } from './pages/admin/Payments';
import { DashboardHome } from './pages/admin/DashboardHome';
import { Toaster } from 'react-hot-toast';
import { products, suggestedResponses, generateResponse } from './data';

function App() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hello! I'm your AI shopping assistant. How can I help you today?",
      sender: 'assistant',
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [showCart, setShowCart] = useState(false);
  const [filters, setFilters] = useState<SearchFilters>({});
  const [isListening, setIsListening] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const recognition = useRef<SpeechRecognition | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
      recognition.current = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
      recognition.current.continuous = false;
      recognition.current.interimResults = false;

      recognition.current.onresult = (event: SpeechRecognitionEvent) => {
        const transcript = event.results[0][0].transcript;
        setInput(transcript);
        setIsListening(false);
      };

      recognition.current.onerror = () => {
        setIsListening(false);
      };

      recognition.current.onend = () => {
        setIsListening(false);
      };
    }
  }, []);

  const toggleListening = () => {
    if (!recognition.current) return;

    if (isListening) {
      recognition.current.stop();
    } else {
      recognition.current.start();
      setIsListening(true);
    }
  };

  const speak = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1;
    utterance.pitch = 1;
    window.speechSynthesis.speak(utterance);
  };

  const filteredProducts = products.filter((product) => {
    if (filters.category && product.category !== filters.category) return false;
    if (filters.minPrice && product.price < filters.minPrice) return false;
    if (filters.maxPrice && product.price > filters.maxPrice) return false;
    if (filters.query) {
      const query = filters.query.toLowerCase();
      return (
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }
    return true;
  });

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');

    const newFilters: SearchFilters = { ...filters };
    const lowercaseInput = input.toLowerCase();
    
    if (lowercaseInput.includes('electronics')) {
      newFilters.category = 'Electronics';
    } else if (lowercaseInput.includes('wearables')) {
      newFilters.category = 'Wearables';
    } else if (lowercaseInput.includes('clothing')) {
      newFilters.category = 'Clothing';
    }

    setFilters(newFilters);

    setTimeout(() => {
      const response = generateResponse(input, newFilters);
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: response,
        sender: 'assistant',
        timestamp: new Date(),
        products: filteredProducts,
      };
      setMessages((prev) => [...prev, assistantMessage]);
      speak(response);
    }, 1000);
  };

  const handleAddToCart = (productId: string) => {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    setCart((prev) => {
      const existingItem = prev.find(item => item.product.id === product.id);
      if (existingItem) {
        return prev.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (productId: string, change: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.product.id === productId
          ? { ...item, quantity: Math.max(1, Math.min(item.quantity + change, item.product.stock)) }
          : item
      )
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const MainContent = () => {
    const location = useLocation();
    const isHome = location.pathname === '/';

    return (
      <>
        {isHome && (
          <div className="relative mb-12">
            <div className="h-[500px] relative overflow-hidden rounded-xl">
              <img 
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600"
                alt="Shopping"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 flex items-center">
                <div className="max-w-7xl mx-auto px-4 w-full">
                  <div className="max-w-2xl">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                      Your AI Shopping Assistant
                    </h1>
                    <p className="text-xl text-gray-200 mb-8">
                      Discover perfect products with personalized recommendations
                    </p>
                    <div className="flex gap-4">
                      <button 
                        onClick={() => document.getElementById('chat-input')?.focus()}
                        className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors flex items-center gap-2"
                      >
                        <MessageCircle className="h-5 w-5" />
                        Let's Talk
                      </button>
                      <Link
                        to="/contact"
                        className="bg-white text-gray-900 px-6 py-3 rounded-full hover:bg-gray-100 transition-colors flex items-center gap-2"
                      >
                        <Phone className="h-5 w-5" />
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {isHome && (
            <div className="lg:col-span-3">
              <div className="bg-white rounded-lg shadow-md p-4 mb-8">
                <div className="h-[500px] overflow-y-auto mb-4">
                  {messages.map((message) => (
                    <div key={message.id} className="mb-4">
                      <ChatMessage 
                        message={message} 
                        onSpeak={() => speak(message.content)}
                      />
                    </div>
                  ))}
                  <div ref={messagesEndRef} />
                </div>

                <div className="flex gap-2">
                  <input
                    id="chat-input"
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Type your message..."
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    onClick={toggleListening}
                    className={`p-2 rounded-md transition-colors ${
                      isListening ? 'bg-red-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    <Mic className="h-5 w-5" />
                  </button>
                  <button
                    onClick={handleSend}
                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                  >
                    <Send className="h-5 w-5" />
                  </button>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {suggestedResponses.map((response) => (
                    <button
                      key={response}
                      onClick={() => setInput(response)}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors"
                    >
                      {response}
                    </button>
                  ))}
                </div>
              </div>

              <ProductFilters filters={filters} onFilterChange={setFilters} />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={() => handleAddToCart(product.id)}
                  />
                ))}
              </div>
            </div>
          )}

          <div className={`
            fixed inset-y-0 right-0 w-full max-w-md bg-white shadow-xl transform transition-transform duration-300 z-50
            ${showCart ? 'translate-x-0' : 'translate-x-full'}
            lg:relative lg:inset-auto lg:transform-none lg:shadow-none lg:transition-none
          `}>
            <div className="lg:sticky lg:top-4">
              <div className="flex justify-between items-center p-4 border-b lg:border-none">
                <h2 className="text-lg font-semibold">Shopping Cart</h2>
                <button
                  onClick={() => setShowCart(false)}
                  className="lg:hidden p-2 hover:bg-gray-100 rounded-full"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <Cart
                items={cart}
                onUpdateQuantity={handleUpdateQuantity}
                onRemoveItem={handleRemoveItem}
              />
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar
          cartItemCount={cart.reduce((sum, item) => sum + item.quantity, 0)}
          onCartClick={() => setShowCart(true)}
        />
        <div className="max-w-7xl mx-auto p-4">
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/product/:id" element={<ProductDetails onAddToCart={handleAddToCart} />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin" element={<AdminDashboard />}>
              <Route index element={<DashboardHome />} />
              <Route path="products" element={<AdminProducts />} />
              <Route path="orders" element={<Orders />} />
              <Route path="payments" element={<Payments />} />
            </Route>
            <Route path="/admin/*" element={<Navigate to="/admin" replace />} />
          </Routes>
        </div>
        <Toaster position="top-right" />
      </div>
    </Router>
  );
}

export default App;