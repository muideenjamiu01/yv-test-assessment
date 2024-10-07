import axios from "axios";
import { toast } from "react-toastify";

const createApiClient = () => {
  const key = process.env.NEXT_PUBLIC_SECRET_KEY;

  const client = axios.create({
    baseURL: process.env.NEXT_PUBLIC_SECRET_KEY,
    headers: {
      "Cache-Control": "no-cache",
    },
  });

  client.interceptors.request.use(
    async (config) => {
      try {
        const encryptedToken = sessionStorage.getItem("userToken");

        // if (encryptedToken) {
        //   const decryptedToken = CryptoJS.AES.decrypt(encryptedToken, key);
        //   const token = decryptedToken.toString(CryptoJS.enc.Utf8);
        //   config.headers.Authorization = `Bearer ${token}`;
        // }

        return config;
      } catch (error) {
        console.error("Error in request interceptor:", error);
        return Promise.reject(error);
      }
    },
    (error) => {
      console.error("Error in request interceptor:", error);
      return Promise.reject(error);
    }
  );

  client.interceptors.response.use(
    (response) => response,
    (error) => {
      console.error("Error in response interceptor:", error);

      if (axios.isCancel(error)) {
        // Handle canceled requests
        console.warn("Request canceled:", error.message);
        return Promise.reject(error);
      }

      if (!error.response) {
        // Handle network errors
        if (error.message === "Network Error") {
          toast.error("Network error. Please check your internet connection.");
        } else {
          console.warn("Error during request:", error.message);
        }
        return Promise.reject(error);
      }

      // The request was made, but the server responded with an error
      const { status, data } = error.response;

      if (status === 401) {
        // Unauthorized error

        toast.error("Unauthenticated, kindly log in again...");
      } else if (status === 403) {
        // Forbidden error
        toast.error("Access forbidden. Please check your permissions.");
      } else {
        // Other HTTP errors
        console.warn(
          `HTTP Error ${status}: ${data.message || "Unknown error"}`
        );
      }

      return Promise.reject(error);
    }
  );

  return client;
};
// export {client}
export default createApiClient;
