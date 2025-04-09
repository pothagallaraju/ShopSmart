import { Product, SearchFilters } from './types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    price: 199.99,
    description: 'High-quality wireless headphones with active noise cancellation, 30-hour battery life, and premium sound quality.',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
    category: 'Electronics',
    tags: ['wireless', 'audio', 'noise-cancelling'],
    stock: 15
  },
  {
    id: '2',
    name: 'Smart Fitness Watch',
    price: 149.99,
    description: 'Track your fitness goals with heart rate monitoring, GPS, and sleep tracking. Water-resistant up to 50m.',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800',
    category: 'Wearables',
    tags: ['smart', 'fitness', 'waterproof'],
    stock: 25
  },
  {
    id: '3',
    name: 'Organic Cotton T-Shirt',
    price: 29.99,
    description: 'Comfortable and sustainable 100% organic cotton t-shirt. Available in multiple colors.',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800',
    category: 'Clothing',
    tags: ['organic', 'sustainable', 'casual'],
    stock: 50
  },
  {
    id: '4',
    name: 'Wireless Gaming Mouse',
    price: 79.99,
    description: 'Ultra-responsive wireless gaming mouse with RGB lighting and programmable buttons.',
    image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=800',
    category: 'Electronics',
    tags: ['gaming', 'wireless', 'rgb'],
    stock: 30
  },
  {
    id: '5',
    name: 'Mechanical Keyboard',
    price: 129.99,
    description: 'Premium mechanical keyboard with RGB backlight and hot-swappable switches.',
    image: 'https://images.unsplash.com/photo-1595225476474-87563907a212?w=800',
    category: 'Electronics',
    tags: ['mechanical', 'rgb', 'gaming'],
    stock: 20
  },
  {
    id: '6',
    name: 'Ultra HD Webcam',
    price: 89.99,
    description: '4K webcam with auto-focus and low-light correction for crystal clear video calls.',
    image: 'https://images.unsplash.com/photo-1587826080692-f439cd0c2874?w=800',
    category: 'Electronics',
    tags: ['4k', 'video', 'streaming'],
    stock: 18
  },
  {
    id: '7',
    name: 'Smart Home Hub',
    price: 159.99,
    description: 'Central control for all your smart home devices with voice control and automation.',
    image: 'https://images.unsplash.com/photo-1558089687-f282ffcbc126?w=800',
    category: 'Electronics',
    tags: ['smart-home', 'automation', 'voice-control'],
    stock: 12
  },
  {
    id: '8',
    name: 'Wireless Earbuds',
    price: 129.99,
    description: 'True wireless earbuds with active noise cancellation and wireless charging case.',
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800',
    category: 'Electronics',
    tags: ['wireless', 'audio', 'portable'],
    stock: 35
  },
  {
    id: '9',
    name: 'Running Shoes',
    price: 119.99,
    description: 'Lightweight and breathable running shoes with responsive cushioning.',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800',
    category: 'Clothing',
    tags: ['sports', 'running', 'athletic'],
    stock: 40
  },
  {
    id: '10',
    name: 'Smart Water Bottle',
    price: 44.99,
    description: 'Track your hydration with LED indicators and smartphone connectivity.',
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=800',
    category: 'Wearables',
    tags: ['smart', 'hydration', 'fitness'],
    stock: 28
  },
  {
    id: '11',
    name: 'Wireless Charging Pad',
    price: 39.99,
    description: 'Fast wireless charging for all Qi-compatible devices with LED indicator.',
    image: 'https://images.unsplash.com/photo-1586816879360-004f5b0c51e3?w=800',
    category: 'Electronics',
    tags: ['charging', 'wireless', 'accessories'],
    stock: 45
  },
  {
    id: '12',
    name: 'Smart Scale',
    price: 69.99,
    description: 'WiFi-connected scale that measures weight, body fat, and other metrics.',
    image: 'https://images.unsplash.com/photo-1576515652031-fc429bab6503?w=800',
    category: 'Wearables',
    tags: ['smart', 'fitness', 'health'],
    stock: 22
  },
  {
    id: '13',
    name: 'Denim Jacket',
    price: 89.99,
    description: 'Classic denim jacket made from sustainable materials and ethical manufacturing.',
    image: 'https://images.unsplash.com/photo-1523205771623-e0faa4d2813d?w=800',
    category: 'Clothing',
    tags: ['denim', 'sustainable', 'casual'],
    stock: 30
  },
  {
    id: '14',
    name: 'Smart Coffee Maker',
    price: 199.99,
    description: 'WiFi-enabled coffee maker with scheduling and customizable brewing options.',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800',
    category: 'Electronics',
    tags: ['smart-home', 'coffee', 'kitchen'],
    stock: 15
  },
  {
    id: '15',
    name: 'Yoga Mat',
    price: 49.99,
    description: 'Eco-friendly yoga mat with alignment lines and carrying strap.',
    image: 'https://images.unsplash.com/photo-1592432678016-e910b452f9a2?w=800',
    category: 'Clothing',
    tags: ['yoga', 'fitness', 'sustainable'],
    stock: 55
  },
  {
    id: '16',
    name: 'Smart Door Lock',
    price: 179.99,
    description: 'Keyless entry with fingerprint, code, and smartphone unlock options.',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=800',
    category: 'Electronics',
    tags: ['smart-home', 'security', 'automation'],
    stock: 18
  },
  {
    id: '17',
    name: 'Fitness Resistance Bands',
    price: 24.99,
    description: 'Set of 5 resistance bands with different strengths for home workouts.',
    image: 'https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=800',
    category: 'Wearables',
    tags: ['fitness', 'workout', 'home-gym'],
    stock: 60
  },
  {
    id: '18',
    name: 'Smart Light Bulbs',
    price: 34.99,
    description: 'Color-changing smart LED bulbs with voice control and scheduling.',
    image: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=800',
    category: 'Electronics',
    tags: ['smart-home', 'lighting', 'automation'],
    stock: 40
  },
  {
    id: '19',
    name: 'Wireless Speaker',
    price: 149.99,
    description: 'Portable wireless speaker with 360° sound and waterproof design.',
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800',
    category: 'Electronics',
    tags: ['audio', 'wireless', 'portable'],
    stock: 25
  },
  {
    id: '20',
    name: 'Running Shorts',
    price: 34.99,
    description: 'Lightweight running shorts with built-in compression liner.',
    image: 'https://images.unsplash.com/photo-1515586838455-8f8f940d6853?w=800',
    category: 'Clothing',
    tags: ['running', 'sports', 'athletic'],
    stock: 45
  },
  {
    id: '21',
    name: 'Smart Thermostat',
    price: 199.99,
    description: 'Energy-saving smart thermostat with learning capabilities and remote control.',
    image: 'https://images.unsplash.com/photo-1567925086983-a5dcc4bc0461?w=800',
    category: 'Electronics',
    tags: ['smart-home', 'climate', 'automation'],
    stock: 20
  },
  {
    id: '22',
    name: 'Compression Socks',
    price: 19.99,
    description: 'Athletic compression socks for improved circulation and recovery.',
    image: 'https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?w=800',
    category: 'Clothing',
    tags: ['sports', 'recovery', 'fitness'],
    stock: 70
  },
  {
    id: '23',
    name: 'Smart Security Camera',
    price: 129.99,
    description: 'HD security camera with night vision and two-way audio.',
    image: 'https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?w=800',
    category: 'Electronics',
    tags: ['smart-home', 'security', 'camera'],
    stock: 30
  },
  {
    id: '24',
    name: 'Workout Tank Top',
    price: 29.99,
    description: 'Moisture-wicking tank top with breathable mesh panels.',
    image: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=800',
    category: 'Clothing',
    tags: ['workout', 'fitness', 'athletic'],
    stock: 55
  },
  {
    id: '25',
    name: 'Smart Plant Sensor',
    price: 44.99,
    description: 'Monitor soil moisture, sunlight, and temperature for your plants.',
    image: 'https://images.unsplash.com/photo-1585336261022-680e295ce3fe?w=800',
    category: 'Electronics',
    tags: ['smart-home', 'garden', 'automation'],
    stock: 25
  },
  {
    id: '26',
    name: 'Sleep Tracking Pad',
    price: 99.99,
    description: 'Place under your mattress to track sleep quality and patterns.',
    image: 'https://images.unsplash.com/photo-1544139126-cf49d0700fed?w=800',
    category: 'Wearables',
    tags: ['sleep', 'health', 'tracking'],
    stock: 18
  },
  {
    id: '27',
    name: 'Smart Mirror',
    price: 299.99,
    description: 'Interactive mirror with weather, calendar, and fitness tracking.',
    image: 'https://images.unsplash.com/photo-1493606371202-6275828f90f3?w=800',
    category: 'Electronics',
    tags: ['smart-home', 'fitness', 'automation'],
    stock: 10
  },
  {
    id: '28',
    name: 'Hiking Backpack',
    price: 79.99,
    description: 'Waterproof hiking backpack with hydration system compatibility.',
    image: 'https://images.unsplash.com/photo-1622260614153-03223fb72052?w=800',
    category: 'Clothing',
    tags: ['hiking', 'outdoor', 'adventure'],
    stock: 35
  },
  {
    id: '29',
    name: 'Smart Air Purifier',
    price: 249.99,
    description: 'HEPA air purifier with air quality monitoring and smartphone control.',
    image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800',
    category: 'Electronics',
    tags: ['smart-home', 'health', 'air-quality'],
    stock: 15
  },
  {
    id: '30',
    name: 'Sport Smartwatch',
    price: 299.99,
    description: 'Advanced smartwatch with GPS, heart rate, and workout tracking.',
    image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=800',
    category: 'Wearables',
    tags: ['smart', 'fitness', 'sports'],
    stock: 20
  },
  {
    id: '31',
    name: 'Basketball',
    price: 29.99,
    description: 'Professional indoor/outdoor basketball with superior grip and durability.',
    image: 'https://images.unsplash.com/photo-1519861531473-9200262188bf?w=800',
    category: 'Sports',
    tags: ['basketball', 'sports', 'outdoor'],
    stock: 40
  },
  {
    id: '32',
    name: 'Tennis Racket',
    price: 159.99,
    description: 'Professional tennis racket with advanced string pattern for better control.',
    image: 'https://images.unsplash.com/photo-1617083277686-8fa38a1cd271?w=800',
    category: 'Sports',
    tags: ['tennis', 'sports', 'racket'],
    stock: 25
  },
  {
    id: '33',
    name: 'Soccer Ball',
    price: 39.99,
    description: 'Match-quality soccer ball with water-resistant coating.',
    image: 'https://images.unsplash.com/photo-1614632537197-38a17061c2bd?w=800',
    category: 'Sports',
    tags: ['soccer', 'football', 'sports'],
    stock: 35
  },
  {
    id: '34',
    name: 'Yoga Mat',
    price: 49.99,
    description: 'Premium non-slip yoga mat with alignment lines.',
    image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=800',
    category: 'Sports',
    tags: ['yoga', 'fitness', 'exercise'],
    stock: 45
  },
  {
    id: '35',
    name: 'Dumbbells Set',
    price: 129.99,
    description: 'Adjustable dumbbells set with storage rack.',
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800',
    category: 'Sports',
    tags: ['weights', 'fitness', 'exercise'],
    stock: 20
  },
  {
    id: '36',
    name: 'Designer Leather Jacket',
    price: 299.99,
    description: 'Premium leather jacket with quilted lining and modern design. Perfect for any casual or semi-formal occasion.',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800',
    category: 'Clothing',
    tags: ['leather', 'jacket', 'premium'],
    stock: 20
  },
  {
    id: '37',
    name: 'Casual Linen Shirt',
    price: 59.99,
    description: 'Breathable linen shirt perfect for summer. Available in various colors.',
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800',
    category: 'Clothing',
    tags: ['linen', 'casual', 'summer'],
    stock: 45
  },
  {
    id: '38',
    name: 'Slim Fit Chinos',
    price: 79.99,
    description: 'Classic slim fit chinos made from stretch cotton for maximum comfort.',
    image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800',
    category: 'Clothing',
    tags: ['pants', 'casual', 'cotton'],
    stock: 35
  },
  {
    id: '39',
    name: 'Wool Blend Sweater',
    price: 89.99,
    description: 'Warm and stylish wool blend sweater perfect for cold weather.',
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800',
    category: 'Clothing',
    tags: ['sweater', 'wool', 'winter'],
    stock: 30
  },
  {
    id: '40',
    name: 'Classic White Sneakers',
    price: 129.99,
    description: 'Minimalist white leather sneakers that go with everything.',
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800',
    category: 'Clothing',
    tags: ['shoes', 'sneakers', 'casual'],
    stock: 40
  },
  {
    id: '41',
    name: 'Floral Summer Dress',
    price: 79.99,
    description: 'Light and airy floral print dress perfect for summer days.',
    image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800',
    category: 'Clothing',
    tags: ['dress', 'summer', 'floral'],
    stock: 25
  },
  {
    id: '42',
    name: 'Tailored Blazer',
    price: 199.99,
    description: 'Professional tailored blazer suitable for office and formal occasions.',
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800',
    category: 'Clothing',
    tags: ['blazer', 'formal', 'professional'],
    stock: 20
  },
  {
    id: '43',
    name: 'Silk Scarf',
    price: 49.99,
    description: 'Elegant silk scarf with artistic print design.',
    image: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=800',
    category: 'Clothing',
    tags: ['accessories', 'silk', 'fashion'],
    stock: 50
  },
  {
    id: '44',
    name: 'Denim Overalls',
    price: 89.99,
    description: 'Casual denim overalls with adjustable straps and multiple pockets.',
    image: 'https://images.unsplash.com/photo-1544441893-675973e31985?w=800',
    category: 'Clothing',
    tags: ['denim', 'casual', 'overalls'],
    stock: 30
  },
  {
    id: '45',
    name: 'Vintage Leather Belt',
    price: 45.99,
    description: 'Classic leather belt with antique finish buckle.',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800',
    category: 'Clothing',
    tags: ['accessories', 'leather', 'vintage'],
    stock: 40
  },
  {
    id: 'shoe-1',
    name: 'Nike Air Max 270',
    price: 149.99,
    description: 'Iconic Nike Air Max 270 featuring revolutionary Air unit for all-day comfort. Perfect for both athletic performance and casual wear.',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800',
    category: 'Shoes',
    tags: ['nike', 'sneakers', 'running', 'athletic'],
    stock: 25
  },
  {
    id: 'shoe-2',
    name: 'Adidas Ultraboost',
    price: 179.99,
    description: 'Premium running shoes with responsive Boost cushioning and Primeknit upper for ultimate comfort and performance.',
    image: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=800',
    category: 'Shoes',
    tags: ['adidas', 'running', 'boost', 'athletic'],
    stock: 20
  },
  {
    id: 'shoe-3',
    name: 'Puma RS-X',
    price: 119.99,
    description: 'Bold and chunky lifestyle sneakers with RS technology for enhanced comfort and street-ready style.',
    image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800',
    category: 'Shoes',
    tags: ['puma', 'sneakers', 'lifestyle', 'streetwear'],
    stock: 30
  },
  {
    id: 'shoe-4',
    name: 'Skechers D\'Lites',
    price: 69.99,
    description: 'Comfortable and stylish sneakers with memory foam insole and lightweight cushioning.',
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800',
    category: 'Shoes',
    tags: ['skechers', 'comfort', 'casual', 'walking'],
    stock: 40
  },
  {
    id: 'shoe-5',
    name: 'Nike Air Jordan 1',
    price: 189.99,
    description: 'Legendary high-top basketball sneakers with premium leather and iconic design.',
    image: 'https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=800',
    category: 'Shoes',
    tags: ['nike', 'basketball', 'jordan', 'high-top'],
    stock: 15
  },
  {
    id: 'furniture-1',
    name: 'Modern Leather Sofa',
    price: 999.99,
    description: 'Contemporary 3-seater leather sofa with clean lines and premium comfort. Perfect for modern living rooms.',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800',
    category: 'Furniture',
    tags: ['sofa', 'leather', 'modern', 'living room'],
    stock: 5
  },
  {
    id: 'furniture-2',
    name: 'Scandinavian Dining Table',
    price: 599.99,
    description: 'Minimalist dining table crafted from solid oak with sleek design and durable construction.',
    image: 'https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?w=800',
    category: 'Furniture',
    tags: ['dining', 'table', 'scandinavian', 'wooden'],
    stock: 8
  },
  {
    id: 'furniture-3',
    name: 'Ergonomic Office Chair',
    price: 299.99,
    description: 'Professional office chair with adjustable lumbar support, armrests, and breathable mesh back.',
    image: 'https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?w=800',
    category: 'Furniture',
    tags: ['office', 'chair', 'ergonomic', 'professional'],
    stock: 12
  },
  {
    id: 'furniture-4',
    name: 'Queen Size Platform Bed',
    price: 799.99,
    description: 'Modern platform bed with integrated headboard and solid wood frame. No box spring needed.',
    image: 'https://images.unsplash.com/photo-1505693314120-0d443867891c?w=800',
    category: 'Furniture',
    tags: ['bed', 'bedroom', 'queen', 'modern'],
    stock: 6
  },
  {
    id: 'furniture-5',
    name: 'Storage Bookshelf',
    price: 249.99,
    description: 'Versatile 5-tier bookshelf with modern industrial design, perfect for books and decorative items.',
    image: 'https://images.unsplash.com/photo-1594620302200-9a762244a156?w=800',
    category: 'Furniture',
    tags: ['bookshelf', 'storage', 'industrial', 'modern'],
    stock: 15
  }
];

