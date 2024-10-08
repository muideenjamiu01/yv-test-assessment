import { useEffect, useState } from "react";
import { toast } from "react-toastify";

// Custom hook to manage recent activities through WebSocket
const useRecentActivities = () => {
  const [activities, setActivities] = useState([]);
  const [resultsDisplayLimit, setResultsDisplayLimit] = useState(5); // Initial limit set to 5

  const increaseDisplayLimit = () => {
    setResultsDisplayLimit((prevLimit) => Math.min(prevLimit + 5, 10)); // Limit to a max of 10
    toast.success("See all data below");
  };

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
          return updatedActivities.slice(-10); // Keep only the last 10 activities
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

  return { activities, resultsDisplayLimit, increaseDisplayLimit };
};

export default useRecentActivities;
