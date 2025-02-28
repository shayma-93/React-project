import React from 'react';
import Button from './Buttons';

const Hero = () => {
  const handleClick = () => {
  };

  return (
    <div>
      <section className="px-6 mx-auto w-full flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row overflow-hidden">
        <div className="flex flex-col justify-center sm:text-center lg:py-12 lg:text-left xl:w-5/12 xl:py-24">
          <p className="mb-4 text-[#ec79b1] text-center font-grechen-fuemen font-semibold text-md:mb-6 md:text-lg xl:text-5xl">
            "Fashion that tells your story"
          </p>

          <h1 className="mb-8 text-[#b95548] font-satisfy text-4xl font-bold sm:text-5xl md:mb-12 md:text-4xl">
            Where individuality meets style
          </h1>

          <p className="mb-8 leading-relaxed text-center font-akaya-kanadaka text-gray-500 md:mb-12 lg:w-4/5 xl:text-xl">
            Fashion is more than just clothing; it’s a way to tell a story without saying a word.
            Style is how we choose to communicate our personality, culture, and individuality
            through fabric, color, and silhouette. Fashion tells a story of identity, creativity,
            and the world we live in—constantly shifting, yet always rooted in who we are..
          </p>

          <div className="flex flex-col justify-center gap-6 sm:flex-row sm:justify-center lg:justify-center">
            <Button label="Sign-Up" onClick={handleClick} className='font-lobster-two '/>
            <Button label="Loyalty points" onClick={handleClick} className='font-lobster-two bg-[#fdbdb5] text-black  hover:bg-[#ffd6d1] active:bg-[#ffd6d1'/>

        
          </div>
        </div>

        <div className="w-full overflow-hidden rounded-lg bg-transparent-100 shadow-lg lg:h-auto">
          <img
            src="https://www.wikihow.com/images/c/c5/Y2k-Aesthetic-Step-21.jpeg"
            loading="lazy"
            alt="Photo"
            className="h-full w-full object-center"
          />
        </div>
      </section>
    </div>
  );
};

export default Hero;
