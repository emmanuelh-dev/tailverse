import React, { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import {
  AiOutlineCopy,
  AiFillCopy,
  AiOutlineEdit,
  AiOutlineHeart,
} from "react-icons/ai";
import { FaHeart, FaTrash } from "react-icons/fa";

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
  const [user, setUser] = useState<string>("");
  let token: string | null = null;
  useEffect(() => {
    const likedInLocalStorage = localStorage.getItem(`liked_${id}`);
    const storedUser = sessionStorage.getItem("user");
    if (typeof storedUser === "string") {
      setUser(storedUser);
    }
    if (likedInLocalStorage !== null) {
      setLiked(likedInLocalStorage === "true");
    }
  }, [id]);
  try {
    token = sessionStorage.getItem("token");

  } catch (error) {
    console.error(error);
  }
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
            Authorization: `Bearer ${token}`,
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
  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this component?")) {
      // El usuario ha confirmado que quiere borrar el componente
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/components/deleteComponent`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ id: id }),
          }
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        toast.success("Component deleted");
        window.location.reload();
      } catch (error) {
        console.error("Error:", error);
        toast.error("Could not delete component");
      }
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

  function validation(source: string) {
    let newSource = source.replace(/screen/g, "full");
    newSource = newSource.replace(/type=/g, "typeof");
    return newSource;
  }
  console.error(type);
  const newSource = validation(source);
  return (
    <div
      className={`mb-4 bg-neutral-50 dark:bg-semi-black rounded-xl relative cursor-pointer hover:z-10 hover:opacity-100 hover:scale-105 shadow-md transition-all duration-500 ease-in-out  flex items-center justify-center max-sm:w-full md:min-w-[22rem] min-h-[22rem] mx-auto`}
    >
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
      <div className="flex justify-center absolute right-6 bottom-4 items-center text-2xl">
        <button
          onClick={handleLike}
          className="dark:text-neutral-200 mr-2 flex items-center text-2xl"
          title="Copy content to clipboard"
        >
          {rates}
          {liked ? (
            <FaHeart className="pl-1" />
          ) : (
            <AiOutlineHeart className="pl-1" />
          )}
        </button>
        {user === userName ? (
          <button
            onClick={handleDelete}
            className="text-red-600 mr-2 flex items-center"
            title="Copy content to clipboard"
          >
            <FaTrash />
          </button>
        ) : (
          ""
        )}

        <Link
          href={`/item/${id}`}
          onClick={() => toast("We are working on this section")}
          className="dark:text-white"
        >
          <AiOutlineEdit />
        </Link>
      </div>
    </div>
  );
};

export default Card;
