"use client";
import React from "react";
import SummaryCard from "@/components/Cards/SummaryCard";
import InvoiceAction from "./InvoiceAction";
import CreateInvoiceModal from "./CreateInvoiceModal";
import SeeNewModal from "./SeeNewModal";
import Button from "@/components/Button/Button";
import useHeaderActions from "../hooks/useHeaderActions";

const Header = ({ invoices ,refetch}) => {
  const {
    showCreateModal,
    showNewModal,
    toggleCreateModal,
    toggleNewModal,
    mapInvoiceStatus,
  } = useHeaderActions();

  const mappedStatus = mapInvoiceStatus(
    invoices.flatMap((invoice) => invoice.items)
  );

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="font-medium text-3xl text-primaryDarkGrey md:text-4xl lg:text-5xl">
            Invoice
          </h1>
        </div>
        <div className="hidden lg:flex gap-8 items-center">
          <Button
            onClick={toggleNewModal}
            text="See what’s new"
            bgColor="bg-white"
            hoverColor="hover:bg-blue-700 hover:text-white"
            textColor="text-primaryGrey"
            size="md"
            className="focus:ring-blue-500 focus:ring-offset-blue-200"
          />
          <Button
            onClick={toggleCreateModal}
            text="Create"
            bgColor="bg-primary"
            hoverColor="hover:bg-blue-700"
            textColor="text-white"
            size="md"
            className="focus:ring-blue-500 focus:ring-offset-blue-200"
          />
        </div>
      </div>
      <div className="flex justify-end lg:hidden mb-10">
        <div className="flex gap-4 items-center ">
          <button
            onClick={toggleNewModal}
            type="button"
            className="py-3 px-4 text-sm bg-white hover:text-white hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-primaryGrey transition ease-in duration-200 text-center font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-full"
          >
            see what’s new
          </button>
          <button
            onClick={toggleCreateModal}
            type="button"
            className="py-3 px-6 text-sm bg-primary hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white transition ease-in duration-200 text-center font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-full"
          >
            Create
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 items-center mb-10">
        {mappedStatus?.map((item, index) => (
          <SummaryCard
            key={index}
            title={item.title.toUpperCase()}
            total={item.totalAmount}
            statusCount={item.count}
            kobo={item.kobo}
            refetch={refetch}
          />
        ))}
      </div>
      <InvoiceAction />
      <CreateInvoiceModal 
        visible={showCreateModal}
        onClose={toggleCreateModal}
        refetch={refetch}
      />
      <SeeNewModal visible={showNewModal} onClose={toggleNewModal} />
    </div>
  );
};

export default Header;
