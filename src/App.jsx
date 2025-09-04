import React from "react";

export default function App() {
    return (
        <div style={{ fontFamily: "Arial, sans-serif", margin: 0, padding: 0 }}>
            {/* Hero Section */}
            <section
                style={{
                    background: "linear-gradient(135deg, #1e3c72, #2a5298)",
                    color: "white",
                    textAlign: "center",
                    padding: "60px 20px",
                }}
            >
                <img
                    src="https://thafd.bing.com/th/id/OIP.yDnf-zZNGGeEdIkTAMC5sAHaLH?w=208&h=305&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3?text=Book+Cover"
                    alt="Book Cover"
                    style={{ borderRadius: "8px", marginBottom: "20px" }}
                />
                <h1 style={{ fontSize: "2.5rem", margin: "10px 0" }}>
                    Unlock the Secrets to Thriving in the Digital Age
                </h1>
                <p style={{ fontSize: "1.2rem", marginBottom: "20px" }}>
                    A practical guide to mastering digital transformation.
                </p>
                <a
                    href="#download"
                    style={{
                        background: "orange",
                        padding: "12px 25px",
                        borderRadius: "6px",
                        textDecoration: "none",
                        color: "white",
                        fontWeight: "bold",
                    }}
                >
                    Download Free Chapter
                </a>
            </section>

            {/* About the Book */}
            <section style={{ padding: "50px 20px", textAlign: "center" }}>
                <h2>About the Book</h2>
                <p style={{ maxWidth: "700px", margin: "10px auto" }}>
                    *Future Ready: Mastering Digital Transformation* provides insights,
                    frameworks, and strategies to help professionals and organizations
                    succeed in today’s fast-changing digital world.
                </p>
                <ul style={{ listStyle: "none", padding: 0, marginTop: "20px" }}>
                    <li>✔ Understand key digital trends</li>
                    <li>✔ Learn proven transformation strategies</li>
                    <li>✔ Discover tools to stay competitive</li>
                    <li>✔ Gain insights from real-world examples</li>
                </ul>
            </section>

            {/* Author Section */}
            <section
                style={{
                    background: "#f5f5f5",
                    padding: "50px 20px",
                    textAlign: "center",
                }}
            >
                <h2>About the Author</h2>
                <img
                    src="https://via.placeholder.com/120.png?text=Author"
                    alt="Author"
                    style={{ borderRadius: "50%", margin: "20px 0" }}
                />
                <p style={{ maxWidth: "600px", margin: "0 auto" }}>
                    Rohit Sharma is an industry expert in digital strategy and
                    transformation. With years of experience advising startups and global
                    companies, his insights are trusted by professionals worldwide.
                </p>
            </section>

            {/* Testimonials */}
            <section style={{ padding: "50px 20px", textAlign: "center" }}>
                <h2>What Readers Say</h2>
                <blockquote style={{ fontStyle: "italic", margin: "20px auto" }}>
                    “A must-read for anyone navigating the digital era!” — Jane Doe
                </blockquote>
                <blockquote style={{ fontStyle: "italic", margin: "20px auto" }}>
                    “Practical, insightful, and inspiring.” — John Smith
                </blockquote>
            </section>

            {/* Free Chapter Download Form */}
            <section
                id="download"
                style={{
                    background: "#2a5298",
                    color: "white",
                    padding: "50px 20px",
                    textAlign: "center",
                }}
            >
                <h2>Download Your Free Chapter</h2>
                <form
                    style={{
                        marginTop: "20px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                    onSubmit={(e) => {
                        e.preventDefault();
                        alert("Thank you! Your free chapter will be sent to your email.");
                    }}
                >
                    <input
                        type="text"
                        placeholder="Your Name"
                        required
                        style={{
                            padding: "10px",
                            margin: "10px 0",
                            borderRadius: "5px",
                            border: "1px solid #ccc",
                            width: "250px",
                        }}
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        required
                        style={{
                            padding: "10px",
                            margin: "10px 0",
                            borderRadius: "5px",
                            border: "1px solid #ccc",
                            width: "250px",
                        }}
                    />
                    <button
                        type="submit"
                        style={{
                            background: "orange",
                            color: "white",
                            padding: "12px 25px",
                            border: "none",
                            borderRadius: "6px",
                            cursor: "pointer",
                            fontWeight: "bold",
                            marginTop: "10px",
                        }}
                    >
                        Get Free Chapter
                    </button>
                </form>
            </section>

            {/* Footer */}
            <footer
                style={{
                    background: "#111",
                    color: "white",
                    padding: "20px",
                    textAlign: "center",
                }}
            >
                <p>
                    © 2025 Rohit Sharma |{" "}
                    <a href="#" style={{ color: "orange", textDecoration: "none" }}>
                        Privacy Policy
                    </a>{" "}
                    |{" "}
                    <a href="#" style={{ color: "orange", textDecoration: "none" }}>
                        Terms
                    </a>
                </p>
                <div style={{ marginTop: "10px" }}>
                    <a
                        href="#"
                        style={{ margin: "0 10px", color: "white", textDecoration: "none" }}
                    >
                        Facebook
                    </a>
                    <a
                        href="#"
                        style={{ margin: "0 10px", color: "white", textDecoration: "none" }}
                    >
                        Twitter
                    </a>
                    <a
                        href="#"
                        style={{ margin: "0 10px", color: "white", textDecoration: "none" }}
                    >
                        LinkedIn
                    </a>
                </div>
            </footer>
        </div>
    );
}
