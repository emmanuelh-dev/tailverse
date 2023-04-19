import React from "react";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="dark:bg-black  dark:text-white text-lg p-4">
      <div className="container mx-auto">
        <footer aria-labelledby="footer-heading" className="">
          <h2 className="sr-only" id="footer-heading ">
            Footer
          </h2>
          <div className="w-full items-center mx-auto px-4 py-12 lg:pt-32">
            <div className="xl:gap-8 xl:grid xl:grid-cols-3">
              <div className="text-white xl:col-span-3">
                <span className="text-lg lg:text-2xl font-semibold">
                  Tailverse
                </span>
                <p className="lg:w-1/4 mt-2">
                  <span className="text-sm font-normal mt-6">
                    Free and Premium UI components ready to built with Tailwind
                    CSS.
                  </span>
                </p>
              </div>
              <div className="grid gap-8 grid-cols-2 lg:mt-24 mt-12 xl:col-span-3">
                <div className="md:gap-8 md:grid md:grid-cols-2">
                  <div>
                    <h3 className="text-white text-xl">Stay updated</h3>
                    <ul className="space-y-2 mt-4" role="list">
                      <li>
                        <Link
                          href="/terms"
                          className="text-white text-sm hover:text-white/70"
                        >
                          Terms of use
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/privacy-policy"
                          className="text-white text-sm hover:text-white/70"
                        >
                          Privacy Policy
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-white text-xl">Navigation</h3>
                    <ul className="space-y-2 mt-4" role="list">
                      <li>
                        <Link
                          href="/terms"
                          className="text-white text-sm hover:text-white/70"
                        >
                          Terms of use
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/privacy-policy"
                          className="text-white text-sm hover:text-white/70"
                        >
                          Privacy Policy
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-12 md:mt-0">
                    <h3 className="text-white text-xl">Other projects</h3>
                    <ul className="space-y-2 mt-4" role="list">
                      <li>
                        <Link
                          className="text-white text-sm hover:text-white/70"
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
                    <h3 className="text-white text-xl">Emmanuel H.</h3>
                    <ul className="space-y-2 mt-4" role="list">
                      <li>
                        <Link
                          className="text-white text-sm hover:text-white/70"
                          href="https://github.com/emmanuelh-dev"
                        >
                          GitHub
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="text-white text-sm hover:text-white/70"
                          href="https://www.linkedin.com/in/emmanuelhdev/"
                        >
                          Linkedin
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-12 md:mt-0">
                    <h3 className="text-white text-xl">Juan Pablo.</h3>
                    <ul className="space-y-2 mt-4" role="list">
                      <li>
                        <Link
                          className="text-white text-sm hover:text-white/70"
                          href="https://www.instagram.com/emmanuelh.dev/"
                        >
                          Instagram
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="text-white text-sm hover:text-white/70"
                          href="https://www.linkedin.com/in/juan-pablo-hurtado-548230243/"
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
                  className="text-white text-sm hover:text-white/70 duration-500 ease-in-out p-3 transform transition"
                  href="https://www.linkedin.com/in/emmanuelhdev/"
                >
                  @emmanuelhdev
                </Link>
                <Link
                  className="text-white text-sm hover:text-white/70 duration-500 ease-in-out p-3 transform transition"
                  href="https://www.linkedin.com/in/juan-pablo-hurtado-548230243/"
                >
                  @juan-pablo-hurtado-548230243
                </Link>
              </div>
              <div className="mt-8 md:mt-0 md:order-1">
                <p className="text-center">
                  <span className="text-white text-sm mt-2 mx-auto">
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
