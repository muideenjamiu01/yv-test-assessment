"use client";
import React, { useState } from "react";
import Header from "./components/Header";
import RecentInvoices from "./components/RecentInvoices";
import RecentActivities from "./components/RecentActivities";
import { RingLoader } from "react-spinners";
import { toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";
import { api } from "app/api/invoice";

const InvoicePage = () => {
  const {
    data: invoices,
    refetch,
    isLoading,
    error,
  } = useQuery({
    queryKey: "get-invoices",
    queryFn: async () => {
      const response = await api.getInvoices();

      return response;
    },

    refetchOnWindowFocus: true, // Refetch data when the window is focused
    refetchOnReconnect: true, // Refetch data if the network connection is re-established
    refetchOnMount: true, // Refetch data each time the component mounts

    onError: (error) => {
      toast.error(error.response?.data?.message || "Failed to fetch invoices.");
    },
    onSuccess: (data) => {
      toast.success("Invoices fetched successfully", data);
    },
  });

  return (
    <div className="container mx-auto p-4">
      <div className="py-10 md:px-8">
        {isLoading ? (
          <div className=" flex justify-center items-center h-screen">
            <div className="flex flex-col">
              <RingLoader color="#003EFF" />
              <p className="mt-4">Loading...</p>
            </div>
          </div>
        ) : error ? (
          <div className=" flex flex-col justify-center items-center h-screen">
            <p className="text-red-500 text-5xl font-black animate-bounce">
              Error
            </p>
            <p className="text-red-500 text-base font-medium italic mt-2">
              {error}
            </p>
          </div>
        ) : (
          <div>
            <Header invoices={invoices} refetch={refetch} />
            <div className="xl:flex gap-8">
              <div className="xl:w-3/5">
                <RecentInvoices invoices={invoices} refetch={refetch} />
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
