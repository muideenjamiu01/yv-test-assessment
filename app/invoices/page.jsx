"use client";
import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import RecentInvoices from "./components/RecentInvoices";
import RecentActivities from "./components/RecentActivities";
import { getInvoices } from "./hooks/useInvoice";
import { RingLoader } from "react-spinners";
import { toast } from "react-toastify";

const InvoicePage = () => {
  const [invoices, setInvoices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchInvoices = async () => {
      setLoading(true);
      setError(null); // Reset error before fetching
      try {
        const invoicesResponse = await getInvoices();
        setInvoices(invoicesResponse);
      } catch (error) {
        if (error.response) {
          // Server responded with a status other than 2xx
          toast.error(error.response.message);
          setError(
            "We encountered a problem while retrieving your data from the server. Please try again later or contact support if the issue persists."
          );
        } else if (error.request) {
          // No response was received
          setError(
            "Network Error:  We encountered a problem while retrieving your data from the server. \nPlease try again later or contact support if the issue persists."
          );
        } else {
          // Other errors
          setError(
            "An unexpected error occurred: " +
              error.message +
              ". Please refresh the page or try again later."
          );
        }
      } finally {
        setLoading(false);
      }
    };
    fetchInvoices();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div className="py-10 md:px-8">
        {loading ? (
          <div className="mt-10 flex justify-center items-center h-screen">
            <RingLoader color="#003EFF" />
            <p className="mt-4">Loading...</p>
          </div>
        ) : error ? (
          <div className="mt-10 flex flex-col justify-center items-center h-screen">
            <p className="text-red-500 text-5xl font-black animate-bounce">
              Error
            </p>
            <p className="text-red-500 text-base font-medium italic mt-2">
              {error}
            </p>
          </div>
        ) : (
          <div>
            <Header invoices={invoices} />
            <div className="xl:flex gap-8">
              <div className="xl:w-3/5">
                <RecentInvoices invoices={invoices} />
              </div>
              <div className="mt-6 xl:mt-0 xl:w-2/5">
                <RecentActivities />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default InvoicePage;
