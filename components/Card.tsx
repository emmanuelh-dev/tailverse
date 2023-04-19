import React, { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import {
  AiOutlineCopy,
  AiFillCopy,
  AiOutlineEdit,
  AiOutlineHeart,
} from "react-icons/ai";
import { FaHeart } from "react-icons/fa";

import Link from "next/link";

interface Props {
  source: string;
  userName: string;
  type: string;
  rate: number;
  id: number;
}

const Card = ({ source, userName, type, rate, id }: Props) => {
  const [copied, setCopied] = useState(false);
  const [liked, setLiked] = useState(false);
  const [rates, setRates] = useState<number>(rate);

  useEffect(() => {
    const likedInLocalStorage = localStorage.getItem(`liked_${id}`);
    if (likedInLocalStorage !== null) {
      setLiked(likedInLocalStorage === "true");
    }
  }, [id]);

  const handleLike = async () => {
    const newLiked = !liked;
    const newRates = newLiked ? rates + 1 : rates - 1;

    setLiked(newLiked);
    setRates(newRates);
    localStorage.setItem(`liked_${id}`, newLiked.toString());

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/components/updateComponentRate`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id: id, rate: newRates }),
        }
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      toast.success(newLiked ? "Liked" : "Unliked");
    } catch (error) {
      console.error("Error:", error);
      setLiked(liked);
      setRates(rates);
      localStorage.setItem(`liked_${id}`, liked.toString());
      toast.error(
        newLiked ? "Could not like the item" : "Could not unlike the item"
      );
    }
  };

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
    <div className="mb-4 bg-neutral-50 dark:bg-semi-black rounded-xl relative cursor-pointer hover:z-10 hover:opacity-100 hover:scale-105 shadow-md transition-all duration-500 ease-in-out  flex items-center justify-center min-w-[23rem] min-h-[23rem] mx-auto">
      <div
        dangerouslySetInnerHTML={{ __html: newSource }}
        className="rounded-xl py-16"
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
      <div className="flex justify-center absolute right-6 bottom-4">
        <button
          onClick={handleLike}
          className="dark:text-neutral-200 mr-2 text-2xl flex items-center"
          title="Copy content to clipboard"
        >
          {rates} {liked ? <FaHeart /> : <AiOutlineHeart />}
        </button>
        <Link
          href={`/item/${id}`}
          onClick={() => toast("We are working on this section")}
          className="dark:text-white text-xl"
        >
          <AiOutlineEdit />
        </Link>
      </div>
    </div>
  );
};

export default Card;
