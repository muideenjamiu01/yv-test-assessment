import React from "react";
import { getInvoices } from "./hooks/useInvoice";
import Header from "./components/Header";
import RecentInvoices from "./components/RecentInvoices";
import RecentActivities from "./components/RecentActivities";

const page = () => {
  const data = getInvoices();
  console.log(data, "data");
  console.log({ data }, "data obj");

  return (
    <div className="py-10 md:px-8  ">
      <Header />
      <div className="lg:flex gap-x-8">
        <div className="w-3/5">
          <RecentInvoices />
        </div>
        <div className="w-2/5">
          <RecentActivities />
        </div>
      </div>
    

      
    </div>
  );
};

export default page;
