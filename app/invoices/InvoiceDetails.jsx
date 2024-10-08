import React from "react";
import { Modal } from "antd";
import InvoiceHeader from "./components/InvoiceHeader";

const InvoiceDetails = ({ visible, onClose, invoice }) => {
  return (
    <Modal
      title="Invoice Summary"
      open={visible}
      onCancel={() => onClose(null)}
      footer={null}
      width={1200}
      style={{ borderRadius: "40px" }}
    >
      <InvoiceHeader invoiceData={invoice} />
    </Modal>
  );
};

export default InvoiceDetails;
