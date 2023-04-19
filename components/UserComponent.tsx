import React, { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
interface Props {
  user: string;
}

const UserComponent = ({ user }: Props) => {
  const userUrl = localStorage.getItem("user");
  return (
    <div className=" flex items-center dark:text-white text-lg">
      <div>
        <Link href="/new">New</Link>
      </div>
      <Menu
        as="div"
        className=" ml-3 bg-gradient-to-r from-pink-500 to-violet-500 rounded-xl text-white"
      >
        <div>
          <Menu.Button className="flex max-w-xs items-center bg-gradient-to-r from-pink-500 to-violet-500  focus:outline-none font-bold rounded-lg p-2">
            {user}
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute origin-bottom py-1 bg-neutral-100 dark:bg-neutral-800 flex flex-col rounded-b-xl">
            <Menu.Item>
              <Link
                href={`/user/${userUrl}`}
                className=" hover:bg-neutral-300 dark:hover:bg-semi-black px-2 dark:text-white font-bold rounded-xl"
              >
                Profile
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link
                href="#"
                className=" hover:bg-neutral-300 dark:hover:bg-semi-black px-2 dark:text-white font-bold rounded-xl"
              >
                Settings
              </Link>
            </Menu.Item>
            <Menu.Item>
              <button
                onClick={() => {
                  console.log("hola");
                  localStorage.removeItem("user");
                  window.location.reload();
                }}
                className=" hover:bg-neutral-300 dark:hover:bg-semi-blackyarn start:dev dark:text-white font-bold rounded-xl"
              >
                Log Out
              </button>
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default UserComponent;
