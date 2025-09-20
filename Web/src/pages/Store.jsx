import React, { useState, useEffect } from 'react';
import './Store.css';
import { Link, useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const allProducts = [
  // Phones
  { id: 1, name: 'iPhone 12', price: 699, category: 'Phones', img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-og-202104?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1617135051000' },
  { id: 2, name: 'Samsung Galaxy S23', price: 899, category: 'Phones', img: 'https://rukminim2.flixcart.com/image/850/1000/xif0q/mobile/t/0/g/-original-imah4zp7fvqp8wev.jpeg?q=90&crop=falses' },
  { id: 3, name: 'Google Pixel 7', price: 799, category: 'Phones', img: 'https://media.wired.com/photos/63459d7b53082046d89aca48/master/pass/Google-Pixel-7-Security.jpg' },
  { id: 4, name: 'OnePlus 11', price: 749, category: 'Phones', img: 'https://m.media-amazon.com/images/I/61amb0CfMGL.jpg' },
  

  // Laptops
  { id: 6, name: 'MacBook Pro 16"', price: 2499, category: 'Laptops', img: 'https://www.apple.com/v/macbook-pro-14-and-16/b/images/overview/hero/hero_intro_endframe__e6khcva4hkeq_large.jpg' },
  { id: 7, name: 'Dell XPS 13', price: 1299, category: 'Laptops', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVgspqsQV-ZI9L5TOrYkkGwPDFdrw7MMgS_w&s0' },
  { id: 8, name: 'HP Spectre x360', price: 1399, category: 'Laptops', img: 'https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c07962448.png' },
  { id: 9, name: 'Lenovo ThinkPad X1', price: 1599, category: 'Laptops', img: 'https://p1-ofp.static.pub/medias/bWFzdGVyfHJvb3R8MTI1NjY4fGltYWdlL3BuZ3xoYzIvaDk0LzEwMjcwODA5NDA0ODk0LnBuZ3w0YzQ1YzY0YzYxY2Q2YjY3ZTY5Y2Y5ZDEzYjU1YzU5YjU0ZTY0YjYyYzU5YzU5YzU5YzU5YzU5YzU5YzU5' },


  // Drones
  { id: 11, name: 'DJI Mini 3 Pro', price: 759, category: 'Drones', img: 'https://www1.djicdn.com/cms/uploads/ef6d976a74537536ed64d43a99971367.png' },
  { id: 12, name: 'DJI Air 2S', price: 999, category: 'Drones', img: 'https://www1.djicdn.com/cms/uploads/ae07266bd86a2d72daae3215c00c7bc0.png' },
  { id: 13, name: 'Parrot Anafi', price: 699, category: 'Drones', img: 'https://www.parrot.com/var/parrot/storage/images/parrot-com/products/drone-parrot-anafi/latest/anafi-transparent/11268410-1-eng-GB/anafi-transparent.png' },
  { id: 14, name: 'Autel EVO Lite+', price: 1199, category: 'Drones', img: 'https://auteldrones.com/public/images/drones/evoliteplus/Autel-EVO-Lite-Plus-Hero-2-White.png' },
 

  // Smartwatches
  { id: 16, name: 'Apple Watch Series 8', price: 399, category: 'Smartwatches', img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MKUQ3_VW_34FR+watch-45-alum-midnight-nc-8s_VW_34FR_WF_CO?wid=1400&hei=1400&trim=1,0&fmt=p-jpg&qlt=95&.v=1683237043712' },
  { id: 17, name: 'Samsung Galaxy Watch 5', price: 299, category: 'Smartwatches', img: 'https://images.samsung.com/is/image/samsung/p6pim/in/2208/gallery/in-galaxy-watch5-44mm-sm-r910nzsainu-533542164?$650_519_PNG$' },
  { id: 18, name: 'Fitbit Versa 4', price: 229, category: 'Smartwatches', img: 'https://cdn.shopify.com/s/files/1/0085/9963/2962/products/Fitbit-Versa-4-Blush_Ionic-Square.png' },
  { id: 19, name: 'Garmin Venu 2', price: 349, category: 'Smartwatches', img: 'https://static.garmincdn.com/en/products/010-02426-30/v/cf-lg/Venu2-Midnight-01.png' },


  // Chargers
  { id: 21, name: 'Anker PowerPort III', price: 39, category: 'Chargers', img: 'https://m.media-amazon.com/images/I/71Q+n2Yp9bL._AC_SL1500_.jpg' },
  { id: 22, name: 'Belkin Boost Charge', price: 29, category: 'Chargers', img: 'https://www.belkin.com/content/dam/b2c/products/wireless-charging/boostcharge-pro/apple-watch/BoostCharge-Pro-Watch-Desktop-Family-Hero-2x.png' },
  { id: 23, name: 'Apple MagSafe Charger', price: 49, category: 'Chargers', img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MXH02?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1661260670669' },
  { id: 24, name: 'Samsung Wireless Charger', price: 39, category: 'Chargers', img: 'https://images.samsung.com/is/image/samsung/p6pim/levant/ep-p2400twegrg/gallery/levant-wireless-charger-pad-ep-p2400-ep-p2400twegrg-thumb-535770748?$172_172_PNG$' },
  

  // Headphones
  { id: 26, name: 'AirPods Pro', price: 249, category: 'Headphones', img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-pro-2nd-gen-hero-FMTVW?wid=1000&hei=1000&fmt=jpeg&qlt\=90&.v=1661553657933' },
  { id: 27, name: 'Bose QC 45', price: 329, category: 'Headphones', img: 'https://assets.bose.com/content/dam/Bose_DAM/Web/consumer_electronics/global/products/headphones/qc45/product_silo_images/QC45_DTL_hero.psd/_jcr_content/renditions/cq5dam.web.320.320.png' },
  { id: 28, name: 'JBL Tune 760NC', price: 129, category: 'Headphones', img: 'https://www.jbl.com/on/demandware.static/-/Sites-masterCatalog_Harman/default/dwcafe169b/JBL_Tune_760NC_Product_Image_Hero_Black.png' },
  { id: 29, name: 'Sony WH-CH710N', price: 179, category: 'Headphones', img: 'https://m.media-amazon.com/images/I/61aBlj1NeTL._AC_SL1500_.jpg' },
 

  // Joysticks
  { id: 31, name: 'Xbox Wireless Controller', price: 59, category: 'Joysticks', img: 'https://compass-ssl.xbox.com/assets/67/71/67712b5a-b2a1-4f30-a65e-b4dfeacec6c5.jpg?n=Controller_Wireless_Hero_Image_1920x1080.jpg' },
  { id: 32, name: 'Sony DualSense', price: 69, category: 'Joysticks', img: 'https://gmedia.playstation.com/is/image/SIEPDC/dualsense-controller-product-thumbnail-01-en-21sep21?$facebook$' },
  { id: 33, name: 'Logitech F310', price: 29, category: 'Joysticks', img: 'https://resource.logitechg.com/w_800,c_limit,q_auto,f_auto,d_transparent.gif/content/dam/gaming/en/products/gamepads/f310-gamepad/gallery/f310-gamepad-gallery-1.png?v=1' },
  { id: 34, name: '8BitDo Pro 2', price: 49, category: 'Joysticks', img: 'https://8bitdo.com/wp-content/uploads/2020/06/8BitDo-Pro-2-Blue.png' },
 

  // Keyboards
  { id: 36, name: 'Logitech MX Keys', price: 99, category: 'Keyboards', img: 'https://resource.logitech.com/w_800,c_limit,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/keyboards/mx-keys/gallery/mx-keys-gallery-1.png?v=1' },
  { id: 37, name: 'Apple Magic Keyboard', price: 129, category: 'Keyboards', img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MK2A3?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1628010471000' },
  { id: 38, name: 'Razer BlackWidow V4', price: 179, category: 'Keyboards', img: 'https://assets2.razerzone.com/image/upload/f_auto,q_auto/v1685648451/razer-blackwidow-v4-pro/keyboard-gaming-blackwidow-v4-normal-gb.png' },
  { id: 39, name: 'Corsair K95 RGB', price: 199, category: 'Keyboards', img: 'https://www.corsair.com/medias/sys_master/images/images/h6e/hc1/9158999873566/-CH-9127012-NA-Gallery-K95-PLATINUM-01.png' },
 

  // Mouse
  { id: 41, name: 'Logitech MX Master 3', price: 99, category: 'Mouse', img: 'https://resource.logitech.com/w_800,c_limit,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/mice/mx-master-3/gallery/mx-master-3-gallery-1.png?v=1' },
  { id: 42, name: 'Apple Magic Mouse', price: 79, category: 'Mouse', img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MLA02?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1628010471000' },
  { id: 43, name: 'Razer DeathAdder V2', price: 69, category: 'Mouse', img: 'https://assets2.razerzone.com/image/upload/f_auto,q_auto/v1682305601/razer-deathadder-v2-gallery-mouse-black.png' },
  { id: 44, name: 'SteelSeries Rival 600', price: 79, category: 'Mouse', img: 'https://steelseries.com/cdn-cgi/image/width=1000,quality=85,/media/products/rival-600/rival-600-gaming-mouse-gallery-black.png' },
  

  // VR Glasses
  { id: 46, name: 'Meta Quest 3', price: 499, category: 'VR Glasses', img: 'https://cdn.meta.com/static/quest/home/meta-quest-3-2x.png' },
  { id: 47, name: 'Sony PlayStation VR2', price: 549, category: 'VR Glasses', img: 'https://gmedia.playstation.com/is/image/SIEPDC/playstation-vr2-thumbnail-01-en-08sep21?$facebook$' },
  { id: 48, name: 'HTC Vive Pro 2', price: 799, category: 'VR Glasses', img: 'https://www.vive.com/media/image/2022/07/HTC-VIVE-Pro2-Hero-Desktop.png' },
  { id: 49, name: 'Oculus Rift S', price: 399, category: 'VR Glasses', img: 'https://cdn.meta.com/static/quest/home/meta-quest-3-2x.png' },



 
];

const categories = [
  'All',
  'Phones',
  'Laptops',
  'Drones',
  'Smartwatches',
  'Chargers',
  'Headphones',
  'Joysticks',
  'Keyboards',
  'Mouse',
  'VR Glasses',
  ,
];

function getCart() {
  const cart = localStorage.getItem('zanthium_cart');
  return cart ? JSON.parse(cart) : [];
}

function setCart(cart) {
  localStorage.setItem('zanthium_cart', JSON.stringify(cart));
}

const Store = () => {
  const [category, setCategory] = useState('All');
  const [cart, setCartState] = useState(getCart());
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get('search') || '';

  useEffect(() => {
    setCart(cart);
  }, [cart]);

  const filteredProducts = allProducts.filter(product => {
    const matchesCategory = category === 'All' || product.category === category;
    const matchesSearch = searchQuery === '' || 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const addToCart = (product) => {
    const newCart = [...cart, product];
    setCartState(newCart);
    toast.success(`${product.name} added to cart!`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <div className="store-container">
      <ToastContainer />
      <div className="store-header">
        <Link to="/cart" className="cart-link">View Cart ({cart.length})</Link>
        {searchQuery && (
          <div className="search-results-info">
            Showing results for: <strong>{searchQuery}</strong>
          </div>
        )}
      </div>
      <div className="category-filter">
        {categories.map(cat => (
          <button
            key={cat}
            className={cat === category ? 'active' : ''}
            onClick={() => setCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="store-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <div className="store-card" key={product.id}>
              <img src={product.img} alt={product.name} />
              <div className="store-card-name">{product.name}</div>
              <div className="store-card-price">${product.price.toLocaleString()}</div>
              <button className="add-to-cart-btn" onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          ))
        ) : (
          <div className="no-results">
            <p>No products found matching your search criteria.</p>
            <button onClick={() => setCategory('All')}>View All Products</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Store; 