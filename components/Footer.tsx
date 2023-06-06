import React from "react";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="dark:bg-black  dark:dark:text-white text-lg p-4">
      <div className="container mx-auto">
        <footer aria-labelledby="footer-heading" className="">
          <h2 className="sr-only" id="footer-heading ">
            Footer
          </h2>
          <div className="w-full items-center mx-auto px-4 py-12 lg:pt-32">
            <div className="xl:gap-8 xl:grid xl:grid-cols-3">
              <div className="dark:text-white xl:col-span-3 md:flex justify-between">
                <div className="w-80">
                  <span className="text-lg lg:text-2xl font-semibold">
                    Tailverse
                  </span>
                  <p className=" mt-2">
                    <span className="text-sm font-normal mt-6 text-neutral-500">
                      Free and Premium UI components ready to built with
                      Tailwind CSS.
                    </span>
                  </p>
                </div>
                <form className="border-black bg-white border-2 justify-between mt-4 p-2 rounded-2xl shadow sm:flex items-center">
                  <label className="sr-only" htmlFor="email-address">
                    Email address
                  </label>
                  <input
                    autoComplete="email"
                    className="w-full focus:ring-black px-5 py-3 rounded-xl bg-transparent border-transparent focus:border-black placeholder-black sm:max-w-xs"
                    id="email-address"
                    name="email"
                    placeholder="Enter your email"
                  />
                  <div className="mt-3 ml-auto rounded-md sm:flex-shrink-0 sm:ml-3 sm:mt-0">
                    <button
                      className="border-black border-2 focus:outline-none bg-black flex focus:ring-2 focus:ring-black focus:ring-offset-2 font-medium hover:bg-lila-500 hover:text-black items-center justify-center px-5 py-3 rounded-xl text-base text-white w-full dark:hover:text-white"
                      typeof="submit"
                    >
                      Subscribe for free
                    </button>
                  </div>
                </form>
              </div>
              <div className="grid gap-8 grid-cols-2 lg:mt-24 mt-12 xl:col-span-3">
                <div className="md:gap-8 md:grid md:grid-cols-2">
                  <div>
                    <h3 className="dark:text-white text-xl">Stay updated</h3>
                    <ul className="space-y-2 mt-4" role="list">
                      <li>
                        <Link
                          href="/terms"
                          className="text-sm text-neutral-400"
                        >
                          Terms of use
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/privacy-policy"
                          className="text-sm text-neutral-400"
                        >
                          Privacy Policy
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="dark:text-white text-xl">Navigation</h3>
                    <ul className="space-y-2 mt-4" role="list">
                      <li>
                        <Link
                          href="/terms"
                          className="text-sm text-neutral-400"
                        >
                          Terms of use
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/privacy-policy"
                          className="text-sm text-neutral-400"
                        >
                          Privacy Policy
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-12 md:mt-0">
                    <h3 className="dark:text-white text-xl">Other projects</h3>
                    <ul className="space-y-2 mt-4" role="list">
                      <li>
                        <Link
                          className="text-sm text-neutral-400"
                          href="https://bysmax.com"
                        >
                          BysMax
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="md:gap-8 md:grid md:grid-cols-2">
                  <div className="mt-12 md:mt-0">
                    <h3 className="dark:text-white text-xl">Emmanuel H.</h3>
                    <ul className="space-y-2 mt-4" role="list">
                      <li>
                        <Link
                          className="text-sm text-neutral-400"
                          href="https://github.com/emmanuelh-dev"
                        >
                          GitHub
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="text-sm text-neutral-400"
                          href="https://www.linkedin.com/in/emmanuelhdev/"
                        >
                          Linkedin
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-12 md:mt-0">
                    <h3 className="dark:text-white text-xl">Juan Pablo</h3>
                    <ul className="space-y-2 mt-4" role="list">
                      <li>
                        <Link
                          className="text-sm text-neutral-400"
                          href="https://www.instagram.com/emmanuelh.dev/"
                        >
                          Instagram
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="text-sm text-neutral-400"
                          href="https://www.linkedin.com/in/juanpablohurtado/"
                        >
                          Linkedin
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
                    © {new Date().getFullYear()} Tailverse. All rights reserved
                  </span>
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
