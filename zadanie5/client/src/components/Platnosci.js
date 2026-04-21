import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Platnosci.css';

function Platnosci({ cartItems, onPaymentSuccess }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    if (!formData.firstName.trim()) return 'Imię jest wymagane';
    if (!formData.lastName.trim()) return 'Nazwisko jest wymagane';
    if (!formData.email.includes('@')) return 'Email jest wymagany';
    if (formData.cardNumber.length !== 16) return 'Numer karty musi mieć 16 cyfr';
    if (!formData.expiryDate.match(/^\d{2}\/\d{2}$/)) return 'Data ważności musi być w formacie MM/YY';
    if (formData.cvv.length !== 3) return 'CVV musi mieć 3 cyfry';
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const paymentData = {
        customer: {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
        },
        payment: {
          cardNumber: formData.cardNumber,
          expiryDate: formData.expiryDate,
          cvv: formData.cvv,
        },
        items: cartItems.map(item => ({
          id: item.id,
          name: item.name,
          price: item.price,
          quantity: item.quantity,
        })),
        total: total,
      };

      await axios.post('http://localhost:8080/api/payments', paymentData);

      setSuccess(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        cardNumber: '',
        expiryDate: '',
        cvv: '',
      });

      

      setTimeout(() => {
        onPaymentSuccess();

        navigate('/');
      }, 3000);
    } catch (err) {
      setError('Błąd podczas przetwarzania płatności. Spróbuj ponownie.');
      console.error('Błąd płatności:', err);
    } finally {
      setLoading(false);
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="platnosci-container">
        <h1>Płatności</h1>
        <div className="empty-payment">
          <p>Koszyk jest pusty. Dodaj produkty przed płatnością.</p>
          <button onClick={() => navigate('/')} className="back-btn">
            Wróć do produktów
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="platnosci-container">
      <h1>Płatności</h1>
      {success ? (
        <div className="success-message">
          <h2>✓ Płatność przesłana pomyślnie!</h2>
          <p>Dziękujemy za Twój zakup. Zostaniesz przekierowany na stronę główną.</p>
        </div>
      ) : (
        <div className="payment-content">
          <form className="payment-form" onSubmit={handleSubmit}>
            <div className="form-section">
              <h2>Dane osobowe</h2>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">Imię</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Nazwisko</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-section">
              <h2>Dane karty</h2>
              <div className="form-group">
                <label htmlFor="cardNumber">Numer karty (16 cyfr)</label>
                <input
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleChange}
                  placeholder="0000 0000 0000 0000"
                  maxLength="16"
                  pattern="[0-9]{16}"
                  required
                />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="expiryDate">Data ważności (MM/YY)</label>
                  <input
                    type="text"
                    id="expiryDate"
                    name="expiryDate"
                    value={formData.expiryDate}
                    onChange={handleChange}
                    placeholder="12/25"
                    pattern="\d{2}/\d{2}"
                    maxLength="5"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="cvv">CVV (3 cyfry)</label>
                  <input
                    type="text"
                    id="cvv"
                    name="cvv"
                    value={formData.cvv}
                    onChange={handleChange}
                    placeholder="123"
                    maxLength="3"
                    pattern="[0-9]{3}"
                    required
                  />
                </div>
              </div>
            </div>

            {error && <div className="error-message">{error}</div>}

            <div className="form-section">
              <h2>Podsumowanie</h2>
              <div className="order-summary">
                {cartItems.map(item => (
                  <div key={item.id} className="summary-item">
                    <span>{item.name} x{item.quantity}</span>
                    <span>{(item.price * item.quantity).toFixed(2)} zł</span>
                  </div>
                ))}
                <div className="summary-total">
                  <span>Razem:</span>
                  <span>{total.toFixed(2)} zł</span>
                </div>
              </div>
            </div>

            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? 'Przetwarzanie...' : `Zapłać ${total.toFixed(2)} zł`}
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Platnosci;
