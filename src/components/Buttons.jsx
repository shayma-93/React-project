import React from 'react';

const Button = ({ label, onClick, className = '', type = 'button' }) => {
  return (
    <button type={type} onClick={onClick}
    className={`bg-[#ec79b1] text-white py-2 px-4 rounded-lg transition duration-300 hover:bg-[#d66f9e] ${className}`}
    >
    {label}
    </button>
  );
};

export default Button;
