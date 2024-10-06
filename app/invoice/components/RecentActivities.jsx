import React from "react";
import profileImage from "../../../public/assets/svgs/profile.svg";
import Image from "next/image";

const activities = [
  {
    id: 1,
    user: "Invoice creation",
    time: "Today, 12:20 PM",
    action: "Created invoice",
    invoice: "00238434",
    client: " /Olaniyi Ojo Adewale",
  },
  {
    id: 2,
    user: "Invoice creation",
    time: "Today, 12:20 PM",
    action: "Created invoice",
    invoice: "00238434",
    client: "/Olaniyi Ojo Adewale",
  },
  {
    id: 3,
    user: "Invoice creation",
    time: "Today, 12:20 PM",
    action: "Created invoice",
    invoice: "00238434",
    client: "/Olaniyi Ojo Adewale",
  },
  {
    id: 4,
    user: "Invoice creation",
    time: "Today, 12:20 PM",
    action: "Created invoice",
    invoice: "00238434",
    client: "/Olaniyi Ojo Adewale",
  },
  {
    id: 5,
    user: "Invoice creation",
    time: "Today, 12:20 PM",
    action: "Created invoice",
    invoice: "00238434",
    client: "/Olaniyi Ojo Adewale",
  },
];

const RecentActivities = () => {
  return (
    <div className="px-6 py-8 bg-white rounded-[40px] shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-medium text-lg  text-primaryBlack">
          Recent Activities
        </h2>
        <button className=" tracking-[1px] bg-transparent font-medium border border-[#E3E6EF] text-primary rounded-full px-4 py-3 text-sm">
          VIEW ALL
        </button>
      </div>
      <div className="relative  space-y-6">
        {activities.map((activity, index) => (
          <div key={activity.id} className="relative flex space-x-4">
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
                  <span className="font-medium text-primaryBlack">
                    {activity.invoice}/{activity.client}
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

export default RecentActivities;
