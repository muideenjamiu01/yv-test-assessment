"use client";
import React, { useContext, useEffect, useState } from "react";
import { forwardRef } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

import {
  MdBusiness,
  MdDashboard,
  MdOutlinePayments,
  MdOutlineQrCodeScanner,
  MdLeaderboard,
} from "react-icons/md";

import { TbUsersGroup, TbUserCheck, TbWallet } from "react-icons/tb";
import { FaUser } from "react-icons/fa";
import { HiOutlineTicket } from "react-icons/hi";
import { RiHome5Line } from "react-icons/ri";

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
          <p className="text-sm font-medium">{label}</p>
        </div>
      </div>
    </Link>
  </div>
);

const Sidebar = forwardRef(({ showNav }, ref) => {
  const router = useRouter();
  const pathname = usePathname();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if we're on the client side
    if (typeof window !== "undefined") {
      const userData = sessionStorage.getItem("user");
      if (userData) {
        setUser(JSON.parse(userData));
      }
    }
  }, []);

  return (
    <div
      ref={ref}
      className="bg-white shadow-2xl fixed w-56 h-screen overflow-y-auto z-50"
    >
        
        <div className="pt-4 flex justify-center">
          <div className="flex flex-col">
          <SidebarLink
              to="/start-page"
              imageSrc={HomeIcon}
              // icon={<RiHome5Line className="h-5 w-5" />}
              label="Getting Started"
              isActive={pathname == "/start-page"}
              onClick={() => {}}
            />
            <SidebarLink
              to="/overview"
              imageSrc={OverviewIcon}
              label="Overview"
              isActive={pathname == "/overview"}
              onClick={() => {}}
            />           

            <SidebarLink
              to="/accounts"
              imageSrc={userIcon }
              label="Accounts"
              isActive={pathname == "/accounts"}
              onClick={() => {}}
            />

            <SidebarLink
              to="/invoice"
              imageSrc={receiptIcon}
              label="Invoice"
              isActive={pathname == "/invoice"}
              onClick={() => {}}
            />
            <SidebarLink
              to="/beneficiary-management"
              imageSrc={userIcon}
              label="Beneficiary Management"
              isActive={pathname == "/beneficiary-management"}
              onClick={() => {}}
            />
            
            <SidebarLink
              to="/help-center"
              imageSrc={messageIcon}
              label="Help Center"
              isActive={pathname == "/help-center"}
              onClick={() => {}}
            />
            <SidebarLink
              to="/settings"
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
