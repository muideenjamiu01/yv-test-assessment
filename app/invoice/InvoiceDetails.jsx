import React from "react";
import { Modal } from "antd";
import InvoiceHeader from "./components/InvoiceHeader";
import Invoice from "./components/Invoice";
import InvoiceActivity from "./components/InvoiceActivity";

const InvoiceDetails = ({ visible, onClose, invoice }) => {
  console.log(invoice, "inov");

  return (
    <Modal
      title="Invoice Summary"
      open={visible}
      onCancel={() => onClose(null)}
      footer={null}
      // closable={false}
      width={1200}
      style={{ borderRadius: "40px" }}
    >
      <InvoiceHeader invoiceData={invoice} />
      <div className="flex gap-6">
        <div className="w-3/5">
          <Invoice invoiceData={invoice?.details} />
        </div>
        <div className="w-2/5">
          <InvoiceActivity invoiceData={invoice?.invoiceActivities} />
        </div>
      </div>
    </Modal>
  );
};

export default InvoiceDetails;
