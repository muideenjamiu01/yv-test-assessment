import Image from "next/image";
import React from "react";

function InvoiceCard({ imageSrc, className }) {
  return (
    <div
      className={`relative w-60 h-fit overflow-hidden  ${className} shadow-xl rounded-3xl p-4`}
    >      
      <div className="mr-2">
        <Image
          src={imageSrc}
          alt="icon"
          style={{
            width: "auto",
            height: "auto",
          }}
          quality={100}
        />
      </div>
      <p className="my-4">Create New Invoice</p>
      <p className="">Create new invoices easily </p>
    </div>
  );
}

export default InvoiceCard;
