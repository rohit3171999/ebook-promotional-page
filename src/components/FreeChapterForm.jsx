/*
* Description:
Form where visitors enter details to download the free chapter.

Purpose:
Lead generation (collect user data for marketing + send download link).
* */
export default function FreeChapterForm(){
    return(
        <section className="bg-gray-50 dark:bg-gray-900 py-20 sm:py-24">
            <div className="container mx-auto px-6 max-w-3xl">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
                        Get Your Free Chapter Now
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                        Enter your details below, and we'll send the first chapter of "The Art of Code" straight to your inbox.
                    </p>
                </div>

                {/* Form */}
                <div className="max-w-lg mx-auto">
                    <form action="#" method="POST" className="flex flex-col gap-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                                placeholder="Jane Doe"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                Email Address
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                                placeholder="you@example.com"
                            />
                        </div>
                        <button type="submit" className="w-full px-8 py-4 bg-indigo-600 text-white font-bold rounded-lg shadow-lg hover:bg-indigo-700 transform hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-indigo-300 dark:focus:ring-indigo-800">
                            Send Me The Chapter
                        </button>
                    </form>
                    <p className="mt-4 text-center text-sm text-gray-500 dark:text-gray-400">
                        We respect your privacy. No spam.
                    </p>
                </div>
            </div>
        </section>
    )
}