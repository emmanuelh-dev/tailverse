import React from "react";
import { toast } from "react-hot-toast";
import { AiFillCopy } from "react-icons/ai";
import Link from "next/link";
const copyToClipboard = (content: string) => {
  navigator.clipboard.writeText(content);
  toast("Tostado");
};

interface Props {
  source: string;
  userName: string;
  type:string;
}
const Card = ({ source, userName, type }: Props) => {
  return (
    <div className="mb-4 bg-neutral-100 dark:bg-neutral-950 rounded-xl relative cursor-pointer hover:z-10 hover:opacity-100 hover:scale-105 shadow-md transition-all duration-500 ease-in-out  flex items-center justify-center w-[23rem] h-[23rem] mx-auto">
      <div
        dangerouslySetInnerHTML={{ __html: source }}
        className="rounded-xl"
      ></div>
      <button
        onClick={() => {
          copyToClipboard(source);
        }}
        className="absolute top-4 right-1 dark:text-neutral-200 px-4 py-2 mr-2 text-2xl"
      >
        <AiFillCopy />
      </button>
      <Link
        href={`/user/${userName}`}
        className="absolute top-4 left-1 dark:text-neutral-200 px-4 py-2 mr-2 text-xl font-bold"
      >
        {userName}
      </Link>
      <Link
        href={`/${type}`}
        className="absolute bottom-4 left-1 dark:text-neutral-200 px-4 py-2 mr-2 text-xl"
      >
        {type}
      </Link>
    </div>
  );
};

export default Card;
