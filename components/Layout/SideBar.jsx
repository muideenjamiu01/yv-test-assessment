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
import { ImUserTie } from "react-icons/im";
import Logo from "../../../public/assets/logo/big.svg";
import { TbUsersGroup, TbUserCheck, TbWallet } from "react-icons/tb";
import { FaUser } from "react-icons/fa";
import { HiOutlineTicket } from "react-icons/hi";
import { GiVote } from "react-icons/gi";

const SidebarLink = ({ to, icon, label, isActive, onClick, subMenus }) => (
  <div onClick={onClick} className="cursor-pointer mb-2 ">
    <Link href={to}>
      <div
        className={`px-4 py-2 text-[#64748B] text-center flex items-center transition-colors duration-200 ${
          isActive
            ? "bg-white text-primary rounded-lg text-lg font-bold mx-0"
            : "text-white hover:bg-white hover:text-primary rounded-md"
        }`}
      >
        <div className="mr-2">{icon}</div>
        <div>
          <p className="text-base font-medium">{label}</p>
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
      className="bg-[#30143B] shadow-2xl fixed w-56 h-screen overflow-y-auto z-50"
    >
      <div className="flex justify-center  bg-white">
        <Image
          src={Logo}
          alt="prb-logo"
          style={{
            width: "120px",
            height: "auto",
          }}
          quality={100}
        />
      </div>
      {user?.role === "Steward" ? (
        <div className="pt-4 flex justify-center">
          <div className="flex flex-col">
            <SidebarLink
              to="/admin/scanner"
              icon={<MdOutlineQrCodeScanner className="h-5 w-5" />}
              label="Ticket Scanner"
              isActive={pathname === "/admin/scanner"}
              onClick={() => {}}
            />
          </div>
        </div>
      ) : (
        <div className="pt-4 flex justify-center">
          <div className="flex flex-col">
            <SidebarLink
              to="/admin/overview"
              icon={<MdDashboard className="h-5 w-5" />}
              label="Overview"
              isActive={pathname === "/admin/overview"}
              onClick={() => {}}
            />
            <SidebarLink
              to="/admin/sponsor"
              icon={<ImUserTie className="h-5 w-5" />}
              label="Sponsor"
              isActive={pathname === "/admin/sponsor"}
              onClick={() => {}}
            />

            <SidebarLink
              to="/admin/participants"
              icon={<TbUsersGroup className="h-5 w-5" />}
              label="Participants"
              isActive={pathname === "/admin/participants"}
              onClick={() => {}}
            />

            <SidebarLink
              to="/admin/attendees"
              icon={<TbUserCheck className="h-5 w-5" />}
              label="Attendees"
              isActive={pathname === "/admin/attendees"}
              onClick={() => {}}
            />
            <SidebarLink
              to="/admin/revenue"
              icon={<TbWallet className="h-5 w-5" />}
              label="Revenue"
              isActive={pathname === "/admin/revenue"}
              onClick={() => {}}
            />
            {/* Add more links as needed */}
            <SidebarLink
              to="/admin/tickets"
              icon={<HiOutlineTicket className="h-5 w-5" />}
              label="Tickets"
              isActive={pathname === "/admin/tickets"}
              onClick={() => {}}
            />

            <SidebarLink
              to="/admin/users"
              icon={<FaUser className="h-5 w-5" />}
              label="Users"
              isActive={pathname === "/admin/users"}
              onClick={() => {}}
            />
            <SidebarLink
              to="/admin/update-payment"
              icon={<MdOutlinePayments className="h-5 w-5" />}
              label="Update Payment"
              isActive={pathname === "/admin/update-payment"}
              onClick={() => {}}
            />
            <SidebarLink
              to="/admin/votes"
              icon={<GiVote className="h-5 w-5" />}
              label="Votes "
              isActive={pathname === "/admin/votes"}
              onClick={() => {}}
            />
            <SidebarLink
              to="/admin/complimentary"
              icon={<MdBusiness className="h-5 w-5" />}
              label="Complimentary "
              isActive={pathname === "/admin/complimentary"}
              onClick={() => {}}
            />
            <SidebarLink
              to="/admin/leaderboard"
              icon={<MdLeaderboard className="h-5 w-5" />}
              label="LeaderBoard "
              isActive={pathname === "/admin/leaderboard"}
              onClick={() => {}}
            />
            <SidebarLink
              to="/admin/scanner"
              icon={<MdOutlineQrCodeScanner className="h-5 w-5" />}
              label="Ticket Scanner"
              isActive={pathname === "/admin/scanner"}
              onClick={() => {}}
            />
          </div>
        </div>
      )}
    </div>
  );
});

Sidebar.displayName = "Sidebar";
export default Sidebar;
