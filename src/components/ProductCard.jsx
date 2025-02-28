import React from 'react';

const ProductCard = ({ imageSrc, altText, title, price, originalPrice, sale = false }) => (
  <div className="border-4 border-[#ec79b1] rounded-lg">
    <a href="#" className="group relative mb-2 block h-80 overflow-hidden rounded-lg bg-gray-100 lg:mb-3">
      <img
        src={imageSrc}
        loading="lazy"
        alt={altText}
        className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
      />
      {sale && (
        <span className="absolute left-0 top-0 rounded-br-lg bg-[#ec79b1] px-3 py-1.5 text-sm uppercase tracking-wider text-[#fff350]">
          sale
        </span>
      )}
    </a>
    <div>
      <a href="#" className="hover:gray-800 mb-1 text-gray-500 transition duration-100 lg:text-lg">
        {title}
      </a>
      <div className="flex items-end gap-2">
        <span className="font-bold text-gray-800 lg:text-lg">${price}</span>
        {originalPrice && <span className="mb-0.5 text-red-500 line-through">${originalPrice}</span>}
      </div>
    </div>
  </div>
);

export default ProductCard;
