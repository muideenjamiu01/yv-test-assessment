import React from "react";
import Image from "next/image";
import OverviewIcon from "../../public/assets/svgs/dashboard.svg";

const SummaryCard = ({ title, total, statusCount, kobo }) => {
  return (
    <div>
      <div
        className={`relative w-full h-full overflow-hidden bg-white shadow-sm rounded-2xl  p-6`}
      >
        <div>
          <div>
            <Image
              src={OverviewIcon}
              alt="dashboard-icon"
              style={{
                width: "40px",
                height: "40px",
              }}
              quality={100}
            />
          </div>
          <div className="flex gap-2 items-center mt-7">
            <p className="text-xs font-normal text-primaryGrey">
              TOTAL {title}
            </p>
            <p
              className={`px-3 py-1 text-sm text-white bg-blue-500 rounded-full ${
                title === "PAID"
                  ? "bg-secondaryGreen"
                  : title === "OVERDUE"
                  ? "bg-pink"
                  : title === "DRAFT"
                  ? "bg-grey300"
                  : title === "pending"
                  ? "bg-gold"
                  : ""
              }`}
            >
              {statusCount}
            </p>
          </div>
          <div className="flex items-center mt-2">
            <p className="text-primaryBlack font-medium text-[28px]">
              ${total || "0"}.
            </p>{" "}
            <span className="text-primaryGrey text-sm font-medium mt-2">
              {kobo}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummaryCard;
