"use client";
import React, { useState, useEffect, Fragment } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { FaUserAlt } from "react-icons/fa";
import { RiMenuUnfoldLine } from "react-icons/ri";

import { Transition, Popover } from "@headlessui/react";
import { GiCheckMark } from "react-icons/gi";
import { toast } from "react-toastify";
import { HiOutlineBell } from "react-icons/hi2";

import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

const Navbar = ({ showNav, setShowNav }) => {
  const [user, setUser] = useState(null);

  const router = useRouter();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  useEffect(() => {
    // Check if we're on the client side
    if (typeof window !== "undefined") {
      const userData = sessionStorage.getItem("user");
      if (userData) {
        setUser(JSON.parse(userData));
      }
    }
  }, []);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        router.push("/");
        toast.success("Signed out successfully");
      })
      .catch((error) => {
        toast.error(error.message);
        if (error.response.status === 401) {
          toast.error("Session Expired");
          router.push("/");
        }
      });
  };

  return (
    <div
      className={`fixed z-50 flex items-center w-full h-20 bg-[#F5F6FA]  transition-all duration-[400ms] border-b  ${
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
      <div className="w-full flex justify-between items-center pr-4 md:pr-16 lg:ml-12">
        <h1 className="font-medium text-[28px] text-primaryDarkGrey">
          INVOICE
        </h1>

        <div className="flex justify-end">
          <div className="flex items-center justify-between">
            <div className="">
              <Popover className="relative">
                <Popover.Button className="outline-none mr-5 md:mr-8 cursor-pointer text-gray-700 flex justify-center items-center bg-white rounded-full p-2">
                  <HiOutlineBell className="h-8 w-10" />
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
                  <Popover.Panel className="absolute -right-16 sm:right-4 z-50 mt-2 bg-white  rounded max-w-xs sm:max-w-sm w-screen">
                    <div className="relative p-3">
                      <div className="flex justify-between items-center w-full">
                        <p className="text-gray-700 font-medium">
                          Notification
                        </p>
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
            </div>

            <div className="flex justify-center items-center bg-white rounded-full p-2">
              <div className="relative inline-block text-left">
                <div
                
                  data-testid="user-avatar"
                  className="flex items-center space-x-2 cursor-pointer"
                  onClick={toggleDropdown}
                >
                  {/* Circle with initials */}
                  <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white">
                    {user?.displayName?.substring(0, 2).toUpperCase()}
                  </div>
                  {/* Arrow */}
                  <svg
                    className="w-4 h-4 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>

                {/* Dropdown */}
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                    <button
                      data-testid="logout-button"
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
