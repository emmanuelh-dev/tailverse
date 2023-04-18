import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineCopy, AiFillCopy } from "react-icons/ai";
import { AiOutlineEdit } from "react-icons/ai";

import Link from "next/link";

interface Props {
  source: string;
  userName: string;
  type: string;
}

const Card = ({ source, userName, type }: Props) => {
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
  const newSource = source.replace(/screen/g, "full");

  return (
    <div
      className="mb-4 bg-neutral-50 dark:bg-semi-black rounded-xl relative cursor-pointer hover:z-10 hover:opacity-100 hover:scale-105 shadow-md transition-all duration-500 ease-in-out  flex items-center justify-center min-w-[18rem] min-h-[18rem] mx-auto"
      // style={{
      //   overflow: "auto", // para agregar desplazamiento
      //   display: "flex", // para centrar el contenido
      //   alignItems: "center", // para centrar verticalmente
      //   justifyContent: "center", // para centrar horizontalmente
      // }}
    >
      <div
        dangerouslySetInnerHTML={{ __html: newSource }}
        className="rounded-xl p-16"
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
      <button
        onClick={() => toast("We are working on this section")} // Agrega aquí la función que quieres que se ejecute al hacer clic en el botón
        className="absolute bottom-4 right-1 text-white py-2 px-4 text-xl"
      >
        <AiOutlineEdit />
      </button>
    </div>
  );
};

export default Card;
