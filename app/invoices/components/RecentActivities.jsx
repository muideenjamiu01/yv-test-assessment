"use client"; 
import React from "react"; 
import profileImage from "../../../public/assets/svgs/profile.svg"; 
import Image from "next/image"; 
import useRecentActivities from "../hooks/useRecentActivities"; 
import Button from "@/components/Button/Button"; 



const RecentActivities = () => {
  // Use the custom hook for recent activities
  const { activities, resultsDisplayLimit, increaseDisplayLimit } = useRecentActivities();

  return (
    <div className="px-6 py-8 bg-white rounded-[40px]">
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-medium text-lg text-primaryBlack">Recent Activities</h2>
        <Button
          onClick={increaseDisplayLimit}
          text="View all"
          bgColor="bg-transparent"
          hoverColor="hover:bg-blue-700 hover:text-white"
          textColor="text-primary"
          size="sm"
          className="tracking-[1px] border border-[#E3E6EF] focus:ring-offset-blue-200"
        />
      </div>
      <div className="relative space-y-6">
        {activities.length === 0 ? (
          <p>No recent activities</p>
        ) : (
          activities.slice(0, resultsDisplayLimit).map((activity) => (
            <div key={activity.id} className="relative flex space-x-4">
              <div className="z-10 w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center">
                <Image
                  src={profileImage}
                  alt="icon"
                  style={{ width: "78px", height: "auto" }}
                  quality={100}
                />
              </div>
              <div>
                <div className="text-lg text-primaryBlack font-medium">{activity.user}</div>
                <div className="text-sm text-primaryGrey font-normal">{activity.time}</div>
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
          ))
        )}
      </div>
    </div>
  );
};

export default RecentActivities;
