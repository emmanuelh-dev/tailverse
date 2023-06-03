import React, { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
interface Props {
  user: string;
}

const UserComponent = ({ user }: Props) => {
  const userUrl = localStorage.getItem("user");
  return (
    <div className="flex items-center dark:text-white">
      <div>
        <Link
          href="/new"
          className="block bg-black text-white hover:dark:bg-black hover:dark:text-white border-2 border-black dark:border-white hover:text-black hover:bg-white dark:bg-white dark:text-black px-4 py-2.5 rounded-full text-sm"
        >
          New +
        </Link>
      </div>
      <Menu as="div">
        <div>
          <Menu.Button className="text-black uppercase font-bold dark:text-white pl-2">
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