export const categories = Array.from(new Set(products.map(p => p.category)));

export const suggestedResponses = [
  "Show me the latest electronics",
  "I'm looking for gaming accessories",
  "What's on sale?",
  "Help me find sustainable products",
  "Show me fitness equipment",
  "I need smart home devices",
  "Show me Nike shoes",
  "Looking for living room furniture",
  "Show me office furniture",
  "I need comfortable running shoes",
  "Show me modern sofas"
];

export const generateResponse = (input: string, filters: SearchFilters): string => {
  const lowercaseInput = input.toLowerCase();
  
  if (lowercaseInput.includes('hello') || lowercaseInput.includes('hi')) {
    return "Hello! I'm here to help you find the perfect products. What are you looking for today?";
  }
  
  if (lowercaseInput.includes('shoes') || lowercaseInput.includes('sneakers')) {
    return "I'll show you our collection of premium shoes from top brands like Nike, Adidas, Puma, and Skechers. Whether you're looking for running shoes, casual sneakers, or athletic footwear, we have something for every style and need.";
  }
  
  if (lowercaseInput.includes('furniture')) {
    return "Here's our selection of high-quality furniture. We have everything from modern sofas to ergonomic office chairs and stylish dining tables. Let me know if you're looking for something specific!";
  }
  
  if (lowercaseInput.includes('gaming')) {
    return "I've found some great gaming accessories that might interest you. We have high-performance mice and keyboards with RGB lighting.";
  }
  
  if (lowercaseInput.includes('sustainable') || lowercaseInput.includes('organic')) {
    return "Here are our eco-friendly and sustainable products. We're committed to offering environmentally conscious options.";
  }
  
  if (lowercaseInput.includes('sale') || lowercaseInput.includes('discount')) {
    return "I'll show you our current deals and discounted items. We regularly update our special offers.";
  }

  if (lowercaseInput.includes('smart home') || lowercaseInput.includes('automation')) {
    return "I can show you our selection of smart home devices, from security cameras to thermostats. These can help automate your home and make life easier.";
  }

  if (lowercaseInput.includes('fitness') || lowercaseInput.includes('workout')) {
    return "We have a great selection of fitness equipment and workout gear. From smart watches to resistance bands, we've got everything you need for your fitness journey.";
  }

  if (lowercaseInput.includes('sports')) {
    return "Check out our sports equipment collection! We have everything from basketballs to tennis rackets for both beginners and professionals.";
  }

  if (lowercaseInput.includes('clothing') || lowercaseInput.includes('clothes')) {
    return "I'll show you our latest clothing collection. We have everything from casual wear to formal attire, including accessories and seasonal items.";
  }
  
  if (filters.category) {
    return `Here are the products in the ${filters.category} category that match your criteria.`;
  }
  
  return "I can help you find products based on your preferences. Feel free to ask about specific categories, features, or price ranges.";
};