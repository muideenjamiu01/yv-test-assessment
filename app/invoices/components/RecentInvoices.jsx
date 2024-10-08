"use client"; 
import React, { useState } from "react"; 
import InvoiceDetails from "../InvoiceDetails"; 
import Button from "@/components/Button/Button"; 
import useInvoices, { getStatusBadge } from "../hooks/useInvoice";


// Component to display individual invoice rows
const InvoiceRow = ({ invoice, onClick }) => (
  <div
    onClick={onClick}
    className="md:pl-6 grid grid-cols-3 items-center py-2 hover:bg-gray-100 cursor-pointer"
  >
    {/* Invoice Number */}
    <div className="text-primaryDarkGrey font-medium text-sm">
      <p>Invoice -</p>
      <p>{invoice.number}</p>
    </div>
    <div>
      <p className="text-xs text-grey400 font-normal">Due Date: </p>
      <p className="text-sm text-primaryGrey font-medium">
        {invoice.dueDate}
      </p>
    </div>
    {/* Invoice Amount and Status */}
    <div className="text-right">
      <p className="text-primaryDarkGrey text-base font-medium">{invoice.amount}</p>
      {/* Status Badge */}
      <span className={`uppercase text-xs font-medium py-1 px-3 rounded-full ${getStatusBadge(invoice.status)}`}>
        {invoice.status}
      </span>
    </div>
  </div>
);

// Main component to display recent invoices
const RecentInvoices = ({ invoices, refetch }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedInvoice, setSelectedInvoice] = useState(null);

  // Use the custom hook
  const { sortedGroupedInvoices, formatDateWithOrdinal } = useInvoices(invoices);

  return (
    <div className="bg-white p-5 md:p-10 rounded-[20px] md:rounded-[40px]">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-medium text-base md:text-lg text-primaryBlack">Recent Invoices</h2>
        <Button
          text="View All Invoices"
          bgColor="bg-transparent"
          hoverColor="hover:bg-blue-700 hover:text-white"
          textColor="text-primary"
          size="sm"
          className="tracking-[1px] border border-[#E3E6EF] focus:ring-offset-blue-200"
        />
      </div>

      {/* Invoice List */}
      <div className="p-4">
        {sortedGroupedInvoices.map((invoiceGroup, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-base font-medium text-primaryBlack mb-4">
              {formatDateWithOrdinal(invoiceGroup.date)}
            </h3>
            {/* Render each invoice in the group */}
            {invoiceGroup.items.map((invoice, idx) => (
              <InvoiceRow
                key={idx}
                invoice={invoice}
                onClick={() => {
                  setShowModal(true);
                  setSelectedInvoice(invoice);
                }}
              />
            ))}
          </div>
        ))}
      </div>

      {/* Invoice Details Modal */}
      <InvoiceDetails
        visible={showModal}
        onClose={() => setShowModal(false)}
        invoice={selectedInvoice}
      />
    </div>
  );
};

export default RecentInvoices;
