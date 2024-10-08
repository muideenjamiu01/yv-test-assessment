import React from 'react';
const Button = ({
    onClick,
    text,
    bgColor,
    hoverColor,
    textColor,
    size,
    className,
    type = "button",
  }) => {
    // Define size classes based on the prop
    const sizeClasses = {
      sm: "py-2 px-2 text-sm",
      md: "py-3 px-6 text-base",
      lg: "py-4 px-8 text-lg",
    };
  
    return (
      <button
        type={type}
        onClick={onClick}
        className={`uppercase transition ease-in duration-200 text-center font-medium focus:outline-none focus:ring-2 rounded-full 
                    ${bgColor} ${hoverColor} ${textColor} ${sizeClasses[size]} ${className} 
                    sm:py-2 sm:px-4 sm:text-sm md:py-3 md:px-6 md:text-base lg:py-4 lg:px-8 lg:text-lg`}
      >
        {text}
      </button>
    );
  };
  export default Button;