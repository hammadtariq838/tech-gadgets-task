const products = [
  {
    id: '1',
    name: 'Airpods Wireless Bluetooth Headphones',
    imageUrl: './images/airpods.jpg',
    description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    price: 89.99,
  },
  {
    id: '2',
    name: 'iPhone 13 Pro 256GB Memory',
    imageUrl: './images/phone.jpg',
    description:
      'Introducing the iPhone 13 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life',
    price: 599.99,
  },
  {
    id: '3',
    name: 'Cannon EOS 80D DSLR Camera',
    imageUrl: './images/camera.jpg',
    description:
      'Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design',
    price: 929.99,
  },
  {
    id: '4',
    name: 'Sony Playstation 5',
    imageUrl: './images/playstation.jpg',
    description:
      'The ultimate home entertainment center starts with PlayStation. Whether you are into gaming, HD movies, television, music',
    price: 399.99,
  },
  {
    id: '5',
    name: 'Logitech G-Series Gaming Mouse',
    imageUrl: './images/mouse.jpg',
    description:
      'Get a better handle on your games with this Logitech LIGHTSYNC gaming mouse. The six programmable buttons allow customization for a smooth playing experience',
    price: 49.99,
  },
  {
    id: '6',
    name: 'Amazon Echo Dot 3rd Generation',
    imageUrl: './images/alexa.jpg',
    description:
      'Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space',
    price: 29.99,
  },
];


let cart = [];

function loadCart() {
  const savedCart = localStorage.getItem('cart');
  if (savedCart) {
    cart = JSON.parse(savedCart);
  }
}

function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

function addToCart(productId, quantity) {
  const product = products.find(p => p.id === productId);
  if (product) {
    const existingItem = cart.find(item => item.product.id === productId);
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.push({ product, quantity });
    }
    saveCart();
  }
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.product.id !== productId);
  saveCart();
}

function updateCartQuantity(productId, quantity) {
  const item = cart.find(item => item.product.id === productId);
  if (item) {
    item.quantity = quantity;
    saveCart();
  }
}

function getCartTotal() {
  return cart.reduce((total, item) => total + item.product.price * item.quantity, 0);
}

function clearCart() {
  cart = [];
  saveCart();
}

// Load cart from local storage when the script is first loaded
loadCart();