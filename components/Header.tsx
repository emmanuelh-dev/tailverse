import type { FC } from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { BiMenu } from "react-icons/bi";
import UserComponent from "./UserComponent";
import { Disclosure } from "@headlessui/react";
import Login from "./Header/Login";
import Register from "./Header/Register";
import navigation from "@/data/navigation.js";

export const Header: FC = ({}) => {
  const [user, setUser] = useState<string>("");
  const checkUserInLocalStorage = () => {
    return sessionStorage.getItem("user");
  };

  // Call checkUserInLocalStorage when the component is mounted
  useEffect(() => {
    const storedUser = checkUserInLocalStorage();
    if (typeof storedUser === "string") {
      setUser(storedUser);
    }
  }, [user]);

  return (
    <header className="bg-white dark:bg-black fixed z-[100] text-sm dark:text-white w-screen">
      <div className="min-h-full">
        <Disclosure as="nav">
          {({ open }) => (
            <>
              <div className="flex h-16 items-center justify-between fixed w-screen bg-white dark:bg-black px-4">
                <div className="flex items-center container mx-auto  overflow-hidden justify-between w-full">
                  <div className="flex-shrink-0 ">
                    <Link
                      href="/"
                      className="text-black dark:text-white uppercase font-black text-lg py-8"
                    >
                      tailverse
                    </Link>
                  </div>
                  <div className="hidden md:block bg-white dark:bg-black">
                    <div className="ml-10 flex items-center space-x-4">
                      {navigation.map(
                        (item: { title: string; href: string }) => (
                          <Link
                            href={`/${item.href}`}
                            key={item.title}
                            className="px-3 py-2"
                          >
                            {item.title}
                          </Link>
                        )
                      )}
                      {user ? (
                        <div className="">
                          <UserComponent user={user} />
                        </div>
                      ) : (
                        <div className="flex">
                          <Register />
                          <Login />
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="-mr-2 flex md:hidden right-10 top-3 ">
                  <Disclosure.Button className="inline-flex items-center  p-2 text-neutral-400 hover:bg-neutral-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-neutral-600">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <span>
                        <BiMenu />
                      </span>
                    ) : (
                      <span>
                        <BiMenu />
                      </span>
                    )}
                  </Disclosure.Button>
                </div>
              </div>
              <Disclosure.Panel className="md:hidden ">
                <div className="space-y-1 px-2 top-16 pb-3 sm:px-3 fixed bg-white dark:bg-black w-full">
                  {navigation.map((item: { title: string; href: string }) => (
                    <Link href={`/${item.href}`} key={item.title}>
                      <ul className="">
                        <li className="text-neutral-300 hover:bg-neutral-600 hover:text-white px-3 py-2  text-xl font-medium">
                          {item.title}
                        </li>
                      </ul>
                    </Link>
                  ))}
                  <div className="flex flex-col border-t dark:border-white p-4">
                    {user ? (
                      <div>
                        <Link
                          href={`/user/${user}`}
                          className="dark:text-white font-bold w-full block py-2 text-center rounded-3xl uppercase"
                        >
                          {user}
                        </Link>
                        <Link
                          href="/new"
                          className=" items-center justify-center px-6 py-2.5  text-center hover:dark:border-neutral-100 dark:text-black hover:dark:text-white  dark:bg-white text-white duration-200 p-3 mb-3 bg-black border-2 border-black rounded-3xl nline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black block w-full"
                        >
                          New
                        </Link>
                        <button
                          onClick={() => {
                            sessionStorage.removeItem("user");
                            window.location.reload();
                          }}
                          className="dark:text-white font-bold w-full block py-2 text-center rounded-3xl"
                        >
                          Log Out
                        </button>
                      </div>
                    ) : (
                      <div className="flex flex-col">
                        <Register />
                        <Login />
                      </div>
                    )}
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </header>
  );
};
