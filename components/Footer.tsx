import React from "react";
import Image from "next/image";
import Link from "next/link";
import footerlinks from "@/data/footerlinks";

const Footer = () => {
  return (
    <div className="text-lg p-4 dark:bg-black">
      <div className="container mx-auto pt-20">
        <footer aria-labelledby="footer-heading" className="">
          <h2 className="sr-only " id="footer-heading ">
            Tailverse
          </h2>
          <div className="w-full items-center mx-auto px-4 py-12 lg:pt-32">
            <div className="xl:gap-8 xl:grid xl:grid-cols-3">
              <div className="xl:col-span-3 md:flex justify-between">
                <div className="w-80">
                  <span className="text-lg lg:text-2xl font-semibold dark:text-white">
                    Tailverse
                  </span>
                  <p className=" mt-2">
                    <span className="text-sm font-normal mt-6 text-neutral-500">
                      Free and Premium UI components ready to built with
                      Tailwind CSS.
                    </span>
                  </p>
                </div>
                <form className="border-black bg-white border-2 justify-between mt-4 p-2 rounded-3xl shadow items-center hidden">
                  {/* Add flex when need */}
                  <label className="sr-only" htmlFor="email-address">
                    Email address
                  </label>
                  <input
                    autoComplete="email"
                    className="text-sm w-full focus:ring-black px-5 py-3 rounded-3xl bg-transparent border-transparent focus:border-black placeholder-black sm:max-w-xs"
                    id="email-address"
                    name="email"
                    placeholder="Enter your email"
                  />
                  <div className="mt-3 ml-auto rounded-md sm:flex-shrink-0 sm:ml-3 sm:mt-0">
                    <button
                      className="border-black border-2 focus:outline-none bg-black flex focus:ring-2 focus:ring-black focus:ring-offset-2 font-medium hover:bg-lila-500 hover:text-black items-center justify-center px-5 py-3 rounded-3xl text-white w-full dark:hover:text-black dark:hover:bg-white text-sm"
                      typeof="submit"
                    >
                      Subscribe for free
                    </button>
                  </div>
                </form>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 w-full gap-8 col-span-3">
                {footerlinks.map((section, index) => (
                  <div key={index}>
                    <h3 className="text-xl dark:text-white">{section.title}</h3>
                    <ul className="space-y-2 mt-4" role="list">
                      {section.links.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          <a
                            className="text-sm text-neutral-400"
                            href={link.href}
                          >
                            {link.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full items-center  max-w-7xl mx-auto px-4">
            <div className="md:flex md:items-center md:justify-between">
              <div className="flex justify-center md:order-2 space-x-6 text-sm"></div>
              <div className="w-full items-center  max-w-7xl mx-auto px-4">
                <div className="md:flex md:items-center md:justify-between">
                  <div className="flex justify-center md:order-2 space-x-6">
                    <Link
                      className="dark:text-white text-sm hover:dark:text-white/70 duration-500 ease-in-out p-3 transform transition"
                      href="https://www.linkedin.com/in/emmanuelhdev/"
                    >
                      @emmanuelhdev
                    </Link>
                    <Link
                      className="dark:text-white text-sm hover:dark:text-white/70 duration-500 ease-in-out p-3 transform transition"
                      href="https://www.linkedin.com/in/juanpablohurtado/"
                    >
                      @juanpablohurtado
                    </Link>
                  </div>
                  <div className="mt-8 md:mt-0 md:order-1">
                    <p className="text-center">
                      <span className="dark:text-white text-sm mt-2 mx-auto">
                        © {new Date().getFullYear()} Tailverse. All rights
                        reserved
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
