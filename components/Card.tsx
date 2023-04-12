import React from "react";
import { toast } from "react-hot-toast";
import { AiFillCopy } from "react-icons/ai";const copyToClipboard = (content: string) => {
  navigator.clipboard.writeText(content);
  toast("Tostado");
};

interface Props {
  source: string;
}
const Card = ({ source }: Props) => {
  return (
    <div className="mb-4 bg-neutral-100 dark:bg-neutral-900 rounded-xl relative cursor-pointer hover:z-10 hover:opacity-100 hover:scale-105 shadow-md transition-all duration-500 ease-in-out  flex items-center justify-center w-[23rem] h-[23rem] mx-auto">
      <div
        dangerouslySetInnerHTML={{ __html: source }}
        className="rounded-xl"
      ></div>
      <button
        onClick={() => {
          copyToClipboard(source);
        }}
        className="absolute top-4 right-1 text-neutral-200 px-4 py-2 mr-2 text-2xl"
      >
       <AiFillCopy />
      </button>
    </div>
  );
};

export default Card;
