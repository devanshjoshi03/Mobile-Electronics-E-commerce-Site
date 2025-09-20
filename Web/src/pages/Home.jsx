import React from 'react';
import './Home.css';


const featuredProducts = [
  {
    id: 1,
    name: 'iPhone 12',
    logo: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-og-202104?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1617135051000',
    price: 699.99,
    oldPrice: 799.99,
    isNew: true,
  },
  {
    id: 16,
    name: 'Apple Watch Series 7',
    logo: 'https://www.apple.com/newsroom/images/product/watch/standard/Apple_watch-series7_hero_09142021_big.jpg.slideshow-medium.jpg',
    price: 399.99,
    oldPrice: 429.99,
    isNew: true,
  },
  {
    id: 26,
    name: 'AirPods Pro',
    logo: 'https://sm.mashable.com/t/mashable_in/article/a/apple-airp/apple-airpods-pro-3-every-single-thing-we-know-so-far_ycjz.2496.jpg',
    price: 249.99,
    oldPrice: 279.99,
    isNew: true,
  },
  {
    id: 6,
    name: 'MacBook Air 2021',
    logo: 'https://c1.wallpaperflare.com/preview/295/265/88/computer-imac-macbook-laptop.jpg',
    price: 999.99,
    oldPrice: 1099.99,
    isNew: true,
  },
];

function getCart() {
  const cart = localStorage.getItem('zanthium_cart');
  return cart ? JSON.parse(cart) : [];
}

function setCart(cart) {
  localStorage.setItem('zanthium_cart', JSON.stringify(cart));
}

