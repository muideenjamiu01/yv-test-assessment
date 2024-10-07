"use client";
import React, { useEffect, useState } from "react";
import SummaryCard from "@/components/Cards/SummaryCard";
import InvoiceAction from "./InvoiceAction";


const Header = ({ invoices }) => {
  console.log(invoices, "invoices");

  function mapInvoiceStatus(invoices) {
    const statusMap = {};

    invoices.forEach(invoice => {
        const { status, amount } = invoice;

        // Parse the amount from a string to a float
        const numericAmount = parseFloat(amount.replace(/[$,]/g, ''));

        // Initialize the status object if it doesn't exist
        if (!statusMap[status]) {
            statusMap[status] = {
                count: 0,
                totalAmount: 0
            };
        }

        // Update the count and total amount for the current status
        statusMap[status].count += 1;
        statusMap[status].totalAmount += numericAmount;
    });

    // Transform the status map into the desired format
    const result = Object.entries(statusMap).map(([status, { count, totalAmount }]) => {
      // Round the total amount to two decimal places
      const roundedTotal = totalAmount.toFixed(2);

      // Split the naira and kobo
      const [naira, kobo] = roundedTotal.split('.');

      return {
          count: count,
          title: status.toLowerCase(), // Convert title to lowercase
          totalAmount: parseInt(naira).toLocaleString(), // Format naira with commas
          kobo: kobo // Kobo is already extracted as the fractional part
      };
  });

    return result;
}




const mappedStatus = mapInvoiceStatus(invoices.flatMap(invoice => invoice.items));
console.log(mappedStatus, "mappedStatus");



  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="font-medium text-3xl text-primaryDarkGrey md:text-4xl lg:text-5xl">
            Invoice
          </h1>
        </div>
        <div className="hidden lg:flex gap-8 items-center ">
          <button
            type="button"
            className="py-3 px-6  bg-white hover:text-white hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-primaryGrey  transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full"
          >
            see what’s new
          </button>
          <button
            type="button"
            className="py-3 px-10  bg-primary hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white  transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full"
          >
            Create
          </button>
        </div>
      </div>
      <div className="flex justify-end lg:hidden mb-10">
        <div className="flex gap-4 items-center ">
          <button
            type="button"
            className="py-3 px-4 text-sm   bg-white hover:text-white hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-primaryGrey  transition ease-in duration-200 text-center  font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full"
          >
            see what’s new
          </button>
          <button
            type="button"
            className="py-3 px-6  text-sm   bg-primary hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white  transition ease-in duration-200 text-center  font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full"
          >
            Create
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-8 items-center mb-10">
        {mappedStatus?.map((item, index) => (
          <SummaryCard
            key={index}
            title={item.title.toUpperCase()}
            total={item.totalAmount}
            statusCount={item.count}
            kobo={item.kobo}
          />
        ))}
      </div>
      <InvoiceAction />
    </div>
  );
};

export default Header;
