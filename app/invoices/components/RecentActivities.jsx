'use client'
import React, { useState, useEffect } from "react";
import profileImage from "../../../public/assets/svgs/profile.svg";
import Image from "next/image";
import { toast } from "react-toastify";

const RecentActivities = () => {
  const [activities, setActivities] = useState([]); 
  
  useEffect(() => {
    // WebSocket connection
    const ws = new WebSocket("ws://localhost:8080");

    ws.onopen = () => {
      toast.success("Connected to WebSocket server");
    };

    ws.onmessage = (event) => {
      const message = JSON.parse(event.data);
      if (message.type === "NEW_ACTIVITY") {
        // Create new activity with current date and time
        const newActivity = {
          ...message.data,
          time: new Date().toLocaleString(), // Set current date and time
        };

        // Update activities state with the new activity
        setActivities((prevActivities) => {
          // Add new activity and limit to latest 10
          const updatedActivities = [...prevActivities, newActivity];
          return updatedActivities.slice(-5 ); // Keep only the last 10 activities
        });
      }
    };

    ws.onclose = () => {
      console.log("Disconnected from WebSocket server");
    };

    // Cleanup WebSocket connection when component unmounts
    return () => {
      ws.close();
    };
  }, []);

  return (
    <div className="px-6 py-8 bg-white rounded-[40px]">
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-medium text-lg text-primaryBlack">
          Recent Activities
        </h2>
        <button className="tracking-[1px] bg-transparent font-medium border border-[#E3E6EF] text-primary rounded-full px-4 py-3 text-sm">
          VIEW ALL
        </button>
      </div>
      <div className="relative space-y-6">
        {activities?.length === 0 ? (
          <p>No recent activities</p>
        ) : (
          activities?.map((activity) => (
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
                <div className="text-lg text-primaryBlack font-medium">
                  {activity.user}
                </div>
                <div className="text-sm text-primaryGrey font-normal">
                  {activity.time}
                </div>
                <div className="pl-5 mt-2 py-2 bg-[#F6F8FA] rounded-xl text-sm w-fit">
                  <span className="text-primaryGrey mr-1">
                    {activity.action}
                  </span>
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
