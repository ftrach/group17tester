const Products = () => {
    return (
        <main className="p-4 md:p-10 mx-auto max-w-7xl">
            <div>
                <h2>Products</h2>
                <p>This is the products page.</p>
                <br />
                {/* Flex container for the product cards */}
                <div className="flex flex-wrap justify-center gap-4">
                    {/* Individual product cards */}
                    {Array.from({ length: 20 }).map((_, index) => (
                        <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-4">
                            <a href="#">
                                <img className="p-8 rounded-t-lg" src="/images.jpeg" alt="product image" />
                            </a>
                            <div className="px-5 pb-5">
                                <a href="#">
                                    <h5 className="text-center text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Classic G17 Hoodie</h5>
                                </a>
                                <div className="flex justify-center items-center mt-2.5 mb-2">
                                    <div className="flex items-center space-x-1 rtl:space-x-reverse">
                                        {/* Other rating stars fix code so that it will render this an amount of times needed for stars had on product */}
                                        <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                        </svg>
                                        
                                    </div>
                                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
                                </div>
                                <div className="flex justify-center items-center gap-1">
                                    <span className="text-3xl font-bold text-gray-900 dark:text-white">$199.99 </span>
                                    <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2.5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default Products;
