import axios from "axios";
import { toast } from "react-toastify";

export const getInvoices = async () => {
  try {
    const response = await axios.get("http://localhost:4000/invoices");
    return response.data;
  } catch (error) {
       throw error;
  }
};
export const getResentActivities = async () => {
  try {
    const response = await axios.get("http://localhost:4000/activities");
    return response.data;
  } catch (error) {
    
  }
};
