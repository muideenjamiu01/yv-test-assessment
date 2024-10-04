"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { FaUserAlt } from "react-icons/fa";
import { RiMenuUnfoldLine } from "react-icons/ri";

import { toast } from "react-toastify";

const Navbar = ({ showNav, setShowNav }) => {
  const router = useRouter();
  const [user, setUser] = useState(null);

  // useEffect(() => {
  //   // Check if we're on the client side
  //   if (typeof window !== "undefined") {
  //     const userData = sessionStorage.getItem("user");
  //     if (userData) {
  //       setUser(JSON.parse(userData));
  //     }
  //   }
  // }, []);

  const handleLogout = async () => {
    const userData = sessionStorage.getItem("user");
    const token = sessionStorage.getItem("userToken");
    try {
      if (userData && token) {
        // const response = await api.logout();
        sessionStorage.clear();
        toast.success("Logged out successfully");
        // toast.success(response.message);
        router.push("/");
      }
    } catch (error) {
      toast.error(error.message);
      if (error.response.status === 401) {
        toast.error("Session Expired");
        router.push("/");
      }
    }
  };

  return (
    <div
      className={`fixed pr-10 z-20 w-full h-16 bg-[#DFD4E4]  transition-all duration-[400ms] ${
        showNav ? "pl-56" : ""
      }`}
    >
      <div className="">
        <RiMenuUnfoldLine
          className={`h-6 w-6 p-1 text-primary cursor-pointer ${
            showNav ? "rotate-180" : ""
          }`}
          onClick={() => setShowNav(!showNav)}
        />
      </div>
      <div className="flex justify-end items-center">
        <button
          type="submit"
          onClick={handleLogout}
          className="bg-primary hover:bg-primary/70 text-white mt-4  rounded-md cursor-pointer font-bold py-2 px-6"
        >
          {" "}
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
