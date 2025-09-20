import React, { useState } from 'react';
import './Contact.css';

const contactMethods = [
  {
    title: 'Email',
    value: 'info@zanthium.com',
    icon: '📧',
    link: 'mailto:info@zanthium.com'
  },
  {
    title: 'Phone',
    value: '+1 234 567 8900',
    icon: '📞',
    link: 'tel:+12345678900'
  },
  {
    title: 'Address',
    value: 'Rudrapur, Uttarakhand',
    icon: '📍',
    link: 'https://maps.google.com/?q=Rudrapur,Uttarakhand'
  },
];

const socialLinks = [
  {
    name: 'LinkedIn',
    icon: 'https://cdn-icons-png.flaticon.com/512/174/174857.png',
    link: 'https://linkedin.com/company/zanthium'
  },
  {
    name: 'Twitter',
    icon: 'https://cdn-icons-png.flaticon.com/512/733/733579.png',
    link: 'https://twitter.com/zanthium'
  },
  {
    name: 'Facebook',
    icon: 'https://cdn-icons-png.flaticon.com/512/124/124010.png',
    link: 'https://facebook.com/zanthium'
  },
  {
    name: 'Instagram',
    icon: 'https://cdn-icons-png.flaticon.com/512/174/174855.png',
    link: 'https://instagram.com/zanthium'
  }
];

const getInTouch = [
  {
    title: 'Customer Support',
    img: 'https://cdn-icons-png.flaticon.com/512/1828/1828919.png',
    desc: 'Our team is here to help you with product questions, orders, and more.'
  },
  {
    title: 'Business Inquiries',
    img: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
    desc: 'Interested in partnering with us? Let\'s connect and grow together.'
  },
  {
    title: 'Feedback & Suggestions',
    img: 'https://cdn-icons-png.flaticon.com/512/1256/1256650.png',
    desc: 'We value your feedback to improve our services and offerings.'
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setFormStatus({ type: 'success', message: 'Thank you for your message! We\'ll get back to you soon.' });
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setFormStatus({ type: '', message: '' }), 5000);
  };

  return (
    <div className="contact-container">
      <section className="contact-hero">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1250/1250615.png"
          alt="Contact Us"
          className="contact-hero-img"
        />
        <h1>Get in Touch</h1>
        <p>We'd love to hear from you! Reach out with any questions, feedback, or partnership opportunities.</p>
      </section>

      <section className="get-in-touch-section">
        <h2>How Can We Help?</h2>
        <div className="get-in-touch-grid">
          {getInTouch.map((item, i) => (
            <div className="get-in-touch-card" key={i}>
              <img src={item.img} alt={item.title} className="get-in-touch-img" />
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="contact-info">
        {contactMethods.map((method, i) => (
          <a href={method.link} className="contact-info-card" key={i} target="_blank" rel="noopener noreferrer">
            <div className="contact-icon">{method.icon}</div>
            <h3>{method.title}</h3>
            <p>{method.value}</p>
          </a>
        ))}
      </section>

      <section className="contact-form-section">
        <h2>Send us a Message</h2>
        {formStatus.message && (
          <div className={`form-status ${formStatus.type}`}>
            {formStatus.message}
          </div>
        )}
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Send Message</button>
        </form>
      </section>

      <section className="social-links">
        <h2>Connect With Us</h2>
        <div className="social-grid">
          {socialLinks.map((social, i) => (
            <a
              key={i}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <img src={social.icon} alt={social.name} />
              <span>{social.name}</span>
            </a>
          ))}
        </div>
      </section>

      <section className="map-section">
        <h2>Find Us</h2>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3477.1234567890123!2d79.12345678901234!3d28.12345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDA3JzI0LjQiTiA3OcKwMDcnMjQuNCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Zanthium Location"
          />
        </div>
      </section>
    </div>
  );
};

export default Contact; 