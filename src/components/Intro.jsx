import React from 'react';
import Button from './Buttons';

const Intro= () => {
    const onClick = () => {
    };
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
    <div className="mx-auto max-w-screen-xl px-4 md:px-8">
      <div className="grid gap-8 md:grid-cols-2 lg:gap-12 mb-24">
        <div>
          <div className="h-64 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-full w-full">
          <img src="https://images.squarespace-cdn.com/content/v1/56f4179737013bbfb02fd393/1529033831284-QYCMD9VRQPXRURKWWR05/MyntraTryBuy.gif?format=2500w" loading="lazy" alt="Photo by Martin Sanchez" className="h-full w-full object-cover object-center" />

          </div>
        </div>
  
        <div className=" md:pt-8">
          <p className="mb-4 text-[#b95548] font-grechen-fuemen text-center font-semibold text-md:mb-6 md:text-lg xl:text-5xl">Who we are</p>
  
          <h1 className="mb-4 text-center font-grechen-fuemen text-[#ec79b1] text-2xl font-bold  sm:text-3xl md:mb-6 md:text-center">Our competitive advantage</h1>
  
          <p className="mb-6 font-akaya-kanadaka text-gray-500 sm:text-lg md:mb-8">
          At InStyle, we are a passionate fashion destination dedicated to bringing the latest trends, timeless styles, and high-quality pieces to fashion-forward individuals. Our mission is to inspire confidence through clothing that empowers you to express your unique personality. From chic everyday essentials to show-stopping statement pieces, we curate collections that blend comfort, style, and sustainability. We believe fashion should be inclusive, and we're committed to offering a diverse range of sizes and designs to suit every body type and style preference. Join us on a journey where fashion meets self-expression and elevate your wardrobe with pieces that make you feel as amazing as you look. </p>
          <Button label="Sign-Up" onClick={onClick} className='font-lobster-two '/>

        </div>
      </div>


    </div>
    <div className="ml-24 mr-24 grid gap-8 md:grid-cols-2 lg:gap-12">
    <div className="md:pt-8">
          <p className="mb-4 text-[#b95548] text-center font-grechen-fuemen font-semibold text-md:mb-6 md:text-lg xl:text-5xl">Our Core Values</p>
  
          <h1 className="mb-4 text-center font-grechen-fuemen text-[#ec79b1] text-2xl font-bold  sm:text-3xl md:mb-6 md:text-center">Quality,Self-expression & Sustainability</h1>
  
          <p className="mb-6 font-akaya-kanadaka text-gray-500 sm:text-lg md:mb-8">
          Our core values are the foundation of everything we do. We believe in quality, offering only carefully curated fashion pieces that are made to last and enhance your style. We are committed to sustainability, striving to reduce our environmental impact through eco-friendly materials and ethical production practices. Inclusivity is at the heart of our brand, ensuring that every individual, regardless of size or background, feels confident and represented in our collections. We value customer satisfaction and are dedicated to providing a seamless shopping experience with exceptional service, from browsing to delivery. Above all, we believe in the power of self-expression—empowering you to express your unique style with confidence, one outfit at a time.</p>  
        </div>
        <div>
          <div className="mr-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-full w-full">
          <img src="https://i.pinimg.com/originals/8c/ea/a5/8ceaa5ceea6c6d701189924d893b987b.gif" loading="lazy" alt="Photo by Martin Sanchez" className="h-full w-full object-cover object-center" />
          </div>
        </div>
  
    
      </div>

      
    </div>
  
  );
};

export default Intro;
