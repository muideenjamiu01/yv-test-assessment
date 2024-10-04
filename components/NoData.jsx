import React from "react";
import NoDataIcon from "../../public/assets/svgs/no-data.svg";
import Image from "next/image";

const NoData = ({ header, paragraph }) => {
  return (
    <div className="flex flex-col justify-center">
      <div className="flex justify-center">
        <Image
          src={NoDataIcon}
          alt="no-data-icon"
          style={{
            width: "auto",
            height: "auto",
          }}
          quality={100}
        />
      </div>
      <div className="text-center">
        <p className="text-primaryBlack text-base font-semibold my-4">
          {header}
        </p>
        <p className="text-[#4F4F4F] font-normal text-sm">{paragraph}</p>
      </div>
    </div>
  );
};

export default NoData;
