"use client";
import React from "react";
import { forwardRef } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

import HomeIcon from "../../public/assets/svgs/home-icon.svg"
import OverviewIcon from "../../public/assets/svgs/dashboard.svg"
import userIcon from "../../public/assets/svgs/user-icon.svg"
import receiptIcon from "../../public/assets/svgs/receipt-item.svg"
import messageIcon from "../../public/assets/svgs/message-question.svg"
import settingsIcon from "../../public/assets/svgs/setting.svg"



const SidebarLink = ({ to, imageSrc, label, isActive, onClick }) => (
  <div onClick={onClick} className="cursor-pointer mb-2 ">
    <Link href={to}>
      <div
        className={`p-4 text-[#697598] font-normal text-sm text-center flex items-center transition-colors duration-200 ${
          isActive
            ? "bg-white text-[#4F4F4F]  border-4 border-[#F8F8FB] rounded-full text-sm font-bold mx-0"
            : "hover:text-gray-800 hover:bg-gray-100 hover:bg-border-2 hover:border-[#F8F8FB]  rounded-full"
        }`}
      >
        <div className="mr-2">
          <Image
            src={imageSrc}
            alt="icon"
            style={{
              width: "20px",
              height: "auto",
            }}
            quality={100}
            
          />
        </div>
        <div>
          <p className="text-sm font-normal">{label}</p>
        </div>
      </div>
    </Link>
  </div>
);

const Sidebar = forwardRef(({ showNav }, ref) => {
   const pathname = usePathname();
 

  return (
    <div
      ref={ref}
      className="bg-white  fixed w-56 h-screen overflow-y-auto z-50"
    >
        
        <div className="pt-4 flex justify-center">
          <div className="flex flex-col">
          <SidebarLink
              to="#"
              imageSrc={HomeIcon}
              // icon={<RiHome5Line className="h-5 w-5" />}
              label="Getting Started"
              isActive={pathname == "/start-page"}
              onClick={() => {}}
            />
            <SidebarLink
              to="#"
              imageSrc={OverviewIcon}
              label="Overview"
              isActive={pathname == "/overview"}
              onClick={() => {}}
            />           

            <SidebarLink
              to="#"
              imageSrc={userIcon }
              label="Accounts"
              isActive={pathname == "/accounts"}
              onClick={() => {}}
            />

            <SidebarLink
              to="/invoices"
              imageSrc={receiptIcon}
              label="Invoice"
              isActive={pathname == "/invoices"}
              onClick={() => {}}
            />
            <SidebarLink
              to="#"
              imageSrc={userIcon}
              label="Beneficiary Management"
              isActive={pathname == "/beneficiary-management"}
              onClick={() => {}}
            />
            
            <SidebarLink
              to="#"
              imageSrc={messageIcon}
              label="Help Center"
              isActive={pathname == "/help-center"}
              onClick={() => {}}
            />
            <SidebarLink
              to="#"
              imageSrc={settingsIcon}
              label="Settings"
              isActive={pathname == "/settings"}
              onClick={() => {}}
            />     
          </div>
        </div>
   
    </div>
  );
});

Sidebar.displayName = "Sidebar";
export default Sidebar;
