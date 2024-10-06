"use client";
import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import RecentInvoices from "./components/RecentInvoices";
import RecentActivities from "./components/RecentActivities";
import { getSummaryData } from "./hooks/useInvoice";
import { RingLoader, ScaleLoader } from "react-spinners";

const InvoicePage = () => {
  const [data, setData] = useState(null);

  // mock data for invoices
  useEffect(() => {
    const fetchInvoices = async () => {
      const data = await getSummaryData();
      setData(data);
    };
    fetchInvoices();
  }, []);

  // const { data, refetch, isLoading } = useQuery(
  //   [
  //     "get-complimentary",
  //     pageNumber,
  //     pageSize,
  //     sortColumn,
  //     sortOrder,
  //     searchTerm,
  //     startDate,
  //     endDate,
  //   ],
  //   async () => {
  //     const response = await api.getComplimentary({

  //     });
  //     return response;
  //   },
  //   {
  //     onError: (error) => {
  //       toast.error(error.response.data.message);
  //     },
  //   }
  // );
  console.log(data, "w data");

  return (
    <div className="py-10 md:px-8 ">
      {data === null ? (
        <div className="mt-10 flex justify-center items-center h-screen">
          <RingLoader color="#003EFF" />
        </div>
      ) : (
        <div>
          <Header data={data?.data} />
          <div className="lg:flex gap-x-8">
            <div className="w-3/5">
              <RecentInvoices />
            </div>
            <div className="w-2/5">
              <RecentActivities data={data?.recentActivities} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InvoicePage;
