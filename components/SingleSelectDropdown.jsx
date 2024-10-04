'use client'
import React, { useState, useRef, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";

const SingleSelectDropdown = ({
  label,
  options,
  onSelect,
  placeholder,
  placeholderColor,
  labeColor,
  isFit
}) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelect(option);
  };

  // handle outside click event
  const singleDropdownRef = useRef(null);

  // Handle clicks outside of the dropdown
  const handleClickOutside = (event) => {
    if (
      singleDropdownRef.current &&
      !singleDropdownRef.current.contains(event.target)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    // Attach the click event listener to the document body
    document.addEventListener("click", handleClickOutside);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  // end

  return (
    <div className="relative" ref={singleDropdownRef}>
      {label && (
        <label className={`block text-base font-medium text-grey20  mb-2 ${labeColor}`}>
          {label}
        </label>
      )}
      <div
        onClick={toggleDropdown}
        className={`border rounded-md p-3 bg-white ${isFit ? "w-fit gap-x-3" : "w-full gap-x-6"} text-left focus:outline-none cursor-pointer flex items-center justify-between`}
      >
        <span
          style={{ color: placeholderColor }} // Apply the custom color to the placeholder text
        >
          {selectedOption ? selectedOption.label : placeholder}
        </span>

        <IoIosArrowDown
          className={`w-4 h-4 transform ${isOpen ? "rotate-180" : ""}`}
        />
      </div>
      {isOpen && (
        <div
          className={`absolute z-30 mt-2 bg-white border rounded-md shadow-sm w-full`}
        >
          {options.map((option) => (
            <div
              key={option.value}
              onClick={() => handleOptionClick(option)}
              className="p-2 cursor-pointer hover:bg-blue-100 w-full"
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SingleSelectDropdown;
