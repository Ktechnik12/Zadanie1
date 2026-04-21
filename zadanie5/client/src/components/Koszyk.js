import React from 'react';
import { Link } from 'react-router-dom';
import './Koszyk.css';

function Koszyk({ items, onRemove, onUpdateQuantity, onClear }) {
  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  if (items.length === 0) {
    return (
      <div className="koszyk-container">
        <h1>Koszyk</h1>
        <div className="empty-cart">
          <p>Twój koszyk jest pusty</p>
          <Link to="/" className="continue-shopping-btn">
            Wróć do produktów
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="koszyk-container">
      <h1>Koszyk</h1>
      <div className="cart-content">
        <div className="cart-items">
          {items.map(item => (
            <div key={item.id} className="cart-item">
              <div className="item-info">
                <h3>{item.name}</h3>
                <p className="item-category">{item.category}</p>
                <p className="item-price">Cena: {item.price} zł</p>
              </div>
              <div className="item-quantity">
                <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}>
                  −
                </button>
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => onUpdateQuantity(item.id, parseInt(e.target.value) || 1)}
                  min="1"
                />
                <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>
                  +
                </button>
              </div>
              <div className="item-total">
                <p>{(item.price * item.quantity).toFixed(2)} zł</p>
              </div>
              <button
                className="remove-btn"
                onClick={() => onRemove(item.id)}
              >
                Usuń
              </button>
            </div>
          ))}
        </div>
        <div className="cart-summary">
          <div className="summary-item">
            <span>Razem:</span>
            <strong>{total.toFixed(2)} zł</strong>
          </div>
          <Link to="/platnosci" className="checkout-btn">
            Przejdź do płatności
          </Link>
          <button className="clear-cart-btn" onClick={onClear}>
            Wyczyść koszyk
          </button>
          <Link to="/" className="continue-btn">
            Kontynuuj zakupy
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Koszyk;
