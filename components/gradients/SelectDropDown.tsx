import React, { useState, useEffect } from "react";

interface Option {
  title: string;
  value: string;
}

interface SelectDropdownProps {
  options: Option[];
  defaultValue?: string;
  defaultTitle?: string;
  tabindex?: number;
}

const SelectDropdown: React.FC<SelectDropdownProps> = ({
  options,
  defaultValue,
  defaultTitle,
  tabindex,
}) => {
  const [selected, setSelected] = useState<string | null>(
    defaultValue || (options.length > 0 ? options[0].value : null)
  );
  const [selectedTitle, setSelectedTitle] = useState<string | null>(
    defaultTitle || (options.length > 0 ? options[0].title : null)
  );
  const [open, setOpen] = useState(false);

  const handleInput = (value: string | null) => {
    setSelected(value);
    const newOption = options.find((option) => option.value === value);
    if (newOption) {
      setSelectedTitle(newOption.title);
    }
  };
  useEffect(() => {
    handleInput(selected);
  }, [selected]);

  return (
    <div
      className="relative w-full h-12 px-4 mt-2 font-medium text-neutral-700 bg-white border border-neutral-200 rounded-md focus:border-indigo-500 focus:outline-none focus:ring focus:ring-indigo-600 focus:ring-opacity-20"
      tabIndex={tabindex}
      onBlur={() => setOpen(false)}
    >
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full h-full"
      >
        <div
          className={`flex items-center w-full h-full ${open ? "open" : ""}`}
        >
          {selectedTitle}
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
          {options.map((option, i) => (
            <div
              key={i}
              className={`px-4 py-3 cursor-pointer hover:bg-neutral-50${
                selectedTitle === option.title ? " bg-neutral-100" : ""
              }`}
              onClick={() => {
                handleInput(option.value);
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
