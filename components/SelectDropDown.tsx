import React, { useState, useEffect } from "react";

const SelectDropdown: React.FC<SelectDropdownProps> = ({
  value,
  title,
  setValue,
  setTitle,
  options,
}) => {
  const [open, setOpen] = useState(false);
  const handleSelectOption = (option: any) => {
    setTitle(option.title);
    setValue(option.value);
  };
  return (
    <div
      className="relative w-full h-12 px-4 mt-2 font-medium text-neutral-700 bg-white border border-neutral-200 rounded-md focus:border-indigo-500 focus:outline-none focus:ring focus:ring-indigo-600 focus:ring-opacity-20"
      // onBlur={() => setOpen(false)}
    >
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full h-full"
      >
        <div
          className={`flex items-center w-full h-full ${open ? "open" : ""}`}
        >
          {title}
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-4 h-4 text-neutral-700"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </button>

      {open && (
        <div className="absolute left-0 z-20 w-full py-2 mt-2 bg-white border border-neutral-100 rounded-lg shadow-xl top-12 lg:left-auto lg:right-0">
          {options.map((option, index) => (
            <div
              key={index}
              className={`px-4 py-3 cursor-pointer hover:bg-neutral-100 ${
                title === option.title ? " bg-neutral-100" : ""
              }`}
              onClick={() => {
                handleSelectOption(option);
                setOpen(false);
              }}
            >
              {option.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectDropdown;
