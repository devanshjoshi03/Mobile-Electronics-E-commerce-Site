import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const socials = [
  {
    name: 'Facebook',
    url: 'https://facebook.com',
    icon: (
      <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg>
    ),
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com',
    icon: (
      <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.916 4.916 0 0 0-8.38 4.482C7.691 8.095 4.066 6.13 1.64 3.161c-.542.929-.856 2.01-.857 3.17 0 2.188 1.115 4.117 2.823 5.254a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.209c9.058 0 14.009-7.496 14.009-13.986 0-.21 0-.423-.016-.634A9.936 9.936 0 0 0 24 4.557z"/></svg>
    ),
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com',
    icon: (
      <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.968v5.699h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.036 0 3.597 2.001 3.597 4.604v5.592z"/></svg>
    ),
  },
  {
    name: 'WhatsApp',
    url: 'https://wa.me/',
    icon: (
      <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.029-.967-.272-.099-.471-.148-.67.15-.198.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.207-.242-.579-.487-.501-.669-.51-.173-.007-.372-.009-.571-.009-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.363.709.306 1.262.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.617h-.001a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.455 4.436-9.89 9.893-9.89 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.896 6.991c-.003 5.456-4.438 9.891-9.893 9.891m8.413-18.304a11.815 11.815 0 0 0-8.413-3.488c-6.627 0-12 5.373-12 12 0 2.121.555 4.199 1.607 6.032l-1.687 6.146a1 1 0 0 0 1.262 1.262l6.127-1.654a11.93 11.93 0 0 0 5.691 1.447h.005c6.627 0 12-5.373 12-12 0-3.181-1.241-6.167-3.487-8.445"/></svg>
    ),
  },
];

const Footer = () => (
  <footer className="zanthium-footer">
    <div className="footer-main">
      <div className="footer-logo-nav">
        <img src="https://web-01.zanthiumtechnosoft.com/asset/img/logo7b30.png?v=4" alt="Zanthium Logo" className="footer-logo" />
        <ul className="footer-nav-links">
          <li><a href="#">Store</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Orders</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
      <div className="footer-desc-socials">
        <p className="footer-description">
          Zanthium is your trusted destination for the latest electronics, gadgets, and accessories. We deliver quality, innovation, and support for all your tech needs.
        </p>
        <div className="footer-socials">
          {socials.map((social) => (
            <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label={social.name}>
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <span className="footer-copyright">&copy; {new Date().getFullYear()} Zanthium. All rights reserved. | Designed for industry excellence.</span>
    </div>
  </footer>
);

export default Footer; 