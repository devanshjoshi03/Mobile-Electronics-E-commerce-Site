import React, { useState, useEffect } from 'react';
import './Cart.css';
import { Link, useNavigate } from 'react-router-dom';

function getCart() {
  const cart = localStorage.getItem('zanthium_cart');
  return cart ? JSON.parse(cart) : [];
}

function setCart(cart) {
  localStorage.setItem('zanthium_cart', JSON.stringify(cart));
}

const Cart = () => {
  const [cart, setCartState] = useState(getCart());
  const navigate = useNavigate();

  useEffect(() => {
    setCart(cart);
  }, [cart]);

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCartState(newCart);
  };

  const total = cart.reduce((sum, item) => sum + (item.price || 0), 0);

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h1>Your Cart</h1>
        <Link to="/store" className="back-to-store">Back to Store</Link>
      </div>
      {cart.length === 0 ? (
        <div className="cart-empty">Your cart is empty.</div>
      ) : (
        <>
          <div className="cart-list">
            {cart.map((item, idx) => (
              <div className="cart-item" key={idx}>
                <img src={item.img} alt={item.name} />
                <div className="cart-item-info">
                  <div className="cart-item-name">{item.name}</div>
                  <div className="cart-item-price">${item.price.toLocaleString()}</div>
                </div>
                <button className="remove-btn" onClick={() => removeFromCart(idx)}>Remove</button>
              </div>
            ))}
          </div>
          <div className="cart-total">
            <span>Total:</span>
            <span className="cart-total-price">${total.toLocaleString()}</span>
          </div>
          <div className="cart-order-btn-row">
            <button className="order-now-btn" onClick={() => navigate('/order')}>Order Now</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart; 