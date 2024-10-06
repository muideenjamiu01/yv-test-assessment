import React from 'react';

const Invoice = () => {
  return (
    <div className="bg-gray-100 p-10 flex justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-2xl">
        {/* Header */}
        <div className="flex justify-between mb-6">
          <div>
            <h2 className="text-xl font-bold text-gray-700">Fabulous Enterprise</h2>
            <p className="text-sm text-gray-500">+234 808 371173 | hello@fabulousent.co</p>
            <p className="text-sm text-gray-500">456 Hart Ridge Road 49426 Gaines, MI</p>
          </div>
          <div className="text-right">
            <p className="text-sm font-medium text-gray-700">Customer:</p>
            <p className="text-lg font-semibold text-gray-900">Olanleji Ojo Adewale</p>
            <p className="text-sm text-gray-500">+234 805 181 2309</p>
            <p className="text-sm text-gray-500">info@olanlejiade.com</p>
          </div>
        </div>

        {/* Invoice details */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div>
            <p className="text-sm font-medium text-gray-700">Invoice No:</p>
            <p className="text-sm text-gray-900">#322305500</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-700 text-right">Billing Currency:</p>
            <p className="text-sm text-gray-900 text-right">USD ($)</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-700">Issue Date:</p>
            <p className="text-sm text-gray-900">March 20th, 2023</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-700 text-right">Due Date:</p>
            <p className="text-sm text-gray-900 text-right">May 19th, 2023</p>
          </div>
        </div>

        {/* Items */}
        <table className="w-full mb-8">
          <thead>
            <tr className="text-left bg-gray-200">
              <th className="py-2 px-4 text-gray-600">Items</th>
              <th className="py-2 px-4 text-gray-600">Quantity</th>
              <th className="py-2 px-4 text-gray-600">Rate</th>
              <th className="py-2 px-4 text-gray-600">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4">Email Marketing</td>
              <td className="py-2 px-4">10</td>
              <td className="py-2 px-4">$1,500</td>
              <td className="py-2 px-4">$15,000.00</td>
            </tr>
            <tr>
              <td className="py-2 px-4">Video looping effect</td>
              <td className="py-2 px-4">6</td>
              <td className="py-2 px-4">$110,500</td>
              <td className="py-2 px-4">$663,000.00</td>
            </tr>
            <tr>
              <td className="py-2 px-4">Graphic design for emails</td>
              <td className="py-2 px-4">7</td>
              <td className="py-2 px-4">$32,750</td>
              <td className="py-2 px-4">$19,250.00</td>
            </tr>
            <tr>
              <td className="py-2 px-4">Video looping effect</td>
              <td className="py-2 px-4">6</td>
              <td className="py-2 px-4">$110,500</td>
              <td className="py-2 px-4">$663,000.00</td>
            </tr>
          </tbody>
        </table>

        {/* Totals */}
        <div className="flex justify-end mb-6">
          <div className="text-right">
            <p className="text-sm text-gray-700">Subtotal: $6,697,200.00</p>
            <p className="text-sm text-gray-700">Discount (2.5%): $167,430.00</p>
            <p className="text-lg font-bold text-gray-900">Total Amount Due: $6,529,770.00</p>
          </div>
        </div>

        {/* Payment Information */}
        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="text-sm font-medium text-gray-700">Payment Information</p>
          <div className="grid grid-cols-2 gap-4 mt-2">
            <div>
              <p className="text-sm text-gray-600">Account Name:</p>
              <p className="text-sm text-gray-900">Fabulous Enterprise</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 text-right">Due Date:</p>
              <p className="text-sm text-gray-900 text-right">May 19th, 2023</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Account Number:</p>
              <p className="text-sm text-gray-900">3223055000</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 text-right">Bank Name:</p>
              <p className="text-sm text-gray-900 text-right">USD ($)</p>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">Thank you for your patronage</p>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
