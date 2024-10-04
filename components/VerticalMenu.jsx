"use client";
import React, { useState, useEffect, useRef } from "react";
import { MdOutlineMoreHoriz, MdMoreVert } from "react-icons/md";

const VerticalMenu = ({
  children,
  isBackground,
  width,
  iconType,
  icon,
  text,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef();

  const handleOutsideClick = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isMenuOpen]);

  return (
    <div className="relative" ref={menuRef}>
      {iconType === "icon" ? (
        icon === "horizontal" ? (
          <MdMoreVert
            className={`cursor-pointer ${isBackground ? "text-blue-500" : ""}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        ) : (
          <MdOutlineMoreHoriz
            className={`cursor-pointer ${isBackground ? "text-blue-500" : ""}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        )
      ) : (
        <div
          className={`cursor-pointer text-black ${
            isBackground ? "text-blue-500" : ""
          }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {text}
        </div>
      )}

      {isMenuOpen && (
        <div
          style={{ right: "0", top: "23px", zIndex: "1" }}
          className={`absolute ${
            width || "w-60"
          } mt-1 h-auto ease-in-out transition-all overflow-hidden origin-top-right bg-white rounded-md shadow-lg dark:bg-gray-800 ring-1 ring-black ring-opacity-5`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default VerticalMenu;
