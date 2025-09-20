import React, { useState, useEffect } from 'react';
import './Orders.css';

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    setOrders(getOrders());
  }, []);

  function getOrders() {
    const orders = localStorage.getItem('zanthium_orders');
    return orders ? JSON.parse(orders) : [];
  }

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="orders-container">
      <div className="orders-header">
        <h1>Your Orders</h1>
        <p className="orders-subtitle">Track and manage your orders</p>
      </div>
      
      {orders.length === 0 ? (
        <div className="no-orders">
          <div className="no-orders-icon">📦</div>
          <p>No orders available.</p>
          <p className="no-orders-subtext">Your order history will appear here</p>
        </div>
      ) : (
        <div className="orders-grid">
          {orders.map((order, index) => (
            <div key={index} className="order-card">
              <div className="order-header">
                <h3>Order #{index + 1}</h3>
                <span className="order-status">Delivered</span>
              </div>
              
              <div className="order-details">
                <div className="order-info">
                  <p className="order-date">
                    <span className="label">Order Date:</span>
                    {formatDate(order.date)}
                  </p>
                  <p className="order-total">
                    <span className="label">Total Amount:</span>
                    <span className="amount">${order.total || 0}</span>
                  </p>
                </div>

                <div className="order-items">
                  <h4>Items</h4>
                  <ul>
                    {order.items && order.items.map((item, idx) => (
                      <li key={idx} className="order-item-row">
                        <span className="item-name">{item.name}</span>
                        <span className="item-price">${item.price}</span>
                      </li>
                    ))} 
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders; 