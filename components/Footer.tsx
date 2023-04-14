import React from "react";

const Footer = () => {
  return (
    <div className="dark:bg-black  dark:text-white text-lg py-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center py-10">
          <p>
            <span className="font-bold">Tailverse</span> | All rights reserved © {new Date().getFullYear()}
          </p>
          <a href="https://bysmax.com" className="flex items-center">
            <span className="font-bold mr-2">BysMax</span>
            <span className="">Of the people, by the people, for the people</span>
          </a>
        </div>
        <div className="flex flex-wrap justify-between mt-4">
          <div>
            <p className="font-bold mb-2">About us</p>
            <p className="text-gray-600 dark:text-gray-400">We are a company dedicated to creating web development tools.</p>
          </div>
          <div>
            <p className="font-bold mb-2">Contact us</p>
            <ul className=" text-gray-600 dark:text-gray-400">
              <li><a href="mailto:info@tailverse.com">info@tailverse.com</a></li>
              <li><a href="tel:+1234567890">123-456-7890</a></li>
            </ul>
          </div>
          <div>
            <p className="font-bold mb-2">Follow us on</p>
            <div className="flex">
              <a href="#"><i className="fab fa-facebook-square text-2xl mr-2"></i></a>
              <a href="#"><i className="fab fa-twitter-square text-2xl mr-2"></i></a>
              <a href="#"><i className="fab fa-instagram-square text-2xl"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
