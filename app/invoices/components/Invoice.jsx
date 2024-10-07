import Image from "next/image";
import React from "react";
import senderImage from "../../../public/assets/svgs/sender.svg";

const Invoice = ({ invoiceData }) => {
  const {
    sender,
    customer,
    invoiceDetails,
    items,
    // totals,
    paymentInfo,
    footerNote,
  } = invoiceData;

// Function to calculate totals
const calculateTotals = (items) => {
  const subtotal = items.reduce((acc, item) => acc + item.total, 0);
  const discountRate = 0.025; // 2.5%
  const discount = subtotal * discountRate;
  const totalAmountDue = subtotal - discount;

  return {
    subTotal: subtotal,
    discount: discount.toFixed(2), // Format discount to two decimal places
    totalAmountDue: totalAmountDue.toFixed(2), // Format total to two decimal places
  };
};

// Calculate totals based on current items
const totals = calculateTotals(items);

  return (
    <div className="rounded-[40px] p-6 bg-white border">
      <div className="">
        <div className="bg-pink100 p-5 rounded-[40px] mb-6">
          <div className="flex flex-col md:flex-row justify-between mb-8">
            {/* Sender Details */}
            <div className="mb-6 md:mb-0">
              <p className="text-sm font-medium text-primaryGrey uppercase mb-4">
                Sender
              </p>
              <div className="flex items-start gap-4">
                <div className="bg-white rounded-2xl p-2">
                  <Image
                    src={senderImage}
                    alt="sender-image"
                    style={{
                      width: "40px",
                      height: "40px",
                    }}
                    quality={100}
                  />
                </div>
                <div>
                  <h2 className="text-lg font-medium text-primaryBlack mb-2">
                    {sender?.name}
                  </h2>
                  <p className="text-sm font-normal text-primaryGrey mb-2">
                    {sender?.phone}
                  </p>
                  <p className="text-sm font-normal text-primaryGrey mb-2">
                    {sender?.address}
                  </p>
                  <p className="text-sm font-normal text-primaryGrey">
                    {sender?.email}
                  </p>
                </div>
              </div>
            </div>

            {/* Customer Details */}
            <div className="text-left md:text-right">
              <p className="text-sm font-medium text-primaryGrey uppercase mb-4">
                Customer:
              </p>
              <p className="text-lg font-medium text-primaryBlack mb-2">
                {customer?.name}
              </p>
              <p className="text-sm font-medium text-primaryGrey mb-2">
                {customer?.phone}
              </p>
              <p className="text-sm font-medium text-primaryGrey">
                {customer?.email}
              </p>
            </div>
          </div>

          {/* Invoice Details */}
          <div className="w-full">
            <p className="text-sm font-medium text-primaryGrey uppercase mb-2">
              Invoice details
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="w-full">
                <p className="text-xs font-normal text-grey400 mb-2">
                  Invoice No:
                </p>
                <p className="text-sm font-medium text-primaryBlack">
                  {invoiceDetails?.invoiceNo}
                </p>
              </div>
              <div className="w-full">
                <p className="text-xs font-normal text-grey400 mb-2">
                  Issue Date:
                </p>
                <p className="text-sm font-medium text-primaryBlack">
                  {invoiceDetails?.issueDate}
                </p>
              </div>
              <div className="w-full">
                <p className="text-xs font-normal text-grey400 mb-2">
                  Due Date:
                </p>
                <p className="text-sm font-medium text-primaryBlack">
                  {invoiceDetails?.dueDate}
                </p>
              </div>
              <div className="w-full">
                <p className="text-xs font-normal text-grey400 mb-2">
                  Billing Currency:
                </p>
                <p className="text-sm font-medium text-primaryBlack">
                  {invoiceDetails?.billingCurrency}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Items */}
        <div className="flex gap-10 items-center">
          <p className="text-xl font-medium text-primaryBlack">Items</p>
          <hr className="w-full bg-slate-400" />
        </div>
        <div className="overflow-x-auto">
          <table className="w-full mb-8 table-auto">
            <thead>
              <tr className="text-left text-sm md:text-base">
                <th className="py-2 px-4 text-gray-600 w-40 md:w-60"></th>
                <th className="py-2 px-4 text-gray-600 text-right"></th>
                <th className="py-2 px-4 text-gray-600 text-right"></th>
                <th className="py-2 px-4 text-gray-600 text-right"></th>
              </tr>
            </thead>
            <tbody>
              {items?.map((item, index) => (
                <tr key={index} className="border-b border-gray-200">
                  <td className="py-2 px-4 w-40 md:w-60 font-medium text-sm md:text-base text-primaryBlack">
                    {item.description}
                    {item.notes && (
                      <p className="text-grey400 text-xs font-normal">
                        {item.notes}
                      </p>
                    )}
                  </td>
                  <td className="py-2 px-4 font-medium text-sm md:text-base text-primaryBlack text-right">
                    {item.quantity}
                  </td>
                  <td className="py-2 px-4 font-medium text-sm md:text-base text-primaryBlack text-right">
                    ${item.unitPrice.toLocaleString()}
                  </td>
                  <td className="py-2 px-4 font-medium text-sm md:text-base text-primaryBlack text-right">
                    ${item.total.toLocaleString()}
                  </td>
                </tr>
              ))}
              <tr>
                <td className="py-2 px-4 w-40 md:w-60"></td>
                <td
                  colSpan="2"
                  className="py-2 px-4 text-sm md:text-base text-grey200 font-normal uppercase text-right"
                >
                  Subtotal
                </td>
                <td className="py-2 px-4 text-base font-normal text-primaryDarkGrey text-right">
                  ${totals.subTotal.toLocaleString()}
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 w-40 md:w-60"></td>
                <td
                  colSpan="2"
                  className="py-2 px-4 text-sm md:text-base text-grey200 font-normal uppercase text-right"
                >
                  Discount (2.5%)
                </td>
                <td className="py-2 px-4 text-base font-normal text-primaryDarkGrey text-right">
                  ${totals.discount.toLocaleString()}
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4"></td>
                <td
                  colSpan="2"
                  className="py-2 px-4 text-sm  md:text-lg md:font-bold text-primaryDarkGrey uppercase text-right"
                >
                  Total Amount Due
                </td>
                <td className="py-2 px-4 text-sm md:text-lg font-bold text-primaryDarkGrey text-right">
                  ${totals.totalAmountDue.toLocaleString()}
                  
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Payment Information */}
        <div className="mt-6 md:mt-0 bg-white p-4 md:p-6 rounded-3xl border border-grey200">
          <p className="text-sm font-medium text-primaryGrey tracking-[1px] uppercase mb-4">
            Payment Information
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div className="w-full">
              <p className="text-xs font-normal text-grey400 uppercase mb-1 md:mb-2">
                Account Name
              </p>
              <p className="text-sm font-medium text-primaryBlack">
                {paymentInfo.accountName}
              </p>
            </div>
            <div className="w-full">
              <p className="text-xs font-normal text-grey400 uppercase mb-1 md:mb-2">
                Account Number
              </p>
              <p className="text-sm font-medium text-primaryBlack">
                {paymentInfo.accountNumber}
              </p>
            </div>
            <div className="w-full">
              <p className="text-xs font-normal text-grey400 uppercase mb-1 md:mb-2">
                Ach Routing No
              </p>
              <p className="text-sm font-medium text-primaryBlack">
                {paymentInfo.achRoutingNo}
              </p>
            </div>
            <div className="w-full">
              <p className="text-xs font-normal text-grey400 uppercase mb-1 md:mb-2">
                Bank Name
              </p>
              <p className="text-sm font-medium text-primaryBlack">
                {paymentInfo.bankName}
              </p>
            </div>
            <div className="w-full">
              <p className="text-xs font-normal text-grey400 uppercase mb-1 md:mb-2">
                Bank Branch
              </p>
              <p className="text-sm font-medium text-primaryBlack">
                {paymentInfo.bankBranch}
              </p>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-6  bg-lightGrey p-4 rounded-3xl">
          <p className="text-sm text-grey200">NOTE</p>
          <p className="text-sm text-gray-500"> {footerNote.note}</p>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
