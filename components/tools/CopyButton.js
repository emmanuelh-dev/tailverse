import React from "react";
import { RiFileCopyLine } from "react-icons/ri";
import { toast } from "react-hot-toast";

const CopyButton = ({ textToCopy, info }) => {
  const handleCopyClick = () => {
    navigator.clipboard.writeText(textToCopy);
    toast.success("Copied to clipboard!");
  };

  return (
    <button
      className="max-w-[10rem] flex lg:w-full xl:w-auto duration-300 transition-color lg:mt-4 xl:mt-0 sm:mt-0 bg-neutral-950 dark:bg-white dark:text-black text-white items-center justify-center px-4 py-2.5 space-x-3 font-semibold rounded-md focus:outline-none"
      onClick={handleCopyClick}
    >
      <RiFileCopyLine />
      <span>{info}</span>
    </button>
  );
};

export default CopyButton;
