"use client";
import React, { useState } from "react";
import Invoice from "./Invoice";
import InvoiceDetails from "../InvoiceDetails";

const RecentInvoices = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedInvoice, setSelectedInvoice] = useState(null);
  // Dummy data for invoices
  const invoices = [
    {
      id: 1,
      number: "1023494 - 2304",
      dueDate: "May 19th, 2023",
      amount: "$1,311,750.12",
      status: "Paid",
      date: "27th November, 2022",
    },
    {
      id: 2,
      number: "1023494 - 2304",
      dueDate: "May 19th, 2023",
      amount: "$1,311,750.12",
      status: "Overdue",
      date: "27th November, 2022",
    },
    {
      id: 3,
      number: "1023494 - 2304",
      dueDate: "May 19th, 2023",
      amount: "$1,311,750.12",
      status: "Draft",
      date: "8th December, 2022",
    },
    {
      id: 4,
      number: "1023494 - 2304",
      dueDate: "May 19th, 2023",
      amount: "$1,311,750.12",
      status: "Pending Payment",
      date: "8th December, 2022",
    },
    {
      id: 5,
      number: "1023494 - 2304",
      dueDate: "May 19th, 2023",
      amount: "$1,311,750.12",
      status: "Paid",
      date: "8th December, 2022",
    },
    {
      id: 6,
      number: "1023494 - 2304",
      dueDate: "May 19th, 2023",
      amount: "$1,311,750.12",
      status: "Paid",
      date: "8th December, 2022",
    },
    {
      id: 7,
      number: "1023494 - 2304",
      dueDate: "May 19th, 2023",
      amount: "$1,311,750.12",
      status: "Paid",
      date: "8th December, 2022",
    },
  ];

  // Function to style the status badges
  const getStatusBadge = (status) => {
    switch (status) {
      case "Paid":
        return "bg-secondaryGreen border border-[#12904333] text-primaryGreen";
      case "Overdue":
        return "bg-pink border border-[#FF566333] text-primaryRed";
      case "Draft":
        return "bg-grey300 border border-[#373B4733] text-primaryDarkGrey";
      case "Pending Payment":
        return "bg-gold border border-[#D98F0033] text-primaryOrange";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="bg-white p-10 rounded-[40px] shadow-md">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-medium text-lg  text-primaryBlack">
          Recent Invoices
        </h2>
        <button className="tracking-[1px] bg-transparent font-medium border border-[#E3E6EF] text-primary rounded-full px-4 py-3 text-sm">
          View All Invoices
        </button>
      </div>

      {/* Invoice List */}
      {invoices.map((invoice, index) => (
        <div key={index} className="mb-4">
          {/* Date Heading */}
          {(index === 0 || invoices[index - 1].date !== invoice.date) && (
            <h3 className="text-base font-medium text-primaryBlack mb-4">
              {invoice.date}
            </h3>
          )}
          {/* Invoice Row */}
          <div
            onClick={() => {
              setShowModal(true);
              setSelectedInvoice(invoice);
            }}
            className="pl-6  grid grid-cols-3 items-center py-2 hover:bg-gray-100  cursor-pointer"
          >
            {/* Invoice Number */}
            <div className="text-primaryDarkGrey font-medium text-sm">
              <p>Invoice -</p>
              <p> {invoice.number}</p>
            </div>
            <div>
              <p className="text-xs text-grey400 font-normal">Due Date: </p>
              <p className="text-sm text-primaryGrey font-medium">
                {invoice.dueDate}
              </p>
            </div>

            {/* Invoice Amount */}
            <div className="text-right">
              <p className="text-primaryDarkGrey text-base font-medium">
                {invoice.amount}
              </p>
              {/* Status Badge */}
              <span
                className={`capitalize text-xs font-medium py-1 px-3 rounded-full ${getStatusBadge(
                  invoice.status
                )}`}
              >
                {invoice.status}
              </span>
            </div>
          </div>
        </div>
      ))}
      <InvoiceDetails
        visible={showModal}
        onClose={() => setShowModal(false)}
        invoice={selectedInvoice}
      />
    </div>
  );
};

export default RecentInvoices;
