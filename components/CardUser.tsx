import React from "react";
import Link from "next/link";
interface Props {
  username: string;
}
const CardUser = ({ username }: Props) => {
  return (
    <div className="">
      <Link href={`/user/${username}`} className="block w-full bg-neutral-100 dark:bg-neutral-950 dark:text-white font-bold text-center p-8 rounded-xl">{username}</Link>
    </div>
  );
};

export default CardUser;
