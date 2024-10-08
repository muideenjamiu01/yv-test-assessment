

import { useMemo } from "react";
import moment from "moment";

// Function to style the status badges
export const getStatusBadge = (status) => {
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

// Function to get ordinal suffix
const getOrdinal = (day) => {
  const suffix = ["th", "st", "nd", "rd"];
  const val = day % 100;
  return day + (suffix[(val - 20) % 10] || suffix[val] || suffix[0]);
};

// Function to format the date with ordinal
const formatDateWithOrdinal = (dateString) => {
  const date = moment(dateString);
  const today = moment();
  const dayWithOrdinal = getOrdinal(date.date());

  if (date.isSame(today, "day")) {
    return `TODAY - ${dayWithOrdinal.toUpperCase()} ${date.format("MMMM, YYYY").toUpperCase()}`;
  }

  return `${dayWithOrdinal.toUpperCase()} ${date.format("MMMM, YYYY").toUpperCase()}`;
};

// Custom hook for processing invoices
const useInvoices = (invoices) => {
  const groupedInvoices = useMemo(() => {
    return invoices.reduce((acc, invoice) => {
      const dateKey = invoice.date.split("T")[0]; // Extract date part (YYYY-MM-DD)
      if (!acc[dateKey]) {
        acc[dateKey] = { date: dateKey, items: [] };
      }
      acc[dateKey].items.push(...invoice.items); // Spread items into the grouped array
      return acc;
    }, {});
  }, [invoices]);

  // Sort groups by date descending
  const sortedGroupedInvoices = useMemo(() => {
    return Object.values(groupedInvoices).sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
  }, [groupedInvoices]);

  return { sortedGroupedInvoices, formatDateWithOrdinal };
};

export default useInvoices;
