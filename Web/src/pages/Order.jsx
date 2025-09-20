import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Order = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    address: '',
    phone: '',
    email: '',
    notes: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Get cart from localStorage
    const cart = JSON.parse(localStorage.getItem('zanthium_cart')) || [];
    if (cart.length === 0) {
      alert('Your cart is empty!');
      return;
    }
    // Prepare order object
    const order = {
      items: cart,
      total: cart.reduce((sum, item) => sum + (item.price || 0), 0),
      date: new Date().toLocaleString(),
      customer: form,
    };
    // Get existing orders
    const orders = JSON.parse(localStorage.getItem('zanthium_orders')) || [];
    // Add new order
    orders.push(order);
    localStorage.setItem('zanthium_orders', JSON.stringify(orders));
    // Clear cart
    localStorage.removeItem('zanthium_cart');
    // Redirect
    navigate('/thankyou');
  };

  return (
    <div className="order-info-container" style={{ maxWidth: 500, margin: '40px auto', background: '#fafbfc', padding: 32, borderRadius: 12, boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }}>
      <h1 style={{ textAlign: 'center', marginBottom: 24 }}>Order Information</h1>
      <form onSubmit={handleSubmit} className="order-info-form" style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
        <input name="name" value={form.name} onChange={handleChange} placeholder="Full Name" required style={{ padding: 12, borderRadius: 8, border: '1.5px solid #4fd1c5' }} />
        <input name="address" value={form.address} onChange={handleChange} placeholder="Shipping Address" required style={{ padding: 12, borderRadius: 8, border: '1.5px solid #4fd1c5' }} />
        <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone Number" required style={{ padding: 12, borderRadius: 8, border: '1.5px solid #4fd1c5' }} />
        <input name="email" value={form.email} onChange={handleChange} placeholder="Email Address" required style={{ padding: 12, borderRadius: 8, border: '1.5px solid #4fd1c5' }} />
        <textarea name="notes" value={form.notes} onChange={handleChange} placeholder="Order Notes (optional)" style={{ padding: 12, borderRadius: 8, border: '1.5px solid #4fd1c5', minHeight: 70 }} />
        <button type="submit" style={{ background: '#2563eb', color: '#fff', border: 'none', padding: '14px 0', borderRadius: 8, fontWeight: 700, fontSize: '1.1rem', marginTop: 10, cursor: 'pointer', transition: 'background 0.2s' }}>Place Order</button>
      </form>
    </div>
  );
};

export default Order; 