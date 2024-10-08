"use client";
import React, { useState } from "react";
import moneyIcon from "../../../public/assets/svgs/money.svg";
import settingIcon from "../../../public/assets/svgs/setting.svg";
import userIcon from "../../../public/assets/svgs/user-icon.svg";
import Image from "next/image";
import CreateInvoiceModal from "./CreateInvoiceModal";
import InvoiceActionCard from "@/components/Cards/InvoiceActionCard";
import { toast } from "react-toastify";

const InvoiceAction = () => {
  const [showCreateModal, setShowCreateModal] = useState(false);

  return (
    <div>
      <h1 className="font-medium text-xl text-primaryDarkGrey mb-6">
        Invoice Actions
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2  xl:grid-cols-3 gap-8 items-center mb-6">
        <InvoiceActionCard
          onClick={() => setShowCreateModal(true)}
          title="Create New Invoice"
          description="Create new invoices easily"
          iconSrc={moneyIcon}
          bgColor="bg-primary"
          textColor="text-white"
          className="text-white hover:bg-white hover:text-primary transition duration-300 ease-in-out"
          imageStyle={{
            width: "auto",
            height: "auto", // Custom height for the image
          }}
        />
        <InvoiceActionCard
          onClick={() => {
            toast.dismiss()
            toast.success("Invoice settings updated")
          }}
          title="Change Invoice settings"
          description="Customise your invoices"
          iconSrc={settingIcon}
          bgColor="bg-white"
          className=" hover:bg-primary hover:text-white transition duration-300 ease-in-out"
          textColor="text-primaryDarkGrey"
          imageStyle={{
            width: "78px", // Custom width for the image
            height: "auto", // Custom height for the image
          }}
        />
        <InvoiceActionCard
          onClick={() => {
            toast.dismiss()
            toast.success("Customer list updated")
          }}
          title="Manage Customer list"
          description="Add and remove customers"
          iconSrc={userIcon}
          bgColor="bg-white"
          textColor="text-primaryDarkGrey"
          className="hover:bg-primary hover:text-white transition duration-300 ease-in-out"
          imageStyle={{
            width: "78px", // Custom width for the image
            height: "auto", // Custom height for the image
          }}
        />       
      </div>

      <CreateInvoiceModal
        visible={showCreateModal}
        onClose={() => setShowCreateModal(false)}
      />
    </div>
  );
};

export default InvoiceAction;
