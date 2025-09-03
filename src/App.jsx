import React from "react";
import "./App.css"; // for CSS

export default function App() {
    return (
        <div className="ebook-container">
            {/* Header */}
            <header className="ebook-header">
                <h1 className="logo">📚 Bookify</h1>
                <nav>
                    <a href="#about">About</a>
                    <a href="#download">Free Chapter</a>
                    <a href="#reviews">Reviews</a>
                </nav>
            </header>

            {/* Hero Section */}
            <section className="hero">
                <div className="hero-text">
                    <h2>"Mastering Productivity"</h2>
                    <p>
                        Discover practical strategies to boost focus, efficiency, and
                        achieve your goals faster. Get your free first chapter today!
                    </p>
                    <a href="#download" className="cta-btn">Download Free Chapter</a>
                </div>
                <div className="hero-img">
                    <img src="https://via.placeholder.com/250x350" alt="E-book Cover" />
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="about">
                <h3>About the Book</h3>
                <p>
                    This book is designed for professionals, students, and entrepreneurs
                    who want to improve their productivity. Learn proven methods, avoid
                    distractions, and take control of your time.
                </p>
            </section>

            {/* Download Form Section */}
            <section id="download" className="download">
                <h3>Get Your Free Chapter</h3>
                <form className="download-form">
                    <input type="text" placeholder="Your Name" required />
                    <input type="email" placeholder="Your Email" required />
                    <button type="submit">Download Now</button>
                </form>
            </section>

            {/* Reviews Section */}
            <section id="reviews" className="reviews">
                <h3>What Readers Say</h3>
                <div className="review-list">
                    <div className="review-card">
                        <p>"A must-read for anyone serious about success!"</p>
                        <span>- Alex P.</span>
                    </div>
                    <div className="review-card">
                        <p>"Practical tips that actually work."</p>
                        <span>- Maria L.</span>
                    </div>
                    <div className="review-card">
                        <p>"Changed the way I approach my daily routine."</p>
                        <span>- James R.</span>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <p>© 2025 Bookify. All Rights Reserved.</p>
            </footer>
        </div>
    );
}
