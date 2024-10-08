"use client"; 
import React from "react"; 
import useInvoiceActions from "../hooks/useInvoiceActions"; 
import Invoice from "./Invoice"; 
import InvoiceActivity from "./InvoiceActivity"; 
import ReminderSelector from "./ReminderSelector"; 
import Button from "@/components/Button/Button"; 

const InvoiceHeader = ({ invoiceData }) => {
  const {
    invoiceRef,
    dropdownOpen,
    handleDownloadPDF,
    handleSendInvoice,
    handleMoreOptions,
    handleDuplicateInvoice,
    handleGetShareableLink,
    filterByKeyWord,
  } = useInvoiceActions();

  const dates = [
    { id: 1, name: "14 days before due date" },
    { id: 2, name: "7 days before due date" },
    { id: 3, name: "3 days before due date" },
    { id: 4, name: "24 hrs before due date" },
    { id: 5, name: "On the due date" },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="font-bold text-xl md:text-3xl text-primaryBlack">
            Invoice - {invoiceData?.number}
          </h1>
          <p className="text-base font-normal text-primaryGrey">
            View the details and activity of this invoice
          </p>
        </div>

        <div className="hidden lg:flex items-center space-x-4">
          {/* Download as PDF */}
          <Button
            onClick={handleDownloadPDF}
            text="Download as PDF"
            bgColor="bg-white"
            hoverColor="hover:bg-blue-700 hover:text-white"
            textColor="text-primaryGrey"
            size="md"
            className="border border-[#E3E6EF] focus:ring-blue-500 focus:ring-offset-blue-200"
          />

          {/* Send Invoice */}
          <Button
            onClick={handleSendInvoice}
            text="Send Invoice"
            bgColor="bg-primary"
            hoverColor="hover:bg-blue-700"
            textColor="text-white"
            size="md"
            className="focus:ring-blue-500 focus:ring-offset-blue-200"
          />

          {/* More dropdown */}
          <div className="relative">
            <Button
              onClick={handleMoreOptions}
              text="More"
              bgColor="bg-white"
              hoverColor="hover:bg-blue-700 hover:text-white"
              textColor="text-primaryGrey"
              size="md"
              className="border border-[#E3E6EF] focus:ring-offset-blue-200"
            />

            {/* Dropdown menu */}
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md py-2">
                <button
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                  onClick={handleDuplicateInvoice}
                >
                  Duplicate Invoice
                </button>
                <button
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                  onClick={handleGetShareableLink}
                >
                  Get Shareable Link
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Partial Payment button */}
      <div className="mb-6 flex flex-wrap gap-4 items-center">
        <button className="px-4 py-3 text-xs tracking-[1px] bg-[#F2FBFF] font-medium border border-[#003EFF33] text-primary rounded-full">
          Partial Payment
        </button>

        <div className="flex items-center lg:hidden space-x-4">
          {/* Download as PDF */}
          <button
            className="py-3 px-2 md:py-3 md:px-6 text-xs md:text-base bg-white hover:text-white hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-primary transition ease-in duration-200 text-center font-semibold focus:outline-none focus:ring-2 rounded-full"
            onClick={handleDownloadPDF}
          >
            Download as PDF
          </button>

          {/* Send Invoice */}
          <button
            className="py-3 px-2 md:py-3 md:px-6 text-xs md:text-base bg-primary hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white transition ease-in duration-200 text-center font-semibold focus:outline-none focus:ring-2 rounded-full"
            onClick={handleSendInvoice}
          >
            Send Invoice
          </button>

          {/* More dropdown */}
          <div className="relative">
            <button
              className="py-3 px-4 md:py-3 md:px-6 text-sm md:text-base bg-white hover:text-white hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-primaryGrey transition ease-in duration-200 text-center font-semibold focus:outline-none focus:ring-2 rounded-full"
              onClick={handleMoreOptions}
            >
              More
            </button>

            {/* Dropdown menu */}
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md py-2">
                <button
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                  onClick={handleDuplicateInvoice}
                >
                  Duplicate Invoice
                </button>
                <button
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                  onClick={handleGetShareableLink}
                >
                  Get Shareable Link
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <ReminderSelector />

      <div className="xl:flex gap-6">
        <div className="xl:w-3/5">
          <Invoice invoiceData={invoiceData?.details} invoiceRef={invoiceRef} />
        </div>
        <div className="xl:w-2/5">
          <InvoiceActivity invoiceData={invoiceData?.invoiceActivities} />
        </div>
      </div>
    </div>
  );
};

export default InvoiceHeader;
