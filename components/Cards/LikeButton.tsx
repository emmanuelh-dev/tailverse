"use client";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import React, { useEffect, useState } from "react";
import { postLikeAction } from "@/utils/services";

interface Props {
  id: number;
  rate: number;
}

const LikeButton = ({ id, rate }: Props) => {
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

    postLikeAction(id, newRates, newLiked); // Fix: pass as an object
  };

  return (
    <button className=" flex items-center dark:text-white" onClick={handleLike}>
      {rates}
      <span className="text-red-600 text-2xl">
        {liked ? (
          <AiFillHeart className="pl-1" />
        ) : (
          <AiOutlineHeart className="pl-1" />
        )}
      </span>
    </button>
  );
};

export default LikeButton;
