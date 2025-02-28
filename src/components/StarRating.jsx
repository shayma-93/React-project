import React from 'react';

const StarRating = ({ rating }) => {
  // Create an array of stars based on the rating
  const stars = Array(5).fill(false).map((_, index) => index < rating);

  return (
    <div className="flex gap-0.5"> {/* Apply flex-col here */}
      {stars.map((filled, index) => (
        <svg
          key={index}
          width="20"
          height="20"
          xmlns="http://www.w3.org/2000/svg"
          className={filled ? 'filled' : 'empty'}
        >
          <path
            d="M10 1.5l2.4 7.3h7.7l-6.2 4.5 2.4 7.3-6.2-4.5-6.2 4.5 2.4-7.3-6.2-4.5h7.7z"
            fill={filled ? "#ec79b1" : "#fdbdb5"}
          />
        </svg>
      ))}
    </div>
  );
};

export default StarRating;

