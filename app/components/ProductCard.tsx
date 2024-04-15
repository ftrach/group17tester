import React from 'react';

// Update the component props to include onAddToCart
const ProductCard = ({ product, onAddToCart }: { product: any; onAddToCart: () => void }) => {
    return (
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-4">
            <img className="p-8 rounded-t-lg" src={product.product_image_url} alt="product image" />
            <div className="px-5 pb-5">
                <h5 className="text-center text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{product.product_name}</h5>
                <div className="flex justify-center items-center mt-2.5 mb-2">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">${product.product_price}</span>
                </div>
                <div className="flex justify-center items-center gap-1">
                    {/* Change the <a> tag to a <button> to better handle the click event */}
                    <button 
                        onClick={onAddToCart} 
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2.5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
