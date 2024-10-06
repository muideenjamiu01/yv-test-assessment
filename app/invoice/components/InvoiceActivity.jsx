import React from "react";
import profileImage from "../../../public/assets/svgs/profile.svg";
import Image from "next/image";


const InvoiceActivity = ({invoiceData}) => {
 
  return (
    <div className="px-6 py-8 bg-white ">
      <h2 className="font-medium text-lg  text-primaryBlack mb-4">
        Invoice Activity
      </h2>
      <div className="relative space-y-6">
        {invoiceData?.map((activity, index) => (
          <div key={activity.id} className="relative flex space-x-4">
            
            <div
              className={`absolute left-[36px] top-10 w-px bg-gray-300 ${
                index === invoiceData?.length - 1 ? "hidden" : "h-full"
              }`}
            ></div>

            <div className="z-10 w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center">
              <Image
                src={profileImage}
                alt="icon"
                style={{
                  width: "78px",
                  height: "auto",
                }}
                quality={100}
              />
              {/* <span className="text-xl text-blue-800">👤</span> */}
            </div>

            {/* Activity Details */}
            <div>
              <div className="text-lg text-primaryBlack font-medium">
                {activity.user}
              </div>
              <div className="text-sm text-primaryGrey font-normal">
                {activity.time}
              </div>
              <div className="pl-5 mt-2 py-2 bg-[#F6F8FA] rounded-xl text-sm w-fit">
                <span className="text-primaryGrey mr-1">{activity.action}</span>
                {activity.invoice && (
                  <span className="font-semibold text-gray-700">
                    {activity.invoice}/{activity.client}
                  </span>
                )}
                {activity.amount && (
                  <span className="font-medium text-primaryBlack">
                    {activity.amount}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InvoiceActivity;
