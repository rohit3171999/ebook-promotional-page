import React from "react";

export default function App() {
    return (
        <div className="font-sans m-0 p-0">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-[#1e3c72] to-[#2a5298] text-white text-center py-16 px-5">
                <img
                    src="https://thafd.bing.com/th/id/OIP.yDnf-zZNGGeEdIkTAMC5sAHaLH?w=208&h=305&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3?text=Book+Cover"
                    alt="Book Cover"
                    className="rounded-lg mb-5 mx-auto"
                />
                <h1 className="text-4xl font-bold my-3">
                    Unlock the Secrets to Thriving in the Digital Age
                </h1>
                <p className="text-lg mb-5">
                    A practical guide to mastering digital transformation.
                </p>
                <a
                    href="#download"
                    className="bg-orange-500 px-6 py-3 rounded-md no-underline text-white font-bold"
                >
                    Download Free Chapter
                </a>
            </section>

            {/* About the Book */}
            <section className="py-12 px-5 text-center">
                <h2 className="text-2xl font-semibold">About the Book</h2>
                <p className="max-w-2xl mx-auto my-3">
                    <em>Future Ready: Mastering Digital Transformation</em> provides
                    insights, frameworks, and strategies to help professionals and
                    organizations succeed in today’s fast-changing digital world.
                </p>
                <ul className="list-none mt-5 space-y-2">
                    <li>✔ Understand key digital trends</li>
                    <li>✔ Learn proven transformation strategies</li>
                    <li>✔ Discover tools to stay competitive</li>
                    <li>✔ Gain insights from real-world examples</li>
                </ul>
            </section>

            {/* Author Section */}
            <section className="bg-gray-100 py-12 px-5 text-center">
                <h2 className="text-2xl font-semibold">About the Author</h2>
                <img
                    src="https://via.placeholder.com/120.png?text=Author"
                    alt="Author"
                    className="rounded-full my-5 mx-auto"
                />
                <p className="max-w-xl mx-auto">
                    Rohit Sharma is an industry expert in digital strategy and
                    transformation. With years of experience advising startups and global
                    companies, his insights are trusted by professionals worldwide.
                </p>
            </section>

            {/* Testimonials */}
            <section className="py-12 px-5 text-center">
                <h2 className="text-2xl font-semibold">What Readers Say</h2>
                <blockquote className="italic my-5">
                    “A must-read for anyone navigating the digital era!” — Jane Doe
                </blockquote>
                <blockquote className="italic my-5">
                    “Practical, insightful, and inspiring.” — John Smith
                </blockquote>
            </section>

            {/* Free Chapter Download Form */}
            <section
                id="download"
                className="bg-[#2a5298] text-white py-12 px-5 text-center"
            >
                <h2 className="text-2xl font-semibold">Download Your Free Chapter</h2>
                <form
                    className="mt-5 flex flex-col items-center"
                    onSubmit={(e) => {
                        e.preventDefault();
                        alert("Thank you! Your free chapter will be sent to your email.");
                    }}
                >
                    <input
                        type="text"
                        placeholder="Your Name"
                        required
                        className="px-3 py-2 my-2 rounded-md border border-gray-300 w-64 text-black"
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        required
                        className="px-3 py-2 my-2 rounded-md border border-gray-300 w-64 text-black"
                    />
                    <button
                        type="submit"
                        className="bg-orange-500 text-white px-6 py-3 rounded-md font-bold mt-3"
                    >
                        Get Free Chapter
                    </button>
                </form>
            </section>

            {/* Footer */}
            <footer className="bg-black text-white py-5 text-center">
                <p>
                    © 2025 Rohit Sharma |{" "}
                    <a href="#" className="text-orange-500 no-underline">
                        Privacy Policy
                    </a>{" "}
                    |{" "}
                    <a href="#" className="text-orange-500 no-underline">
                        Terms
                    </a>
                </p>
                <div className="mt-3">
                    <a href="#" className="mx-2 text-white no-underline">
                        Facebook
                    </a>
                    <a href="#" className="mx-2 text-white no-underline">
                        Twitter
                    </a>
                    <a href="#" className="mx-2 text-white no-underline">
                        LinkedIn
                    </a>
                </div>
            </footer>
        </div>
    );
}
