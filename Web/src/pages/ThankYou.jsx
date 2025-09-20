import React from 'react';

const ThankYou = () => (
  <div style={{ maxWidth: 500, margin: '80px auto', background: '#fafbfc', padding: 40, borderRadius: 12, boxShadow: '0 2px 12px rgba(0,0,0,0.08)', textAlign: 'center' }}>
    <img src="https://cdn-icons-png.flaticon.com/512/190/190411.png" alt="Thank You" style={{ width: 90, marginBottom: 24 }} />
    <h1 style={{ color: '#2563eb', marginBottom: 18 }}>Thank You for Your Order!</h1>
    <p style={{ color: '#444', fontSize: '1.1rem' }}>We appreciate your business. Your order has been received and is being processed.<br />You will receive a confirmation email soon.</p>
    <a href="/store" style={{ display: 'inline-block', marginTop: 32, background: '#2563eb', color: '#fff', padding: '12px 32px', borderRadius: 8, fontWeight: 700, textDecoration: 'none', fontSize: '1.05rem' }}>Continue Shopping</a>
  </div>
);

export default ThankYou; 