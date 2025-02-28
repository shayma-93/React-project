import React from 'react';
import ProductCard from './ProductCard'; 
import Button from './Buttons';

const Products = () => {
  const onClick = () => {
  };

  const products = [
    {
      imageSrc: "https://live.texcon.webcore.no/wp-content/uploads/sites/2/2023/12/2.5-Overdimensjonerte-kaper-Gant.jpg",
      altText: "Oversized coats",
      title: "Oversized coats",
      price: "15.00",
      originalPrice: "30.00",
      sale: true,
    },
    {
      imageSrc: "https://cdn.mos.cms.futurecdn.net/pQsXrTqRnLTSFwkZmyqdUj-320-80.jpg",
      altText: "Knitwear",
      title: "Knitwear",
      price: "9.00",
    },
    {
      imageSrc: "https://m-commerce.countryroad.com/productimages_display/COMPMEDIUM/1/130943_613969_409973.jpg",
      altText: "Wide Pants",
      title: "Wide Pants",
      price: "45.00",
    },
    {
      imageSrc: "https://www.na-kd.com/cdn-cgi/image/quality=80,sharpen=0.3,width=640/resize/globalassets/magazine/unforgettable-90s-fashion-trends-were-seeing-in-2023/snake_baguette_bag_1015-004831-00100116-1.jpg",
      altText: "Baguette bags",
      title: "Baguette bags",
      price: "29.00",
    },
    {
      imageSrc: "https://www.na-kd.com/cdn-cgi/image/quality=80,sharpen=0.3,width=640/resize/globalassets/magazine/unforgettable-90s-fashion-trends-were-seeing-in-2023/loose_mid_waist_jeans_1100-007181-0116_24369-1.jpg",
      altText: "90's Denim Jeans",
      title: "90's Denim Jeans",
      price: "4.00",
    },
    {
      imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwj1OLYi1a0y_GF_RCjNBA7HzAw1zeg5kSyA&s",
      altText: "heels",
      title: "Heels",
      price: "19.00",
    },
    {
      imageSrc: "https://images.meesho.com/images/products/283328713/lvafc_512.webp",
      altText: "Hair accessories",
      title: "Hair accessories",
      price: "12.00",
      originalPrice: "24.00",
      sale: true,
    },
    {
      imageSrc: "https://gloimg.zafcdn.com/zaful/pdm-product-pic/Clothing/2022/10/18/source-img/20221018180043_634e794b4a85f.jpg?impolicy=high",
      altText: "Boots",
      title: "Boots",
      price: "9.00",
    },
  ];

  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12 overflow-hidden">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-6 flex items-end justify-center gap-4">
          <h2 className="mb-4 font-akaya-kanadaka underline decoration-wavy decoration-[#fdbdb5] text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
            Newest collections
          </h2>
        </div>

        <div className="grid gap-x-4 gap-y-8 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>

        <div className="w-full pt-12 flex justify-center items-center">
      
          <Button  label="Show more" onClick={onClick} className='font-lobster-two'/>
        </div>
      </div>
    </div>
  );
};

export default Products;
