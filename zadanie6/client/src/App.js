import React, { useState, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Produkty from './components/Produkty';
import Koszyk from './components/Koszyk';
import Platnosci from './components/Platnosci';
import Navigation from './components/Navigation';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = useCallback((product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  }, []);

  const removeFromCart = useCallback((productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  }, []);

  const updateQuantity = useCallback((productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
    } else {
      setCart(prevCart =>
        prevCart.map(item =>
          item.id === productId ? { ...item, quantity } : item
        )
      );
    }
  }, [removeFromCart]);

  const clearCart = useCallback(() => {
    setCart([]);
  }, []);

  return (
    <Router>
      <div className="App">
        <Navigation cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)} />
        <main className="app-container">
          <Routes>
            <Route
              path="/"
              element={<Produkty onAddToCart={addToCart} />}
            />
            <Route
              path="/koszyk"
              element={
                <Koszyk
                  items={cart}
                  onRemove={removeFromCart}
                  onUpdateQuantity={updateQuantity}
                  onClear={clearCart}
                />
              }
            />
            <Route
              path="/platnosci"
              element={
                <Platnosci
                  cartItems={cart}
                  onPaymentSuccess={clearCart}
                />
              }
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
