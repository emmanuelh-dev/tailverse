import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineCopy, AiFillCopy, AiOutlineEdit } from "react-icons/ai";

import Link from "next/link";
import LikeButton from "./Cards/LikeButton";
import DeleteButton from "./Cards/DeleteButton";

interface Props {
  source: string;
  userName: string;
  type: string;
  rate: number;
  id: number;
}

const Card = ({ source, userName, type, rate, id }: Props) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(source).then(() => {
        toast.success("Copied to clipboard");
        setCopied(true);
      });
    } else {
      // Fallback for browsers that do not support Clipboard API
      prompt("Copy to clipboard: Ctrl+C or Cmd+C, Enter", source);
    }
  };

  function validation(source: string) {
    let newSource = source.replace(/screen/g, "full");
    newSource = newSource.replace(/type=/g, "typeof");
    console.log(type, rate, id);
    return newSource;
  }
  console.error(type);
  const newSource = validation(source);
  return (
    <div
      className={`mb-4 bg-neutral-50 dark:bg-neutral-900 rounded-3xl relative cursor-pointer hover:z-10 hover:opacity-100 hover:scale-105 shadow-md transition-all duration-500 ease-in-out  flex items-center justify-center max-sm:w-full md:min-w-[22rem] min-h-[22rem] mx-auto`}
    >
      <div
        dangerouslySetInnerHTML={{ __html: newSource }}
        className="rounded-3xl py-16"
      ></div>
      <button
        onClick={handleCopy}
        className="absolute top-4 right-1 dark:text-neutral-200 px-4 py-2 mr-2 text-2xl"
        title="Copy content to clipboard"
      >
        {copied ? <AiFillCopy /> : <AiOutlineCopy />}
      </button>
      <Link
        href={`/user/${userName}`}
        className="absolute top-4 left-1 dark:text-neutral-200 px-4 py-2 mr-2 text-xl font-bold"
        rel="noopener noreferrer"
      >
        {userName}
      </Link>
      <Link
        href={`/${type.toLowerCase()}`}
        className="absolute bottom-4 left-1 dark:text-neutral-200 px-4 py-2 mr-2 text-xl"
        rel="noopener noreferrer"
      >
        {type.toLowerCase()}
      </Link>
      <div className="flex justify-center absolute right-6 bottom-4 items-center text-2xl gap-3">
        <LikeButton id={id} rate={rate} />
        <DeleteButton id={id} userName={userName} />
        <Link href={`/item/${id}`} className="dark:text-white">
          <AiOutlineEdit />
        </Link>
      </div>
    </div>
  );
};

export default Card;
