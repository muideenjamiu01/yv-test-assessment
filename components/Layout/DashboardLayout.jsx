"use client";
import React, { useState, useEffect, Fragment } from "react";
import { Transition } from "@headlessui/react";
import SideBar from "./SideBar";
import Navbar from "./Navbar";

function DashboardLayout({ children }) {
  const [showNav, setShowNav] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  function handleResize(setShowNav, setIsMobile) {
    if (innerWidth <= 640) {
      setShowNav(false);
      setIsMobile(true);
    } else {
      setShowNav(true);
      setIsMobile(false);
    }
  }

  useEffect(() => {
    const handleResizeCallback = () => handleResize(setShowNav, setIsMobile);

    if (typeof window !== "undefined") {
      addEventListener("resize", handleResizeCallback);
      handleResize(setShowNav, setIsMobile); // Initial call to set initial state

      return () => {
        removeEventListener("resize", handleResizeCallback);
      };
    }
  }, [setShowNav, setIsMobile]);

  return (
    <>
      <Navbar showNav={showNav} setShowNav={setShowNav} />
      <Transition
        as={Fragment}
        show={showNav}
        enter="transform transition duration-[400ms]"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="transform duration-[400ms] transition ease-in-out"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
      >
        <SideBar showNav={showNav} />
      </Transition>
      <main
        className={`pt-16 transition-all duration-[400ms] ${
          showNav && !isMobile ? "pl-56 " : ""
        }`}
      >
        {/* pl-56 shouldhave the same value as w-56 inside sidebar first div container. if the value is 4 then the w too should be 4 */}
        <div className="px-4 md-px-10 bg-[#F5F6FA]">{children}</div>
      </main>
    </>
  );
}

export default DashboardLayout;
