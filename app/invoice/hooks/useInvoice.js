import axios from "axios";


export const getInvoices = async () => {
    try {
      const response = await axios.get("http://localhost:4000/invoices");
      return response.data;
    } catch (error) {
      if (error.response) {
        // Server responded with a status other than 2xx
        console.error("Server Error: ", error.response.data);
      } else if (error.request) {
        // No response was received
        console.error("Network Error: ", error.request);
      } else {
        console.error("Error: ", error.message);
      }
      throw error;
    }
  };
export const getSummaryData = async () => {
    try {
      const response = await axios.get("http://localhost:4000/summary");
      return response.data;
    } catch (error) {
      if (error.response) {
        // Server responded with a status other than 2xx
        console.error("Server Error: ", error.response.data);
      } else if (error.request) {
        // No response was received
        console.error("Network Error: ", error.request);
      } else {
        console.error("Error: ", error.message);
      }
      throw error;
    }
  };
  
