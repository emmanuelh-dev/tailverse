import React from "react";
import Link from "next/link";
interface Props {
  username: string;
  totalPosts: number;
}
const CardUser = ({ username, totalPosts }: Props) => {
  return (
    <div className="">
      <Link
        href={`/user/${username}`}
        className="w-ful dark:text-white font-bold text-center p-8 rounded-xl flex items-center hover:bg-neutral-100 dark:hover:bg-neutral-900 justify-center"
      >
        <p className="pr-2">{username}</p>
        <div className="flex flex-col border-l dark:border-white border-black pl-2 justify-center">
          <p className="text-xl">{totalPosts}</p>
          <p className="text-sm font-thin">posts</p>
        </div>
      </Link>
    </div>
  );
};

export default CardUser;
