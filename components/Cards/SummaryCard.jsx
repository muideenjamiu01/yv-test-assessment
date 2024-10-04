import React from "react";

const SummaryCard = ({ title, total, isFit, className, isWidth }) => {
  return (
    <div>
      <div
        //
        className={`relative overflow-hidden bg-white rounded-lg shadow ${className} ${
          isFit ? "w-fit" : isWidth ? "w-32" : "w-48"
        } h-fit border border-primary`}
      >
        <div className="px-3 py-3 text-center">
          <p className="text-lightPrimary text-base font-medium mb-2">
            {title}
          </p>
          <p className="text-[#0F172A] font-bold text-4xl ">{total || "0"}</p>
        </div>
      </div>
    </div>
  );
};

export default SummaryCard;
