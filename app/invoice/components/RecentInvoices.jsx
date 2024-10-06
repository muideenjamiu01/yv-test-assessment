"use client";
import React, { useEffect, useState } from "react";
import Invoice from "./Invoice";
import InvoiceDetails from "../InvoiceDetails";
import { getInvoices } from "../hooks/useInvoice";

const RecentInvoices = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedInvoice, setSelectedInvoice] = useState(null);
  const [invoices, setInvoices] = useState([]);
  
  // mock data for invoices
  useEffect(() => {
    const fetchInvoices = async () => {
      const data = await getInvoices();
      setInvoices(data);
    };
    fetchInvoices();
  }, []);

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
      {invoices?.map((invoiceGroup, index) => (
        <div key={index} className="mb-4">
          {/* Date Heading */}
          {/* {(index === 0 || invoices[index - 1].date !== invoiceGroup?.date) && (
            <h3 className="text-base font-medium text-primaryBlack mb-4">
              {invoiceGroup.date}
            </h3>
          )} */}
          <h3 className="text-base font-medium text-primaryBlack mb-4">
              {invoiceGroup.date}
            </h3>
          {/* Invoice Row */}
          {invoiceGroup.items.map((invoice, idx) => (
          <div key={idx}
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
           ))}
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
