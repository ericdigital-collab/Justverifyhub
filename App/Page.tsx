"use client";

import { useState } from "react";

const products = [
  {
    name: "Digital Design Pack",
    description: "Premium digital resources for creators.",
    price: "$5.00",
    icon: "🎨",
  },
  {
    name: "Website Template",
    description: "Clean and responsive website template.",
    price: "$10.00",
    icon: "💻",
  },
  {
    name: "Social Media Design",
    description: "Ready-to-use social media graphics.",
    price: "$3.00",
    icon: "📱",
  },
  {
    name: "Creator Resources",
    description: "Useful resources for digital creators.",
    price: "$7.00",
    icon: "🚀",
  },
];

export default function Home() {
  const [dark, setDark] = useState(false);

  return (
    <main className={dark ? "dark page" : "page"}>

      <nav className="navbar">
        <div className="logo">
          <span className="logoIcon">⚡</span>
          <div>
            <strong>YOUR MARKET</strong>
            <small>DIGITAL MARKETPLACE</small>
          </div>
        </div>

        <div className="navLinks">
          <a href="#products">Marketplace</a>
          <a href="#about">About</a>
          <button onClick={() => setDark(!dark)}>
            {dark ? "☀️" : "🌙"}
          </button>
          <button className="login">Sign In</button>
        </div>
      </nav>

      <section className="hero">
        <div className="heroText">
          <p className="badge">✨ PREMIUM DIGITAL MARKETPLACE</p>

          <h1>
            Everything you need,
            <span> in one place.</span>
          </h1>

          <p className="heroDescription">
            Discover useful digital products and services from a modern,
            secure marketplace.
          </p>

          <div className="heroButtons">
            <button className="primary">
              Explore Marketplace →
            </button>

            <button className="secondary">
              Create Account
            </button>
          </div>
        </div>

        <div className="heroCard">
          <div className="cardIcon">🛍️</div>
          <h3>Digital Marketplace</h3>
          <p>Simple. Fast. Reliable.</p>

          <div className="stats">
            <div>
              <strong>100+</strong>
              <small>Products</small>
            </div>

            <div>
              <strong>24/7</strong>
              <small>Access</small>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="products">
        <div className="sectionTitle">
          <div>
            <p className="badge">MARKETPLACE</p>
            <h2>Popular Products</h2>
          </div>

          <button className="viewAll">View All →</button>
        </div>

        <div className="productGrid">
          {products.map((product) => (
            <div className="productCard" key={product.name}>

              <div className="productIcon">
                {product.icon}
              </div>

              <h3>{product.name}</h3>

              <p>{product.description}</p>

              <div className="productBottom">
                <strong>{product.price}</strong>

                <button>
                  View
                </button>
              </div>

            </div>
          ))}
        </div>
      </section>

      <section id="about" className="features">
        <div>
          <span>🔒</span>
          <h3>Secure</h3>
          <p>Designed with customer security in mind.</p>
        </div>

        <div>
          <span>⚡</span>
          <h3>Fast</h3>
          <p>Quick access to your digital purchases.</p>
        </div>

        <div>
          <span>🌍</span>
          <h3>Worldwide</h3>
          <p>Built for customers around the world.</p>
        </div>
      </section>

      <footer>
        © 2026 Your Marketplace. All rights reserved.
      </footer>

    </main>
  );
}