const handleAddToCartAndRedirect = (product) => {
  const cart = getCart();
  // Map featured product to cart format (id, name, price, img)
  const cartProduct = {
    id: product.id,
    name: product.name,
    price: product.price,
    img: product.logo,
  };
  setCart([...cart, cartProduct]);
  window.location.href = '/store';
};

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Premium Electronics at <span className="brand-name">Zanthium</span></h1>
          <p className="hero-subtitle">Cutting-edge technology with unbeatable prices</p>
          <button className="cta-button">Explore Products</button>
          
          <div className="featured-categories">
            <div className="category-tag">Smartphones</div>
            <div className="category-tag">Laptops</div>
            <div className="category-tag">Accessories</div>
            <div className="category-tag">Smart Home</div>
          </div>
        </div>
        <div className="hero-image">
          <img src="https://kannankandyestore.com/wp-content/uploads/2024/07/best-laptop-accessories-in-2024.jpg" alt="Latest electronics" />
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="featured-section">
        <h2 className="section-title">Featured Products</h2>
        <div className="product-grid">
          {featuredProducts.map((product, idx) => (
            <div key={idx} className="product-card">
              {product.isNew && <div className="product-badge">New</div>}
              <div className="product-image">
                <img src={product.logo} alt={product.name} />
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <div className="product-rating">★★★★★</div>
                <div className="product-price">
                  <span className="current-price">{product.price}</span>
                  {product.oldPrice && <span className="original-price">{product.oldPrice}</span>}
                </div>
                <button className="add-to-cart" onClick={() => handleAddToCartAndRedirect(product)}>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Info Cards Section */}
      <section className="info-cards-section">
        <div className="info-cards-grid">
          <div className="info-card">
            <div className="info-card-icon">
              {/* Shipping Icon */}
              <svg width="40" height="40" fill="none" viewBox="0 0 40 40"><rect width="40" height="40" rx="12" fill="#4fd1c5"/><path d="M10 28v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M14 28a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm16 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M30 20l2.5 2.5V28a2 2 0 0 1-2 2H9.5a2 2 0 0 1-2-2v-5.5L10 20" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <div className="info-card-content">
              <h4>Free Shipping</h4>
              <p>$30+ orders ship free</p>
            </div>
          </div>
          <div className="info-card">
            <div className="info-card-icon">
              {/* Secure Payment Icon */}
              <svg width="40" height="40" fill="none" viewBox="0 0 40 40"><rect width="40" height="40" rx="12" fill="#4fd1c5"/><path d="M20 28c4.418 0 8-3.582 8-8v-4a8 8 0 1 0-16 0v4c0 4.418 3.582 8 8 8Z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M16 18v-2a4 4 0 1 1 8 0v2" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <div className="info-card-content">
              <h4>Safe & Secure Payments</h4>
              <p>Reliable payment options</p>
            </div>
          </div>
          <div className="info-card">
            <div className="info-card-icon">
              {/* Return Icon */}
              <svg width="40" height="40" fill="none" viewBox="0 0 40 40"><rect width="40" height="40" rx="12" fill="#4fd1c5"/><path d="M28 24v-4a8 8 0 1 0-8 8" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M24 28h4v-4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <div className="info-card-content">
              <h4>40 Days Free Return</h4>
              <p>Hassle-free, risk-free returns</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section">
        <h2 className="section-title">Shop by Category</h2>
        <div className="categories-grid">
          {[
            { name: 'Phones', icon: '📱' },
            { name: 'Laptops', icon: '💻' },
            { name: 'Drones', icon: '🚁' },
            { name: 'Wearables', icon: '⌚' },
            { name: 'Accessories', icon: '🎧' },
            { name: 'Smart Home', icon: '🏠' },
          ].map((category, index) => (
            <div key={index} className="category-card">
              <div className="category-icon">{category.icon}</div>
              <h3>{category.name}</h3>
              <button className="category-button"> <a href="/store">Shop Now</a></button>
            </div>
          ))}
        </div>
      </section>

      {/* Best Sellers Section */}
      <section className="bestseller-section">
        <h2 className="section-title">Best Sellers</h2>
        <div className="bestseller-grid">
          <div className="bestseller-card">
            <img src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80" alt="MacBook Pro 16" />
            <div className="bestseller-name">MacBook Pro 16" (2023)</div>
            <div className="bestseller-price">$2,499.00</div>
            <div className="bestseller-desc">Powerful performance for professionals and creators, featuring the M2 Pro chip.</div>
          </div>
          <div className="bestseller-card">
            <img src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80" alt="iPhone 14 Pro" />
            <div className="bestseller-name">iPhone 14 Pro</div>
            <div className="bestseller-price">$999.00</div>
            <div className="bestseller-desc">The latest iPhone with ProMotion display, advanced cameras, and A16 Bionic chip.</div>
          </div>
          <div className="bestseller-card">
            <img src="https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=400&q=80" alt="MY3" />
            <div className="bestseller-name">Vivo-V9</div>
            <div className="bestseller-price">$349.00</div>
            <div className="bestseller-desc">MY3: Next-gen wireless earbuds with immersive sound and all-day battery life.</div>
          </div>
          <div className="bestseller-card">
            <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80" alt="DJI Mini 3 Pro Drone" />
            <div className="bestseller-name">DJI Mini 3 Pro Drone</div>
            <div className="bestseller-price">$759.00</div>
            <div className="bestseller-desc">Compact, lightweight drone with 4K video and advanced obstacle avoidance.</div>
          </div>
        </div>
      </section>

      {/* Banner Section */}
      <section className="articles-section">
        <div className="articles-header">
          <h2>Latest Articles and News</h2>
          <a href="#" className="view-all-articles">View All Articles</a>
        </div>
        <div className="articles-list">
          <div className="article-card">
            <div className="article-img">
              <img src="https://images.unsplash.com/photo-1519677100203-a0e668c92439?auto=format&fit=crop&w=400&q=80" alt="Headphones" />
            </div>
            <div className="article-date">April 19, 2025</div>
            <div className="article-title">Top 10 Smart Home Gadgets for 2025</div>
          </div>
          <div className="article-card">
            <div className="article-img">
              <img src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80" alt="Phone" />
            </div>
            <div className="article-date">March 14, 2025</div>
            <div className="article-title">Seasonal Sale: Best Deals You Can't Miss</div>
          </div>
          <div className="article-card">
            <div className="article-img">
              <img src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80" alt="Drone" />
            </div>
            <div className="article-date">March 12, 2025</div>
            <div className="article-title">How to Choose the Perfect Gift for Any Occasion</div>
          </div>
        </div>
      </section>

      {/* Related Products Section */}
      <section className="related-section">
        <h2 className="section-title">You May Also Like</h2>
        <div className="related-grid">
          {[
            {
              name: 'Samsung Galaxy Buds 2',
              img: 'https://m.media-amazon.com/images/I/51pycg0MGxL.jpg',
              desc: 'Premium sound, active noise cancellation, and all-day comfort.'
            },
            {
              name: 'Google Nest Hub',
              img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR82WbnF7abOTKpilZ7qPQukXFBHOh8G7EMRg&s',
              desc: 'Smart home control, entertainment, and more in one device.'
            },
            {
              name: 'Sony WH-1000XM5',
              img: 'https://m.media-amazon.com/images/I/61ULAZmt9NL._AC_UF1000,1000_QL80_.jpg',
              desc: 'Industry-leading noise cancellation and superior comfort.'
            },
            {
              name: 'Fitbit Charge 5',
              img: 'https://m.media-amazon.com/images/I/61PmMzYM4qL._AC_UF1000,1000_QL80_.jpg',
              desc: 'Advanced fitness tracking and health insights.'
            },
          ].map((item, idx) => (
            <div className="related-card" key={idx}>
              <img src={item.img} alt={item.name} className="related-img" />
              <div className="related-info">
                <h3>{item.name}</h3>
                <p>{item.desc}</p>
                <button className="related-btn">View Details</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home; 