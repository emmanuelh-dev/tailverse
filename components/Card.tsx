import React, { ReactElement } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import Link from "next/link";
import LikeButton from "./Cards/LikeButton";
import DeleteButton from "./Cards/DeleteButton";
import CopyButton from "./tools/CopyButton";
import { ValidationCard } from "@/utils/validations";
interface Props {
  source: string;
  userName: string;
  type: string;
  rate: number;
  id: number;
  children?: React.ReactNode;
}

const CardActions = ({ id, rate, userName, source, type, children }: Props) => {
  return (
    <div className="flex w-full flex-col">
      <div className="w-full justify-between flex py-1">
        <Link
          href={`/user/${userName}`}
          className="dark:text-neutral-200 font-bold"
          rel="noopener noreferrer"
        >
          {userName}
        </Link>
        <CopyButton
          textToCopy={source}
          info={undefined}
          className="dark:text-neutral-200 "
        />
      </div>
      <div className=" bg-neutral-200 dark:bg-neutral-950 rounded-xl">{children}</div>
      <div className="flex items-center justify-between">
        <LikeButton id={id} rate={rate} />
        <Link
          href={`/${type.toLowerCase()}`}
          className="dark:text-neutral-200 px-4 py-2 mr-2"
          rel="noopener noreferrer"
        >
          {type.toLowerCase()}
        </Link>
        <div >
          <DeleteButton id={id} userName={userName} />
          <Link href={`/item/${id}`} className="dark:text-white">
            <AiOutlineEdit />
          </Link>
        </div>
      </div>
    </div>
  );
};

const Card = ({ source, userName, type, rate, id }: Props) => {
  console.error(type);
  const newSource = ValidationCard(source);
  return (
    <div className="">
      <CardActions
        source={source}
        userName={userName}
        type={type}
        rate={rate}
        id={id}
      >
        <div
          dangerouslySetInnerHTML={{ __html: newSource }}
          className="flex items-center justify-center h-full min-h-[20rem] max-sm:w-full"
        ></div>
      </CardActions>
    </div>
  );
};

export default Card;
