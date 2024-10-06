import InvoiceCard from "@/components/Cards/InvoiceCard";
import React from "react";
import moneyIcon from "../../../public/assets/svgs/money.svg";
import settingIcon from "../../../public/assets/svgs/setting.svg";
import userIcon from "../../../public/assets/svgs/user-icon.svg";
import Image from "next/image";

const InvoiceAction = () => {
  return (
    <div>
      <h1 className="font-medium text-xl text-primaryDarkGrey mb-6">
        Invoice Actions
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-6">
        <div
          className={`relative w-full text-white h-fit overflow-hidden bg-primary shadow-xl rounded-3xl p-6`}
        >
          <div className="mb-4">
            <Image
              src={moneyIcon}
              alt="icon"
              style={{
                width: "auto",
                height: "auto",
              }}
              quality={100}
            />
          </div>
          <p className=" text-[#F6F8FA] text-[22px] font-medium">
            Create New Invoice
          </p>
          <p className="text-[#F6F8FA] text-sm font-normal">
            Create new invoices easily{" "}
          </p>
        </div>
        <div
          className={`relative w-full  h-fit overflow-hidden bg-white shadow-xl rounded-3xl p-6`}
        >
          <div className="mb-4">
            <Image
              src={settingIcon}
              alt="icon"
              style={{
                width: "78px",
                height: "auto",
              }}
              quality={100}
            />
          </div>
          <p className=" text-primaryDarkGrey text-[22px] font-medium">
          Change Invoice settings
          </p>
          <p className="text-primaryGrey text-sm font-normal">
          Customise your invoices
          </p>
        </div>
        <div
          className={`relative w-full text-white h-fit overflow-hidden bg-white shadow-xl rounded-3xl p-6`}
        >
          <div className="mb-4">
            <Image
              src={userIcon}
              alt="icon"
              style={{
                width: "78px",
                height: "auto",
              }}
              quality={100}
            />
          </div>
          <p className=" text-primaryDarkGrey text-[22px] font-medium">
          Manage Customer list
          </p>
          <p className="text-primaryGrey text-sm font-normal">
          Add and remove customers
          </p>
        </div>
      </div>
      {/* <InvoiceCard className={"bg-primaryGrey text-white"}  imageSrc={moneyIcon}/> */}
    </div>
  );
};

export default InvoiceAction;
