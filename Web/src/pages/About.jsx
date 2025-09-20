import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';

// Image imports (you'll need to add these to your project)const storeFront = '/images/store-front.jpg';
const teamPhoto = '/images/team-photo.jpg';
const productWall = '/images/product-wall.jpg';
const customerService = '/images/customer-service.jpg';
const stats = [
  { label: 'Years in business', value: '5+', icon: '⏳' },
  { label: 'Products offered', value: '1000+', icon: '📦' },
  { label: 'Brands partnered with', value: '50+', icon: '🤝' },
  { label: 'Customers served', value: '50,000+', icon: '🧑‍🤝‍🧑' },
];

const valueProps = [
  {
    title: 'Honest Pricing',
    desc: 'We work directly with distributors to bring you fair prices without hidden costs or inflated markups.',
    icon: '💰',
  },
  {
    title: 'Verified Quality',
    desc: 'Every product in our inventory is carefully vetted by our team before we offer it to customers.',
    icon: '✅',
  },
  {
    title: 'No False Claims',
    desc: "We provide accurate specifications and don't exaggerate product capabilities - what you see is what you get.",
    icon: '📋',
  },
  {
    title: 'Real Support',
    desc: 'Our customer service team actually tests the products we sell, so we can give you genuine advice.',
    icon: '🎧',
  },
  {
    title: 'Easy Returns',
    desc: 'Simple 14-day return policy because we stand behind everything we sell.',
    icon: '↩️',
  },
];

const brandPartners = [
  'Samsung', 'Apple', 'Sony', 'Bose', 'JBL', 
  'Xiaomi', 'OnePlus', 'Huawei', 'Realme', 'Oppo'
];



const milestones = [
  { year: '2018', event: 'Founded as a small electronics shop.' },
  { year: '2019', event: 'Launched our online store.' },
  { year: '2021', event: 'Reached 10,000+ customers.' },
  { year: '2023', event: 'Partnered with 50+ global brands.' },
  { year: '2024', event: 'Expanded to international shipping.' },
];

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Banner */}
      <section className="about-hero">
        <div className="hero-content">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1041/1041916.png"
            alt="About Icon"
            className="about-hero-icon"
            style={{ width: '80px', marginBottom: '18px' }}
          />
          <h1>Your Trusted Electronics Retailer</h1>
          <p>We're not manufacturers - we're your local experts who carefully select and sell quality electronics from the world's best brands.</p>
          <Link to="/store" className="cta-button">Browse Products</Link>
        </div>
        <img src="https://images.news18.com/ibnlive/uploads/2023/10/macbook-air-m1-2023-10-c3ced763eda4931bd195f9e7ff255169-3x2.jpg" alt="Our electronics store" className="hero-image" />
      </section>

      {/* Quick Stats */}
      <section className="quick-stats">
        <h2>Why Customers Choose Us</h2>
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div className="stat-card" key={index}>
              <div className="stat-icon" style={{ fontSize: '2rem', marginBottom: '8px' }}>{stat.icon}</div>
              <span className="stat-number">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Company Milestones */}
      <section className="about-milestones">
        <h2>Our Journey</h2>
        <div className="milestones-timeline">
          {milestones.map((m, i) => (
            <div className="milestone-card" key={i}>
              <div className="milestone-year">{m.year}</div>
              <div className="milestone-event">{m.event}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Story */}
      <section className="our-story">
        <div className="story-content">
          <h2>Our Retail Story</h2>
          <p>Founded in 2018, we started as a small electronics shop with a simple mission: to help people find the right tech at honest prices. Unlike manufacturers, we have the freedom to select only the best products from multiple brands.</p>
          <p>Today, we've grown into a trusted retailer serving thousands of customers, but we still maintain that personal touch - our staff actually uses the products we sell.</p>
        </div>
        <img src='https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?cs=srgb&dl=pexels-fauxels-3183197.jpg&fm=jpg' alt="Our retail team" className="story-image" />
      </section>

      {/* Product Wall */}
      <section className="product-showcase">
        <img src='https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/23759755/bfarsace_190101_5333_0002.jpg?quality=90&strip=all&crop=16.666666666667%2C0%2C66.666666666667%2C100&w=2400' alt="Our product selection" />
        <div className="showcase-content">
          <h2>Curated Selection</h2>
          <p>We carry smartphones, headphones, smartwatches and accessories from top brands. Our buying team tests dozens of products each month, but only the best make it to our shelves.</p>
          <div className="brand-logos">
            {brandPartners.map((brand, index) => (
              <span key={index} className="brand-tag">{brand}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="our-values">
        <h2>How We Do Business</h2>
        <div className="values-grid">
          {valueProps.map((value, index) => (
            <div className="value-card" key={index}>
              <div className="value-icon" style={{ fontSize: '2rem', marginBottom: '8px' }}>{value.icon}</div>
              <h3>{value.title}</h3>
              <p>{value.desc}</p>
            </div>
          ))}
        </div>
      </section>

      

      {/* Customer Service */}
      <section className="service-section">
        <div className="service-content">
          <h2>Real People, Real Help</h2>
          <p>Our customer service team isn't reading from scripts - they're actual tech enthusiasts who use these products daily. Whether you need setup advice or product recommendations, we've got you covered.</p>
          <Link to="/contact" className="cta-button outline">Contact Our Team</Link>
        </div>
        <img src='https://akm-img-a-in.tosshub.com/indiatoday/images/story/202410/macbook-pro-m4-301735545-16x9_0.jpg?VersionId=B46WfP6YOG8mcgi5F9T29rqEglzBn0_H&size=690:388' alt="Our customer service team" />
      </section>

      {/* Newsletter */}
      <section className="newsletter-signup">
        <h3>Get Product Updates</h3>
        <p>Subscribe for new arrivals, special offers, and tech tips</p>
        <form className="newsletter-form">
          <input type="email" placeholder="Your email address" required />
          <button type="submit">Subscribe</button>
        </form>
      </section>
    </div>
  );
};

export default About;