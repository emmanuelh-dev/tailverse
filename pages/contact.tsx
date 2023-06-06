import React from "react";
import Layout from "@/layout/Layout";
import Image from "next/image";
const Contact = () => {
  return (
    <Layout>
      <div className="container max-md:p-4 mx-auto max-w-xl mt-16">
        <h1 className="text-center text-5xl md:text-6xl font-extrabold pt-6 md:pb-6 dark:text-white">
          Contact Us
        </h1>
        <div className="pt-6 pb-6 dark:text-white text-sm">
          <p className="">
            If you have any comments or need information such as a quote, please
            fill out the fields below, and we will get back to you as soon as
            possible.
          </p>
          <p className="pt-4">
            Our team of experts is ready to assist you in achieving your goals
            and finding innovative solutions for your business.
          </p>
        </div>
        <form className="dark:text-white">
          <div className="mb-4 ">
            <label className="block font-bold mb-2" htmlFor="name">
              Enter your name
            </label>
            <input
                    className="block w-full px-6 py-3 dark:text-white dark:bg-black text-black bg-white border border-neutral-100 rounded-full appearance-none placeholder:text-neutral-400 dark:placeholder:text-neutral-100 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                    id="name"
              type="text"
              placeholder="Name"
            />
          </div>
          <div className="mb-4">
            <label className="block font-bold mb-2" htmlFor="email">
              Enter your email
            </label>
            <input
                    className="block w-full px-6 py-3 dark:text-white dark:bg-black text-black bg-white border border-neutral-100 rounded-full appearance-none placeholder:text-neutral-400 dark:placeholder:text-neutral-100 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                    id="email"
              type="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label
              className="bg-transparent block font-bold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
                    className="block w-full px-6 py-3 dark:text-white dark:bg-black text-black bg-white border border-neutral-100 rounded-3xl appearance-none placeholder:text-neutral-400 dark:placeholder:text-neutral-100 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                    id="message"
              rows={5}
              placeholder="Enter your message"
            ></textarea>
          </div>
          <button
        className="cursor-pointer bg-black text-white hover:dark:bg-black hover:dark:text-white border-2 border-black dark:border-white hover:text-black hover:bg-white dark:bg-white dark:text-black px-4 py-2.5 rounded-full  text-sm w-full"
        type="submit"
            disabled={true}
          >
            Send
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Contact;
