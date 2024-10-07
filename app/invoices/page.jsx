"use client";
import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import RecentInvoices from "./components/RecentInvoices";
import RecentActivities from "./components/RecentActivities";
import { getInvoices, getResentActivities } from "./hooks/useInvoice";
import { RingLoader} from "react-spinners";

const InvoicePage = () => {
  const [invoices, setInvoices] = useState([]);
  const [recentActivities, setRecentActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchInvoices = async () => {
      setLoading(true);
      try {
        const [invoicesResponse, recentActivitiesResponse] = await Promise.all([
          getInvoices(),
          getResentActivities(),
        ]);
        setInvoices(invoicesResponse);
        setRecentActivities(recentActivitiesResponse);
      } catch (err) {
        toast.error('Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };
    fetchInvoices();
  }, []);


  
  return (
    <div className="container mx-auto p-4">
    <div className="py-10 md:px-8 ">
      {loading ? (
        <div className="mt-10 flex justify-center items-center h-screen">
          <RingLoader color="#003EFF" />
          <p className="mt-4">Loading...</p>
        </div>
      ) : (
        <div>
          <Header invoices={invoices} />
          <div className="xl:flex gap-8">
            <div className="xl:w-3/5">
              <RecentInvoices invoices={invoices} />
            </div>
            <div className="mt-6 xl:mt-0 xl:w-2/5">
              <RecentActivities data={recentActivities} />
            </div>
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default InvoicePage;
