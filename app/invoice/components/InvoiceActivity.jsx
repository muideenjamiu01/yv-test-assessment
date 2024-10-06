import React from "react";
import profileImage from "../../../public/assets/svgs/profile.svg";
import Image from "next/image";

const activities = [
  {
    id: 1,
    user: "You",
    time: "Today, 12:20 PM",
    action: "Created invoice",
    invoice: "00238434",
    client: "Olaniyi Ojo Adewale",
  },
  {
    id: 2,
    user: "You",
    time: "Today, 12:20 PM",
    action: "Sent invoice",
    invoice: "00238434",
    client: "Olaniyi Ojo Adewale",
  },
  {
    id: 3,
    user: "Payment Confirmed",
    time: "Today, 12:20 PM",
    action: "You manually confirmed a partial payment of",
    amount: "$503,000.00",
  },
  {
    id: 4,
    user: "Payment Confirmed",
    time: "Today, 12:20 PM",
    action: "You manually confirmed a full payment of",
    amount: "$6,000,000.00",
  },
  {
    id: 5,
    user: "You",
    time: "Today, 12:20 PM",
    action: "Sent invoice",
    invoice: "00238434",
    client: "Olaniyi Ojo Adewale",
  },
];

const InvoiceActivity = () => {
  return (
    <div className="p-4">
      <h2 className="font-medium text-lg  text-primaryBlack">
        Invoice Activity
      </h2>
      <div className="relative pl-6 space-y-6">
        {activities.map((activity, index) => (
          <div key={activity.id} className="relative flex space-x-4">
            {/* Connector line */}
            {/* {index !== activities.length - 1 && (
              <span className="absolute top-5 left-[36px] h-full w-px bg-gray-300"></span>
            )} */}
            <div
              className={`absolute left-[36px] top-10 w-px bg-gray-300 ${
                index === activities.length - 1 ? "hidden" : "h-full"
              }`}
            ></div>

            {/* User Avatar */}
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
