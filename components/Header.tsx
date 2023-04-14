import type { FC } from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { BiMenu } from "react-icons/bi";
import UserComponent from "./UserComponent";
import { Disclosure } from "@headlessui/react";
import Register from "./Register";
import Login from "./Login";
const navigation = require("@/data/navigation.json");

export const Header: FC = ({}) => {
  const [isRegisterOpen, setIsRegisterOpen] = useState<boolean>(false);
  const [isLogInOpen, setIsLogInOpen] = useState<boolean>(false);
  const [user, setUser] = useState<string>("");

  const handleOpenRegister = () => {
    setIsRegisterOpen(true);
  };

  const handleCloseRegister = () => {
    setIsRegisterOpen(false);
  };
  const handleOpenLogIn = () => {
    setIsLogInOpen(true);
  };

  const handleCloseLogIn = () => {
    setIsLogInOpen(false);
  };

  const checkUserInLocalStorage = () => {
    return localStorage.getItem("user");
  };

  // Call checkUserInLocalStorage when the component is mounted
  useEffect(() => {
    const storedUser = checkUserInLocalStorage();
    if (typeof storedUser === "string") {
      setUser(storedUser);
    }
  }, [user]);

  return (
    <header className="bg-white dark:bg-black fixed z-[100] text-lg">
      <div className="min-h-full">
        <Disclosure as="nav">
          {({ open }) => (
            <>
              <div className="flex h-16 items-center justify-between fixed w-full bg-white dark:bg-black ">
                <div className="flex items-center container mx-auto px-4 max-w-8xl sm:px-6 overflow-hidden justify-between w-full">
                  <div className="flex-shrink-0 ">
                    <Link href="/">
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-blue-500 text-lg font-bold uppercase">
                        tailwindcomponents
                      </span>
                    </Link>
                  </div>
                  <div className="hidden md:block bg-white dark:bg-black">
                    <div className="ml-10 flex items-center space-x-4 ">
                      {navigation.map(
                        (item: { name: string; href: string }) => (
                          <Link
                            href={item.href}
                            key={item.name}
                            className="text-neutral-200 hover:text-black dark:hover:text-white px-3 py-2 font-medium"
                          >
                            {item.name}
                          </Link>
                        )
                      )}
                      {user ? (
                        <div>
                          <UserComponent user={user} />
                        </div>
                      ) : (
                        <div>
                          <button
                            onClick={handleOpenRegister}
                            className="bg-gradient-to-r from-pink-500 to-violet-500 text-lg text-white font-bold p-2 rounded-xl"
                          >
                            Sign up
                          </button>
                          <Register
                            open={isRegisterOpen}
                            onClose={handleCloseRegister}
                          />
                          <button
                            className="dark:text-white mx-4"
                            onClick={handleOpenLogIn}
                          >
                            Log In
                          </button>
                          <Login
                            open={isLogInOpen}
                            onClose={handleCloseLogIn}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="-mr-2 flex md:hidden right-10 top-3 ">
                  <Disclosure.Button className=" inline-flex items-center  p-2 text-neutral-400 hover:bg-neutral-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-neutral-600">
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
                  {navigation.map((item: { name: string; href: string }) => (
                    <Link href={item.href} key={item.name}>
                      <ul className="">
                        <li className="text-neutral-300 hover:bg-neutral-600 hover:text-white px-3 py-2  text-xl font-medium">
                          {item.name}
                        </li>
                      </ul>
                    </Link>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </header>
  );
};
