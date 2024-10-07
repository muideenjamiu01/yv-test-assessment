"use client";
import React, { useEffect, useState } from "react";
import InvoiceDetails from "../InvoiceDetails";
import moment from 'moment';

const RecentInvoices = ({invoices}) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedInvoice, setSelectedInvoice] = useState(null);
  const [invoiceLength, setInvoiceLength] = useState(0);

  const [resultsDisplayLimit, setResultsDisplayLimit] = useState(6);
  const increaseDisplayLimit = () => {
    setResultsDisplayLimit(resultsDisplayLimit + 9);
  };
 
console.log(invoices," are you here")
  // Function to style the status badges
  const getStatusBadge = (status) => {
    switch (status) {
      case "Paid":
        return "bg-secondaryGreen border border-[#12904333] text-primaryGreen";
      case "Overdue":
        return "bg-pink border border-[#FF566333] text-primaryRed";
      case "Draft":
        return "bg-grey300 border border-[#373B4733] text-primaryDarkGrey";
      case "Pending":
        return "bg-gold border border-[#D98F0033] text-primaryOrange";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const getOrdinal = (day) => {
    const suffix = ["th", "st", "nd", "rd"];
    const val = day % 100;
    return day + (suffix[(val - 20) % 10] || suffix[val] || suffix[0]);
  };
  
  const formatDateWithOrdinal = (dateString) => {
    const date = moment(dateString);
    const today = moment();
  
    const dayWithOrdinal = getOrdinal(date.date());
  
    if (date.isSame(today, 'day')) {
      return `TODAY - ${dayWithOrdinal.toUpperCase()} ${date.format('MMMM, YYYY').toUpperCase()}`;
    }
  
    return `${dayWithOrdinal.toUpperCase()} ${date.format('MMMM, YYYY').toUpperCase()}`;
  };
console.log(invoiceLength,"invoiceLength")
  return (
    <div className="bg-white p-5 md:p-10 rounded-[20px] md:rounded-[40px] shadow-md">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-medium text-base md:text-lg  text-primaryBlack">
          Recent Invoices
        </h2>
        {/* {resultsDisplayLimit < invoiceLength?.length && ( */}
        <button type="button" onClick={increaseDisplayLimit} className="tracking-[1px] text-sm bg-transparent font-medium border border-[#E3E6EF] text-primary rounded-full px-4 py-3 ">
          View All Invoices
        </button>
        {/* )} */}
      </div>

      {/* Invoice List */}
      {invoices?.map((invoiceGroup, index) => (
        <div key={index} onClick={() => setInvoiceLength(invoiceGroup?.items)} className="mb-4">
          <h3 className="text-base font-medium text-primaryBlack mb-4">
            {formatDateWithOrdinal(invoiceGroup.date)}
          </h3>
          {/* Invoice Row */}
          {invoiceGroup.items.map((invoice, idx) => (
            <div
              key={idx}
              onClick={() => {
                setShowModal(true);
                setSelectedInvoice(invoice);
              }}
              className="md:pl-6  grid grid-cols-3 items-center py-2 hover:bg-gray-100  cursor-pointer"
            >
              {/* Invoice Number */}
              <div className="text-primaryDarkGrey font-medium text-sm">
                <p>Invoice -</p>
                <p> {invoice.number}</p>
              </div>
              <div>
                <p className="text-xs text-grey400 font-normal">Due Date: </p>
                <p className="text-sm text-primaryGrey font-medium">
                  {formatDateWithOrdinal(invoice.dueDate)}
                </p>
              </div>

              {/* Invoice Amount */}
              <div className="text-right">
                <p className="text-primaryDarkGrey text-base font-medium">
                  {invoice.amount}
                </p>
                {/* Status Badge */}
                <span
                  className={`uppercase text-xs font-medium py-1 px-3 rounded-full ${getStatusBadge(
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
