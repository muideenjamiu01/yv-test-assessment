import { useState } from "react";
import { toast } from "react-toastify";

const useHeaderActions = () => {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showNewModal, setShowNewModal] = useState(false);

  const toggleCreateModal = () => setShowCreateModal((prev) => !prev);
  const toggleNewModal = () => setShowNewModal((prev) => !prev);

  const mapInvoiceStatus = (invoices) => {
    const statusMap = {};

    invoices?.forEach((invoice) => {
      const { status, amount } = invoice;

      // Parse the amount from a string to a float
      const numericAmount = parseFloat(amount.replace(/[$,]/g, ""));

      // Initialize the status object if it doesn't exist
      if (!statusMap[status]) {
        statusMap[status] = {
          count: 0,
          totalAmount: 0,
        };
      }

      // Update the count and total amount for the current status
      statusMap[status].count += 1;
      statusMap[status].totalAmount += numericAmount;
    });

    // Transform the status map into the desired format
    return Object.entries(statusMap).map(([status, { count, totalAmount }]) => {
      const roundedTotal = totalAmount.toFixed(2);
      const [naira, kobo] = roundedTotal.split(".");
      return {
        count: count,
        title: status.toLowerCase(),
        totalAmount: parseInt(naira).toLocaleString(),
        kobo: kobo,
      };
    });
  };

  return {
    showCreateModal,
    showNewModal,
    toggleCreateModal,
    toggleNewModal,
    mapInvoiceStatus,
  };
};

export default useHeaderActions;
