import type { FC } from "react";
import Link from "next/link";

import { BiMenu } from "react-icons/bi";

import { Disclosure } from "@headlessui/react";

const navigation = [
  { name: "Buttons", href: "/buttons" },
  { name: "Loaders", href: "/loaders" },
  { name: "Inputs", href: "/inputs" },
  { name: "Cards", href: "/cards" },
  { name: "Forms", href: "/forms" },
  { name: "All", href: "/all" },
];

export const Header: FC = ({}) => {
  return (
    <header className="bg-white dark:bg-black">
      <div className="min-h-full">
        <Disclosure as="nav">
          {({ open }) => (
            <>
              <div className="flex h-16 items-center justify-between fixed w-full bg-white dark:bg-black ">
                <div
                  className="flex items-center container mx-auto px-4 max-w-8xl sm:px-6 overflow-hidden justify-between w-full
                "
                >
                  <div className="flex-shrink-0 ">
                    <Link href="/">
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 text-lg font-bold uppercase">
                        tailwindcomponents
                      </span>
                    </Link>
                  </div>
                  <div className="hidden md:block bg-white dark:bg-black">
                    <div className="ml-10 flex items-baseline space-x-4 ">
                      {navigation.map(
                        (item: { name: string; href: string }) => (
                          <Link
                            href={item.href}
                            key={item.name}
                            className="text-neutral-200 hover:text-black dark:hover:text-white px-3 py-2  text-sm font-medium"
                          >
                            {item.name}
                          </Link>
                        )
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
