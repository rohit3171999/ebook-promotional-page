import React from 'react';
import './App.css'; // Import the global stylesheet

function App() {
    // A simple handler for the form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        alert('Thank you! The free chapter will be sent to your email.');
        // In a real app, you would handle form data submission here
    };

    return (
        <div className="bg-white">
            {/* ---------------------------------- */}
            {/* 4.1 Hero Section                   */}
            {/* ---------------------------------- */}
            <header className="bg-gray-50">
                <div className="container mx-auto px-6 py-16 md:py-24">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Left Column: Text Content */}
                        <div className="text-center md:text-left">
                            <h1 className="text-4xl md:text-5xl font-bold" style={{ color: 'var(--primary-text-color)' }}>
                                Unlock the Secrets to Thriving in the Digital Age
                            </h1>
                            <p className="mt-4 text-lg" style={{ color: 'var(--secondary-text-color)' }}>
                                *Future Ready: Mastering Digital Transformation* is your ultimate guide to navigating the complexities of modern business and technology.
                            </p>
                            <a href="#download-form" className="cta-button inline-block mt-8">
                                Download Free Chapter
                            </a>
                        </div>
                        {/* Right Column: Book Cover Image */}
                        <div className="flex justify-center">
                            <img
                                src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDE4fHxib29rfGVufDB8fHx8MTY3OTg3NjAxOQ&ixlib=rb-4.0.3&q=80&w=400"
                                alt="Future Ready Ebook Cover"
                                className="rounded-lg shadow-2xl w-64 md:w-80"
                            />
                        </div>
                    </div>
                </div>
            </header>

            <main>
                {/* ---------------------------------- */}
                {/* 4.2 About the Book Section       */}
                {/* ---------------------------------- */}
                <section id="about" className="container mx-auto px-6 py-20">
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold" style={{ color: 'var(--primary-text-color)' }}>What's Inside the Book?</h2>
                        <p className="mt-4 text-lg" style={{ color: 'var(--secondary-text-color)' }}>
                            This ebook provides a comprehensive roadmap for professionals, students, and entrepreneurs. Discover actionable strategies to leverage technology, innovate, and lead your organization into the future.
                        </p>
                        <ul className="mt-8 text-left inline-block list-disc list-inside space-y-3">
                            <li className="text-lg">Cutting-edge digital tools and frameworks.</li>
                            <li className="text-lg">Real-world case studies from industry leaders.</li>
                            <li className="text-lg">A step-by-step guide to building a digital-first culture.</li>
                            <li className="text-lg">Strategies to overcome common transformation challenges.</li>
                        </ul>
                    </div>
                </section>

                {/* ---------------------------------- */}
                {/* 4.4 Testimonials Section         */}
                {/* ---------------------------------- */}
                <section className="bg-gray-50 py-20">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-bold text-center" style={{ color: 'var(--primary-text-color)' }}>Praised by Experts</h2>
                        <div className="grid md:grid-cols-2 gap-8 mt-10 max-w-4xl mx-auto">
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <p className="italic" style={{ color: 'var(--secondary-text-color)' }}>
                                    “An essential read for anyone serious about digital transformation. Clear, concise, and incredibly insightful.”
                                </p>
                                <p className="mt-4 font-bold">- Jane Doe, CEO of Tech Solutions</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <p className="italic" style={{ color: 'var(--secondary-text-color)' }}>
                                    “This book demystifies complex topics and provides a practical guide for success. Highly recommended!”
                                </p>
                                <p className="mt-4 font-bold">- John Smith, Professor of Business</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ---------------------------------- */}
                {/* 4.3 Author Section               */}
                {/* ---------------------------------- */}
                <section id="author" className="container mx-auto px-6 py-20">
                    <div className="grid md:grid-cols-3 gap-10 items-center">
                        <div className="flex justify-center md:justify-end">
                            <img
                                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500"
                                alt="Author Rohit Sharma"
                                className="w-48 h-48 rounded-full object-cover shadow-lg"
                            />
                        </div>
                        <div className="md:col-span-2 text-center md:text-left">
                            <h2 className="text-3xl font-bold" style={{ color: 'var(--primary-text-color)' }}>About the Author</h2>
                            <p className="mt-4" style={{ color: 'var(--secondary-text-color)' }}>
                                **Rohit Sharma** is a renowned digital strategist with over 15 years of experience helping Fortune 500 companies embrace technological innovation. His work has been featured in major industry publications, and he is a sought-after speaker on digital transformation and leadership.
                            </p>
                        </div>
                    </div>
                </section>


                {/* ---------------------------------- */}
                {/* 4.5 Free Chapter Download Form   */}
                {/* ---------------------------------- */}
                <section id="download-form" className="bg-blue-900 text-white py-20">
                    <div className="container mx-auto px-6 text-center">
                        <h2 className="text-3xl font-bold">Get Your Free Chapter Now!</h2>
                        <p className="mt-3 max-w-xl mx-auto">
                            Enter your name and email below to receive an exclusive free chapter and stay updated on the latest insights in digital transformation.
                        </p>
                        <form onSubmit={handleSubmit} className="mt-8 max-w-md mx-auto flex flex-col sm:flex-row gap-4">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                required
                                className="w-full px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email Address"
                                required
                                className="w-full px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            />
                            <button type="submit" className="cta-button w-full sm:w-auto flex-shrink-0">
                                Get Free Chapter
                            </button>
                        </form>
                    </div>
                </section>
            </main>

            {/* ---------------------------------- */}
            {/* 4.6 Footer                         */}
            {/* ---------------------------------- */}
            <footer className="bg-gray-800 text-gray-400 py-10">
                <div className="container mx-auto px-6 text-center">
                    <div className="flex justify-center space-x-6">
                        <a href="#author" className="hover:text-white">About Author</a>
                        <a href="#contact" className="hover:text-white">Contact</a>
                        <a href="#privacy" className="hover:text-white">Privacy Policy</a>
                        <a href="#terms" className="hover:text-white">Terms</a>
                    </div>
                    <p className="mt-6">&copy; {new Date().getFullYear()} Rohit Sharma. All Rights Reserved.</p>
                </div>
            </footer>
        </div>
    );
}

export default App;