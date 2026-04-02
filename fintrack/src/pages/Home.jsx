import "./Home.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const images = [
  "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c",
  "https://images.unsplash.com/photo-1556745757-8d76bdb6984b",
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71"
];

function Home() {
  const [index, setIndex] = useState(0);

  // auto slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home">

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <h1>Manage Your Finances Smartly</h1>
          <p>Track income, expenses & insights in one place</p>

          <Link to="/dashboard" className="btn">
            Go to Dashboard →
          </Link>
        </div>

        {/*SLIDESHOW IMAGE */}
        <div className="hero-image">
          <img src={images[index]} alt="finance" />
        </div>
      </section>

      {/* FEATURES */}
      <section className="features">

        <div className="feature-card">
          <img src="https://cdn-icons-png.flaticon.com/512/1828/1828919.png" alt="" />
          <h3>Analytics</h3>
          <p>Visualize your financial data</p>
        </div>

        <div className="feature-card">
          <img src="https://cdn-icons-png.flaticon.com/512/3135/3135706.png" alt="" />
          <h3>Track Expenses</h3>
          <p>Monitor your spending</p>
        </div>

        <div className="feature-card">
          <img src="https://cdn-icons-png.flaticon.com/512/1828/1828640.png" alt="" />
          <h3>Fast & Simple</h3>
          <p>Easy to use interface</p>
        </div>

      </section>

    </div>
  );
}

export default Home;