import React from "react";
import Link from "next/link";
import Image from "next/image";
interface Props {
  username: string;
  totalPosts: number;
  profileLink: string;
}

const CardUser = ({ username, totalPosts, profileLink }: Props) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-4">
      <Link href={`/user/${username}`} className="flex items-center justify-between">
          <div className="flex items-center">
            <Image
              width={300}
              height={300}
              src={"/img/bg.png"}
              alt={`Profile Picture of ${username}`}
              className="w-12 h-12 rounded-full object-cover mr-4"
            />

            <div>
              <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                {username}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-300">
                {totalPosts} posts
              </p>
            </div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-blue-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
      </Link>
    </div>
  );
};

export default CardUser;
