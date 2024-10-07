import axios from "axios";


export const getInvoices = async () => {
  try {
    const response = await axios.get("http://localhost:4000/invoices");
    return response.data;
  } catch (error) {
       throw error;
  }
};


