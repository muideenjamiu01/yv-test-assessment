"use client";
import React, { useState } from "react";
import { toast } from "react-toastify";

const InvoiceHeader = ({ invoiceData }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleDownloadPDF = () => {
    // Implement PDF download logic
    console.log("Downloading PDF...");
  };

  const handleSendInvoice = () => {
    // Implement Send Invoice logic (e.g., via email)
    toast.success("Invoice Sent");
  };

  const handleMoreOptions = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleDuplicateInvoice = () => {
    toast.success("Invoice Duplicated");
  };

  const handleGetShareableLink = () => {
    toast.success("Link Shared");
  };

  const [keyword, setKeyword] = useState(null);
  const filterByKeyWord = (value) => {
    setKeyword(value);
  };

  const dates = [
    {
      id: 1,
      name: "14 days before due date",
    },
    {
      id: 2,
      name: "7 days before due date",
    },
    {
      id: 3,
      name: "3 days before due date",
    },
    {
      id: 4,
      name: "24 hrs before due date",
    },
    {
      id: 5,
      name: "On the due date",
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center py-4 px-6 bg-white shadow-sm">
        <div>
          <h1 className="font-bold text-3xl  text-primaryBlack">
            Invoice - {invoiceData?.number}
          </h1>
          <p className="text-base font-normal text-primaryGrey mb-6">
            View the details and activity of this invoice
          </p>
          {/* Partial Payment button */}
          <button className=" tracking-[1px] bg-transparent font-medium border border-[#E3E6EF] text-primary rounded-full px-4 py-3 text-sm">
            Partial Payment
          </button>
        </div>

        <div className="flex items-center space-x-4">
          {/* Download as PDF */}
          <button
            className="py-3 px-6  bg-white hover:text-white hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-primary  transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full"
            onClick={handleDownloadPDF}
          >
            Download as PDF
          </button>

          {/* Send Invoice */}
          <button
            className="py-3 px-10  bg-primary hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white  transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full"
            onClick={handleSendInvoice}
          >
            Send Invoice
          </button>

          {/* More dropdown */}
          <div className="relative">
            <button
              className="py-3 px-6  bg-white hover:text-white hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-primaryGrey  transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full"
              onClick={handleMoreOptions}
            >
              More
            </button>

            {/* Dropdown menu */}
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-md py-2">
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

      <div className="mb-6 flex gap-4 items-center p-4 border border-[#E3E6EF] rounded-3xl w-fit">
        <p className="uppercase">Reminders</p>{" "}
        <div className="flex flex-wrap gap-2 w-fit">
          {dates?.map((item) => (
            <button
              key={item.id}
              onClick={() => filterByKeyWord(item.id)}
              className={`px-4 py-2 text-sm rounded-full text-[#05182D] bg-white border border-[#EAEAEA] hover:bg-[#EAEAEA] focus:bg-[#E6FFF0] ${
                keyword === item.id ? "bg-[#E6FFF0]" : ""
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InvoiceHeader;
