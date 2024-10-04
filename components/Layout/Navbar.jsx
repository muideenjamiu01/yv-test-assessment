"use client";
import React, { useState, useEffect, Fragment} from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { FaUserAlt } from "react-icons/fa";
import { RiMenuUnfoldLine } from "react-icons/ri";

import { Menu, Transition, Popover } from "@headlessui/react";
import { GiCheckMark } from "react-icons/gi";
import { toast } from "react-toastify";
import { HiOutlineBell } from "react-icons/hi2";

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
      className={`fixed pr-10 z-50 flex items-center w-full h-16 bg-[#F5F6FA]  transition-all duration-[400ms] shadow-2xl ${
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
      <div className="w-full flex justify-end items-center pr-4 md:pr-16 lg:ml-12">
        
        <div className="flex items-center justify-between">
          <Popover className="relative">
            <Popover.Button className="outline-none mr-5 md:mr-8 cursor-pointer text-gray-700">
              <HiOutlineBell className="h-6 w-6" />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transform transition duration-100"
              enterFrom="transform scale-95"
              enterTo="transform scale-100"
              leave="transition ease-in duration-75  "
              leaveFrom="transform scale-100"
              leaveTo="transform scale-95"
            >
              <Popover.Panel className="absolute -right-16 sm:right-4 z-50 mt-2 bg-white shadow-sm rounded max-w-xs sm:max-w-sm w-screen">
                <div className="relative p-3">
                  <div className="flex justify-between items-center w-full">
                    <p className="text-gray-700 font-medium">Notification</p>
                    <a className="text-sm text-primary" href="#">
                      Mark all as read
                    </a>
                  </div>
                  <div className="mt-4 grid gap-4 grid-cols-1 overflow-hidden">
                    <div className="flex">
                      <div className="rounded-full shrink-0 bg-green-200 h-8 w-8 flex items-center justify-center">
                        <GiCheckMark className="h-4 w-4 text-green-600" />
                      </div>
                      <div className="ml-4">
                        <p className="font-medium text-gray-200">
                          Notification Title
                        </p>
                        <p className="text-sm text-gray-500 truncate">
                          Test Notification test for design
                        </p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="rounded-full shrink-0 bg-green-200 h-8 w-8 flex items-center justify-center">
                        <GiCheckMark className="h-4 w-4 text-green-600" />
                      </div>
                      <div className="ml-4">
                        <p className="font-medium text-gray-200">
                          Notification Title
                        </p>
                        <p className="text-sm text-gray-500 truncate">
                          Test Notification test for design
                        </p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="rounded-full shrink-0 bg-green-200 h-8 w-8 flex items-center justify-center">
                        <GiCheckMark className="h-4 w-4 text-green-600" />
                      </div>
                      <div className="ml-4">
                        <p className="font-medium text-gray-200">
                          Notification Title
                        </p>
                        <p className="text-sm text-gray-500 truncate">
                          Test Notification test for design
                        </p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="rounded-full shrink-0 bg-green-200 h-8 w-8 flex items-center justify-center">
                        <GiCheckMark className="h-4 w-4 text-green-600" />
                      </div>
                      <div className="ml-4">
                        <p className="font-medium text-gray-200">
                          Notification Title
                        </p>
                        <p className="text-sm text-gray-500 truncate">
                          Test Notification test for design
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          <div className="flex items-center">
          
            <div className="flex-none w-[1px] h-12 bg-gray-300  "> </div>
            <div className="ml-4  flex gap-x-2 items-center">
              <div className="rounded-full h-10 w-10 bg-gray-500"></div>
              <div className="flex flex-col">
                <small className="text-base font-medium text-grey-200">
                  {/* {user?.firstName + " " + user?.lastName} */}
                </small>
                <small className="text-sm font-normal text-grey-300">
                  {/* {user?.email || ""} */}
                </small>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end items-center">
        <button
          type="submit"
          onClick={handleLogout}
          className="bg-primary hover:bg-primary/70 text-white  rounded-md cursor-pointer font-bold py-2 px-6"
        >
          Logout
        </button>
      </div>
      </div>
      
    </div>
  );
};

export default Navbar;
