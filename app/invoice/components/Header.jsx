"use client";
import React, { useEffect, useState } from "react";
import SummaryCard from "@/components/Cards/SummaryCard";
import InvoiceAction from "./InvoiceAction";
import { getInvoices } from "../hooks/useInvoice";

const Header = ({ data }) => {
  
  return (
    <div>
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="font-medium text-[28px] text-primaryDarkGrey">
            Invoice
          </h1>
        </div>
        <div className="flex gap-8 items-center ">
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
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center mb-10">
        {data?.map((item, index) => (
          <SummaryCard
            key={index}
            title={item.title}
            total={item.total}
            statusCount={item.statusCount}
            kobo={item.kobo}
          />
        ))}
        {/* <SummaryCard
          title="PAID"
          total="4,120,102"
          statusCount={"1,289"}
          kobo={"76"}
        />
        <SummaryCard
          title="OVERDUE"
          total="23,000"
          statusCount={"13"}
          kobo={"13"}
        />
        <SummaryCard
          title="DRAFT"
          total="12,200"
          statusCount={"08"}
          kobo={"00"}
        />
        <SummaryCard
          title="UNPAID"
          total="87,102"
          statusCount={"06"}
          kobo={"00"}
        /> */}
      </div>
      <InvoiceAction />
    </div>
  );
};

export default Header;
