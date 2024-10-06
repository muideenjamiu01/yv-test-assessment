
import React from "react";
import { Modal } from "antd";
import InvoiceHeader from "./components/InvoiceHeader";
import Invoice from "./components/Invoice";
import InvoiceActivity from "./components/InvoiceActivity";

const InvoiceDetails = ({visible, onClose, invoice}) => {
    console.log(invoice, "inov")

  
  return (
    <Modal
      title="Invoice Summary"      
      open={visible}
      onCancel={() => onClose(null)}
      footer={null}
      // closable={false}
      width={1100}
      style={{ borderRadius: '40px' }}
    >
      <InvoiceHeader />
      <div className="flex">
        <Invoice />
        <InvoiceActivity />
      </div>
    </Modal>
  );
};

export default InvoiceDetails;
