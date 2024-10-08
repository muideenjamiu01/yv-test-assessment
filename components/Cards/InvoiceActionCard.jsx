import React from 'react';
import Image from 'next/image';

const InvoiceActionCard = ({ title, description, iconSrc, onClick, bgColor, textColor, imageStyle, className }) => {
  return (
    <div
    onClick={onClick}
    className={`relative w-full h-fit overflow-hidden rounded-3xl p-6 transition duration-300 ease-in-out transform cursor-pointer ${bgColor} ${className}`}
    style={{ color: textColor }}
    >
      <div className="mb-4">
        <Image
          src={iconSrc}
          alt="icon"
          style={imageStyle}
          quality={100}
        />
      </div>
      <p className="text-[22px] font-medium">{title}</p>
      <p className="text-sm font-normal">{description}</p>
    </div>
  );
};

export default InvoiceActionCard;
