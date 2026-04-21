import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Produkty.css';

function Produkty({ onAddToCart }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://localhost:8080/api/products');
      setProducts(response.data);
      setError(null);
    } catch (err) {
      setError('Nie udało się pobrać produktów. Upewnij się, że serwer jest uruchomiony.');
      console.error('Błąd podczas pobierania produktów:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="produkty-container"><p>Ładowanie produktów...</p></div>;
  }

  if (error) {
    return (
      <div className="produkty-container">
        <p className="error">{error}</p>
        <button onClick={fetchProducts} className="retry-btn">Spróbuj ponownie</button>
      </div>
    );
  }

  return (
    <div className="produkty-container">
      <h1>Produkty</h1>
      {products.length === 0 ? (
        <p>Brak produktów do wyświetlenia</p>
      ) : (
        <div className="products-grid">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <h3>{product.name}</h3>
              <p className="category">Kategoria: {product.category}</p>
              <p className="description">{product.description}</p>
              <div className="product-footer">
                <span className="price">{product.price} zł</span>
                <button
                  className="add-to-cart-btn"
                  onClick={() => onAddToCart(product)}
                >
                  Dodaj do koszyka
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Produkty;
