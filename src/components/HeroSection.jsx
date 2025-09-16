/*
*Description:
The top section that grabs user attention with book cover, headline, and main call-to-action.

Purpose:
Highlight the ebook and prompt users to download the free chapter.
* */
function HeroSection(){
    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-center gap-12">
                {/* Book Cover Image */}
                <div className="flex-shrink-0">
                    <img
                        className="w-64 lg:w-72 h-auto rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSJdWIdlDunNmO28a9MoYERbcJjuluGFjIhw&s"
                        alt="The cover of the 'Art of Code' ebook"
                    />
                </div>

                {/* Headline, Subheadline, and CTA */}
                <div className="text-center md:text-left max-w-2xl">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                        Unlock the Secrets to Modern Web Development
                    </h1>
                    <p className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-300">
                        Master the principles of software craftsmanship with our comprehensive guide. Download your free chapter today and start your journey to becoming a better developer.
                    </p>
                    <button className="mt-8 inline-block px-8 py-4 bg-indigo-600 text-white font-bold rounded-lg shadow-lg hover:bg-indigo-700 transform hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-indigo-300 dark:focus:ring-indigo-800">
                        Download Free Chapter
                    </button>
                </div>
            </div>
        </section>
    )
}
export default HeroSection;