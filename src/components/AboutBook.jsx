/*
Description:
Explains what the book offers and why the visitor should care.
Purpose:
Provide context, build curiosity, and showcase key takeaways.
* */
export default function AboutBook(){
    return(
        <section className="bg-white dark:bg-gray-800 py-20 sm:py-24">
            <div className="container mx-auto px-6 max-w-5xl">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
                        What's Inside the Book?
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                        This isn't just another programming book. It's a curated guide to mastering the art and science
                        of modern software development, packed with actionable advice and real-world examples.
                    </p>
                </div>

                {/* Key Highlights Grid */}
                <div className="grid md:grid-cols-3 gap-12">
                    {/* Highlight 1 */}
                    <div className="text-center">
                        <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-indigo-100 dark:bg-indigo-900/50 mb-4">
                            <svg className="h-8 w-8 text-indigo-600 dark:text-indigo-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 100 15 7.5 7.5 0 000-15zM21 21l-5.197-5.197" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">Foundational Principles</h3>
                        <p className="mt-2 text-gray-600 dark:text-gray-400">
                            Learn the timeless concepts that separate good code from great code, from SOLID principles to design patterns.
                        </p>
                    </div>

                    {/* Highlight 2 */}
                    <div className="text-center">
                        <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-indigo-100 dark:bg-indigo-900/50 mb-4">
                            <svg className="h-8 w-8 text-indigo-600 dark:text-indigo-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">Modern Tooling</h3>
                        <p className="mt-2 text-gray-600 dark:text-gray-400">
                            Get up to speed with the latest tools and frameworks in the industry, including React, Vite, and Tailwind CSS.
                        </p>
                    </div>

                    {/* Highlight 3 */}
                    <div className="text-center">
                        <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-indigo-100 dark:bg-indigo-900/50 mb-4">
                            <svg className="h-8 w-8 text-indigo-600 dark:text-indigo-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V5.75A2.25 2.25 0 0018 3.5H6A2.25 2.25 0 003.75 5.75v12.5A2.25 2.25 0 006 20.25z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">Real-World Projects</h3>
                        <p className="mt-2 text-gray-600 dark:text-gray-400">
                            Apply your knowledge by building practical, portfolio-ready applications from scratch.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}