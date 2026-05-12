import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation({ cartCount }) {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          E-Commerce Store
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link" data-cy="nav-products">
              Produkty
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/koszyk" className="nav-link " data-cy="nav-cart">
              Koszyk ({cartCount})
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/platnosci" className="nav-link" data-cy="nav-payment">
              Płatności
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
